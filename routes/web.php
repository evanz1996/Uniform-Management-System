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
// */
// use Illuminate\Support\Facades\Mail;
// use App\Mail\WelcomeMail;
// Route::get('/email', function () {
//     Mail::to('email@email.com')->send(new WelcomeMail());
//     return new WelcomeMail();
// });


Route::get('/products','Api\CategoryController@index');
Route::post('/products/store','Api\CategoryController@store');
Route::delete('/products/delete/{id}','Api\CategoryController@destroy'); 
Route::get('/products/edit/{id}','Api\CategoryController@edit'); 


// Route::resource('/api/produts', 'Api\CategoryController');
Route::get('/hello', 'HelloController@index');
Route::get('/about', 'HelloController@aboutus');

Route::get('/service', 'ServiceController@index');
Route::post('/service', 'ServiceController@store');

Route::get('/customers','CustomerController@index');
Route::get('/customers/create','CustomerController@create');
Route::post('/customers','CustomerController@store');
Route::get('/customers/{customerID}','CustomerController@show');
Route::get('/customers/{customerID}/edit','CustomerController@edit');
Route::patch('/customers/{customerID}','CustomerController@update');
Route::delete('/customers/{customerID}','CustomerController@destroy');
