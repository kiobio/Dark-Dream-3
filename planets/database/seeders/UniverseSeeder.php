<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use DB;
use App\Models\Universe;

class UniverseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $data = json_decode(file_get_contents(storage_path('universes.json')));

        foreach ($data as $univers_data) {

            $universe = new Universe;
            $universe->name = $univers_data->name;
            $universe->image = $univers_data->image;
            $universe->info = $univers_data->info;
           
            $universe->save();
        
        
    }
        
    
    }
}
