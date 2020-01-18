<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Service extends Model
{
    //-------------$fillable ==> which field to be mass assigned------------------------------------//
    protected $fillable=['name'];

    //-------------$guarded ==> reverse of $fillable (where fields are not mass assignable)----------//
    // protected $guarded=[];
}
