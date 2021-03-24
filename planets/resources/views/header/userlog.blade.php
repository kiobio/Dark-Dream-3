
<nav class="top-menu">


<div class="user-info">

    @auth
        Logged in as {{ Auth::user()->name }}

        <form action="{{ route('logout') }}" method="post">
            @csrf
            <input type="submit" value="Logout">
        </form>

    @else

        <a href="{{ route('login') }}">Log in</a>

    @endauth

</div>

</nav>