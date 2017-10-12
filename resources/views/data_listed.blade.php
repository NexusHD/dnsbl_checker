<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>
    <a id="backward" class="btn-floating btn-large waves-effect waves-light red tooltipped" data-position="right" data-delay="50" data-tooltip="Züruck" style="margin-left:4%; margin-top:2%;"><i class="material-icons">reply</i></a>
    <?php $y=1 ?>
    @foreach($ip_listed_upload as $ip)
      @if (!empty($ip) && $y)
    <table class= "highlight">
      <tr>
        <th>Blacklist</th>
        <th>Gelistete IP aus Datei</th>
        <th>Checked</th>
      </tr>
      @foreach($ip_dnsbl_query as $ip_dnsbl)
      <tr>
       <td><a href="{{ $ip_dnsbl->link }}" target="_blank">{{ $ip_dnsbl->name }}</a></br>{{ $ip_dnsbl->query }}</td>
        <td>
        @foreach($ip_listed_upload as $ip)
          @if( $ip -> ip_dnsbls_id == $ip_dnsbl -> id )
            {{ $ip->ip_address }}</br>
          @endif
        @endforeach
        </td>
      </tr>
      @endforeach
    </table>
    </br></br></br>
    <?php $y=0 ?>
    @endif
    @endforeach
    <?php $y=1 ?>
    @foreach($domain_listed_upload as $domain)
      @if (!empty($domain) && $y)
    <table class= "highlight">
      <tr>
        <th>Blacklist</th>
        <th>Gelistete Domain aus datei</th>
        <th>Checked</th>
      </tr>
      @foreach($domain_dnsbl_query as $domain_dnsbl)
      <tr>
       <td><a href="{{ $domain_dnsbl->link }}" target="_blank">{{ $domain_dnsbl->name }}</a></br>{{ $domain_dnsbl->query }}</td>
        <td>
        @foreach($domain_listed_upload as $domain)
          @if( $domain->domain_dnsbls_id == $domain_dnsbl -> id )
            {{ $domain->domain }}</br>
          @endif
        @endforeach
        </td>
      </tr>
      @endforeach
    </table>
    </br></br></br>
    <?php $y=0 ?>
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


});
</script>
  </body>
</html>
