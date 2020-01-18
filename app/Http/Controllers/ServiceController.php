<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ServiceController extends Controller
{
    public function index(){
        $services= \App\Service::all();
        
        return view('service.index', compact('services'));

    }
    public function store(){
        //------------------------validation of the fields--------------------------------------------//
        $data = request()->validate([
            'name'=>'required|min:5'
        ]);
        // dd($data);
        \App\Service::create($data);
        return redirect()->back() ;

        //-------------------------first role of inserting data into DB--------------------------------//
        // $service = new \App\Service(); 
        //             //db        //input fields
        // $service->name=request('name');
        // $service->save();
        // return redirect()->back() ;
    }
}
