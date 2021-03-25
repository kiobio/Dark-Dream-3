<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Category;

class CategoryController extends Controller
{
 
    public function categories_api()
    {
        $categories = Category::get();

        return $categories;
            
                
                
            }
            public function category_by_name($category_name)
            {
                
                $category = Category::orderBy('name')
                ->where('name', $category_name)
                ->get();
        
                return $category;
            }
            public function category_by_id($category_id)
            {

                $category = Category::find($category_id);
               
                
               
                
                return $category;
            }
}





    
