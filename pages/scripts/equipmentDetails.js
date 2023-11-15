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

const storedEquipmentDetails = sessionStorage.getItem('equipmentDetails');
const equipmentDetails = JSON.parse(storedEquipmentDetails);

let indice = equipmentDetails.ID;

// model
function model(id){
    let eModel = "";
    repairsData.forEach((e,index)=>{
        if(id == index +1){
            eModel += e.Model;
        }
    });
    fModel = document.getElementById("model");
    fModel.innerHTML = eModel;

}

//DataTable
let dataTable;
let dataTableIsInitialized = false;

const dataTableOptions = {
    destroy:true,
    bPaginate: false,
    bFilter: false,
    bInfo:false
};

const initDataTable = async() =>{
    if(dataTableIsInitialized){
        dataTable.destroy();
    }
    await listEquipment(indice);
    dataTable = $("#datatable_users").dataTable(dataTableOptions);
    dataTableIsInitialized = true;
}
//Equipment
const listEquipment = async(id)=>{
    try{
        let content = ``;
        repairsData.forEach((e, index)=>{
            let check = ``;
            let check_pickup =``

            if(index+1 == id){
                if(e.PickedUp == true){
                    check_pickup =`<i class="fa-regular fa-circle-check" style="color: green;"></i>` ;
                }
                else{
                    check_pickup =`<i class="fa-regular fa-circle-xmark" style="color: red;"></i>`;
                    }
                content += `
                <tr>
                    <td>${index +1}</td>
                    <td>${e.Model}</td>
                    <td>${e.VinSerial}</td>
                    <td>${e.Colour}</td>
                    <td>${e.Manufacturer}</td>
                    <td>${e.Type}</td>
                    <td>${check_pickup}</td>
                    <td>${e.NotesDesc}</td>
                </tr>
                `;
            }
        });
        tableBody_users.innerHTML = content;

    }
    catch(ex){
        alert(ex)
    }
}
window.addEventListener("load",async()=>{
    await initDataTable();
    await model(indice);
})
