<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('home');
    }

    public function sort_ip_domain(Request $request){
        $request->validate([
            'input' => 'required'
        ]);
        $ip = $request->input('input');

        if (filter_var($ip, FILTER_VALIDATE_IP)) {
          return redirect()->action('ip_controller@store_ip', ['ip' => $ip]);
        }else{
          return redirect()->action('domain_controller@store_domain', ['domain' => $ip]);
        }
    }

    public function logout(){
      Auth::logout();
      return view('welcome');
    }
}
