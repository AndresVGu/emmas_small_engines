const customerInfo = document.getElementById('customerInfo');

 //Modal
 const modal = document.getElementById("modal");
 const btnOpenModal = document.getElementById("open-modal");
 const btnCloseModal = document.getElementById("cancel");
 const btnSubmit = document.getElementById("submit");
 const btnOpenEditModal = document.getElementById("modalEdit");
 const btnEditModal = document.getElementById("editModal");

 btnOpenModal.addEventListener('click', (e)=>{
  e.stopPropagation();
  modal.classList.toggle("translate");
 });

 btnCloseModal.addEventListener('click',(e)=>{
  e.stopPropagation();
  modal.classList.toggle("translate");
 });

 btnSubmit.addEventListener('click',(e)=>{
  e.stopPropagation();
  modal.classList.toggle("translate");
 });

/* btnEditModal.addEventListener('click', (e)=>{
  e.stopPropagation();
  btnOpenEditModal.classList.toggle("translate");
 });*/

 //Populating Province DropDownList

const provinces = document.getElementById("provinces");

const listProvinces = async()=>{
    try{
        const response = await fetch("/services/provinces.json");
        const data = await response.json();
        let option = document.createElement("option");
        option.value = "";
        option.text = "Select province";
        provinces.appendChild(option);
        
        for (var c in data){
            let option = document.createElement("option");
            option.value = c;
            option.text = data[c];
            provinces.appendChild(option);
        }
    }
    catch(ex){
        alert(ex)
    }
}
 /*
 const btnOpenModal = document.querySelectorAll("#open-modal");
 const btnCloseModal = document.querySelectorAll("#cancel");
 const modal = document.querySelectorAll("#modal");

 btnOpenModal.addEventListener("Click",()=>{
  modal.showModal();
 });

 btnCloseModal.addEventListener("Click",()=>{
  modal.close();
 });
*/


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
function ModalEdit(){
  btnOpenEditModal.classList.toggle("translateE")
}
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
      pageLength: 10,
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
      title: "Delete Supplier",
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
        const response = await fetch("/services/suppliers.json");
        const users = await response.json();
       
        
          let content = ``;
          
          users.forEach((user,index)=>{
           
              content +=`
              <tr>
                  <td>${index+1}</td>
                  <td>${user.name}</td>
                  <td>${user.phone}</td>
                  <td>${user.email}</td>
                  <td>${user.address}</td>
                  <td>${user.city}</td>
                  <td>${user.provinces}</td>
                  <td>${user.zipCode}</td>
                  <td>
                    <button onclick="handleButtonClick(${index+1}),ModalEdit()"  class="btn btn-sm btn-primary" 
                    data-bs-toggle="tooltip" data-bs-placement="top" title="Edit Supplier">
                      
                        <i class="fa-regular fa-pen-to-square" ></i>
                      
                    </button>

                    <button class="btn btn-sm btn-danger" 
                    onclick="deleteAlert(${index+1})"
                    data-bs-toggle="tooltip-delete" data-bs-placement="top" title="Delete Supplier">
                      <i class="fa-regular fa-trash-can"></i>
                    </button>
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
      await listProvinces();
  });


  