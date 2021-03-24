<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class orderController extends Controller
{
    public function orders()
    {
    return view('order.index');
            }
}
