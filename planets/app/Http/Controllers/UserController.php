<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UserController extends Controller
{
    public function users()
            {
                
        
        return view('users.index');
                    
                               
                    }
}
