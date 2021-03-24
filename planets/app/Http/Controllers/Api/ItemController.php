<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Item;
use App\Models\Order;
//use Auth;
use Illuminate\Support\Facades\Auth;


class ItemController extends Controller
{
    public function items_api_with_all()
    {
        $items = Item::with('universe')
        ->with('galaxy')
        ->with('subcategory')
        ->with('category')
        ->with('user')
         ->get();

        return $items;
            
                
                
            }
    public function items_api()
            {
                $items = Item::with('category')
                ->with('subcategory')
                ->with('user')
                ->get();
        
             return $items;
                    
                        
                        
                    }

    public function item_by_name($item_name)
            {
                // create the query builder
                $item = Item::orderBy('name')
                ->where('name', $item_name)
                ->with('universe')
                ->with('galaxy')
                ->with('subcategory')
                ->with('category')
                ->with('user')
                ->get();
        
                return $item;
            }
            public function item_by_id($item_id)
            {

                $item = Item::with('universe')
                ->with('galaxy')
                ->with('subcategory')
                ->with('category')
                ->with('user')
                ->find($item_id);
               
                
                // create the query builder
                
                return $item;
            }
           
            public function items_by_galaxy_id($galaxy)
            {
                $items = Item::orderBy('name')
                ->where('galaxy_id', $galaxy)
                ->with('universe')
                ->with('galaxy')
                ->with('subcategory')
                ->with('category')
                ->with('user')
                ->get();
                return $items;
            }

            public function items_by_user_id($user)
            {
                $items = Item::orderBy('name')
                ->where('user_id', $user)
                ->with('universe')
                ->with('galaxy')
                ->with('subcategory')
                ->with('category')
                ->with('user')
                ->get();
                return $items;
            }
            public function items_by_subcategory($subcategory)
            {
                $items = Item::orderBy('name')
                ->where('subcategory_id', $subcategory)
                ->with('universe')
                ->with('galaxy')
                ->with('subcategory')
                ->with('category')
                ->with('user')
                ->get();
                return $items;
            }
            public function items_by_universe($universe)
            {
                $items = Item::orderBy('name')
                ->where('universe_id', $universe)
                ->with('universe')
                ->with('galaxy')
                ->with('subcategory')
                ->with('category')
                ->with('user')
                ->get();
                return $items;
            }
            public function items_by_category($category)
            {
                $items = Item::orderBy('name')
                ->where('category_id', $category)
                ->with('universe')
                ->with('galaxy')
                ->with('subcategory')
                ->with('category')
                ->with('user')
                ->get();
                return $items;
            }
            public function order_by_item_id($item_id)
            {
                $item = Item::find($item_id);
                if(!$item->user_id){
                    $order = new Order;
                    $order->item_id = $item->id;
                    $order->user_id = Auth::id();
                    $order->save();
                    return $order;
                }
            }
            public function sold_item()
            {
                $orders = Order::get();
                foreach($orders as $order) {
                        $item = Item::find($order->item_id);
                        $item->user_id = $order->user_id;
                        $item->save();
                        $order->delete();
                  };
                }
           
           
                    
}
