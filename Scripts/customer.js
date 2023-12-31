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

  //DataTable
  let dataTable;
  let dataTableIsInitialized = false;
  
  const dataTableOptions={
      pageLength: 5,
      destroy: true,
      lengthMenu: [5,10,15,20]
      
  };
  
  const initDataTable = async()=>{
      if(dataTableIsInitialized){
          dataTable.destroy();
      }
      await listUsers();
      dataTable = $("#datatable_users").DataTable(dataTableOptions);
  
      dataTableIsInitialized = true;
  };

  function deleteAlert(ID){
    let fullName = "";
    customersData.forEach((user,index)=>{
      if( ID == index+1){
        fullName += user.FirstName + " " + user.LastName;
      }
    });
    
    swal({
      title: "Delete Customer",
      text: "Are you sure that you want delete: " + fullName,
      icon: "warning",
      buttons: true,
      dangerMode: true
    })
    .then((willDelete)=>{
      if(willDelete){
        swal(fullName + " has been deleted!",{
          icon:"success"
        });
      }
      
    })
    
    
  }
  
  const listUsers = async()=>{
      try{
          let content = ``;
          
          customersData.forEach((user,index)=>{
              
              content +=`
              <tr>
                  <td>${index+1}</td>
                  <td>${user.FirstName + " " + user.LastName}</td>
                  <td>${user.Phone}</td>
                  <td>${user.Email}</td>
                  <td>
                    <button onclick="handleButtonClick(${index+1})" class="btn btn-sm btn-primary" 
                    data-bs-toggle="tooltip" data-bs-placement="top" title="Edit Customer">
                      <a href="updateCustomer.html" class="text-light">
                        <i class="fa-regular fa-pen-to-square" ></i>
                      </a>
                    </button>

                    <button class="btn btn-sm btn-danger" 
                    onclick="deleteAlert(${index+1})"
                    data-bs-toggle="tooltip-delete" data-bs-placement="top" title="Delete Customer">
                      <i class="fa-regular fa-trash-can"></i>
                    </button>
                  </td>
                  <td>
                    <a href="customerDetails.html"
                    onclick="handleButtonClick(${index+1})"
                    data-bs-toggle="tooltip-details" data-bs-placement="top" title="Customer Details">Details</a>
                  </td>
              </tr>`;
          });
          tableBody_users.innerHTML = content;
      }
      catch(ex){
          alert(ex);
      }
  
  };
  // Initialize tooltips at the moment to load the page
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });

  //Details ToolTip
  var detailsTooltip = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip-details"]'));
  var detailsToolTipDisplay = detailsTooltip.map(function(t){
   return new bootstrap.Tooltip(t);
  });

  //Delete ToolTip
  var deleteTooltip = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip-delete"]'));
  var deleteToolTipDisplay = deleteTooltip.map(function(t){
   return new bootstrap.Tooltip(t);
  });

  //Help ToolTip
  var helpTooltip = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip-help"]'));
  var helpToolTipDisplay = helpTooltip.map(function(t){
   return new bootstrap.Tooltip(t);
  });

    //Mode ToolTip
    var modeTooltip = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip-mode"]'));
    var modeToolTipDisplay = modeTooltip.map(function(t){
     return new bootstrap.Tooltip(t);
    });

     //Mode ToolTip
     var rTooltip = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip-r"]'));
     var rToolTipDisplay = rTooltip.map(function(t){
      return new bootstrap.Tooltip(t);
     });


  window.addEventListener("load",async()=>{
      await initDataTable();
  });


  