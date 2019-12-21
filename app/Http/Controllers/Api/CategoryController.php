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

    
//    //model
//     $category = new Category([
//         'name' => $request-> get('name')
//     ]);
    return response()->json(['test'=>$request->categoryInformation->name]);
//                 //Database                          //input fields
    
//     // $newCategoryInformation = new category_information();



}
}