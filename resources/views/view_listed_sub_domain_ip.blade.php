<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Listed View</title>
  </head>
  <body>
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
      </tr>
      @endforeach
    </table class= "w3-table-all">
    <?php $y=0 ?>
    </br></br></br>
    @endif
    @endforeach
  </body>
</html>
