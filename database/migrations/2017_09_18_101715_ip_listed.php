<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class IpListed extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
      Schema::create('ip_listeds', function (Blueprint $table) {
          $table->integer('ip_dnsbls_id');
          $table->integer('ips_id');
          $table->boolean('listed')->default(0);
          $table->boolean('checked')->default(0);
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
