<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PeticionSocio extends Model
{
    use HasFactory;

    protected $fillable = [
        'servicio',
        'empresa',
        'producto',
        'telefono',
        'monto',
        'estado',
        'observacion',
        'user_id',
    ];

}
