<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use App\data_upload;
use App\data_domain_users;
use App\data_ip_users;
use App\domain;
use App\user;
use App\ip_user;
use App\ip;
use App\ip_listed;
use App\sub_ip;
use App\subdomain;
use App\subdomain_subip_domain;
use App\sub_ip_listed;
use App\ip_dnsbl;
use App\sub_domain_listed;
use App\domain_dnsbl;
use App\domain_listed;
use App\domain_user;
use App\XLSXReader;
use Session;

class upload_controller extends Controller
{
    public function csv_to_array($filename, $delimiter)
    {
        // echo $filename;
        if (!file_exists($filename) || !is_readable($filename)) {
            return false;
        }

        $header = null;
        $data = array();
        if (($handle = fopen($filename, 'r')) !== false) {
            while (($row = fgetcsv($handle, 1000, $delimiter)) !== false) {
                if (!$header) {
                    $header = $row;
                } else {
                    $data[] = array_combine($header, $row);
                }
            }
            fclose($handle);
        }
        return $data;
    }




    public function upload(Request $request)
    {
        $reaktiv=0;
        $already=0;
        set_time_limit(0);
        if ($request->file('upload')->isValid()) {
            $id_user = Auth::user()->id;
            $upload = $request->upload;
            $original_extension = $upload->getClientOriginalExtension();
            $original_name = $upload->getClientOriginalName();
            $dataarray = explode(".", $original_name);
            $extension = ".".$dataarray[count($dataarray)-1];
            $original_name = basename($original_name, $extension);
            $destinationPath = 'uploaded\\';
            $server_dateiname = date("Y-m-d_H-i-s_").rand();
            $upload->move($destinationPath, $server_dateiname.".".$original_extension);
            $id_data=data_upload::insertGetId(['original_name' => $original_name,'server_dateiname' => $server_dateiname ,'data_typ' => $original_extension, 'pfad' => $destinationPath, 'updated_at' => DB::raw('NOW()'), 'created_at' => DB::raw('NOW()')]);

            if ($extension=='.csv') {
                $filename=$destinationPath.$server_dateiname.".csv";
                $delimiter=";";
                // echo $filename;

                $header = null;
                $data = array();
                if (($handle = fopen($filename, 'r')) !== false) {
                    while (($row = fgetcsv($handle, 1000, $delimiter)) !== false) {
                        if (!$header) {
                            $header = $row;
                        } else {
                            $data[] = array_combine($header, $row);
                        }
                    }
                    fclose($handle);
                }
                $test = $data;




                $i=0;
                $ii=0;
                //dd($test);
                foreach ($test as $k) {
                    //  dd($k);
                    $ip[$i]      = current($k);
                    $domain[$ii] = next($k);
                    $i++;
                    $ii++;
                }
                // dd($ip);

                foreach ($ip as $ip) {
                    $id_ip=ip::select('id')->where('ip_address', '=', $ip)->get();
                    if (isset($id_ip[0]['id'])) {
                        $ip_user = data_ip_users::select('users_id', 'deleted')->where('ips_id', '=', $id_ip[0]['id'])->where('users_id', '=', $id_user)->get();

                        if (isset($ip_user[0]['deleted'])&& $ip_user[0]['deleted'] ==1) {
                            data_ip_users::where('ips_id', '=', $id_ip[0]['id'])->update(['deleted' => 0]);
                            $reaktiv++;
                            // echo $ip_user[0]['deleted'];
                            //return redirect()->route('home');
                            continue;
                        }

                        if (isset($ip_user[0]['users_id'])) {
                            // return redirect()->route('home', ['error' => 2]);
                            $already++;
                            // echo $ip_user[0]['users_id'];
                            continue;
                        } else {
                            data_ip_users::insert(['data_uploads_id' => $id_data,'ips_id' => $id_ip[0]['id'], 'users_id' => $id_user, 'updated_at' => DB::raw('NOW()'), 'created_at' => DB::raw('NOW()')]);
                        }
                    } else {
                        $id_ip = ip::insertGetId(
              ['ip_address' => $ip, 'updated_at' => DB::raw('NOW()'), 'created_at' => DB::raw('NOW()')]
            );
                        data_ip_users::insert(['data_uploads_id' => $id_data,'ips_id' => $id_ip, 'users_id' => $id_user, 'updated_at' => DB::raw('NOW()'), 'created_at' => DB::raw('NOW()')]);
                        $ip_dnsbls_id=ip_dnsbl::select(['id'])->get();
                        foreach ($ip_dnsbls_id as $id) {
                            ip_listed::insert(['ips_id' => $id_ip, 'ip_dnsbls_id' => $id['id'], 'updated_at' => DB::raw('NOW()'), 'created_at' => DB::raw('NOW()')]);
                        }
                    }
                //     if (isset($id_ip[0]['id'])) {
                //         data_ip_users::insert(['data_uploads_id' => $id_data, 'users_id' => $id_user, 'ips_id' => $id_ip[0]['id']]);
                //         echo $id_data;
                //     } else {
                //         data_ip_users::insert(['data_uploads_id' => $id_data, 'users_id' => $id_user, 'ips_id' => $id_ip]);
                //         echo $id_data;
                //     }
                }
                // dd ($domain);
                foreach ($domain as $domain) {
                    //  dd ($domain);
                    $id_domain=domain::select('id')->where('domain', '=', $domain)->get();
                    if (isset($id_domain[0]['id'])) {
                        $domain_user = data_domain_users::select('users_id', 'deleted')->where('domains_id', '=', $id_domain[0]['id'])->where('users_id', '=', $id_user)->get();


                        if (isset($domain_user[0]['deleted'])&& $domain_user[0]['deleted']==1) {
                            data_domain_users::where('domains_id', '=', $id_domain[0]['id'])->update(['deleted' => 0, 'active' => 1]);
                            // return redirect()->route('home');
                            $reaktiv++;
                            continue;
                        }


                        if (isset($domain_user[0]['users_id'])) {
                            // return redirect()->route('home', ['error' => 2]);
                            $already++;
                            continue;
                        } else {
                            data_domain_users::insert(['data_uploads_id' => $id_data,'domains_id' => $id_domain[0]['id'], 'users_id' => $id_user, 'updated_at' => DB::raw('NOW()'), 'created_at' => DB::raw('NOW()')]);
                        }
                    } else {
                      if ($domain){
                        $id_domain = domain::insertGetId(['domain' => $domain, 'updated_at' => DB::raw('NOW()'), 'created_at' => DB::raw('NOW()')]);
                        data_domain_users::insert(['data_uploads_id' => $id_data,'domains_id' => $id_domain, 'users_id' => $id_user, 'updated_at' => DB::raw('NOW()'), 'created_at' => DB::raw('NOW()')]);
                        $domain_dnsbls_id=domain_dnsbl::select(['id'])->get();
                        foreach ($domain_dnsbls_id as $id) {
                            domain_listed::insert(['domain_id' => $id_domain, 'domain_dnsbls_id' => $id['id'], 'updated_at' => DB::raw('NOW()'), 'created_at' => DB::raw('NOW()')]);
                        }

                        $subdomains=gethostbynamel($domain);                    //lößt domain in subdomain IPs auf
                        if($subdomains){
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
                      }
                    }
                }
                // if (isset($id_domain[0]['id'])) {
                //     data_domain_users::insert(['data_uploads_id' => $id_data, 'users_id' => $id_user, 'domains_id' => $id_domain[0]['id']]);
                //     echo $id_data;
                // } else {
                //     data_domain_users::insert(['data_uploads_id' => $id_data, 'users_id' => $id_user, 'domains_id' => $id_domain]);
                //     echo $id_data;
                // }
            }
            if ($extension==='.xlsx') {
                $filename=$destinationPath.'\\'.$server_dateiname.".xlsx";
                $xlsx = new XLSXReader($filename);                                                                                //kein timeout
                $domain = array();
                $ip     = array();
                $i=0;
                $ii=0;
                $sheets = $xlsx->getSheetNames();
                //var_dump($sheets);
                // echo "<table>";
                foreach ($sheets as $ke) {
                    $data = $xlsx->getSheetData($ke);
                    // echo "<th>".$ke."</th>";
                    // dd($data);
                    foreach ($data as $k) {
                        if (filter_var(current($k), FILTER_VALIDATE_IP)) {
                            $ip    [$i]= current($k);

                            $i++;
                        }
                    }
                    foreach ($data as $k) {
                        if (next($k) != "Domains") {
                            $domain[$ii]= current($k);
                            $ii++;
                        }
                    }
                }
                // dd ($domain);
                foreach ($ip as $ip) {
                    $id_ip=ip::select('id')->where('ip_address', '=', $ip)->get();
                    if (isset($id_ip[0]['id'])) {
                        $ip_user = data_ip_users::select('users_id', 'deleted')->where('ips_id', '=', $id_ip[0]['id'])->where('users_id', '=', $id_user)->get();

                        if (isset($ip_user[0]['deleted'])&& $ip_user[0]['deleted'] ==1) {
                            data_ip_users::where('ips_id', '=', $id_ip[0]['id'])->update(['deleted' => 0]);
                            $reaktiv++;
                            // echo $ip_user[0]['deleted'];
                            //return redirect()->route('home');
                            continue;
                        }

                        if (isset($ip_user[0]['users_id'])) {
                            // return redirect()->route('home', ['error' => 2]);
                            $already++;
                            // echo $ip_user[0]['users_id'];
                            continue;
                        } else {
                            data_ip_users::insert(['data_uploads_id' => $id_data,'ips_id' => $id_ip[0]['id'], 'users_id' => $id_user, 'updated_at' => DB::raw('NOW()'), 'created_at' => DB::raw('NOW()')]);
                        }
                    } else {
                        $id_ip = ip::insertGetId(
                        ['ip_address' => $ip, 'updated_at' => DB::raw('NOW()'), 'created_at' => DB::raw('NOW()')]
                      );
                        data_ip_users::insert(['data_uploads_id' => $id_data,'ips_id' => $id_ip, 'users_id' => $id_user, 'updated_at' => DB::raw('NOW()'), 'created_at' => DB::raw('NOW()')]);
                        $ip_dnsbls_id=ip_dnsbl::select(['id'])->get();
                        foreach ($ip_dnsbls_id as $id) {
                            ip_listed::insert(['ips_id' => $id_ip, 'ip_dnsbls_id' => $id['id'], 'updated_at' => DB::raw('NOW()'), 'created_at' => DB::raw('NOW()')]);
                        }
                    }
                    // if (isset($id_ip[0]['id'])) {
                    //     data_ip_users::insert(['data_uploads_id' => $id_data, 'users_id' => $id_user, 'ips_id' => $id_ip[0]['id']]);
                    //     echo $id_data;
                    // } elseif(empty($id_ip[0]['id'])) {
                    //     data_ip_users::insert(['data_uploads_id' => $id_data, 'users_id' => $id_user, 'ips_id' => $id_ip]);
                    //     echo $id_data;
                    // }
                }
                // dd ($domain);
                foreach ($domain as $domain) {
                    // dd ($domain);
                    $id_domain=domain::select('id')->where('domain', '=', $domain)->get();
                    if (isset($id_domain[0]['id'])) {
                        $domain_user = data_domain_users::select('users_id', 'deleted')->where('domains_id', '=', $id_domain[0]['id'])->where('users_id', '=', $id_user)->get();


                        if (isset($domain_user[0]['deleted'])&& $domain_user[0]['deleted']==1) {
                            data_domain_users::where('domains_id', '=', $id_domain[0]['id'])->update(['deleted' => 0, 'active' => 1]);
                            // return redirect()->route('home');
                            $reaktiv++;
                            continue;
                        }


                        if (isset($domain_user[0]['users_id'])) {
                            // return redirect()->route('home', ['error' => 2]);
                            $already++;
                            continue;
                        } else {
                            data_domain_users::insert(['data_uploads_id' => $id_data,'domains_id' => $id_domain[0]['id'], 'users_id' => $id_user, 'updated_at' => DB::raw('NOW()'), 'created_at' => DB::raw('NOW()')]);
                        }
                    } else {
                      if ($domain){
                        $id_domain = domain::insertGetId(['domain' => $domain, 'updated_at' => DB::raw('NOW()'), 'created_at' => DB::raw('NOW()')]);

                        data_domain_users::insert(['data_uploads_id' => $id_data,'domains_id' => $id_domain, 'users_id' => $id_user, 'updated_at' => DB::raw('NOW()'), 'created_at' => DB::raw('NOW()')]);
                        $domain_dnsbls_id=domain_dnsbl::select(['id'])->get();
                        foreach ($domain_dnsbls_id as $id) {
                            domain_listed::insert(['domain_id' => $id_domain, 'domain_dnsbls_id' => $id['id'], 'updated_at' => DB::raw('NOW()'), 'created_at' => DB::raw('NOW()')]);
                        }
                        //dd($domain);
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
                    }
                }

            //     if (isset($id_domain[0]['id'])) {
            //         data_domain_users::insert(['data_uploads_id' => $id_data, 'users_id' => $id_user, 'domains_id' => $id_domain[0]['id']]);
            //         echo $id_data;
            //     } elseif(empty($id_domain[0]['id'])) {
            //         data_domain_users::insert(['data_uploads_id' => $id_data, 'users_id' => $id_user, 'domains_id' => $id_domain]);
            //         echo $id_data;
            //     }
            // }
        }


        //echo $id_data;
        return view('home', compact('already', 'reaktiv'));
    }
  }

  public function update_active_upload_data(Request $request)
  {
      $id_user = Auth::user()->id;
      $id = $request->id;
      $select_active=data_upload::select('data_uploads.active')
                                ->join('data_ip_users', 'data_uploads.id', '=', 'data_ip_users.data_uploads_id')
                                ->where('data_uploads.id', $id)
                                ->where('data_ip_users.users_id', $id_user)
                                ->get();
      if (isset($select_active['0']['active']) && $select_active['0']['active'] ==1) {
          data_upload::where('id', $id)
             ->update(['active' => 0]);
      } else {
          data_upload::where('id', $id)
             ->update(['active' => 1]);
      }

      return redirect('/active');
  }

  public function update_deleted_upload_data(Request $request)
  {
      $id = $request->id;

      data_upload::where('id', $id)
                ->update(['deleted' => 1]);
      return redirect('/active');
  }
  public function ip_data_checked(Request $request)
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
      return redirect('/show/detail/redirect');
  }
  public function domain_data_checked(Request $request)
  {
    $id_user = Auth::user()->id;
    $id = $request->id;
    $dnsbl_id = $request->dnsbl_id;
    $select_active=domain_listed::select('checked')
                                 ->join('domains', 'domain_listeds.domain_id', '=', 'domains.id')
                                 ->join('domain_users', 'domains.id', '=', 'domain_users.domain_id')
                                 ->where('domain_users.domain_id', $id)
                                 ->where('domain_listeds.domain_dnsbls_id', $dnsbl_id)
                                 ->where('users_id', $id_user)
                                 ->get();
    if (isset($select_active['0']['checked']) && $select_active['0']['checked']==1) {
      domain_listed::where('domain_id', $id)
                    ->where('domain_dnsbls_id', $dnsbl_id)
                    ->update(['checked' => 0, 'updated_at' => DB::raw('NOW()')]);
    }else{
      domain_listed::where('domain_id', $id)
                    ->where('domain_dnsbls_id', $dnsbl_id)
                    ->update(['checked' => 1, 'updated_at' => DB::raw('NOW()')]);
    }
    return redirect('/show/detail/redirect');
  }
}
