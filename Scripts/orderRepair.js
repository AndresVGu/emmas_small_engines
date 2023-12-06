
class Customers {
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

class Repairs {
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
    new Customers(1, 'John', 'Doe', 'john@example.com', '123 Main St', 'CA', '123-456-7890', [1, 2]),
    new Customers(2, 'Alice', 'Smith', 'alice@example.com', '456 Oak Ave', 'NY', '987-654-3210', [3]),
    new Customers(3, 'Bob', 'Johnson', 'bob@example.com', '789 Elm St', 'TX', '345-678-9120', [4]),
    new Customers(4, 'Emma', 'Clark', 'emma@example.com', '321 Cedar St', 'FL', '567-891-2340', [5]),
    new Customers(5, 'Sophia', 'Lee', 'sophia@example.com', '555 Pine St', 'WA', '678-912-3450', [6, 7]),
    new Customers(6, 'Oliver', 'Garcia', 'oliver@example.com', '888 Maple St', 'OR', '789-123-4560', [8]),
    new Customers(7, 'Ava', 'Martinez', 'ava@example.com', '444 Birch St', 'AZ', '890-234-5670', [9, 10]),
    new Customers(8, 'Liam', 'Lopez', 'liam@example.com', '777 Oak St', 'MI', '901-345-6780', [11]),
    new Customers(9, 'Mia', 'Perez', 'mia@example.com', '222 Elm St', 'NC', '012-345-6789', [12, 13]),
    new Customers(10, 'William', 'Wang', 'william@example.com', '999 Main St', 'IL', '210-987-6543', [14]),
    new Customers(11, 'Isabella', 'Chen', 'isabella@example.com', '111 Cherry St', 'PA', '543-210-9876', [15]),
    new Customers(12, 'James', 'Gonzalez', 'james@example.com', '444 Walnut St', 'OH', '876-543-2109', [16]),
    new Customers(13, 'Emily', 'Nguyen', 'emily@example.com', '777 Oak St', 'GA', '987-654-3210', [17, 18]),
    new Customers(14, 'Alexander', 'Kim', 'alexander@example.com', '888 Pine St', 'VA', '765-432-1098', [19]),
    new Customers(15, 'Charlotte', 'Singh', 'charlotte@example.com', '999 Cedar St', 'CO', '654-321-0987', [20]),
    new Customers(16, 'Michael', 'Das', 'michael@example.com', '123 Birch St', 'KY', '543-210-9876', [21]),
    new Customers(17, 'Amelia', 'Patel', 'amelia@example.com', '666 Maple St', 'TN', '321-098-7654', [22]),
    new Customers(18, 'Benjamin', 'Smith', 'benjamin@example.com', '777 Main St', 'SC', '210-987-6543', [23]),
    new Customers(19, 'Evelyn', 'Jones', 'evelyn@example.com', '333 Elm St', 'UT', '098-765-4321', [24]),
    new Customers(20, 'William', 'Lee', 'william@example.com', '222 Oak St', 'NJ', '987-654-3210', [25])
  ];

  const repairs = [
    new Repairs(1, 'Lawn Mower', 'LM001', 'Red', 'Small Engine Co.', 'Regular', 'Starting issue', true, true,false, 0),
    new Repairs(2, 'Generator', 'GEN002', 'Blue', 'Small Engine Co.', 'Regular', 'No power output', false, false,true, 0),
    new Repairs(3, 'Chainsaw', 'CS003', 'Green', 'Small Engine Co.', 'Urgent', 'Chain not moving', true, true,false, 1),
    new Repairs(4, 'Leaf Blower', 'LB004', 'Orange', 'Small Engine Co.', 'Regular', 'Starting problem', false, true,true, 2),
    new Repairs(5, 'Pressure Washer', 'PW005', 'Yellow', 'Small Engine Co.', 'Regular', 'Low pressure', true, true,false, 3),
    new Repairs(6, 'Snow Blower', 'SB006', 'White', 'Small Engine Co.', 'Urgent', 'Not throwing snow', false, false,false, 4),
    new Repairs(7, 'Edger', 'ED007', 'Black', 'Small Engine Co.', 'Regular', 'Blade not spinning', true, true,false, 4),
    new Repairs(8, 'Tiller', 'TI008', 'Green', 'Small Engine Co.', 'Urgent', 'Engine not starting', false, false,true, 5),
    new Repairs(9, 'Auger', 'AU009', 'Orange', 'Small Engine Co.', 'Regular', 'Not digging', true, true,false, 6),
    new Repairs(10, 'Cultivator', 'CU010', 'Red', 'Small Engine Co.', 'Regular', 'Engine vibrating', false, true,false, 6),
    new Repairs(11, 'Chipper Shredder', 'CS011', 'Blue', 'Small Engine Co.', 'Urgent', 'Blades jammed', true, false,false, 7),
    new Repairs(12, 'Air Compressor', 'AC012', 'Yellow', 'Small Engine Co.', 'Regular', 'No air output', false, true,false, 8),
    new Repairs(13, 'Water Pump', 'WP013', 'Green', 'Small Engine Co.', 'Regular', 'No water flow', true, true,false, 8),
    new Repairs(14, 'Rototiller', 'RT014', 'Orange', 'Small Engine Co.', 'Urgent', 'Blades not spinning', false, false,false, 9),
    new Repairs(15, 'Concrete Saw', 'CS015', 'Red', 'Small Engine Co.', 'Regular', 'Not cutting', true, true,false, 10),
    new Repairs(16, 'Power Screed', 'PS016', 'Blue', 'Small Engine Co.', 'Urgent', 'Vibrating excessively', false, true,false,11),
    new Repairs(17, 'Pump Sprayer', 'PS017', 'Yellow', 'Small Engine Co.', 'Regular', 'No pressure', true, true,false, 12),
    new Repairs(18, 'Grass Trimmer', 'GT018', 'Red', 'Small Engine Co.', 'Regular', 'String not feeding', false, true,false, 12),
    new Repairs(19, 'Hedge Trimmer', 'HT019', 'Blue', 'Small Engine Co.', 'Urgent', 'Blades dull', true, false,false, 13),
    new Repairs(20, 'Lawn Edger', 'LE020', 'Green', 'Small Engine Co.', 'Regular', 'Not edging properly', true, true,false, 14),
    new Repairs(21, 'Backpack Blower', 'BB021', 'Orange', 'Small Engine Co.', 'Regular', 'Starting issue', false, true,false, 15),
    new Repairs(22, 'Concrete Vibrator', 'CV022', 'Red', 'Small Engine Co.', 'Urgent', 'No vibration', true, false,false, 16),
    new Repairs(23, 'Power Cutter', 'PC023', 'Blue', 'Small Engine Co.', 'Regular', 'Not cutting well', true, true,false, 17),
    new Repairs(24, 'Tampers', 'TA024', 'Green', 'Small Engine Co.', 'Regular', 'Not compacting', false, true,false, 18),
    new Repairs(25, 'Small Engine Parts', 'SEP025', 'Yellow', 'Small Engine Co.', 'Urgent', 'Parts missing', true, false,false, 19)
  ];

  let display = document.getElementById("orderRepair");

  // Retrieve equipment details from session storage
const storedCustomerDetailss = sessionStorage.getItem('customerDetails');
const customerDetailss = JSON.parse(storedCustomerDetailss);

///STARTDATE
function generarFechaAleatoria() {
    const fechaInicio = new Date('2023-01-01'); // 1 de enero de 2022
    const fechaFin = new Date(); // Fecha actual
  
    const tiempoAleatorio = Math.random() * (fechaFin.getTime() - fechaInicio.getTime()) + fechaInicio.getTime();
    const fechaAleatoria = new Date(tiempoAleatorio);
  
    return fechaAleatoria;
  }
  
  // Ejemplo de uso
  const startDate = generarFechaAleatoria().toDateString();
  
  //END DATE
  function generarFechaAleatoriaEnd() {
    const fechaInicio = new Date(startDate); // 1 de enero de 2022
    const fechaFin = new Date('2024-01-01'); // Fecha actual
  
    const tiempoAleatorio = Math.random() * (fechaFin.getTime() - fechaInicio.getTime()) + fechaInicio.getTime();
    const fechaAleatoria = new Date(tiempoAleatorio);
  
    return fechaAleatoria;
  }
  
  // Ejemplo de uso
  const endDate = generarFechaAleatoriaEnd().toDateString();
  //

let indices = customerDetailss.ID;

  const listOrderRepairs = async(id)=>{
    try{
        let lblOutput = ``;
        let order =``;
        repairs.forEach((r, index)=>{
            if(index + 1 == id){
                customers.forEach((c,indexc)=>{
                    if(r.CustomerID == indexc){
                        order +=`${r.Model}`;
                        console.log("test");
                        console.log(order);
                        lblOutput+=` REPAIR: # ${r.ID} | Item:${r.Model} | Start Date: ${startDate} | End Date: ${endDate}`
                        display.innerHTML = lblOutput;
                    }
                   
                });
               
            }

            


            
        })
        
    }
    catch(ex){
        alert(ex)
    }
  };

  window.addEventListener("load", async()=>{
    await listOrderRepairs(indices);
  })