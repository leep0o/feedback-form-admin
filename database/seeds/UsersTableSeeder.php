<?php

use Illuminate\Database\Seeder;
use App\User;

class UsersTableSeeder extends Seeder
{
    /**
     * @return mixed
     */
    public function run()
    {
        $admin = User::create([
            'name' => 'Admin',
            'email' => 'admin@admin.io',
            'password' => bcrypt('admin'),
        ]);

        $admin->assignRole('admin');
    }
}
