@extends('layouts.app')
@section('content')

@foreach ($select_repeat_status as $status)
@if ($status->repeat == '1')
  <button id="scan" class="waves-effect waves-light btn-large" name="button">Scan Abbrechen</button>
@endif
@if ($status->repeat == '0')
  <button id="scan" class="waves-effect waves-light btn-large" name="button">Scan</button>
@endif
@endforeach
@endsection
@section('Toast')
<script type="text/javascript">

var error = {{ app('request')->input('error') }};
if(typeof(error) != "undefined" && error !== null){



function DialogZeigen()
{

    if (error == 1){
    (function () {
        $('.carousel.carousel-slider').carousel({ fullWidth: true });
        // JUST TO SHOW TOAST ON LOAD
        $(window).on('load', function () {
            setTimeout(function () {
                var $toastContent = $('<span>Hey, Dude die Eingabe ist falsch</span>');
                Materialize.toast($toastContent, 4000, '', function () {
                });
            }, 2011);
        });
    })
    ();
  }
    if (error == 2){
    (function () {
        $('.carousel.carousel-slider').carousel({ fullWidth: true });
        // JUST TO SHOW TOAST ON LOAD
        $(window).on('load', function () {
            setTimeout(function () {
                var $toastContent = $('<span>Hey, Dude du hattest das schon mal und es wurde wieder aktivert</span>');
                Materialize.toast($toastContent, 4000, '', function () {
                });
            }, 2011);
        });
    })
    ();

  }

    if (error == 3){
    (function () {
        $('.carousel.carousel-slider').carousel({ fullWidth: true });
        // JUST TO SHOW TOAST ON LOAD
        $(window).on('load', function () {
            setTimeout(function () {
                var $toastContent = $('<span>Hey, Dude das ist schon gespeichert</span>');
                Materialize.toast($toastContent, 4000, '', function () {
                });
            }, 2011);
        });
    })
    ();

  }
  }

DialogZeigen();
}

</script>
@endsection

@section('postJquery')
<script type="text/javascript">

$("button#scan").click(function(){
  if($('button#scan').text()=='Scan'){
    $.ajax({
      url: 'scan',
      type: 'GET'
    })
    .done(function(t) {
      console.log("success");
      $('div#ergebniss').html(t);
    })
    .fail(function() {
      console.log("error");
    })
    .always(function() {
      console.log("complete");
    });
    $("button#scan").html('Scan Abbrechen');
  }else{
    $.ajax({
      url: 'quit_scan',
      type: 'GET'
    })
    .done(function(t) {
      console.log("success");
      $('div#ergebniss').html(t);
    })
    .fail(function() {
      console.log("error");
    })
    .always(function() {
      console.log("complete");
    });
    $("button#scan").html('Scan');
  }
});

</script>
@endsection
