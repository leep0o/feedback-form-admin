@component('mail::message')
##### Новый ответ

[{{ config('app.name') }}]({{ route('feedback') }})

#### {{ $feedback->title }}

#### Вопрос:
> {{ $feedback->body }}

#### Ответ:
> {{ $feedback->answer }}

@component('mail::button', ['url' => route('feedback'), 'class' => 'btn btn-success'])
    Ответить на вопрос
@endcomponent
@endcomponent
