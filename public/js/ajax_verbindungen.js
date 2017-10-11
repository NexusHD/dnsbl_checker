$(document).ready(function() {
  $.ajaxSetup({
    headers: {
      'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    }
  });
////////////////////////////////////show//////////////////////////////////////
        $('li#show').click(function() {
          $('div#ergebniss').html("warte");

        $.ajax({
          url: 'show',
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
      });
///////////////////////////////////active//////////////////////////////////////
    $('li#active').click(function() {
      $('div#ergebniss').html("warte");


    $.ajax({
      url: 'active',
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
  });

  // <button id='quit_scan' name='button'>Scan Abbrechen</button>
});
