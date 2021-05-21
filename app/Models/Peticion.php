<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Peticion extends Model
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
        'tipo',
        'observacion',
        'user_id',
    ];

    public function user(){
        return $this->belongsTo(User::class);
    }

}
