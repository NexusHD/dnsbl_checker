<head>
  <link type="text/css" rel="stylesheet" href="css/plugins/c3/c3.css">
</head>
    <div id="result">
            <table class= "highlight">
              <th>Datei</th><th>Status</th><th>Löschen</th>
              @foreach( $data_ip as $data )
                <tr>
                  <td>
                    {{ $data->original_name.".".$data->data_typ }}
                  </td>
                @if( $data -> active )
                  <td>
                    <div class="switch">
                      <label>
                        Off
                        <input type="checkbox" checked="checked" class="active_data" value="{{$data->id}}" id="{{$data->id}}">
                        <span class="lever"></span>
                        On
                      </label>
                    </div>
                  </td>
                @else
                  <td>
                    <div class="switch">
                      <label>
                        Off
                        <input type="checkbox" class="active_data" id="{{$data->id}}" value="{{$data->id}}">
                        <span class="lever"></span>
                        On
                      </label>
                    </div>
                  </td>
                @endif
                <td><input type="image" name="id_delete" class="delete_data" value="{{ $data->id }}" alt="Löschen" src="img/trash-icon.png" style="width: 20px"></td>
                </tr>
              @endforeach
          </table>
    </br></br></br>
          <table class= "highlight">
              <th>Domain</th><th>Datei</th><th>Status</th><th>Löschen</th>
              @foreach( $domains as $domain )
                <tr>
                <td>{{ $domain->domain }}</td>
                <td>-</td>
                @if( $domain -> active )
                  <td>
                    <div class="switch">
                      <label>
                        Off
                        <input class="domain_active" type="checkbox" checked="checked" value="{{$domain->id}}" >
                        <span class="lever"></span>
                        On
                      </label>
                    </div>
                  </td>
                @else
                  <td>
                    <div class="switch">
                      <label>
                        Off
                        <input type="checkbox" value="{{$domain->id}}" class="domain_active">
                        <span class="lever"></span>
                        On
                      </label>
                    </div>
                  </td>
                @endif

                <td><input type="image" name="id_delete" class="domain_delete" value="{{ $domain->id }}" alt="Löschen" src="img/trash-icon.png" style="width: 20px"></td>
                </tr>
              @endforeach
              @foreach( $data_domains as $domain )
                <tr>
                <td>{{ $domain->domain }}</td>
                <td>
                  {{ $domain->original_name.".".$domain->data_typ }}
                </td>
                @if( $domain -> active )
                <td>
                  <div class="switch">
                    <label>
                      Off
                      <input value="{{ $domain->id }}" type="checkbox" checked="checked" class="domain_data_active">
                      <span class="lever"></span>
                      On
                    </label>
                  </div>
                </td>
                @else
                <td>
                  <div class="switch">
                    <label>
                      Off
                      <input value="{{ $domain->id }}" type="checkbox" class="domain_data_active">
                      <span class="lever"></span>
                      On
                    </label>
                  </div>
                </td>
                @endif

                <td><input type="image" name="id_delete" class="domain_data_delete" value="{{ $domain->id }}" alt="Löschen" src="img/trash-icon.png" style="width: 20px"></td>
                </tr>
              @endforeach
            </table>
          </br></br></br>
            <table class= "highlight">
              <th>Ip</th><th>Datei</th><th>Status</th><th>Löschen</th>
              @foreach( $ips as $ip )
                <tr>
                <td>{{ $ip->ip_address }}</td>
                <td>-</td>
                @if( $ip -> active )
                <td>
                  <div class="switch">
                    <label>
                      Off
                    <input type="checkbox" class="ip_active" checked="checked" value="{{$ip->id}}"/>
                    <span class="lever"></span>
                    On
                  </label>
                </div>
                </td>
                @else
                <td>
                  <div class="switch">
                    <label>
                      Off
                    <input type="checkbox" class="ip_active" id="cb{{$ip->id}}" value="{{$ip->id}}"/>
                    <span class="lever"></span>
                    On
                  </label>
                </div>
                </td>
                @endif

                <td><input type="image" name="id_delete" class="ip_delete" value="{{ $ip->id }}" alt="Löschen" src="img/trash-icon.png" style="width: 20px"></td>

                </tr>
              @endforeach
              @foreach( $data_ips as $ip )
                <tr>
                <td>{{ $ip->ip_address }}</td>
                <td>
                  {{ $ip->original_name.".".$ip->data_typ }}
                </td>
                @if( $ip -> active )
                <td>
                  <div class="switch">
                    <label>
                      Off
                    <input type="checkbox" class="" id="cb{{$ip->id}}" checked="checked" value="{{$ip->id}}"/>
                    <span class="lever"></span>
                    On
                  </label>
                </div>
                </td>
                @else
                <td>
                  <div class="switch">
                    <label>
                      Off
                    <input type="checkbox" id="cb{{$ip->id}}" value="{{$ip->id}}"/>
                    <span class="lever"></span>
                    On
                  </label>
                </div>
                </td>
                @endif

                <td><input type="image" name="id_delete" class="ip_data_delete" value="{{ $ip->id }}" alt="Löschen" src="img/trash-icon.png" style="width: 20px"></td>
                </tr>
              @endforeach
          </table>
        </div>


          <script>
              $(document).ready(function() {

                $.ajaxSetup({
                    headers: {
                        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                    }
                });
////////////////////////////////////////////////////////////////////////////////
                  $('input.ip_data_active').click(function() {
                    var id  = $(this).val();

                    $.ajax({
                      url: 'active_ip_data',
                      type: 'POST',
                      dataType: 'html',
                      data:{id: id}

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
////////////////////////////////////////////////////////////////////////////////
                    $('input.ip_active').click(function() {
                      var id  = $(this).val();

                      $.ajax({
                        url: 'active_ip',
                        type: 'POST',
                        dataType: 'html',
                        data:{id: id}

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
////////////////////////////////////////////////////////////////////////////////
                  $('input.domain_active').click(function() {
                    var id  = $(this).val();
                      $.ajax({
                      url: 'active_domain',
                      type: 'POST',
                      dataType: 'html',
                      data:{id: id}

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
////////////////////////////////////////////////////////////////////////////////
                  $('input.domain_data_active').click(function() {
                    var id  = $(this).val();

                      $.ajax({
                      url: 'active_domain_data',
                      type: 'POST',
                      dataType: 'html',
                      data:{id: id}

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
////////////////////////////////////////////////////////////////////////////////
                  $('input.ip_delete').click(function() {
                    var id  = $(this).val();

                    $.ajax({
                      url: 'del_ip',
                      type: 'POST',
                      dataType: 'html',
                      data:{id: id}

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
////////////////////////////////////////////////////////////////////////////////
                  $('input.ip_data_delete').click(function() {
                    var id  = $(this).val();

                    $.ajax({
                      url: 'del_ip_data',
                      type: 'POST',
                      dataType: 'html',
                      data:{id: id}

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
////////////////////////////////////////////////////////////////////////////////
                  $('input.domain_delete').click(function() {
                    var id  = $(this).val();
                    $.ajax({
                      url: 'del_domain',
                      type: 'POST',
                      dataType: 'html',
                      data:{id: id}

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
////////////////////////////////////////////////////////////////////////////////
                  $('input.domain_data_delete').click(function() {
                    var id  = $(this).val();
                    $.ajax({
                      url: 'del_domain_data',
                      type: 'POST',
                      dataType: 'html',
                      data:{id: id}

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
////////////////////////////////////////////////////////////////////////////////
                  $('input.active_data').click(function() {
                    var id  = $(this).val();

                      $.ajax({
                      url: 'active_data',
                      type: 'POST',
                      dataType: 'html',
                      data:{id: id}

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

////////////////////////////////////////////////////////////////////////////////
$('input.domain_checked').click(function() {
  var id  = $(this).val();
  $.ajax({
    url: 'domain_checked',
    type: 'POST',
    dataType: 'html',
    data:{id: id}
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
////////////////////////////////////////////////////////////////////////////////
$('input.domain_data_checked').click(function() {
  var id  = $(this).val();
  $.ajax({
    url: 'domain_data_checked',
    type: 'POST',
    dataType: 'html',
    data:{id: id}
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
////////////////////////////////////////////////////////////////////////////////
$('input.ip_checked').click(function() {
  var id  = $(this).val();
  $.ajax({
    url: 'ip_checked',
    type: 'POST',
    dataType: 'html',
    data:{id: id}
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
////////////////////////////////////////////////////////////////////////////////
$('input.ip_data_checked').click(function() {
  var id  = $(this).val();
  $.ajax({
    url: 'ip_data_checked',
    type: 'POST',
    dataType: 'html',
    data:{id: id}
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
////////////////////////////////////////////////////////////////////////////////
                  $('input.delete_data').click(function() {
                    var id  = $(this).val();

                    $.ajax({
                      url: 'delete_data',
                      type: 'POST',
                      dataType: 'html',
                      data:{id: id}

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
////////////////////////////////////////////////////////////////////////////////
                  $('input#search').keyup(function() {
                    var input  = $(this).val();

                      $.ajax({
                      url: 'active',
                      type: 'POST',
                      dataType: 'html',
                      data:{input: input}

                    })
                    .done(function(t) {
                      console.log("success");
                      $('div#result').html(t);
                    })
                    .fail(function() {
                      console.log("error");
                    })
                    .always(function() {
                      console.log("complete");
                    });
                  });
////////////////////////////////////////////////////////////////////////////////
                });
    </script>
