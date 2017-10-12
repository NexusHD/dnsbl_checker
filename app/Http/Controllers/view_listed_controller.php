<?php

namespace App\Http\Controllers;

use App\domain_dnsbl;
use App\ip_dnsbl;
use App\domain;
use App\user;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Session;

class view_listed_controller extends Controller
{
    public function show_listeds(){
      $domain_result=array();
      $id_user = Auth::user()->id;

      $domain_dnsbl_query=domain_dnsbl::select('query', 'id', 'link', 'name')->get();
      $ip_dnsbl_query=ip_dnsbl::select('query', 'id', 'link', 'name')->get();
      $ip_listed_query=user::select('ips.ip_address', 'ip_listeds.ip_dnsbls_id', 'ip_listeds.ips_id', 'checked')
      	                   ->join('ip_users', 'users.id', '=', 'ip_users.users_id')
                           ->join('ips', 'ip_users.ips_id', '=', 'ips.id')
                           ->join('ip_listeds', 'ips.id', '=', 'ip_listeds.ips_id')
                           ->where('ip_listeds.listed', '=', '1')
                           ->where('users.id', '=', $id_user)
                           ->where('ip_users.deleted', '=', '0')
                           ->where('ip_users.active', '=', '1')
                           ->distinct()
                           ->get();
      $domain_listed_query=user::select('domains.domain', 'domains.id', 'domain_listeds.domain_dnsbls_id', 'checked')
      	                       ->join('domain_users', 'users.id', '=', 'domain_users.users_id')
                               ->join('domains', 'domain_users.domain_id', '=', 'domains.id')
                               ->join('domain_listeds', 'domains.id', '=', 'domain_listeds.domain_id')
                               ->where('domain_listeds.listed', '=', '1')
                               ->where('domain_users.deleted', '=', '0')
                               ->where('domain_users.active', '=', '1')
                               ->where('users.id', '=', $id_user)
                               ->distinct()
                               ->get();
      $data_uploads=user::select('data_uploads.id', 'data_uploads.server_dateiname', 'data_uploads.original_name', 'data_uploads.data_typ', 'ip_listeds.listed as listed_ip', 'domain_listeds.listed as listed_domain')
                        ->join('data_ip_users', 'users.id', '=', 'data_ip_users.users_id')
                        ->join('data_uploads', 'data_ip_users.data_uploads_id', '=', 'data_uploads.id')
                        ->join('data_domain_users', 'data_uploads.id', '=', 'data_domain_users.data_uploads_id')
                        ->join('ips', 'data_ip_users.ips_id', '=', 'ips.id')
                        ->join('ip_listeds', 'ips.id', '=', 'ip_listeds.ips_id')
                        ->join('domains', 'data_domain_users.domains_id', '=', 'domains.id')
                        ->join('domain_listeds', 'domains.id', '=', 'domain_id')
                        ->where('users.id', '=', $id_user)
                        ->where('data_ip_users.active', '=', '1')
                        ->where('data_ip_users.deleted', '=', '0')
                        ->orwhere('data_domain_users.active', '=', '1')
                        ->where('data_domain_users.deleted', '=', '0')
                        ->where('users.id', '=', $id_user)
                        ->distinct()
                        ->get();
      $sub_ip_domain_listed_query=user::select('domains.domain', 'domains.id', 'domain_listeds.domain_dnsbls_id')
      	                               ->join('domain_users', 'users.id', '=', 'domain_users.users_id')
                                       ->join('domains', 'domain_users.domain_id', '=', 'domains.id')
                                       ->join('domain_listeds', 'domains.id', '=', 'domain_listeds.domain_id')
                                       ->join('subdomain_subip_domains', 'domains.id', '=', 'subdomain_subip_domains.domain_id')
                                       ->join('subdomains', 'subdomain_subip_domains.subdomain_id', '=', 'subdomains.id')
                                       ->join('sub_domain_listeds', 'subdomains.id', '=', 'subdomains_id')
                                       ->join('sub_ips', 'subdomain_subip_domains.sub_ip_id', '=', 'sub_ips.id')
                                       ->join('sub_ip_listeds', 'sub_ips.id', '=', 'sub_ip_listeds.sub_ips_id')
                                       ->where('domain_listeds.listed', '=', '1')
                                       ->where('users.id', '=', $id_user)
                                       ->where('domain_users.deleted', '=', '0')
                                       ->where('domain_users.active', '=', '1')
                                       ->where('sub_domain_listeds.listed', '=', '1')
                                       ->orWhere('sub_ip_listeds.listed', '=', '1')
                                       ->distinct()
                                       ->get();
      return view('view_listed_domain_ips', compact('domain_dnsbl_query', 'ip_dnsbl_query', 'ip_listed_query', 'domain_listed_query', 'sub_ip_domain_listed_query', 'data_uploads'));
    }
    public function detail_listed($id){
      $domain_dnsbl_query=domain_dnsbl::select('query', 'id', 'link', 'name')->get();
      $ip_dnsbl_query=ip_dnsbl::select('query', 'id', 'link', 'name')->get();
      $subdomain_listed_query=domain::select('subdomains.sub_domain', 'sub_domain_listeds.domain_dnsbls_id')
                                    ->join('subdomain_subip_domains', 'domains.id', '=', 'subdomain_subip_domains.domain_id')
                                    ->join('subdomains', 'subdomain_subip_domains.subdomain_id', '=', 'subdomains.id')
                                    ->join('sub_domain_listeds', 'subdomains.id', '=', 'sub_domain_listeds.subdomains_id')
                                    ->join('domain_users', 'domains.id', '=', 'domain_users.domain_id')
                                    ->where('domain_users.deleted', '=', '0')
                                    ->where('domain_users.active', '=', '1')
                                    ->where('sub_domain_listeds.listed', '=', '1')
                                    ->where('domains.id', '=', $id)
                                    ->get();
      $sub_ip_listed_query=domain::select('sub_ips.sub_ip', 'sub_ip_listeds.ip_dnsbls_id')
                                 ->join('subdomain_subip_domains', 'domains.id', '=', 'subdomain_subip_domains.domain_id')
                                 ->join('sub_ips', 'subdomain_subip_domains.sub_ip_id', '=', 'sub_ips.id')
                                 ->join('sub_ip_listeds', 'sub_ips.id', '=', 'sub_ip_listeds.sub_ips_id')
                                 ->join('domain_users', 'domains.id', '=', 'domain_users.domain_id')
                                 ->where('domain_users.deleted', '=', '0')
                                 ->where('domain_users.active', '=', '1')
                                 ->where('sub_ip_listeds.listed', '=', '1')
                                 ->where('domains.id', '=', $id)
                                 ->get();
      return view('view_listed_sub_domain_ip', compact('domain_dnsbl_query', 'ip_dnsbl_query', 'subdomain_listed_query', 'sub_ip_listed_query'));
    }
    public function show_listed_data(Request $request){
      $id = $request->id;
      Session::reflash();
      Session::put('id_detail_listed_data_ip_domain', $id);
      $domain_dnsbl_query=domain_dnsbl::select('query', 'id', 'link', 'name')->get();
      $ip_dnsbl_query=ip_dnsbl::select('query', 'id', 'link', 'name')->get();
      $ip_listed_upload=user::select('ips.ip_address', 'ips.id', 'ip_listeds.ip_dnsbls_id', 'data_uploads.original_name', 'data_uploads.data_typ', 'ip_listeds.checked')
      	                     ->join('data_ip_users', 'users.id', '=', 'data_ip_users.users_id')
                             ->join('ips', 'data_ip_users.ips_id', '=', 'ips.id')
                             ->join('ip_listeds', 'ips.id', '=', 'ip_listeds.ips_id')
                             ->join('data_uploads', 'data_ip_users.data_uploads_id', '=', 'data_uploads.id')
                             ->where('ip_listeds.listed', '=', '1')
                             ->where('data_ip_users.deleted', '=', '0')
                             ->where('data_ip_users.active', '=', '1')
                             ->where('data_uploads.id', '=', $id)
                             ->get();
      $domain_listed_upload=user::select('domains.domain', 'domains.id', 'domains.id', 'domain_listeds.domain_dnsbls_id', 'data_uploads.original_name', 'data_uploads.data_typ', 'domain_listeds.checked')
      	                         ->join('data_domain_users', 'users.id', '=', 'data_domain_users.users_id')
                                 ->join('domains', 'data_domain_users.domains_id', '=', 'domains.id')
                                 ->join('domain_listeds', 'domains.id', '=', 'domain_listeds.domain_id')
                                 ->join('data_uploads', 'data_domain_users.data_uploads_id', '=', 'data_uploads.id')
                                 ->where('domain_listeds.listed', '=', '1')
                                 ->where('data_domain_users.deleted', '=', '0')
                                 ->where('data_domain_users.active', '=', '1')
                                 ->where('data_uploads.id', '=', $id)
                                 ->get();
      return view('data_listed', compact('domain_dnsbl_query', 'ip_dnsbl_query', 'ip_listed_upload', 'domain_listed_upload'));
    }
    public function show_listed_data_redirect(){
      $id = Session::get('id_detail_listed_data_ip_domain');
      $domain_dnsbl_query=domain_dnsbl::select('query', 'id', 'link', 'name')->get();
      $ip_dnsbl_query=ip_dnsbl::select('query', 'id', 'link', 'name')->get();
      $ip_listed_upload=user::select('ips.ip_address', 'ips.id', 'ip_listeds.ip_dnsbls_id', 'data_uploads.original_name', 'data_uploads.data_typ', 'ip_listeds.checked')
      	                     ->join('data_ip_users', 'users.id', '=', 'data_ip_users.users_id')
                             ->join('ips', 'data_ip_users.ips_id', '=', 'ips.id')
                             ->join('ip_listeds', 'ips.id', '=', 'ip_listeds.ips_id')
                             ->join('data_uploads', 'data_ip_users.data_uploads_id', '=', 'data_uploads.id')
                             ->where('ip_listeds.listed', '=', '1')
                             ->where('data_ip_users.deleted', '=', '0')
                             ->where('data_ip_users.active', '=', '1')
                             ->where('data_uploads.id', '=', $id)
                             ->get();
      $domain_listed_upload=user::select('domains.domain', 'domains.id', 'domains.id', 'domain_listeds.domain_dnsbls_id', 'data_uploads.original_name', 'data_uploads.data_typ', 'domain_listeds.checked')
      	                         ->join('data_domain_users', 'users.id', '=', 'data_domain_users.users_id')
                                 ->join('domains', 'data_domain_users.domains_id', '=', 'domains.id')
                                 ->join('domain_listeds', 'domains.id', '=', 'domain_listeds.domain_id')
                                 ->join('data_uploads', 'data_domain_users.data_uploads_id', '=', 'data_uploads.id')
                                 ->where('domain_listeds.listed', '=', '1')
                                 ->where('data_domain_users.deleted', '=', '0')
                                 ->where('data_domain_users.active', '=', '1')
                                 ->where('data_uploads.id', '=', $id)
                                 ->get();
      return view('data_listed', compact('domain_dnsbl_query', 'ip_dnsbl_query', 'ip_listed_upload', 'domain_listed_upload'));
    }
}
