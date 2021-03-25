<?php
namespace App\Http\Controllers\Api;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Order;
use Auth;
class OrderController extends Controller
{
    public function orders_api()
    {
        $orders = Order::with('item')
         ->get();
        return $orders;
            }
}