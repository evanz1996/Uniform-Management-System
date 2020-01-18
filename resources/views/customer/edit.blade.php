<h2> Edit Customers Details</h2>

<form action="/customers/{{$customerID->id}}" method="post">

        @method('PATCH')
   @include('customer.form')
<button> Save</button>
</form>