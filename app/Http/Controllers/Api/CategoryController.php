<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Category;

class CategoryController extends Controller
{
 public function index()
 {
     $result = Category::all();
     return $result ;
 }

 public function store( Request $request)
 {
    $newCategoryInformation = new category_information();

    $newCategoryInformation->name = $request-> newCategoryInformation['name'];
    $newCategoryInformation->quantity = $request-> newCategoryInformation['quantity'];
    $newCategoryInformation->price = $request-> newCategoryInformation['price'];

    $newCategoryInformation->save();
    return response()->json(['newCategoryInfo'=>$request->all()]);
 }
}
