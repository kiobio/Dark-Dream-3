<?php

namespace App\Http\Controllers\Api;

use Auth;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;

class UserController extends Controller
{
    public function token(Request $request)
    {
       
        if (Auth::attempt($request->all())) {
     
            $user = Auth::user();

      
            $user->tokens()->delete();

    
            $token = $user->createToken('token-name');

            return [
                'message' => 'success',
                'user' => Auth::user(),
                'token' => $token->plainTextToken,
            ];
        }

        return response()->json([
            'message' => 'invalid'
        ], 422);
    }

    public function user()
    {
        $user = Auth::user();

        return [
            'user' => $user
        ];
    }

    public function logout()
    {
        $user = Auth::user();

        $user->tokens()->delete();
    }

    public function users_api()
    {
        $users = User::get();

      $info_users = $users->map(function($user) {
        return [
            'id' => $user->id,
            'name' => $user->name,
            'email' => $user->email,
            'admin' => $user->admin, 
            'owner' => $user->owner];
      });

      return $info_users;
    }
            }
        
