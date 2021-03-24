<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Universe;

class UniverseController extends Controller
{
    public function universes_api()
    {
        $universes = Universe::get();

        return $universes;
            
                
            }
            public function universe_by_name($universe_name)
            {
                
                $universe = Universe::orderBy('name')
                ->where('name', $universe_name)
                ->get();
        
                return $universe;
            }
            public function universe_by_id($universe_id)
            {

                $universe = Universe::find($universe_id);
                
                return $universe;
            }
}




    

