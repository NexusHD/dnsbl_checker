<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\user;
use App\ip;
use App\repeat;
use App\ip_dnsbl;
use App\domain_dnsbl;
use App\ip_listed;
use App\domain_listed;
use App\domain;
use App\subdomain;
use App\sub_ip;
use App\sub_domain_listed;
use App\sub_ip_listed;
use App\data_upload;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class scan_controller extends Controller
{
  public function quit_scan(){
    $id_user = Auth::user()->id;
    repeat::where('users_id', $id_user)
          ->update(['repeat' => 0, 'repeats.updated_at' => DB::raw('NOW()')]);
  }
  public function scan (){
    ignore_user_abort(true);                                                                        //laufe weiter, auch wenn der user das programm beendet
    set_time_limit(0);                                                                                //kein timeout
    $id_user = Auth::user()->id;
    $query = user::select('users_id')
                 ->join('repeats', 'users.id', '=', 'repeats.users_id')
                 ->where('users.id', '=', $id_user)
                 ->get();
    if(empty($query['0']['users_id'])){
      repeat::insert(['repeats.users_id' => $id_user, 'repeats.repeat' => '1', 'repeats.updated_at' => DB::raw('NOW()'), 'repeats.created_at' => DB::raw('NOW()')]);
    }else{
      repeat::where('users_id', $id_user)
            ->update(['repeat' => 1, 'repeats.updated_at' => DB::raw('NOW()')]);
    }
    while(1){
      $select_repeat_status=repeat::select('repeat')
                                  ->where('users_id', '=', $id_user)
                                  ->get();
      if ($select_repeat_status['0']['repeat']){
        $ips_list_query=ip::select('ips.ip_address', 'ips.id')
                          ->join('ip_users', 'ips.id', '=', 'ip_users.ips_id')
                          ->where('ip_users.deleted', '=', '0')
                          ->where('ip_users.active', '=', '1')
                          ->where('ip_users.users_id', '=', $id_user)
                          ->get();
        $domains_list_query=domain::select('domains.domain', 'domains.id')
                                  ->join('domain_users', 'domains.id', '=', 'domain_users.domain_id')
                                  ->where('domain_users.deleted', '=', '0')
                                  ->where('domain_users.active', '=', '1')
                                  ->where('domain_users.users_id', '=', $id_user)
                                  ->get();
        $domains_dnsbl_query=domain_dnsbl::select('query', 'id')
                                         ->get();
        $ips_dnsbl_query=ip_dnsbl::select('ip_dnsbls.query', 'ip_dnsbls.id')
                                 ->get();
        $sub_domain_query=subdomain::select('subdomains.id as subdomain_id', 'subdomains.sub_domain', 'domains.id as domain_id')
                                   ->join('subdomain_subip_domains', 'subdomains.id', '=', 'subdomain_subip_domains.subdomain_id')
                                   ->join('domains', 'subdomain_subip_domains.domain_id', '=', 'domains.id')
                                   ->join('domain_users', 'domains.id', '=', 'domain_users.domain_id')
                                   ->where('domain_users.deleted', '=', '0')
                                   ->where('domain_users.active', '=', '1')
                                   ->where('domain_users.users_id', '=', $id_user)
                                   ->get();
        $sub_ip_query=sub_ip::select('sub_ips.id as sub_ips_id', 'sub_ips.sub_ip', 'domains.id as domain_id')
                            ->join('subdomain_subip_domains', 'sub_ips.id', '=', 'subdomain_subip_domains.sub_ip_id')
                            ->join('domains', 'subdomain_subip_domains.domain_id', '=', 'domains.id')
                            ->join('domain_users', 'domains.id', '=', 'domain_users.domain_id')
                            ->where('domain_users.deleted', '=', '0')
                            ->where('domain_users.active', '=', '1')
                            ->where('domain_users.users_id', '=', $id_user)
                            ->get();
        $data_ip_upload=data_upload::select('ips.ip_address', 'ips.id')
                                   ->join('data_ip_users', 'data_uploads.id', '=', 'data_ip_users.data_uploads_id')
                                   ->join('ips', 'data_ip_users.ips_id', '=', 'ips.id')
                                   ->where('data_ip_users.users_id', '=', $id_user)
                                   ->where('data_ip_users.deleted', '=', '0')
                                   ->where('data_ip_users.active', '=', '1')
                                   ->where('data_uploads.deleted', '=', '0')
                                   ->where('data_uploads.active', '=', '1')
                                   ->get();
        $data_domain_upload=data_upload::select('domains.domain', 'domains.id')
                                   ->join('data_domain_users', 'data_uploads.id', '=', 'data_domain_users.data_uploads_id')
                                   ->join('domains', 'data_domain_users.domains_id', '=', 'domains.id')
                                   ->where('data_domain_users.users_id', '=', $id_user)
                                   ->where('data_domain_users.deleted', '=', '0')
                                   ->where('data_domain_users.active', '=', '1')
                                   ->where('data_uploads.deleted', '=', '0')
                                   ->where('data_uploads.active', '=', '1')
                                   ->get();
        foreach($ips_list_query as $ip_list_query){
          $ip_address = $ip_list_query->ip_address;
          $ip_id = $ip_list_query->id;
          foreach($ips_dnsbl_query as $ip_dnsbl_query){
            $ip_dnsbl_query_link=$ip_dnsbl_query->query;
            $ip_dnsbl_id=$ip_dnsbl_query->id;
            $reversed_ip = implode(".", array_reverse(explode(".", $ip_address)));
            if (checkdnsrr($reversed_ip.".".$ip_dnsbl_query_link.".", "A")) {
              ip_listed::where('ips_id', $ip_id)
                       ->where('ip_dnsbls_id', $ip_dnsbl_id)
                       ->update(['listed' => 1, 'updated_at' => DB::raw('NOW()')]);
            }else{
              ip_listed::where('ips_id', $ip_id)
                       ->where('ip_dnsbls_id', $ip_dnsbl_id)
                       ->update(['listed' => 0, 'updated_at' => DB::raw('NOW()')]);
            }
          }
        }
        foreach($domains_list_query as $domain_list_query){
          $domain = $domain_list_query->domain;
          $domain_id = $domain_list_query->id;
          foreach($domains_dnsbl_query as $domain_dnsbl_query){
            $domain_query=$domain_dnsbl_query->query;
            $domain_dnsbl_id=$domain_dnsbl_query->id;
            if (checkdnsrr($domain.".".$domain_query.".", "NS")) {
              domain_listed::where('domain_id', $domain_id)
                           ->where('domain_dnsbls_id', $domain_dnsbl_id)
                           ->update(['listed' => 1, 'updated_at' => DB::raw('NOW()')]);
            }else{
              domain_listed::where('domain_id', $domain_id)
                           ->where('domain_dnsbls_id', $domain_dnsbl_id)
                           ->update(['listed' => 0, 'updated_at' => DB::raw('NOW()')]);
            }
          }
        }
        foreach($sub_domain_query as $sub_domain){
          $sub_domain_domain = $sub_domain->domain;
          $sub_domain_id = $sub_domain->subdomain_id;
          $domain_id = $sub_domain->domain_id;
          foreach($domains_dnsbl_query as $domain_dnsbl_query){
            $domain_dnsbl_query_link=$domain_dnsbl_query->query;
            $domain_dnsbl_query_id=$domain_dnsbl_query->id;
            if (checkdnsrr($sub_domain_domain.".".$domain_dnsbl_query_link.".", "NS")) {
              sub_domain_listed::where('subdomains_id', $sub_domain_id)
                               ->where('domain_dnsbls_id', $domain_dnsbl_query_id)
                               ->update(['listed' => 1, 'updated_at' => DB::raw('NOW()')]);
              domain_listed::where('domain_id', $domain_id)
                           ->where('domain_dnsbls_id', $domain_dnsbl_query_id)
                           ->update(['listed' => 1, 'updated_at' => DB::raw('NOW()')]);
            }else{
              sub_domain_listed::where('subdomains_id', $sub_domain_id)
                               ->where('domain_dnsbls_id', $domain_dnsbl_query_id)
                               ->update(['listed' => 0, 'updated_at' => DB::raw('NOW()')]);
            }
          }
        }
        foreach($sub_ip_query as $sub_ip){
          $sub_ip_address = $sub_ip->sub_ip;
          $sub_ip_id = $sub_ip->sub_ips_id;
          $domain_id = $sub_ip->domain_id;
          foreach($ips_dnsbl_query as $ip_dnsbl_query){
            $ip_dnsbl_query_link=$ip_dnsbl_query->query;
            $ip_dnsbl_id=$ip_dnsbl_query->id;
            $reversed_ip = implode(".", array_reverse(explode(".", $sub_ip_address)));
            if (checkdnsrr($reversed_ip.".".$ip_dnsbl_query_link.".", "A")) {
              sub_ip_listed::where('sub_ips_id', $sub_ip_id)
                           ->where('ip_dnsbls_id', $ip_dnsbl_id)
                           ->update(['listed' => 1, 'updated_at' => DB::raw('NOW()')]);
              domain_listed::where('domain_id', $domain_id)
                           ->where('domain_dnsbls_id', $domain_dnsbl_query_id)
                           ->update(['listed' => 1, 'updated_at' => DB::raw('NOW()')]);
            }else{
              sub_ip_listed::where('sub_ips_id', $sub_ip_id)
                           ->where('ip_dnsbls_id', $ip_dnsbl_id)
                           ->update(['listed' => 0, 'updated_at' => DB::raw('NOW()')]);
            }
          }
        }
        foreach($data_ip_upload as $ip_list_query){
          $ip_address = $ip_list_query->ip_address;
          $ip_id = $ip_list_query->id;
          foreach($ips_dnsbl_query as $ip_dnsbl_query){
            $ip_dnsbl_query_link=$ip_dnsbl_query->query;
            $ip_dnsbl_id=$ip_dnsbl_query->id;
            $reversed_ip = implode(".", array_reverse(explode(".", $ip_address)));
            if (checkdnsrr($reversed_ip.".".$ip_dnsbl_query_link.".", "A")) {
              ip_listed::where('ips_id', $ip_id)
                       ->where('ip_dnsbls_id', $ip_dnsbl_id)
                       ->update(['listed' => 1, 'updated_at' => DB::raw('NOW()')]);
            }else{
              ip_listed::where('ips_id', $ip_id)
                       ->where('ip_dnsbls_id', $ip_dnsbl_id)
                       ->update(['listed' => 0, 'updated_at' => DB::raw('NOW()')]);
            }
          }
        }
        foreach($data_domain_upload as $domain_list_query){
          $domain = $domain_list_query->domain;
          $domain_id = $domain_list_query->id;
          foreach($domains_dnsbl_query as $domain_dnsbl_query){
            $domain_query=$domain_dnsbl_query->query;
            $domain_dnsbl_id=$domain_dnsbl_query->id;
            if (checkdnsrr($domain.".".$domain_query.".", "NS")) {
              domain_listed::where('domain_id', $domain_id)
                           ->where('domain_dnsbls_id', $domain_dnsbl_id)
                           ->update(['listed' => 1, 'updated_at' => DB::raw('NOW()')]);
            }else{
              domain_listed::where('domain_id', $domain_id)
                           ->where('domain_dnsbls_id', $domain_dnsbl_id)
                           ->update(['listed' => 0, 'updated_at' => DB::raw('NOW()')]);
            }
          }
        }
        sleep(3);
      } else {
        exit();
      }
    }
  }
}
