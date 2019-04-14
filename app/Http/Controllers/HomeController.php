<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Админ панель с просмотром сообщений из формы
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        return view('feedback');
    }
}
