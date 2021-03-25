<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Galaxy;


class GalaxyController extends Controller
{
    public function galaxies_api()
    {
        $galaxies = Galaxy::with('universe')
         ->get();

        return $galaxies;
            
                
                
            }

    public function galaxy_by_name($galaxy_name)
            {
                
                $galaxy = Galaxy::orderBy('name')
                ->where('name', $galaxy_name)
                ->with('universe')
                ->get();
        
                return $galaxy;
            }
            public function galaxy_by_id($galaxy_id)
            {

                $galaxy = Galaxy::with('universe')
                ->find($galaxy_id);
               
                
       
                
                return $galaxy;
            }
           
          
                    
}
