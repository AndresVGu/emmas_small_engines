const box = document.getElementById("box");
const registerBtn = document.getElementById("register");
const loginBtn = document.getElementById("login");
const signUpBtn = document.getElementById("signUp");
/*
registerBtn.addEventListener('click', ()=>{
    box.classList.add("active");
   ;
})
*/
loginBtn.addEventListener('click', ()=>{
    box.classList.remove("active");
    
})



document.getElementById("validation-form").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent the default form submission behavior

    
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    // Provisional validation
    let empty = "";
    window.location.href = "pages/customer.html";
    /*
    authentication
    if(username != empty || password != empty){
        window.location.href = "pages/customer.html";
    }  
    else{
        alert("You cannot leve inputs blank")
    }
    */    
});

document.getElementById("registration-form").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent the default form submission behavior
    window.location.href = "dashboard.html";

});
