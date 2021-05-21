<?php

namespace Database\Factories;

use App\Models\PeticionSocio;
use Illuminate\Database\Eloquent\Factories\Factory;

class PeticionSocioFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = PeticionSocio::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'servicio' => $this->faker->sentence(2),
            'empresa' => $this->faker->sentence(2),
            'producto' => $this->faker->sentence(2),
            'telefono' => $this->faker->e164PhoneNumber,
            'monto' => $this->faker->randomFloat(2, 10, 500),
            'capture' => $this->faker->imageUrl($width = 1080, $height = 2280),
            // 'estado' => $this->faker->,
            'user_id' => $this->faker->numberBetween($min = 2, $max = 4),
            
        ];
    }
}
