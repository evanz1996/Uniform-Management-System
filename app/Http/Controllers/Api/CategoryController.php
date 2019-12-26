<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Category;

class CategoryController extends Controller
{
 public function index()
 {
     $category = Category::all();
     return response()->json(['category'=>$category]);
 }

 public function store( Request $request)
 {
    //create new Category instance
    $category = new Category();
    //Put request to new category instance
                //db            //input fields
    $category->name = $request->name;
    $category->quantity = $request->quantity;
    $category->price = $request->price;
    $category->Images = $request->images;
    //save category instance
    $category->save();
    //return newly created category instance
    return response()->json(['new_category'=>$category]); 


}
public function destroy($id){
                //model
    $category = Category::find($id);
    $category->delete();


}

public function edit($id){

    $category = Category::find($id);

    $category->edit();
    return response()->json(['updated'=>$category]);

}
}