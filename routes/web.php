<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('feedback');
})->name('feedback');

Auth::routes();

//api
Route::prefix('api')->group(function () {
    Route::post('update/email', 'FeedbackController@updateEmail')->name('update.email');
    Route::get('feedback', 'FeedbackController@feedbackList')->name('feedback.list');
    Route::post('feedback', 'FeedbackController@store')->name('feedback.store');
    Route::post('feedback/delete', 'FeedbackController@delete')->name('feedback.delete');
    Route::post('feedback/answer', 'FeedbackController@answer')->name('feedback.answer');
});

Route::prefix('admin')->group(function () {
    Route::get('feedback-list', 'FeedbackController@index')->name('admin.feedback.list');
});
