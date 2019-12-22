<?php

use Illuminate\Database\Seeder;

class CategoriesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('categories')->insert([
            'id'=> Str::random(10),
            'name' => Str::random(10),
            'quantity' => Str::random(10),
            'price' => Str::random(10),
            'images' => Str::random(10),
            'created_at' => Str::random(10),
            'active' => Str::random(10)
        ]);
        //
       
    }
}
