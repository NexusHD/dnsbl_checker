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
