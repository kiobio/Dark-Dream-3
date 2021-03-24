<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use DB;
use App\Models\Item;

class ItemSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $data = json_decode(file_get_contents(storage_path('items.json')));

        foreach ($data as $item_data) {
            $item = new Item;
            $item->name = $item_data->name;
            $item->price = $item_data->price;
            $item->type = $item_data->type;
            $item->image = $item_data->image;
            $item->info = $item_data->info;
            $item->category_id = $item_data->category_id;
            $item->subcategory_id = $item_data->subcategory_id;
            $item->galaxy_id = $item_data->galaxy_id;
            $item->universe_id = $item_data->univers_id;
            $item->user_id = $item_data->user_id;
            $item->save();
    }
}
}
