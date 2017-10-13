<?php

namespace App\Http\Controllers;

use App;
use App\user;
use App\ip_user;
use App\ip;
use App\ip_listed;
use App\ip_dnsbl;
use App\sub_ip_listed;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use App\data_ip_users;
use App\data_upload;
use Session;

class ip_controller extends Controller
{
    public function store_ip()
    {
        $ip=$_GET['ip'];
        $id_user = Auth::user()->id;
        $id_ip=ip::select('id')->where('ip_address', '=', $ip)->get();
        if (isset($id_ip[0]['id'])) {
            $ip_user = ip_user::select('users_id', 'deleted')->where('ips_id', '=', $id_ip[0]['id'])->where('users_id', '=', $id_user)->get();

            if (isset($ip_user[0]['deleted']) && $ip_user[0]['deleted']==1) {
              ip_user::where('ips_id', '=', $id_ip[0]['id'])->update(['deleted' => 0]);
              return redirect()->action('HomeController@index', ['error'=>'2']);
            }

            if (isset($ip_user[0]['users_id'])) {
              return redirect()->action('HomeController@index', ['error'=>'3']);
            }





            else {
                ip_user::insert(['ips_id' => $id_ip[0]['id'], 'users_id' => $id_user, 'ip_users.updated_at' => DB::raw('NOW()'), 'ip_users.created_at' => DB::raw('NOW()')]);
            }
        }






        else {
            $id_ip = ip::insertGetId(
          ['ip_address' => $ip, 'updated_at' => DB::raw('NOW()'), 'created_at' => DB::raw('NOW()')]
        );
            ip_user::insert(['ips_id' => $id_ip, 'users_id' => $id_user, 'ip_users.updated_at' => DB::raw('NOW()'), 'ip_users.created_at' => DB::raw('NOW()')]);
            $ip_dnsbls_id=ip_dnsbl::select(['id'])->get();
            foreach ($ip_dnsbls_id as $id) {
                ip_listed::insert(['ips_id' => $id_ip, 'ip_dnsbls_id' => $id['id'], 'updated_at' => DB::raw('NOW()'), 'created_at' => DB::raw('NOW()')]);
            }
        }
        return redirect()->action('HomeController@index');
    }
    public function update_active(Request $request)
    {
        $id_user = Auth::user()->id;
        $id = $request->id;

        $select_active=ip_user::select('active')
                             ->where('ips_id', $id)
                             ->where('users_id', $id_user)
                             ->get();
        if (isset($select_active['0']['active']) && $select_active['0']['active'] == 1) {
            ip_user::where('ips_id', $id)
               ->where('users_id', $id_user)
               ->update(['active' => 0]);
        } else {
            ip_user::where('ips_id', $id)
               ->where('users_id', $id_user)
               ->update(['active' => 1]);
        }
        return redirect('/active');
    }

    public function update_active_data(Request $request)
    {
        $id_user = Auth::user()->id;
        $id = $request->id;

        $select_active=data_ip_users::select('active')
                             ->where('ips_id', $id)
                             ->where('users_id', $id_user)
                             ->get();
        if (isset($select_active['0']['active']) && $select_active['0']['active']==1) {
            data_ip_users::where('ips_id', $id)
               ->where('users_id', $id_user)
               ->update(['active' => 0]);
        } else {
            data_ip_users::where('ips_id', $id)
               ->where('users_id', $id_user)
               ->update(['active' => 1]);
        }

        return redirect('/active');
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

        ip_user::where('ips_id', $id)
               ->where('users_id', $id_user)
               ->update(['deleted' => 1]);
        return redirect('/active');
    }

    public function update_deleted_data(Request $request)
    {
      echo 'test';
        $id_user = Auth::user()->id;
        $id = $request->id;

        data_ip_users::where('ips_id', $id)
               ->where('users_id', $id_user)
               ->update(['deleted' => 1]);
        return redirect('/active_domain');
    }
    public function show_active_ip()
    {
        $domains = Session::get('domains');
        $data_domains = Session::get('data_domains');
        $id_user = Auth::user()->id;
        $ips=ip::select('ips.id', 'ip_address', 'active')
               ->join('ip_users', 'ip_users.ips_id', '=', 'ips.id')
               ->join('users', 'users.id', '=', 'ip_users.users_id')
               ->join('ip_listeds', 'ips.id', '=', 'ip_listeds.ips_id')
               ->where('deleted', '0')
               ->where('users.id', $id_user)
               ->distinct()
               ->get();
        $data_ips=ip::select('data_ip_users.active', 'ips.id', 'ip_address', 'data_uploads.original_name', 'data_uploads.data_typ')
                    ->join('data_ip_users', 'ips.id', '=', 'data_ip_users.ips_id')
                    ->join('data_uploads', 'data_ip_users.data_uploads_id', '=', 'data_uploads.id')
                    ->join('ip_listeds', 'ips.id', '=', 'ip_listeds.ips_id')
                    ->where('data_ip_users.deleted', '0')
                    ->where('data_uploads.deleted', '0')
                    ->where('data_uploads.active', '1')
                    ->where('data_ip_users.users_id', $id_user)
                    ->distinct()
                    ->get();
        $data_ip=data_upload::select('active', 'original_name', 'data_typ', 'id')
                          ->where('data_uploads.deleted', '0')
                          ->get();
        return view('show_active', compact('ips', 'domains', 'data_domains', 'data_ips', 'data_ip'));
    }
    public function show_active_ip_input(){
        $domains = Session::get('domains');
        $input = Session::get('input_data');
        $data_domains = Session::get('data_domains');
        Session::reflash();
        $id_user = Auth::user()->id;
        $ips=ip::select('ips.id', 'ip_address', 'active', 'checked')
               ->join('ip_users', 'ip_users.ips_id', '=', 'ips.id')
               ->join('users', 'users.id', '=', 'ip_users.users_id')
               ->join('ip_listeds', 'ips.id', '=', 'ip_listeds.ips_id')
               ->where('deleted', '0')
               ->where('ips.ip_address','like', $input."%")
               ->where('users.id', $id_user)
               ->distinct()
               ->get();
        $data_ips=ip::select('ips.id', 'ip_address', 'data_uploads.original_name', 'data_uploads.data_typ', 'checked')
                    ->join('data_ip_users', 'ips.id', '=', 'data_ip_users.ips_id')
                    ->join('data_uploads', 'data_ip_users.data_uploads_id', '=', 'data_uploads.id')
                    ->join('ip_listeds', 'ips.id', '=', 'ip_listeds.ips_id')
                    ->where('data_ip_users.deleted', '0')
                    ->where('data_uploads.deleted', '0')
                    ->where('data_uploads.active', '1')
                    ->where('data_ip_users.users_id', $id_user)
                    ->where('ips.ip_address','like', $input."%")
                    ->distinct()
                    ->get();
        return view('show_active', compact('ips', 'domains', 'data_domains', 'data_ips'));
    }
    public function ip_checked(Request $request)
    {
        $id_user = Auth::user()->id;
        $id = $request->id;
        $dnsbl_id = $request->dnsbl_id;

        $select_active=ip_listed::select('checked')
                                ->join('ips', 'ip_listeds.ips_id', '=', 'ips.id')
                                ->join('ip_users', 'ips.id', '=', 'ip_users.ips_id')
                                ->where('ip_users.ips_id', $id)
                                ->where('ip_listeds.ip_dnsbls_id', $dnsbl_id)
                                ->where('users_id', $id_user)
                                ->get();
        if (isset($select_active['0']['checked']) && $select_active['0']['checked']==1) {
            ip_listed::where('ips_id', $id)
                      ->where('ip_dnsbls_id', $dnsbl_id)
                      ->update(['checked' => 0, 'updated_at' => DB::raw('NOW()')]);
        } else {
            ip_listed::where('ips_id', $id)
                      ->where('ip_dnsbls_id', $dnsbl_id)
                      ->update(['checked' => 1, 'updated_at' => DB::raw('NOW()')]);
        }
        return redirect('/show');
    }
    public function sub_ip_checked(Request $request)
    {
        $id_user = Auth::user()->id;
        $id = $request->id;
        $dnsbl_id = $request->dnsbl_id;

        $select_active=sub_ip_listed::select('checked')
                                    ->where('sub_ips_id', $id)
                                    ->where('ip_dnsbls_id', $dnsbl_id)
                                    ->get();
        if (isset($select_active['0']['checked']) && $select_active['0']['checked']==1) {
            sub_ip_listed::where('sub_ips_id', $id)
                         ->where('ip_dnsbls_id', $dnsbl_id)
                         ->update(['checked' => 0, 'updated_at' => DB::raw('NOW()')]);
        } else {
            sub_ip_listed::where('sub_ips_id', $id)
                         ->where('ip_dnsbls_id', $dnsbl_id)
                         ->update(['checked' => 1, 'updated_at' => DB::raw('NOW()')]);
        }
        return redirect('/show/sub_ip_domain_detail/return');
    }
}
