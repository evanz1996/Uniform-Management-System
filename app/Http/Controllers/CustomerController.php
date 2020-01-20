<?php

namespace App\Http\Controllers;
use \App\Customer;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\WelcomeMail;


class CustomerController extends Controller
{
    public function index(Request $request){

       

        $customers = Customer::where('active',$request->query('active',1))->get();
        return view('customer.index', compact('customers'));
    }

     public function create(){
         $customerID = new Customer();  
        
        return view('customer.create', compact('customerID'));
    }
    public function store(){

      $customerID=Customer::create($this->validatedData());
      Mail::to($customerID->customer_email)->send(new WelcomeMail());  //Sending email to the customer_emil 
        return redirect('/customers/'.$customerID->id); //redirect to the current created document
    }

    public function show(Customer $customerID){

        // $customer  =\App\Customer::findorFail($customerid);
        return view('customer.show',compact('customerID'));
    }

    public function edit(Customer $customerID){
        return  view('customer.edit',compact('customerID'));
    }

    public function update(Customer $customerID){

      $customerID->update( $this->validatedData());

        return redirect('/customers'); 
    }

    public function destroy(Customer $customerID){

        $customerID->delete();
        return redirect('/customers');

    }
    protected function validatedData(){

        return request()->validate([
            'customer_name'=>'required|min:10',
            'customer_email'=>'required|email'
        ]);

    }
}
