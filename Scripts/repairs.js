
class Customer {
    constructor(ID, FirstName, LastName, Email, Street, Province, Phone, RepairID) {
        this.ID = ID;
        this.FirstName = FirstName;
        this.LastName = LastName;
        this.Email = Email;
        this.Street = Street;
        this.Province = Province;
        this.Phone = Phone;
        this.RepairID = RepairID;
    }
}

class Repair {
    constructor(ID, Model, VinSerial, Colour, Manufacturer, Type, NotesDesc, IsCompleted, PickedUp, Warranty, CustomerID) {
      this.ID = ID;

      this.Model = Model;
      this.VinSerial = VinSerial;
      this.Colour = Colour;
      this.Manufacturer = Manufacturer;
      this.Type = Type;
      this.NotesDesc = NotesDesc;
      this.IsCompleted = IsCompleted;
      this.PickedUp = PickedUp;
      this.Warranty = Warranty;
      this.CustomerID = CustomerID;
    }
  }



  const customers = [
    new Customer(1, 'John', 'Doe', 'john@example.com', '123 Main St', 'CA', '123-456-7890', [1, 2]),
    new Customer(2, 'Alice', 'Smith', 'alice@example.com', '456 Oak Ave', 'NY', '987-654-3210', [3]),
    new Customer(3, 'Bob', 'Johnson', 'bob@example.com', '789 Elm St', 'TX', '345-678-9120', [4]),
    new Customer(4, 'Emma', 'Clark', 'emma@example.com', '321 Cedar St', 'FL', '567-891-2340', [5]),
    new Customer(5, 'Sophia', 'Lee', 'sophia@example.com', '555 Pine St', 'WA', '678-912-3450', [6, 7]),
    new Customer(6, 'Oliver', 'Garcia', 'oliver@example.com', '888 Maple St', 'OR', '789-123-4560', [8]),
    new Customer(7, 'Ava', 'Martinez', 'ava@example.com', '444 Birch St', 'AZ', '890-234-5670', [9, 10]),
    new Customer(8, 'Liam', 'Lopez', 'liam@example.com', '777 Oak St', 'MI', '901-345-6780', [11]),
    new Customer(9, 'Mia', 'Perez', 'mia@example.com', '222 Elm St', 'NC', '012-345-6789', [12, 13]),
    new Customer(10, 'William', 'Wang', 'william@example.com', '999 Main St', 'IL', '210-987-6543', [14]),
    new Customer(11, 'Isabella', 'Chen', 'isabella@example.com', '111 Cherry St', 'PA', '543-210-9876', [15]),
    new Customer(12, 'James', 'Gonzalez', 'james@example.com', '444 Walnut St', 'OH', '876-543-2109', [16]),
    new Customer(13, 'Emily', 'Nguyen', 'emily@example.com', '777 Oak St', 'GA', '987-654-3210', [17, 18]),
    new Customer(14, 'Alexander', 'Kim', 'alexander@example.com', '888 Pine St', 'VA', '765-432-1098', [19]),
    new Customer(15, 'Charlotte', 'Singh', 'charlotte@example.com', '999 Cedar St', 'CO', '654-321-0987', [20]),
    new Customer(16, 'Michael', 'Das', 'michael@example.com', '123 Birch St', 'KY', '543-210-9876', [21]),
    new Customer(17, 'Amelia', 'Patel', 'amelia@example.com', '666 Maple St', 'TN', '321-098-7654', [22]),
    new Customer(18, 'Benjamin', 'Smith', 'benjamin@example.com', '777 Main St', 'SC', '210-987-6543', [23]),
    new Customer(19, 'Evelyn', 'Jones', 'evelyn@example.com', '333 Elm St', 'UT', '098-765-4321', [24]),
    new Customer(20, 'William', 'Lee', 'william@example.com', '222 Oak St', 'NJ', '987-654-3210', [25])
  ];

  const repairs = [
    new Repair(1, 'Lawn Mower', 'LM001', 'Red', 'Small Engine Co.', 'Regular', 'Starting issue', true, true,false, 0),
    new Repair(2, 'Generator', 'GEN002', 'Blue', 'Small Engine Co.', 'Regular', 'No power output', false, false,true, 0),
    new Repair(3, 'Chainsaw', 'CS003', 'Green', 'Small Engine Co.', 'Urgent', 'Chain not moving', true, true,false, 1),
    new Repair(4, 'Leaf Blower', 'LB004', 'Orange', 'Small Engine Co.', 'Regular', 'Starting problem', false, true,true, 2),
    new Repair(5, 'Pressure Washer', 'PW005', 'Yellow', 'Small Engine Co.', 'Regular', 'Low pressure', true, true,false, 3),
    new Repair(6, 'Snow Blower', 'SB006', 'White', 'Small Engine Co.', 'Urgent', 'Not throwing snow', false, false,false, 4),
    new Repair(7, 'Edger', 'ED007', 'Black', 'Small Engine Co.', 'Regular', 'Blade not spinning', true, true,false, 4),
    new Repair(8, 'Tiller', 'TI008', 'Green', 'Small Engine Co.', 'Urgent', 'Engine not starting', false, false,true, 5),
    new Repair(9, 'Auger', 'AU009', 'Orange', 'Small Engine Co.', 'Regular', 'Not digging', true, true,false, 6),
    new Repair(10, 'Cultivator', 'CU010', 'Red', 'Small Engine Co.', 'Regular', 'Engine vibrating', false, true,false, 6),
    new Repair(11, 'Chipper Shredder', 'CS011', 'Blue', 'Small Engine Co.', 'Urgent', 'Blades jammed', true, false,false, 7),
    new Repair(12, 'Air Compressor', 'AC012', 'Yellow', 'Small Engine Co.', 'Regular', 'No air output', false, true,false, 8),
    new Repair(13, 'Water Pump', 'WP013', 'Green', 'Small Engine Co.', 'Regular', 'No water flow', true, true,false, 8),
    new Repair(14, 'Rototiller', 'RT014', 'Orange', 'Small Engine Co.', 'Urgent', 'Blades not spinning', false, false,false, 9),
    new Repair(15, 'Concrete Saw', 'CS015', 'Red', 'Small Engine Co.', 'Regular', 'Not cutting', true, true,false, 10),
    new Repair(16, 'Power Screed', 'PS016', 'Blue', 'Small Engine Co.', 'Urgent', 'Vibrating excessively', false, true,false,11),
    new Repair(17, 'Pump Sprayer', 'PS017', 'Yellow', 'Small Engine Co.', 'Regular', 'No pressure', true, true,false, 12),
    new Repair(18, 'Grass Trimmer', 'GT018', 'Red', 'Small Engine Co.', 'Regular', 'String not feeding', false, true,false, 12),
    new Repair(19, 'Hedge Trimmer', 'HT019', 'Blue', 'Small Engine Co.', 'Urgent', 'Blades dull', true, false,false, 13),
    new Repair(20, 'Lawn Edger', 'LE020', 'Green', 'Small Engine Co.', 'Regular', 'Not edging properly', true, true,false, 14),
    new Repair(21, 'Backpack Blower', 'BB021', 'Orange', 'Small Engine Co.', 'Regular', 'Starting issue', false, true,false, 15),
    new Repair(22, 'Concrete Vibrator', 'CV022', 'Red', 'Small Engine Co.', 'Urgent', 'No vibration', true, false,false, 16),
    new Repair(23, 'Power Cutter', 'PC023', 'Blue', 'Small Engine Co.', 'Regular', 'Not cutting well', true, true,false, 17),
    new Repair(24, 'Tampers', 'TA024', 'Green', 'Small Engine Co.', 'Regular', 'Not compacting', false, true,false, 18),
    new Repair(25, 'Small Engine Parts', 'SEP025', 'Yellow', 'Small Engine Co.', 'Urgent', 'Parts missing', true, false,false, 19)
  ];
/*
  let name = ``
  function addCustomerID(repairsArray, customerArray)
{
  customerArray.forEach(c => {
    for(let i = 0; i < c.RepairID.length; i++){
      let customerRepairRelationship = repairsArray.find(r => r.ID == c.RepairID[i])
      if (customerRepairRelationship) {
        customerRepairRelationship.CustomerID = c.ID;
        
        
      }
    }
  });
}

addCustomerID(repairs, customers)
*/// Handle the button click event
function handleButtonClick(eID) {
    const matchingEquipment = repairs.find(e => e.ID === eID);
    
    if (matchingEquipment) {
      // Create an object to store equipment details
      const equipmentDetails = {
        ID: matchingEquipment.ID,
        CustomerName: matchingEquipment.CustomerName,
        Model: matchingEquipment.Model,
        VinSerial: matchingEquipment.VinSerial,
        Colour: matchingEquipment.Colour,
        Manufacturer: matchingEquipment.Manufacturer,
        Type: matchingEquipment.Type,
        NotesDesc: matchingEquipment.NotesDesc,
        IsCompleted: matchingEquipment.IsCompleted,
        PickedUp: matchingEquipment.PickedUp,
      };
  
      // Store the equipment details in session storage
      sessionStorage.setItem('equipmentDetails', JSON.stringify(equipmentDetails));
      sessionStorage.setItem('customers', JSON.stringify(customers));

sessionStorage.setItem('repairs', JSON.stringify(repairs));
    }
  }

// Convert arrays to strings using JSON.stringify and save them in sessionStorage



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
     dataTable = $("#datatable_repairs").DataTable(dataTableOptions);
 
     dataTableIsInitialized = true;
 };
 
 const listUsers = async()=>{
     try{

         let content = ``;
         repairs.forEach((r,index)=>{
          let check = ``;
          if(r.IsCompleted == true){
            check =`<i class="fa-regular fa-circle-check" style="color: green;"></i>` ;
          }
          else{
            check =`<i class="fa-regular fa-circle-xmark" style="color: red;"></i>`;
          }
          
          
        let name = ``;
         customers.forEach((c, indexc)=>{
           
            //console.log(c.RepairID);
            if(r.CustomerID == indexc){
                name +=`${c.FirstName + " " + c.LastName}`;
            }
            
          })
          
             content +=`
             <tr>
                 <td>${index+1}</td>
                 <td>${r.Model}</td>
                 <td>${name}</td>
                 <td>${r.VinSerial}</td>
                 <td>${r.Type}</td>
                 <td>${check}</td>
                 <td>
                   <button onclick="handleButtonClick(${index+1})" class="btn btn-sm btn-primary" >
                     <a href="#" class="text-light">
                       <i class="fa-regular fa-pen-to-square" ></i>
                     </a>
                   </button>

                   <button class="btn btn-sm btn-danger"
                   onclick="deleteAlert(${index+1})">
                     <i class="fa-regular fa-trash-can"></i>
                   </button>
                 </td>
                 <td>
                   <a href="repairDetails.html"
                   onclick="handleButtonClick(${index+1})">Details</a>
                 </td>
             </tr>`;
         });
         tableBody_equipment.innerHTML = content;
     }
     catch(ex){
         alert(ex);
     }
 
 };
 window.addEventListener("load",async()=>{
     await initDataTable();
 });
