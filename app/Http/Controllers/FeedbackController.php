<?php

namespace App\Http\Controllers;

use App\Mail\NewAnswer;
use App\User;
use App\Feedback;
use App\Mail\NewUser;
use App\Mail\NewFeedback;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Hash;
use App\Http\Requests\FeedbackRequest;

class FeedbackController extends Controller
{
    /**
     * Feedback List
     *
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function index()
    {
        return view('feedbackList');
    }

    /**
     * Feedback Form
     *
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function create()
    {
        return view('feedback');
    }

    /**
     * Feedback Data
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function feedbackList()
    {
        $feedbackList = Feedback::with('user')
            ->orderBy('created_at', 'desc')
            ->get();

        return response()->json($feedbackList);
    }

    /**
     * Добавить Feedback
     *
     * @param FeedbackRequest $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(FeedbackRequest $request)
    {
        \DB::beginTransaction();

        $feedback = Feedback::create($request->all());
        $admin = User::firstOrFail();

        if(auth()->check()){
            $user = auth()->user();
        } else {
            $password = Str::random(10);

            $user = User::create([
                'name' => $request->name,
                'email' => $request->email,
                'password' => Hash::make($password),
            ]);

            $user->assignRole('user');

            Mail::to($user)->send(new NewUser($user, $password));
        }

        if ($request->hasFile('files')) {
            $feedback->addAllMediaFromRequest('files')
                ->each(function ($fileAdder) {
                    $fileAdder->usingName(Hash::make('filename'))
                        ->toMediaCollection('files');
                });
        }

        $feedback->user()->associate($user);
        $feedback->save();

        Mail::to($admin)->send(new NewFeedback($feedback));

        \DB::commit();

        return response()->json($feedback);
    }

    /**
     * Добавить ответ
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function answer(Request $request)
    {
        $request->validate([
            'id' => 'required',
            'answer' => 'required|max:255',
        ]);

        $feedback = Feedback::findOrFail($request->id);
        $user = User::findOrFail($feedback->user->id)->first();

        $feedback->answer = $request->answer;
        $feedback->save();

        Mail::to($user)->send(new NewAnswer($feedback));

        return response()->json($feedback);
    }

    /**
     * Изменить Email
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function updateEmail(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
        ]);

        $user = User::findOrFail(auth()->id())->first();

        $user->email = $request->email;
        $user->save();

        return redirect()->back();
    }

    /**
     * Удалить Feedback
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function delete(Request $request)
    {
        Feedback::destroy($request->id);

        return response()->json("ok");
    }
}
