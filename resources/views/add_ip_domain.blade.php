<!DOCTYPE html>
<html>
  <head>
<script>
    $(document).ready(function() {


      @if (isset($reaktiv) || isset($already))



      function DialogZeigen()
      {

          @if ($already > 0)
          (function () {
              $('.carousel.carousel-slider').carousel({ fullWidth: true });
              // JUST TO SHOW TOAST ON LOAD
              $(window).on('load', function () {
                  setTimeout(function () {
                      var $toastContent = $('<span>Hey, Dude you have {{$already}} already in the database</span>');
                      Materialize.toast($toastContent, 4000, '', function () {
                      });
                  }, 2011);
              });
          })
          ();          @endif
          @if ($reaktiv > 0)
          (function () {
              $('.carousel.carousel-slider').carousel({ fullWidth: true });
              // JUST TO SHOW TOAST ON LOAD
              $(window).on('load', function () {
                  setTimeout(function () {
                      var $toastContent = $('<span>Hey, Dude you have {{$reaktiv}} reaktive</span>');
                      Materialize.toast($toastContent, 4000, '', function () {
                      });
                  }, 2011);
              });
          })
          ();

          @endif
        }

      DialogZeigen();
      @endif




////////////////////////////////////delete//////////////////////////////////////
      $('button#delete').click(function() {
        $('div#ergebniss').html("warte");

      $.ajax({
        url: 'delet',
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
///////////////////////////////////scan/////////////////////////////////////////
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


    // <button id='quit_scan' name='button'>Scan Abbrechen</button>

  });
</script>
            <div>

                <div>
                    @if (session('status'))
                        <div class="alert alert-success">
                            {{ session('status') }}
                        </div>
                    @endif
                    <form action="sort_ip_domain" method="post">
                      {{ csrf_field() }}
                      <div class="input-field inline">
                        <input id="email" type="text" name="input" class="validate">
                        <label for="email" data-error="wrong" data-success="right">IP/Domain</label>
                      </div>
                      <button class="btn waves-effect waves-light" type="submit" name="action">Speichern
                      <i class="material-icons right">send</i>
                      </button>
                    </form>
                    @if ( isset($_GET['error']) )
                      <div class="alert alert-danger">
                        <ul>
                          @php
                            switch ($_GET['error']) {
                              case 1:
                                echo "<li>Falsche eingabe !</li>";
                                break;
                              case 2:
                                echo "<li>Eingabe ist bereits Gespeichert !</li>";
                                break;
                            }
                          @endphp
                        </ul>
                      </div>
                    @endif
                    @if ($errors->any())
                      <div class="alert alert-danger">
                        <ul>
                          @foreach ($errors->all() as $error)
                            <li>{{ $error }}</li>
                          @endforeach
                        </ul>
                      </div>
                    @endif
                    <br>
                      <button id="scan" class="waves-effect waves-light btn-large" name="button"><i class="material-icons right">phone</i>Scan</button>
                      <br><br>
                    <form method="post" enctype="multipart/form-data" action="./upload_data">
                      {{ csrf_field() }}
                      <div class="file-field input-field">
                        <div class="btn">
                          <span>File</span>
                          <input type="file">
                        </div>
                        <div class="file-path-wrapper">
                          <input class="file-path validate" type="text" placeholder="Laden Sie eine CSV oder eine XLSX Datei hoch">
                        </div>
                        <button class="waves-effect waves-light btn-large"><i class="material-icons right">cloud</i>Hochladen</button>

                      </div>
                    </form>
                </div>
            </div>
  </body>
</html>
