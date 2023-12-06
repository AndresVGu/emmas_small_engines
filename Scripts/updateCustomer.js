// Retrieve equipment details from session storage
const storedCustomerDetails = sessionStorage.getItem('customerDetails');
const customerDetails = JSON.parse(storedCustomerDetails);

if (storedCustomerDetails) 
{

  fillInfo(customerDetails)
} 

function fillInfo(cJSON)
{
    document.getElementById("firstName").value = cJSON.FirstName;
    document.getElementById("lastName").value = cJSON.LastName;
    document.getElementById("email").value = cJSON.Email;
    document.getElementById("street").value = cJSON.Street;
    document.getElementById("province").value = cJSON.Province;
    document.getElementById("phone").value = cJSON.Phone;
   

}
