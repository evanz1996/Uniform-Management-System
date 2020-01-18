@extends('app')

@section('title', 'Services Area')
@section('content')
<h1> This is the Service area</h1>

<form action="/service" method="post">
    <input type="text" name="name"  autocomplete="off">
    @csrf
    <button>Add Services</button>
</form>
<!-- error message for each field -->
<p style="color:red"> @error('name'){{$message}} @enderror </p>

<ul>
    @forelse($services as $service)
        <li>{{$service->name}}</li>
        @empty
        <li> no services found</li>
    @endforelse
</ul>
<p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias voluptate voluptates laudantium quisquam, harum hic officiis nulla quod modi cum natus a facere omnis velit distinctio nam inventore mollitia iste.</p>
@endsection