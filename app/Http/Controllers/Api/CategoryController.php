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

    return response()->json(['test'=>$request->categoryInformation->name]); 
//    //model
//     $category = new Category([
//         'name' => $request-> get('name')
//     ]);
  
//                 //Database                          //input fields 
//     // $newCategoryInformation = new category_information();



}
public function destroy($id){
                //model
    $category = Category::find($id);
    $category->delete();


}
}