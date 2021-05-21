<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        \App\Models\PeticionNormal::factory(50)->create();
        \App\Models\PeticionSocio::factory(50)->create();
        \App\Models\RecargaMonto::factory(50)->create();
    }
}
