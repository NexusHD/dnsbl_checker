<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class SubdomainSubipDomain extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
      Schema::create('subdomain_subip_domains', function (Blueprint $table) {
          $table->integer('sub_ip_id')->nullable();
          $table->integer('subdomain_id')->nullable();
          $table->integer('domain_id');
          $table->timestamps();
      });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('sub_ips');
    }
}
