<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use DB;
use App\Models\Galaxy;

class GalaxySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $data = json_decode(file_get_contents(storage_path('galaxies.json')));

        foreach ($data as $galaxy_data) {

            $galaxy = new Galaxy;
            $galaxy->name = $galaxy_data->name;
            $galaxy->image = $galaxy_data->image;
            $galaxy->info = $galaxy_data->info;
            $galaxy->universe_id = $galaxy_data->univers_id;
           
            $galaxy->save();
        
        
    }
    }
}
