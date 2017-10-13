<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Test</title>
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
       <td><a href="{{ $ip_dnsbl->link }}" target="_blank">{{$ip_dnsbl->name}}</a></br>{{ $ip_dnsbl->query}}</td>
        <td>
        @foreach($ip_listed_upload as $ip)
          @if( $ip -> ip_dnsbls_id == $ip_dnsbl -> id )
            {{$ip->ip_address}}</br>
          @endif
        @endforeach
        </td>
        <td>
        @foreach($ip_listed_upload as $ip)
          @if( $ip -> ip_dnsbls_id == $ip_dnsbl -> id )
            @if($ip->checked)
              <div class="switch">
                <label>
                  Off
                  <input type="checkbox" checked="checked" value="{{$ip->id}}/{{$ip_dnsbl->id}}" class="ip_data_checked">
                  <span class="lever"></span>
                  On
                </label>
              </div>
            @else
              <div class="switch">
                <label>
                  Off
                  <input type="checkbox" value="{{$ip->id}}/{{$ip_dnsbl->id}}" class="ip_data_checked" >
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
        <?php $x=0 ?>
         @foreach($sub_ip_domain_listed_query as $sub_ip_domain)
          @if ($sub_ip_domain->id == $domain->id)
          <?php $x=1 ?>
          @endif
         @endforeach
          @if($domain->domain_dnsbls_id==$domain_dnsbl->id)
            @if($x)
              <a id="{{$domain->id}}" class="sub_domain_ip_detail" style="cursor: pointer;">{{ $domain->domain }}</a>
            @else
              {{ $domain->domain }}
            @endif
          </br>
          @endif
        @endforeach
        </td>
        <td>
        @foreach($domain_listed_upload as $domain)
          @if($domain->domain_dnsbls_id==$domain_dnsbl->id)
            @if($domain -> checked)
              <div class="switch">
                <label>
                  Off
                  <input type="checkbox" checked="checked" value="{{ $domain->id }}/{{$domain_dnsbl->id}}" class="domain_data_checked">
                  <span class="lever"></span>
                  On
                </label>
              </div>
            @else
              <div class="switch">
                <label>
                  Off
                  <input type="checkbox" value="{{$domain->id}}/{{$domain_dnsbl->id}}" class="domain_data_checked" >
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




////////////////////////////////////////////////////////////////////////////////
$('input.domain_data_checked').click(function() {
var str  = $(this).val();
var id   = str.split('/');
console.log(id[1]);
$.ajax({
url: 'domain_data_checked',
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
$('input.ip_data_checked').click(function() {
var str  = $(this).val();
var id   = str.split('/');
console.log(id[1]);
$.ajax({
url: 'ip_data_checked',
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
