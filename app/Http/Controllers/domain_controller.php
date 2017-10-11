<?php
namespace App\Http\Controllers;

use App\sub_ip;
use App\subdomain;
use App\subdomain_subip_domain;
use App\sub_ip_listed;
use App\ip_dnsbl;
use App\sub_domain_listed;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\domain;
use App\domain_dnsbl;
use App\domain_listed;
use App\domain_user;
use Illuminate\Support\Facades\Auth;
use Session;
use App\data_domain_users;

class domain_controller extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store_domain()
    {
      $domain=$_GET['domain'];
      $id_user = Auth::user()->id;
      if (!gethostbynamel($domain)){      //prüfen, ob es eine valide ipv4 oder domaine ist
       return redirect()->route('home', ['error' => 1]);
      }
      // $domain = 'Hant@Peter.Dierter';
      $id_domain=domain::select('id')->where('domain', '=', $domain)->get();
      if (isset($id_domain[0]['id'])) {
          $domain_user = domain_user::select('users_id', 'deleted')->where('domain_id', '=', $id_domain[0]['id'])->where('users_id', '=', $id_user)->get();


          if ($domain_user[0]['deleted']==1) {
            domain_user::where('domain_id', '=', $id_domain[0]['id'])->update(['deleted' => 0, 'active' => 1]);
            return redirect()->route('home');
          }


          if (isset($domain_user[0]['users_id'])) {
              return redirect()->route('home', ['error' => 2]);
          } else {
              domain_user::insert(['domain_id' => $id_domain[0]['id'], 'users_id' => $id_user, 'domain_users.updated_at' => DB::raw('NOW()'), 'domain_users.created_at' => DB::raw('NOW()')]);
          }
      } else {
          $id_domain = domain::insertGetId(['domain' => $domain, 'updated_at' => DB::raw('NOW()'), 'created_at' => DB::raw('NOW()')]);
          domain_user::insert(['domain_id' => $id_domain, 'users_id' => $id_user, 'updated_at' => DB::raw('NOW()'), 'created_at' => DB::raw('NOW()')]);
          $domain_dnsbls_id=domain_dnsbl::select(['id'])->get();
          foreach ($domain_dnsbls_id as $id) {
              domain_listed::insert(['domain_id' => $id_domain, 'domain_dnsbls_id' => $id['id'], 'updated_at' => DB::raw('NOW()'), 'created_at' => DB::raw('NOW()')]);
          }

          $subdomains=gethostbynamel($domain);                    //lößt domain in subdomain IPs auf
          foreach ($subdomains as $subdomain_ip) {
          $subdomain = gethostbyaddr($subdomain_ip);
          $id_subdomain_ip = sub_ip::insertGetId(['sub_ip' => $subdomain_ip, 'updated_at' => DB::raw('NOW()'), 'created_at' => DB::raw('NOW()')]);
          $id_subdomain = subdomain::insertGetId(['sub_domain' => $subdomain, 'updated_at' => DB::raw('NOW()'), 'created_at' => DB::raw('NOW()')]);
          subdomain_subip_domain::insert(['domain_id' => $id_domain, 'sub_ip_id' => $id_subdomain_ip, 'subdomain_id' => $id_subdomain, 'updated_at' => DB::raw('NOW()'), 'created_at' => DB::raw('NOW()')]);

          $domain_dnsbls_id=domain_dnsbl::select(['id'])->get();
          foreach ($domain_dnsbls_id as $id) {
              sub_domain_listed::insert(['subdomains_id' => $id_subdomain, 'domain_dnsbls_id' => $id['id'], 'updated_at' => DB::raw('NOW()'), 'created_at' => DB::raw('NOW()')]);
          }
          $ip_dnsbls_id=ip_dnsbl::select(['id'])->get();
          foreach ($ip_dnsbls_id as $id) {
              sub_ip_listed::insert(['sub_ips_id' => $id_subdomain_ip, 'ip_dnsbls_id' => $id['id'], 'updated_at' => DB::raw('NOW()'), 'created_at' => DB::raw('NOW()')]);
          }
          }
        }
        return redirect()->route('home');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show_active_domain()
    {
        $id_user = Auth::user()->id;
        $domains=domain::select('domains.id','domain', 'active', 'checked')
                       ->join('domain_users', 'domain_users.domain_id', '=', 'domains.id')
                       ->join('users', 'users.id', '=', 'domain_users.users_id')
                       ->join('domain_listeds', 'domains.id', '=', 'domain_listeds.domain_id')
                       ->where('deleted', '0')
                       ->where('users.id', $id_user)
                       ->distinct()
                       ->get();
        Session::reflash();
        Session::put('domains', $domains);
        $data_domains=domain::select('data_uploads.active', 'data_domain_users.active', 'domains.id','domain', 'data_uploads.original_name', 'data_uploads.data_typ', 'checked')
                            ->join('data_domain_users', 'domains.id', '=', 'data_domain_users.domains_id')
                            ->join('domain_listeds', 'domains.id', '=', 'domain_listeds.domain_id')
                            ->join('data_uploads', 'data_domain_users.data_uploads_id', '=', 'data_uploads.id')
                            ->where('data_domain_users.deleted', '0')
                            ->where('data_uploads.deleted', '0')
                            ->where('data_uploads.active', '1')
                            ->where('data_domain_users.users_id', $id_user)
                            ->distinct()
                            ->get();
        Session::put('data_domains', $data_domains);
        return redirect()->action('ip_controller@show_active_ip');
    }
    public function show_active_domain_w_input(Request $request)
    {
        $input=$request->input;
        $id_user = Auth::user()->id;
        $domains=domain::select('domains.id','domain', 'active', 'checked')
                       ->join('domain_users', 'domain_users.domain_id', '=', 'domains.id')
                       ->join('domain_listeds', 'domains.id', '=', 'domain_listeds.domain_id')
                       ->join('users', 'users.id', '=', 'domain_users.users_id')
                       ->where('deleted', '0')
                       ->where('domains.domain','like', $input."%")
                       ->where('users.id', $id_user)
                       ->distinct()
                       ->get();
        Session::reflash();
        Session::put('domains', $domains);
        $data_domains=domain::select('domains.id','domain', 'data_uploads.original_name', 'data_uploads.data_typ', 'checked')
                            ->join('data_domain_users', 'domains.id', '=', 'data_domain_users.domains_id')
                            ->join('domain_listeds', 'domains.id', '=', 'domain_listeds.domain_id')
                            ->join('data_uploads', 'data_domain_users.data_uploads_id', '=', 'data_uploads.id')
                            ->where('data_domain_users.deleted', '0')
                            ->where('data_uploads.deleted', '0')
                            ->where('data_uploads.active', '1')
                            ->where('data_domain_users.users_id', $id_user)
                            ->where('domains.domain','like', $input."%")
                            ->distinct()
                            ->get();
        Session::put('input_data', $input);
        Session::put('data_domains', $data_domains);
        return redirect()->action('ip_controller@show_active_ip_input');
    }

    public function update_active(Request $request)
    {
      $id_user = Auth::user()->id;
      $id = $request->id;

      $select_active=domain_user::select('active')
                                ->where('domain_id', $id)
                                ->where('users_id', $id_user)
                                ->get();
      if ($select_active['0']['active']==1){
        domain_user::where('domain_id', $id)
                   ->where('users_id', $id_user)
                   ->update(['active' => 0]);
      }else{
        domain_user::where('domain_id', $id)
                   ->where('users_id', $id_user)
                   ->update(['active' => 1]);
      }
      return redirect('/active_domain');
    }

    public function update_active_data(Request $request)
    {
      $id_user = Auth::user()->id;
      $id = $request->id;

      $select_active=data_domain_users::select('active')
                                ->where('domains_id', $id)
                                ->where('users_id', $id_user)
                                ->get();
      if ($select_active['0']['active']==1){
        data_domain_users::where('domains_id', $id)
                   ->where('users_id', $id_user)
                   ->update(['active' => 0]);
      }else{
        data_domain_users::where('domains_id', $id)
                   ->where('users_id', $id_user)
                   ->update(['active' => 1]);
      }
      return redirect('/active_domain');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function update_deleted(Request $request)
    {
        $id_user = Auth::user()->id;
        $id = $request->id;
        domain_user::where('domain_id', $id)
                   ->where('users_id', $id_user)
                   ->update(['deleted' => 1]);
        return redirect('/active_domain');
    }

    public function update_deleted_data(Request $request)
    {
        $id_user = Auth::user()->id;
        $id = $request->id;
        data_domain_users::where('domains_id', $id)
                   ->where('users_id', $id_user)
                   ->update(['deleted' => 1]);
        return redirect('/active_domain');
    }
    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
     public function domain_checked(Request $request)
     {
       $id_user = Auth::user()->id;
       $id = $request->id;

       $select_active=domain_listeds::select('checked')
                                    ->join('domains', 'domain_listeds.domain_id', '=', 'domains.id')
                                    ->join('domain_users', 'domains.id', '=', 'domain_users.domain_id')
                                    ->where('domains.id', $id)
                                    ->where('users_id', $id_user)
                                    ->get();
       if ($select_active['0']['active']==1){
         domain_listeds::where('domain_id', $id)
                       ->update(['checked' => 0]);
       }else{
         domain_listeds::where('domain_id', $id)
                       ->update(['checked' => 1]);
       }
       return redirect('/show');
     }
}
