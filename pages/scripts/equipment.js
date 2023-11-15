const equipmentInfo = document.getElementById('equipmentInfo');


class Repair {
    constructor(ID, CustomerName, Model, VinSerial, Colour, Manufacturer, Type, NotesDesc, IsCompleted, PickedUp) {
      this.ID = ID;
      this.CustomerName = CustomerName;
      this.Model = Model;
      this.VinSerial = VinSerial;
      this.Colour = Colour;
      this.Manufacturer = Manufacturer;
      this.Type = Type;
      this.NotesDesc = NotesDesc;
      this.IsCompleted = IsCompleted;
      this.PickedUp = PickedUp
    }
  }

const repairsData = [
    new Repair(1, 'John Smith', 'Lawnmower XYZ-1000', '12345ABC', 'Green', 'ABC Company', 'Lawnmower', 'Performed routine maintenance and oil change', true, false),
    new Repair(2, 'Jane Doe', 'Generator G-200', '67890DEF', 'Red', 'XYZ Corporation', 'Generator', 'Fixed a carburetor issue and replaced spark plug', false, false),
    new Repair(3, 'Robert Johnson', 'Lawnmower LM-500', '24680GHI', 'Blue', 'LMN Inc.', 'Lawnmower', 'Replaced damaged blades and sharpened them', true, false),
    new Repair(4, 'Emily Davis', 'Pressure Washer P-10', '13579JKL', 'Yellow', 'ACME Engines', 'Pressure Washer', 'Cleaned the carburetor and changed the oil', false, false),
    new Repair(5, 'William Brown', 'Lawnmower ABC-300', '54321MNO', 'Orange', 'Best Engine Co.', 'Lawnmower', 'Repaired the electric starter motor', true, true),
    new Repair(6, 'Olivia Wilson', 'Tiller T-50', 'AB12CD34', 'Black', 'Engine Pros', 'Tiller', 'Completely rebuilt the engine and replaced worn-out parts', true, false),
    new Repair(7, 'James Lee', 'Lawnmower LM-200', 'EFG567HI', 'Silver', 'Precision Engines', 'Lawnmower', 'Cleaned and adjusted the carburetor to improve performance', true, false),
    new Repair(8, 'Sophia Martinez', 'Chainsaw C-300', 'JKLMN678', 'Green', 'Fast Repairs', 'Chainsaw', 'Identified issues and provided a repair estimate', false, false),
    new Repair(9, 'Mia Harris', 'Lawnmower XYZ-500', 'OPQR9012', 'Blue', 'Ace Repairs', 'Lawnmower', 'Sharpened blades for a clean cut', true, false),
    new Repair(10, 'Alexander Clark', 'Leaf Blower L-100', 'STUV3456', 'Red', 'Pro Engines', 'Leaf Blower', 'Changed the oil and replaced the air filter', true, false),
    new Repair(11, 'Ava Lewis', 'Lawnmower LM-300', 'WXYZ7890', 'Green', 'Mower Experts', 'Lawnmower', 'Fixed wiring and electrical components', false, false),
    new Repair(12, 'Ethan Turner', 'Tiller T-30', 'DEFG1234', 'Black', 'Engine Masters', 'Tiller', 'Cleaned the fuel system to prevent clogs', true, false),
    new Repair(13, 'Liam Walker', 'Lawnmower XYZ-200', 'HIJK5678', 'Blue', 'Top-Notch Engines', 'Lawnmower', 'Repaired or replaced the transmission', false, false),
    new Repair(14, 'Oliver Scott', 'Chainsaw C-200', 'LMNO9012', 'Orange', 'Engine Wizards', 'Chainsaw', 'Repaired the ignition system for reliable starting', true, false),
    new Repair(15, 'Lucas King', 'Lawnmower ABC-100', 'PQRS3456', 'Red', 'Lawnmower Solutions', 'Lawnmower', 'Replaced a worn-out drive belt', true, false),
    new Repair(16, 'Aria White', 'Generator G-100', 'TUVW7890', 'Silver', 'Engine Geniuses', 'Generator', 'Fully rebuilt the carburetor for improved performance', true, false),
    new Repair(17, 'Mason Turner', 'Lawnmower LM-100', 'XYZA1234', 'Green', 'Mower Pros', 'Lawnmower', 'Balanced the blades for even cutting', true, false),
    new Repair(18, 'Harper Baker', 'Pressure Washer P-20', 'BCDE4567', 'Blue', 'Engine Experts', 'Pressure Washer', 'Replaced the fuel filter for better fuel flow', true, false),
    new Repair(19, 'Evelyn Garcia', 'Lawnmower XYZ-300', 'FGHI5678', 'Orange', 'Lawnmower Masters', 'Lawnmower', 'Repaired the self-propel mechanism', false, false),
    new Repair(20, 'Logan Adams', 'Tiller T-10', 'JKLM9012', 'Red', 'Engine Professionals', 'Tiller', 'Replaced the piston for improved engine performance', true, false)
  ];
/*
  repairsData.forEach(r => {
    const row = document.createElement("div");
    row.classList.add("equipmentDivs");
  
    const name = document.createElement("h6");
    name.innerHTML = `<h6>Name: <br><p id="nameInfo">${r.CustomerName}</p></h6>`;
  
    const model = document.createElement("h6");
    model.innerHTML = `<h6>Model: <br><p id="ModelInfo">${r.Model}</p></h6>`;
  
    const vin = document.createElement("h6");
    vin.innerHTML = `<h6>VIN/Serial number: <br><p id="vinInfo">${r.VinSerial}</p></h6>`;
  
    const colour = document.createElement("h6");
    colour.innerHTML = `<h6>Colour: <br><p id="colourInfo">${r.Colour}</p></h6>`;
  
    const manufacturer = document.createElement("h6");
    manufacturer.innerHTML = `<h6>Manufacturer: <br><p id="manufacturerInfo">${r.Manufacturer}</p></h6>`;
  
    const type = document.createElement("h6");
    type.innerHTML = `<h6>Type: <br><p id="typeInfo">${r.Type}</p></h6>`;
  
    const update = document.createElement("h5");
    update.innerHTML = `<button class="updateButton" id="${r.ID}" onclick="handleButtonClick(${r.ID})"><a href="updateEquipment.html">Edit</a></button>`;
  

    row.appendChild(name);
    row.appendChild(model);
    row.appendChild(vin);
    row.appendChild(colour);
    row.appendChild(manufacturer);
    row.appendChild(type);
  
    row.append(update);
  
    try {
      equipmentInfo.appendChild(row);
    } catch {}
  });
  
*/
  

// Handle the button click event
function handleButtonClick(eID) {
  const matchingEquipment = repairsData.find(e => e.ID === eID);
  
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
  }
}

//Alert
function deleteAlert(ID){
  let model = "";
  repairsData.forEach((e,index)=>{
    if( ID == index+1){
      model += e.Model;
    }
  });
  
  swal({
    title: "Delete Equipment",
    text: "Are you sure that you want delete: " + model,
    icon: "warning",
    buttons: true,
    dangerMode: true
  })
  .then((willDelete)=>{
    if(willDelete){
      swal(model + " has been deleted!",{
        icon:"success"
      });
    }
    
  })
  
  
}

 //DataTable
 let dataTable;
 let dataTableIsInitialized = false;
 
 const dataTableOptions={
  columnDefs:[
    {className: "eItem", targets: [4,5]}
    ],
     pageLength: 5,
     destroy: true,
     
 };
 
 const initDataTable = async()=>{
     if(dataTableIsInitialized){
         dataTable.destroy();
     }
     await listUsers();
     dataTable = $("#datatable_equipment").DataTable(dataTableOptions);
 
     dataTableIsInitialized = true;
 };
 
 const listUsers = async()=>{
     try{
         let content = ``;
         repairsData.forEach((e,index)=>{
          let check = ``;
          let check_pickup =``
          if(e.IsCompleted == true){
            check =`<i class="fa-regular fa-circle-check" style="color: green;"></i>` ;
          }
          else{
            check =`<i class="fa-regular fa-circle-xmark" style="color: red;"></i>`;
          }

          if(e.PickedUp == true){
            check_pickup =`<i class="fa-regular fa-circle-check" style="color: green;"></i>` ;
          }
          else{
            check_pickup =`<i class="fa-regular fa-circle-xmark" style="color: red;"></i>`;
          }
          

             content +=`
             <tr>
                 <td>${index+1}</td>
                 <td>${e.Type}</td>
                 <td>${e.Model}</td>
                 <td>${e.VinSerial}</td>
                 <td>${e.Colour}</td>
                 <td>${check}</td>
                 <td>${check_pickup}</td>
                 <td>
                   <button onclick="handleButtonClick(${index+1})" class="btn btn-sm btn-primary" >
                     <a href="updateEquipment.html" class="text-light">
                       <i class="fa-regular fa-pen-to-square" ></i>
                     </a>
                   </button>

                   <button class="btn btn-sm btn-danger"
                   onclick="deleteAlert(${index+1})">
                     <i class="fa-regular fa-trash-can"></i>
                   </button>
                 </td>
                 <td>
                   <a href="#">Details</a>
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





  



  


  



    




  

  