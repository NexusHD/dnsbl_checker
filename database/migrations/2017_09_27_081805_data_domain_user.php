<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class DataDomainUser extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('data_domain_users', function (Blueprint $table) {
          $table->boolean('deleted')->default(0);
          $table->boolean('active')->default(1);
          $table->integer('data_uploads_id');
          $table->integer('users_id');
          $table->integer('domains_id');
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
        Schema::dropIfExists('data_domain_user');
    }
}
