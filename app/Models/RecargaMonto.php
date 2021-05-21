<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RecargaMonto extends Model
{
    use HasFactory;

    protected $fillable = [
        'monto',
        'capture',
        'estado',
        'observacion',
        'user_id',
    ];
}
