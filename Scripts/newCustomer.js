//Populating Province DropDownList

const provinces = document.getElementById("provinces");

const listProvinces = async()=>{
    try{
        const response = await fetch("provinces.json");
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

window.addEventListener("load", async()=>{
    await listProvinces();
});

const submitBtn = document.getElementById("submit");
const cancelBtn = document.getElementById("cancel");

submitBtn.addEventListener('click', ()=>{
    window.location.href="customer.html";
});

cancelBtn.addEventListener('click', ()=>{
    window.location.href="customer.html";
});