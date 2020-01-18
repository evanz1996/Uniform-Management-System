<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Customer extends Model
{

    //Option 1
    // protected $fillable=['customer_name','customer_email'];
    //Option2
    protected $guarded=[];
}
