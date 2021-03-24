<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

//users
Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/token', 'Api\UserController@token');

//                                              only if authenticated through Sanctum
Route::get('/user', 'Api\UserController@user')->middleware('auth:sanctum');

//                                                   only if authenticated through Sanctum
Route::post('/logout', 'Api\UserController@logout')->middleware('auth:sanctum');



//items
Route::get('/items/with/all', 'Api\ItemController@items_api_with_all');
Route::get('/items', 'Api\ItemController@items_api');
Route::get('/item/name/{item_name}', 'Api\ItemController@item_by_name');
Route::get('/item/id/{item_id}', 'Api\ItemController@item_by_id');
Route::get('/item/galaxyid/{galaxy}', 'Api\ItemController@items_by_galaxy_id');
Route::get('/item/user_id/{user}', 'Api\ItemController@items_by_user_id');
Route::get('/item/subcategoryid/{subcategory}', 'Api\ItemController@items_by_subcategory');
Route::get('/item/universeid/{universe}', 'Api\ItemController@items_by_universe');
Route::get('/item/categoryid/{category}', 'Api\ItemController@items_by_category');
Route::get('/order/item/{item_id}', 'Api\ItemController@order_by_item_id');
Route::post('/sold/item', 'Api\ItemController@sold_item')->middleware('auth:sanctum');

//order
Route::get('/order', 'Api\orderController@orders_api');





//galxies
Route::get('/galaxies', 'Api\GalaxyController@galaxies_api');
Route::get('/galaxy/name/{galaxy_name}', 'Api\GalaxyController@galaxy_by_name');
Route::get('/galaxy/id/{galaxy_id}', 'Api\GalaxyController@galaxy_by_id');


//universes
Route::get('/universes', 'Api\UniverseController@universes_api');
Route::get('/universe/name/{universe_name}', 'Api\UniverseController@universe_by_name');
Route::get('/universe/id/{universe_id}', 'Api\UniverseController@universe_by_id');

//subcategories
Route::get('/subcategories', 'Api\SubcategoryController@subcategories_api');
Route::get('/subcategory/name/{subcategory_name}', 'Api\SubcategoryController@subcategory_by_name');
Route::get('/subcategory/id/{subcategory_id}', 'Api\SubcategoryController@subcategory_by_id');

//categories
Route::get('/categories', 'Api\CategoryController@categories_api');
Route::get('/category/name/{category_name}', 'Api\CategoryController@category_by_name');
Route::get('/category/id/{category_id}', 'Api\CategoryController@category_by_id');


//users
Route::get('/users', 'Api\UserController@users_api');
