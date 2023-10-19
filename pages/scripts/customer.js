const customerInfo = document.getElementById('customerInfo');


class Customer {
    constructor(ID, FirstName, LastName, Email, Street, Province, Phone) {
        this.ID = ID;
        this.FirstName = FirstName;
        this.LastName = LastName;
        this.Email = Email;
        this.Street = Street;
        this.Province = Province;
        this.Phone = Phone;
    }
}

const customersData = [
    new Customer(1, 'John', 'Smith', 'john@example.com', '123 Main St', 'CA', '123-456-7890'),
    new Customer(2, 'Jane', 'Doe', 'jane@example.com', '456 Elm St', 'NY', '234-567-8901'),
    new Customer(3, 'Robert', 'Johnson', 'robert@example.com', '789 Oak St', 'TX', '345-678-9012'),
    new Customer(4, 'Emily', 'Davis', 'emily@example.com', '101 Elmwood Ave', 'WA', '456-789-0123'),
    new Customer(5, 'William', 'Brown', 'william@example.com', '222 Pine St', 'OR', '567-890-1234'),
    new Customer(6, 'Olivia', 'Wilson', 'olivia@example.com', '303 Cedar St', 'IL', '678-901-2345'),
    new Customer(7, 'James', 'Lee', 'james@example.com', '404 Oak St', 'PA', '789-012-3456'),
    new Customer(8, 'Sophia', 'Martinez', 'sophia@example.com', '555 Birch St', 'MA', '890-123-4567'),
    new Customer(9, 'Mia', 'Harris', 'mia@example.com', '666 Maple St', 'MI', '901-234-5678'),
    new Customer(10, 'Alexander', 'Clark', 'alex@example.com', '777 Redwood St', 'OH', '012-345-6789'),
    new Customer(11, 'Ava', 'Lewis', 'ava@example.com', '888 Spruce St', 'GA', '123-456-7890'),
    new Customer(12, 'Ethan', 'Turner', 'ethan@example.com', '999 Cedar St', 'CO', '234-567-8901'),
    new Customer(13, 'Liam', 'Walker', 'liam@example.com', '123 Oakwood Ave', 'NJ', '345-678-9012'),
    new Customer(14, 'Oliver', 'Scott', 'oliver@example.com', '234 Elmwood Ave', 'NC', '456-789-0123'),
    new Customer(15, 'Lucas', 'King', 'lucas@example.com', '345 Pine St', 'FL', '567-890-1234'),
    new Customer(16, 'Aria', 'White', 'aria@example.com', '456 Birch St', 'NV', '678-901-2345'),
    new Customer(17, 'Mason', 'Turner', 'mason@example.com', '567 Cedar St', 'AZ', '789-012-3456'),
    new Customer(18, 'Harper', 'Baker', 'harper@example.com', '678 Oak St', 'TN', '890-123-4567'),
    new Customer(19, 'Evelyn', 'Garcia', 'evelyn@example.com', '789 Pine St', 'OK', '901-234-5678'),
    new Customer(20, 'Logan', 'Adams', 'logan@example.com', '890 Elm St', 'LA', '012-345-6789'),
];

  
customersData.forEach(c => {
    const row = document.createElement("div");
    row.classList.add("customerDivs"); 

    const fName = document.createElement("h6");
    fName.innerHTML = `<h6>First Name: <br><p id="nameInfo">${c.FirstName}</p></h6>`;
  
    const lName = document.createElement("h6");
    lName.innerHTML = `<h6>Last Name: <br><p id="ModelInfo">${c.LastName}</p></h6>`;
  
    const phone = document.createElement("h6");
    phone.innerHTML = `<h6>Phone: <br><p id="typeInfo">${c.Phone}</p></h6>`;
  
    const street = document.createElement("h6");
    street.innerHTML = `<h6>Street: <br><p id="colourInfo">${c.Street}</p></h6>`;
  
    const province = document.createElement("h6");
    province.innerHTML = `<h6>Province: <br><p id="manufacturerInfo">${c.Province}</p></h6>`;

    const email = document.createElement("h6");
    email.innerHTML = `<h6>Email: <br><p id="vinInfo">${c.Email}</p></h6>`;

    const update = document.createElement("h5");
    update.innerHTML = `<button class="updateButton" id="${c.ID}" onclick="handleButtonClick(${c.ID})"><a href="updateCustomer.html">Edit</a></button>`;
    
    row.appendChild(fName);
    row.appendChild(lName);
    row.appendChild(phone);
    row.appendChild(street);
    row.appendChild(province);
    row.appendChild(email);
    row.appendChild(update);

  try{
    customerInfo.appendChild(row);
  }
  catch{}
    
});


// Handle the button click event
function handleButtonClick(cID) {
    const matchingCustomers = customersData.find(c => c.ID === cID);
    
    if (matchingCustomers) {
      // Create an object to store equipment details
      const customerDetails = {
        ID: matchingCustomers.ID,
        FirstName: matchingCustomers.FirstName,
        LastName: matchingCustomers.LastName,
        Email: matchingCustomers.Email,
        Street: matchingCustomers.Street,
        Province: matchingCustomers.Province,
        Phone: matchingCustomers.Phone
      };
  
      // Store the equipment details in session storage
      sessionStorage.setItem('customerDetails', JSON.stringify(customerDetails));
    }
  }



  