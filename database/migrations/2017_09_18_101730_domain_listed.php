<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class DomainListed extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
      Schema::create('domain_listeds', function (Blueprint $table) {
          $table->integer('domain_dnsbls_id');
          $table->integer('domain_id');
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
