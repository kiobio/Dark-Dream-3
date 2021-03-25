<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use DB;
use App\Models\User;
class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $data = json_decode(file_get_contents(storage_path('users.json')));

        foreach ($data as $user_data) {

            $user = new User;
            $user->name = $user_data->name;
            $user->email = $user_data->email;
            $user->password = $user_data->password;
            $user->admin = $user_data->admin;
           
            $user->save();
        }
    }
}
