<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePeticionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('peticions', function (Blueprint $table) {
            $table->id();

            $table->string('mail')->nullable();
            $table->string('servicio');
            $table->string('empresa');
            $table->string('producto')->nullable();
            $table->string('telefono', 32);
            $table->double('monto', 12, 2);
            $table->string('capture', 500)->nullable();
            $table->enum('estado', ['Pendiente', 'Realizado', 'Rechazado'])->default('Pendiente');
            $table->enum('tipo', ['No socio', 'Socio'])->default('No socio');
            $table->string('observacion')->nullable();
            $table->unsignedBigInteger('user_id')->nullable();
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
        Schema::dropIfExists('peticions');
    }
}
