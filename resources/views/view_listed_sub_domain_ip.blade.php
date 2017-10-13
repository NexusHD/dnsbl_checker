<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Listed View</title>
  </head>
  <body>
    <a id="backward" class="btn-floating btn-large waves-effect waves-light red tooltipped" data-position="right" data-delay="50" data-tooltip="Züruck" style="margin-left:4%; margin-top:2%;"><i class="material-icons">reply</i></a>
    <?php $y=1 ?>
    @foreach($subdomain_listed_query as $subdomain)
    @if (!empty($subdomain) && $y)
    <table class= "w3-table-all">
      <tr>
        <th>Blacklist</th>
        <th>Gelistete Subdomain</th>
      </tr>
      @foreach($domain_dnsbl_query as $domain_dnsbl)
      <tr>
        <td><a href="{{ $domain_dnsbl->link }}" target="_blank">{{ $domain_dnsbl->name }}</a></br>{{ $domain_dnsbl->query }}</td>
        <td>
        @foreach($subdomain_listed_query as $subdomain)
          @if($subdomain->domain_dnsbls_id==$domain_dnsbl->id)
            {{ $subdomain->sub_domain }}</br>
          @endif
        @endforeach
        </td>
        <td>
        @foreach($subdomain_listed_query as $domain)
          @if($domain->domain_dnsbls_id==$domain_dnsbl->id)
            @if($domain -> checked)
              <div class="switch">
                <label>
                  Off
                  <input type="checkbox" checked="checked" value="{{ $domain->id }}/{{$domain_dnsbl->id}}" class="domain_checked">
                  <span class="lever"></span>
                  On
                </label>
              </div>
            @else
              <div class="switch">
                <label>
                  Off
                  <input type="checkbox" value="{{ $domain->id }}/{{$domain_dnsbl->id}}" class="domain_checked" >
                  <span class="lever"></span>
                  On
                </label>
              </div>
            @endif
          @endif
        @endforeach
        </td>
      </tr>
      @endforeach
    </table>
    <?php $y=0 ?>
    </br></br></br>
    @endif
    @endforeach
    <?php $y=1 ?>
    @foreach($sub_ip_listed_query as $sub_ip)
    @if (!empty($sub_ip) && $y)
    <table class= "w3-table-all">
      <tr>
        <th>Blacklist</th>
        <th>Gelistete Sub IP</th>
      </tr>
      @foreach($ip_dnsbl_query as $ip_dnsbl)
      <tr>
       <td><a href="{{ $ip_dnsbl->link }}" target="_blank">{{ $ip_dnsbl->name }}</a></br>{{ $ip_dnsbl->query }}</td>
        <td>
        @foreach($sub_ip_listed_query as $sub_ip)
          @if( $sub_ip -> ip_dnsbls_id == $ip_dnsbl -> id )
            {{ $sub_ip->sub_ip }}</br>
          @endif
        @endforeach
        </td>
        <td>
        @foreach($sub_ip_listed_query as $ip)
          @if($ip->ip_dnsbls_id==$ip_dnsbl->id)
            @if($ip -> checked)
              <div class="switch">
                <label>
                  Off
                  <input type="checkbox" checked="checked" value="{{ $ip->id }}/{{$ip_dnsbl->id}}" class="ip_checked">
                  <span class="lever"></span>
                  On
                </label>
              </div>
            @else
              <div class="switch">
                <label>
                  Off
                  <input type="checkbox" value="{{ $ip->id }}/{{$ip_dnsbl->id}}" class="ip_checked">
                  <span class="lever"></span>
                  On
                </label>
              </div>
            @endif
          @endif
        @endforeach
        </td>
      </tr>
      @endforeach
    </table class= "w3-table-all">
    <?php $y=0 ?>
    </br></br></br>
    @endif
    @endforeach

    <script>
    $(document).ready(function() {
    $('.tooltipped').tooltip({delay: 50});
      $.ajaxSetup({
          headers: {
              'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
          }
      });
    $('#backward').click(function() {
    $('.tooltipped').tooltip('remove');
    $.ajax({
    url: 'show',
    type: 'get',
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



    $('input.domain_checked').click(function() {
    var str  = $(this).val();
    var id   = str.split('/');
    $.ajax({
    url: 'sub_domain_checked',
    type: 'POST',
    dataType: 'html',
    data:{id: id[0], dnsbl_id: id[1]}
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
    var str  = $(this).val();
    var id   = str.split('/');
    console.log(id[1]);
    $.ajax({
    url: 'sub_ip_checked',
    type: 'POST',
    dataType: 'html',
    data:{id: id[0], dnsbl_id: id[1]}
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

    });
    </script>
  </body>
</html>
