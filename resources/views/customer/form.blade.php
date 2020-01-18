<div>
        <label for="customer_name"> Name:</label>                      <!--checkingOfOldinputData--><!--EditTheValueofFieldsUsingCustomerIDfromweb.php-->
        <input type="text" name="customer_name" autocomplete="off" value="{{old('customer_name') ??($customerID->customer_name)}}">
        @error('customer_name') <p style="color:red">{{$message}}</p> @enderror
    </div>

    <div>
        <label for="customer_email"> Email:</label>
        <input type="text" name="customer_email" autocomplete="off" value="{{old('customer_email') ??($customerID->customer_email)}}">
        @error('customer_email') <p style="color:red">{{$message}}</p> @enderror
    </div>

@csrf