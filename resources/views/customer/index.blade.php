<h2>i'm customer </h2>

<a href="/customers/create">Add a new Customer</a>

@forelse($customers as $customerID)

    <p><strong>
    <a href="/customers/{{$customerID->id}}">{{$customerID->customer_name}}</a>
    
    </strong> ({{$customerID->customer_email}})</p>

@empty
    <p>'No customer found!'</p>
@endforelse
