@component('mail::message')
##### Новый вопрос

[{{ config('app.name') }}]({{ route('feedback') }})

#### {{ $feedback->title }}

#### Вопрос:
> {{ $feedback->body }}

@component('mail::button', ['url' => route('admin.feedback.list'), 'class' => 'btn btn-success'])
    Ответить на вопрос
@endcomponent
@endcomponent
