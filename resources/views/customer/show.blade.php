<h1> Customer Details</h1>


<a href="/customers"> Back</a>
<h4> <strong> Name</strong> </h4>
<p> {{$customerID->customer_name}}</p>

<h4> <strong> Email</strong></h4>
<p> {{$customerID->customer_email}}</p>
<div>
    <a href="/customers/{{$customerID->id}}/edit"> Edit</a>

    <form action="/customers/{{$customerID->id}}" method="post">
    @method('DELETE')
    @csrf
    <button > Delete</button>
   
    </form>

</div>
