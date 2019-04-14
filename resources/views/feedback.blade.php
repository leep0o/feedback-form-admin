@extends('layouts.app')

@section('content')
    <!-- Page Heading -->
    <h1 class="h3 mb-4 text-gray-800">Feedback Form</h1>

    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-10">
                <div class="card">
                    <div class="card-body">
                        @if (session('status'))
                            <div class="alert alert-success" role="alert">
                                {{ session('status') }}
                            </div>
                        @endif

                        <feedback-form
                                :route="'{{ route('feedback.store') }}'"
                                :name="'{{ auth()->check() ? auth()->user()->name : '' }}'"
                                :email="'{{ auth()->check() ? auth()->user()->email : '' }}'"
                        ></feedback-form>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection