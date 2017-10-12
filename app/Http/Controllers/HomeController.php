<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

use Illuminate\Support\Facades\DB;
use App\repeat;
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
      if ($id_user = Auth::user()->id) {
        $select_repeat_status=repeat::select('repeat')
        ->where('users_id', '=', $id_user)
        ->get();
        return view('home', compact('select_repeat_status'));
      }


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
