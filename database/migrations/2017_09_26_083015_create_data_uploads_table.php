<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateDataUploadsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('data_uploads', function (Blueprint $table) {
            $table->increments('id');
            $table->text('original_name');
            $table->text('server_dateiname');
            $table->text('data_typ');
            $table->text('pfad');
            $table->boolean('deleted')->default(0);
            $table->boolean('active')->default(1);
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
        Schema::dropIfExists('data_uploads');
    }
}
