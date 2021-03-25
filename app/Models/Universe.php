<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


class Universe extends Model
{
    use HasFactory;

   // protected $table = 'universes';

    public function items(){
        return $this->hasMany(Item::class);
    }
    public function galaxies(){
        return $this->hasMany(Galaxy::class);
    }
}
