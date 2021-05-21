<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PeticionNormal extends Model
{
    use HasFactory;

    protected $fillable = [
        'mail',
        'servicio',
        'empresa',
        'producto',
        'telefono',
        'monto',
        'capture',
        'estado',
        'observacion',
    ];
}
