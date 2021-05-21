<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRecargaMontosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('recarga_montos', function (Blueprint $table) {
            $table->id();

            $table->double('monto', 12, 2);
            $table->string('capture', 500);
            $table->enum('estado', ['Pendiente', 'Realizado', 'Rechazado'])->default('Pendiente');
            $table->string('observacion')->nullable();
            $table->unsignedBigInteger('user_id');
                $table->foreign('user_id')->references('id')->on('users'); 

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
        Schema::dropIfExists('recarga_montos');
    }
}
