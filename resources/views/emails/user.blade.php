@component('mail::message')
##### Данные для входа:

[{{ config('app.name') }}]({{ route('feedback') }})

### Email:
** {{ $user->email }} **

### Пароль:
** {{ $password }} **

@component('mail::button', ['url' => route('login'), 'class' => 'btn btn-success'])
    Перейти на сайт
@endcomponent
@endcomponent
