// Retrieve equipment details from session storage
const storedEquipmentDetails = sessionStorage.getItem('equipmentDetails');
const equipmentDetails = JSON.parse(storedEquipmentDetails);

if (storedEquipmentDetails) 
{

  fillInfo(equipmentDetails)
} 

function fillInfo(eJSON)
{
    
    document.getElementById("name").value = eJSON.CustomerName;
    document.getElementById("model").value = eJSON.Model;
    document.getElementById("vin").value = eJSON.VinSerial;
    document.getElementById("colour").value = eJSON.Colour;
    document.getElementById("manufacturer").value = eJSON.Manufacturer;
    document.getElementById("type").value = eJSON.Type;
    document.getElementById("notes").value = eJSON.NotesDesc;

}
