<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/



//items view

Route::get('/{pi?}', 'ItemController@items')->where('pi', '.*');


//login
Route::view('/login', 'auth/react')->name('login');
Route::view('/register', 'auth/react')->name('register');
Route::get('/shop/orders', function() {
    if (Auth::check()) {
        return view('order/index');
    } else {
        return redirect('/register');
    }});


Route::get('/register', function() {

    if (Auth::check()) {
        return redirect('/');
    } else {
        return view('auth/react');
    }

})->name('register');

