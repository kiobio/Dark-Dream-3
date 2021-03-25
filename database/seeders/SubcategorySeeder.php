<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Subcategory;

class SubcategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Subcategory::create([
            'name'     => 'planet',
            'category_id' => 2
     ]);

    Subcategory::create([
        'name'   => 'star',
        'category_id' => 2
    ]);
    Subcategory::create([
        'name'   => 'moon',
        'category_id' => 2
    ]);
    Subcategory::create([
        'name'   => 'nebula',
        'category_id' => 2
    ]);
    Subcategory::create([
        'name'   => 'black hole',
        'category_id' => 2
    ]);
    Subcategory::create([
        'name'   => 'others',
        'category_id' => 2
    ]);
    }
}
