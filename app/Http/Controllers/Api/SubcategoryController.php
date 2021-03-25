<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Subcategory;

class SubcategoryController extends Controller
{
    public function subcategories_api()
    {
        $subcategories = Subcategory::with('category')
        ->get();

        return $subcategories;
            
                
                
            }

    public function subcategory_by_name($subcategory_name)
            {
                
                $subcategory = Subcategory::orderBy('name')
                ->where('name', $subcategory_name)
                ->with('category')
                ->get();
        
                return $subcategory;
            }
            public function subcategory_by_id($subcategory_id)
            {

                $subcategory = Subcategory::with('category')
                ->find($subcategory_id);
               
                
               
                
                return $subcategory;
            }
}
