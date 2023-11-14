const complete = document.getElementById("completedContainer")
const inProgress = document.getElementById("inProgressContainer")

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
    new Repair(1, 'John Smith', 'Lawnmower XYZ-1000', '12345ABC', 'Green', 'ABC Company', 'Lawnmower', 'Performed routine maintenance and oil change', true, true),
    new Repair(2, 'Jane Doe', 'Generator G-200', '67890DEF', 'Red', 'XYZ Corporation', 'Generator', 'Fixed a carburetor issue and replaced spark plug', false, false),
    new Repair(3, 'Robert Johnson', 'Lawnmower LM-500', '24680GHI', 'Blue', 'LMN Inc.', 'Lawnmower', 'Replaced damaged blades and sharpened them', true, true),
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
  




showFiveRepairs(complete, repairsData, true)
showFiveRepairs(inProgress, repairsData, false)    

function showFiveRepairs(htmlId, repairArray, IsComplete) {

  htmlId.innerHTML = '';
  let showRepairCount = 0;
  

  const title = document.createElement('h3');
  title.textContent = IsComplete ? 'Completed Repairs' : 'In Progress Repairs';
  htmlId.appendChild(title);
  repairArray.forEach(cr => {
    if (cr.IsCompleted === IsComplete && showRepairCount < 5 && cr.PickedUp == false) {
      const repairEntry = document.createElement('div');
      const repairHeader = document.createElement('h5');
      const repairInfo = document.createElement('p');
      const repairButton = document.createElement('button');

      
      repairHeader.textContent = `Order Number: ${cr.ID} Name: ${cr.CustomerName}`;
      repairInfo.textContent = `${cr.Model} | ${cr.VinSerial} | ${cr.Colour} | ${cr.Type}`;
      repairButton.textContent = IsComplete === true ? "Picked Up" : "Ready For Pick Up";
      repairButton.value = cr.ID;
      repairButton.addEventListener('click', () => handleButtonClick(cr.ID, IsComplete, repairArray));

      repairEntry.appendChild(repairHeader);
      repairEntry.appendChild(repairInfo);
      repairEntry.appendChild(repairButton);
      htmlId.appendChild(repairEntry);
      showRepairCount++;
    }
  });
}


// Define a function to handle button click
function handleButtonClick(repairID, IsComplete, repairData) {
  let selectedRepair = repairData.find(r => r.ID == repairID)
  selectedRepair.PickedUp = selectedRepair.IsCompleted ? true : false

  selectedRepair.IsCompleted = true;

  alert(`Repair ${repairID} has been ${IsComplete == true ? "picked up." : "Completed"}`);

  showFiveRepairs(complete, repairsData, true)
  showFiveRepairs(inProgress, repairsData, false) 
}

//new
