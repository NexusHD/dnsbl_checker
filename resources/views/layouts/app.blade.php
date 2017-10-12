<!DOCTYPE html>
<html class="loading" lang="en">
  <!-- Item Name: Forge - Material Design Admin Template
  Version: 1.0
  Author: CodigoForge
  Author URL: https://themeforest.net/user/codigoforge
  WebSite : http://www.codigoforge.com
  -->
  <head>
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link rel="icon" href="img/favicon/favicon-32x32.png" sizes="32x32">
    <link rel="apple-touch-icon-precomposed" href="img/favicon/favicon-32x32.png">
    <!-- ============================-->
    <!-- META DATA-->
    <!-- ============================-->
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="msapplication-tap-highlight" content="no">
    <meta name="title" content="Forge is modern, responsive Material Admin Template.">
    <meta name="description" content="Forge Material Admin Template is modern, responsive and based on Material Design by Google.It's Material Design Admin Template powered by MaterialCSS.">
    <meta name="keywords" content="materialize, admin template, dashboard template, flat admin template, responsive admin template, materialcss, admin pages, material CMS, forge admin template, resoponsive material admin">
    <meta name="msapplication-TileColor" content="#FFFFFF">
    <meta name="msapplication-TileImage" content="img/favicon/favicon-32x32.png">
    <meta name="theme-color" content="#2a56c6">
    <!-- ============================-->
    <!-- TITLE-->
    <!-- ============================-->
    <title>Swiss List</title>
    <!-- ============================-->
    <!-- FONTS-->
    <!-- ============================-->
    <link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Inconsolata" type="text/css">
    <link rel="stylesheet" href="http://fonts.googleapis.com/icon?family=Material+Icons">
    <!-- ============================-->
    <!-- CSS-->
    <!-- ============================-->
    <link rel="stylesheet" href="css/main.css">
    <link rel="stylesheet" href="css/dynamic.min.css">
    <link rel="stylesheet" href="css/markup.min.css">
    <link rel="stylesheet" href="plugins/scrollbar/perfect-scrollbar.min.css">
    <link type="text/css" rel="stylesheet" href="css/plugins/c3/c3.css">
  </head>
  <body>
    <!-- ============================-->
    <!-- PRELOAD-->
    <!-- ============================-->
    <div id="preloader">
      <div class="preloader-center">
        <div class="dots-loader dot-circle"></div>
      </div>
    </div>
    <!-- ============================-->
    <!-- CONTENT AREA-->
    <!-- ============================-->
    <header>
      <!-- ============================-->
      <!-- TOP NAV-->
      <!-- ============================-->
      <div class="navbar-fixed full-top-nav">
        <div id="current-menu" data-menu="default">
          <nav><a class="morph menu small mob-menu button-collapse top-nav waves-effect waves-light circle hide-on-large-only" href="javascript:void(0)" id="sidebar-default-collapse" data-activates="nav-default"><span><span class="s1"></span><span class="s2"></span><span class="s3"></span></span></a>
            <div class="nav-wrapper">
              <!-- LOGO Set--><a class="animated brand-logo hide-on-large-only nav-logo" href="javascript:void(0)"><i class="material-icons logo-icon left base-text">whatshot</i><span class="left" style="margin-left:20px;">SWISS LIST</span></a>
              <a class="animated brand-logo hide-on-med-and-down defaultMenu-logo" href="javascript:void(0)"><i class="material-icons logo-icon left white-text">whatshot</i><span class="left" style="margin-left:20px;">SWISS LIST</span></a>
              <!-- Left menu options at top-nav-->
              <ul class="left topnav-Menu-ls hide-on-med-and-down">
                <li><a class="morph small iconizedToggle waves-effect waves-light" href="javascript:void(0)"><span><span class="s1"></span><span class="s2"></span><span class="s3"></span></span></a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
      <!-- ============================-->
      <!-- Vertical Navigation (Default and Iconized)-->
      <!-- ============================-->
      @guest
        <div class="vertical-navigations animated">
          <ul class="side-nav fixed animated collapsible collapsible-accordion" id="nav-default">
            <li class="logo"><a class="brand-logo hide-on-large-only" id="logo-container" href="/"></a></li>
            <li class="navigation-header"><span class="no-col-body">Navbar</span><i class="material-icons tooltipped" data-position="right" data-delay="50" data-tooltip="CSS Properties">more_horiz</i>
            </li>
            <li><a class="collapsible-header no-col-body waves-effect waves-set" href="{{ route('login') }}"><i class="material-icons">list</i><span>Login</span></a></li>
            <li><a class="collapsible-header no-col-body waves-effect waves-set" href="{{ route('register') }}"><i class="material-icons">view_list</i><span>Register</span></a></li>
          </ul>
        </div>
      @else
      <div class="vertical-navigations animated">
        <ul class="side-nav fixed animated collapsible collapsible-accordion" id="nav-default">
          <li class="usr-profile">
            <ul class="user-options">
              <li class="waves-effect waves-set"><span class="usr-name">{{ Auth::user()->name }}</span></li>
              <li class="user-option-item waves-effect waves-set"><a class="btn-floating btn-small waves-effect waves-light" href="#"><i class="material-icons">lock</i></a></li>
              <li class="user-option-item waves-effect waves-set"><a class="btn-floating btn-small waves-effect waves-light" href="#"><i class="material-icons">settings</i></a></li>
              <li class="user-option-item waves-effect waves-set"><a class="btn-floating btn-small waves-effect waves-light" href="logout"><i class="material-icons">power_settings_new</i></a></li>
            </ul>
          </li>
          <li><a class="collapsible-header no-col-body waves-effect waves-set active current" href="home"><i class="material-icons">dashboard</i><span>Home</span></a></li>
          <li class="navigation-header"><span class="no-col-body">Navbar</span><i class="material-icons tooltipped" data-position="right" data-delay="50" data-tooltip="CSS Properties">more_horiz</i>
          </li>
          <li id="add_ip_domain" name="li"><a class="collapsible-header no-col-body waves-effect waves-set"><i class="material-icons">text_format</i><span>IP/Domain Hinzufügen</span></a></li>
          <li id="active" name="li"><a class="collapsible-header no-col-body waves-effect waves-set"><i class="material-icons">list</i><span>IP/Domain Verwalten</span></a></li>
          <li id="show" name="li"><a class="collapsible-header no-col-body waves-effect waves-set"><i class="material-icons">view_list</i><span>Gelistete IPs/Domains</span></a></li>
        </ul>
      </div>
      @endguest
    </header>
    <main class="animated">
      @yield('content')
      <div class="ergebniss" id="ergebniss">
      </div>
      <!-- FOOTER-->
      <footer class="page-footer no-mrpd grey lighten-4">
        <div class="footer-copyright">
          <div class="container primary-text">© 2017 Forge, All rights reserved.
            <div class="right"><span class="left">Handcrafted with </span><a class="left" href="http://codigoforge.com"><i class="material-icons secondary-text tiny left" style="line-height:20px;margin:0px 8px;">favorite</i>By CodigoForge</a></div>
          </div>
        </div>
      </footer>
    </main>
    <!-- ============================-->
    <!-- SCRIPTS-->
    <!-- ============================-->
    <script src="{{ asset('js/app.js') }}"></script>
    <script src="{{ asset('js/jquery.js') }}"></script>
    @yield('postJquery');
    <script type="text/javascript" src="js/ajax_verbindungen.js"></script>
    <script type="text/javascript" src="js/all.js"></script>
    <script type="text/javascript" src="plugins/charts/chartjs/dist/Chart.bundle.js"></script>
    <script type="text/javascript" src="plugins/sparkline/jquery.sparkline.js"></script>
    <script type="text/javascript" src="plugins/charts/google-chart/loader.js"></script>
    <script type="text/javascript" src="plugins/charts/google-chart/jsapi.js"></script>
    <script async="" defer="" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAoqM2ajGLymYCyt14bhxOEfcjHDShZDm8" type="text/javascript"></script>
    <script src="js/dashboard.js"></script>
  </body>
</html>
