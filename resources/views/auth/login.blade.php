@extends('layouts.layout')

@section('content')
<h1>RECARGAS</h1>
        <div class="container">
            <div class="workinghny-form-grid">
                <div class="main-mockup">
                    <div class="w3l_form align-self">
                        <div class="left_grid_info">
                            <img src="images/image.svg" alt="">
                        </div>
                    </div>
                    <div class="content-wthree">
                        <h2 class="mx-0">Login</h2>
                        <p class="mx-0">Si eres socio, ingresa para administrar tu cuenta. </p>


                        <form action="{{ route('login') }}" method="POST">
                        @csrf
                            <div>
                                <input id="email" type="email" class="text @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" placeholder="Ingresa tu correo"  required autocomplete="email" autofocus>
                                @error('email')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>

                            <div>
                                <input id="password" type="password" class="text @error('password') is-invalid @enderror" name="password" placeholder="Ingresa tu contraseña" required autocomplete="current-password">

                                @error('password')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>                          

                            <div class="custom-control form-control custom-checkbox pr-0 mb-3" style="border:none;">
                                <div class="float-right">
                                    <input type="checkbox" class="custom-control-input" name="remember"  id="remember" {{ old('remember') ? 'checked' : '' }}>  
                                    <label class="custom-control-label" for="remember">{{ __('Remember Me') }}</label>  
                                </div>
                            </div>

                            <div>
                                <button type="submit" class="btn">{{ __('Ingresar') }}</button>

                                @if (Route::has('password.request'))
                                <div class="text-center mt-4">
                                    <a class="enlace2 text-decoration-none" href="{{ route('password.request') }}">
                                    {{ __('Forgot Your Password?') }}
                                    </a>
                                </div>
                                @endif
                            </div>

                        </form>

                        <div class="text-center">
                            <a class="enlace2 text-decoration-none" href="{{ url('register') }}">Registrarme</a>
                        </div>

                    </div>
                </div>
            </div>
        </div>
@endsection
