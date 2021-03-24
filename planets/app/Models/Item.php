<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Item extends Model
{
    use HasFactory;

    public function category(){
        return $this->belongsTo(Category::class);
    }

    public function subcategory(){
        return $this->belongsTo(Subcategory::class);
    }

    public function galaxy(){
        return $this->belongsTo(Galaxy::class);
    }

    public function universe(){
        return $this->belongsTo(Universe::class);
    }

    public function user(){
        return $this->belongsTo(User::class);
    }
}
