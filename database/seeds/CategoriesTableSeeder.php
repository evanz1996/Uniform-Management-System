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
        DB::table('categories')->insert(
            [
                [
                    'name' => Str::random(10),
                    'quantity' => rand(2,3),
                    'price' => rand(2,3),
                    'images' => Str::random(10),
                    'active' => '1'
                ],
                [
                    'name' => Str::random(10),
                    'quantity' => rand(2,3),
                    'price' => rand(2,3),
                    'images' => Str::random(10),
                    'active' => '1'
                ],
                
                [
                    'name' => Str::random(10),
                    'quantity' => rand(2,3),
                    'price' => rand(2,3),
                    'images' => Str::random(10),
                    'active' => '1'
                ],
            ]
        );
    }
}
