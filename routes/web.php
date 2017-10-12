<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});
Route::get('/add_ip_domain', function () {
    return view('/add_ip_domain');
});

Auth::routes();
Route::get('/data_listed/{id}', 'view_listed_controller@show_listed_data');
Route::post('/upload_data', 'upload_controller@upload');
Route::get('/scan', 'scan_controller@scan');
Route::get('/quit_scan', 'scan_controller@quit_scan');
Route::get('/delet', 'domain_controller@show_del_domain');
Route::get('/active', 'domain_controller@show_active_domain');
Route::get('/show', 'view_listed_controller@show_listeds');
Route::post('/show/detail', 'view_listed_controller@show_listed_data');
Route::get('/show/detail/redirect', 'view_listed_controller@show_listed_data_redirect');
Route::post('/active', 'domain_controller@show_active_domain_w_input');
Route::post('/delet', 'domain_controller@show_del_domain_w_input');

Route::post('/ip_data_checked', 'upload_controller@ip_data_checked');
Route::post('/domain_data_checked', 'upload_controller@domain_data_checked');

Route::get('/logout', 'HomeController@logout');

Route::get('/home', 'HomeController@index')->name('home');

Route::post('/active_data', 'upload_controller@update_active_upload_data');

Route::post('/domain_checked', 'domain_controller@domain_checked');
Route::post('/ip_checked', 'ip_controller@ip_checked');

Route::post('/delete_data', 'upload_controller@update_deleted_upload_data');

Route::post('/sort_ip_domain', 'HomeController@sort_ip_domain');

Route::get('/sto_domain', 'domain_controller@store_domain');
Route::get('/del_domain', 'ip_controller@update_deleted');
Route::post('/del_domain_data', 'domain_controller@update_deleted_data');
Route::post('/del_domain', 'domain_controller@update_deleted');
Route::get('/active_domain', 'domain_controller@show_active_domain');
Route::post('/active_domain_data', 'domain_controller@update_active_data');
Route::post('/active_domain', 'domain_controller@update_active');

Route::get('/sto_ip', 'ip_controller@store_ip');
Route::get('/del_ip', 'ip_controller@update_deleted');
Route::post('/del_ip_data', 'ip_controller@update_deleted_data');
Route::post('/del_ip', 'ip_controller@update_deleted');
Route::get('/active_ip', 'ip_controller@show_active_ip');
Route::get('/delete_ip', 'ip_controller@show_del_ip');
Route::post('/active_ip_data', 'ip_controller@update_active_data');
Route::post('/active_ip', 'ip_controller@update_active');
Route::get('/active_ip_input', 'ip_controller@show_active_ip_input');
Route::get('/del_ip_input', 'ip_controller@show_del_ip_input');
