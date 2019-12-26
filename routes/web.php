<?php

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

Route::get('/', function () {
    return view('welcome');
});


Route::get('/products','Api\CategoryController@index');
Route::post('/products/store','Api\CategoryController@store');
Route::delete('/products/delete/{id}','Api\CategoryController@destroy'); 
Route::get('/products/edit/{id}','Api\CategoryController@edit'); 


// Route::resource('/api/produts', 'Api\CategoryController');