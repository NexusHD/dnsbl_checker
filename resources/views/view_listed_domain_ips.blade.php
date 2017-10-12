<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Listed View</title>
  </head>
  <body>
    <?php $y=1 ?>
    @foreach($domain_listed_query as $domain)
    @if (!empty($domain) && $y)
    <table class= "highlight">
      <tr>
        <th>Blacklist</th>
        <th>Gelistete Domain</th>
        <th>checked</th>
      </tr>
      @foreach($domain_dnsbl_query as $domain_dnsbl)
      <tr>
        <td><a href="{{ $domain_dnsbl->link }}" target="_blank">{{ $domain_dnsbl->name }}</a></br>{{ $domain_dnsbl->query }}</td>
        <td>
        @foreach($domain_listed_query as $domain)
        <?php $x=0 ?>
         @foreach($sub_ip_domain_listed_query as $sub_ip_domain)
          @if ($sub_ip_domain->id == $domain->id)
          <?php $x=1 ?>
          @endif
         @endforeach
          @if($domain->domain_dnsbls_id==$domain_dnsbl->id)
            @if($x)
              <a href="/show/{{ $domain->id }}">{{ $domain->domain }}</a>
            @else
              {{ $domain->domain }}
            @endif
          </br>
          @endif
        @endforeach
        </td>
        <td>
        @foreach($domain_listed_query as $domain)
          @if($domain->domain_dnsbls_id==$domain_dnsbl_query->id)
            @if($domain -> checked)
              <div class="switch">
                <label>
                  Off
                  <input type="checkbox" checked="checked" value="{{ $domain->id }}/{{$domain_dnsbl_query->id}}" class="domain_checked">
                  <span class="lever"></span>
                  On
                </label>
              </div>
            @else
              <div class="switch">
                <label>
                  Off
                  <input type="checkbox" value="{{ $domain->id }}/{{$domain_dnsbl_query->id}}" class="domain_checked" >
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
    @endif
    @endforeach
  </br></br></br>





  <?php $y=1 ?>
  @foreach($ip_listed_query as $ip)
  @if (!empty($ip) && $y)
  <table class= "highlight">
    <tr>
      <th>Blacklist</th>
      <th>Gelistete IP</th>
      <th>checked</th>
    </tr>
    @foreach($ip_dnsbl_query as $ip_dnsbl)
    <tr>
      <td><a href="{{ $ip_dnsbl->link }}" target="_blank">{{ $ip_dnsbl->name }}</a></br>{{ $ip_dnsbl->query }}</td>
      <td>
      @foreach($ip_listed_query as $ip)
        @if($ip->ip_dnsbls_id==$ip_dnsbl->id)
            {{ $ip->ip_address }}
        </br>
        @endif
      @endforeach
      </td>
      <td>
      @foreach($ip_listed_query as $ip)
        @if($ip->ip_dnsbls_id==$ip_dnsbl->id)
          @if($ip -> checked)

            <div class="switch">
              <label>
                Off
                <input type="checkbox" checked="checked" value="{{ $ip->ips_id }}/{{$ip_dnsbl->id}}" class="ip_checked">
                <span class="lever"></span>
                On
              </label>
            </div>
          @else
            <div class="switch">
              <label>
                Off
                <input type="checkbox" value="{{ $ip->ips_id }}/{{$ip_dnsbl->id}}" class="ip_checked">
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
    @foreach($data_uploads as $data)
      @if (!empty($data->listed_domain) && $y || !empty($data->listed_ip) && $y)
    <table class= "highlight">
      <tr>
        <th>Datein in dennen etwas gelistet ist</th>
      </tr>
      <tr>
      <td id="{{$data->id}}" class="data_detail_ansicht"><a style="cursor: pointer;">{{ $data->original_name.".".$data->data_typ }}</br>{{ $data->query }}</td>
    </tr>
    </table>
    </br></br></br>
    <?php $y=0 ?>
    @endif
    @endforeach
    <div class="ergebnis" id="ergebnis">
    </div>



    <script>

        $(document).ready(function() {
          $.ajaxSetup({
              headers: {
                  'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
              }
          });
$('input.domain_checked').click(function() {
var str  = $(this).val();
var id   = str.split('/');
$.ajax({
url: 'domain_checked',
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
url: 'ip_checked',
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


$('.data_detail_ansicht').click(function() {
  $('div#ergebniss').html("warte");
 var id = $(this).attr('id');
$.ajax({
  url: 'show/detail',
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


});
</script>
  </body>
</html>
