<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <script src="https://www.google.com/recaptcha/api.js?onload=vueRecaptchaApiLoaded&render=explicit" async defer></script>

    <!-- Custom fonts for this template-->
    <link href="{{ asset('css/fontawesome-free/css/all.min.css') }}" rel="stylesheet" type="text/css">
    <link href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i" rel="stylesheet">

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet" type="text/css">

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <link href="{{ asset('css/theme.css') }}" rel="stylesheet">
</head>

<body id="page-top">
    <div id="app">
        <div id="wrapper">
        @include('layouts.sidebar')

        <!-- Content Wrapper -->
            <div id="content-wrapper" class="d-flex flex-column">

                <!-- Main Content -->
                <div id="content">
                @include('layouts.navbar')

                <!-- Begin Page Content -->
                    <div class="container-fluid">
                        @yield('content')
                    </div>
                    <!-- /.container-fluid -->

                </div>
                <!-- End of Main Content -->

                @include('layouts.footer')
            </div>
            <!-- End of Content Wrapper -->

        </div>
    </div>

    @include('layouts.scripts')
</body>
</html>
