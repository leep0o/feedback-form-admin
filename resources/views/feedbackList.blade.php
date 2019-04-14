@extends('layouts.app')

@section('content')
    <!-- Page Heading -->
    <h1 class="h3 mb-4 text-gray-800">Feedback List</h1>

    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-body">
                        @if (session('status'))
                            <div class="alert alert-success" role="alert">
                                {{ session('status') }}
                            </div>
                        @endif

                        <feedback-list
                            :route="'{{ route('feedback.list') }}'"
                            :route-delete="'{{ route('feedback.delete') }}'"
                            :route-answer="'{{ route('feedback.answer') }}'"
                        ></feedback-list>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection