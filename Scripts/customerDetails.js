
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
    new Customer(1, 'John', 'Smith', 'john@example.com', '123 Main St', 'Ontario', '123-456-7890'),
    new Customer(2, 'Jane', 'Doe', 'jane@example.com', '456 Elm St', 'British Columbia', '234-567-8901'),
    new Customer(3, 'Robert', 'Johnson', 'robert@example.com', '789 Oak St', 'Ontario', '345-678-9012'),
    new Customer(4, 'Emily', 'Davis', 'emily@example.com', '101 Elmwood Ave', 'Quebec', '456-789-0123'),
    new Customer(5, 'William', 'Brown', 'william@example.com', '222 Pine St', 'Quebec', '567-890-1234'),
    new Customer(6, 'Olivia', 'Wilson', 'olivia@example.com', '303 Cedar St', 'Ontario', '678-901-2345'),
    new Customer(7, 'James', 'Lee', 'james@example.com', '404 Oak St', 'Nova Scotia', '789-012-3456'),
    new Customer(8, 'Sophia', 'Martinez', 'sophia@example.com', '555 Birch St', 'Alberta', '890-123-4567'),
    new Customer(9, 'Mia', 'Harris', 'mia@example.com', '666 Maple St', 'Ontario', '901-234-5678'),
    new Customer(10, 'Alexander', 'Clark', 'alex@example.com', '777 Redwood St', 'Quebec', '012-345-6789'),
    new Customer(11, 'Ava', 'Lewis', 'ava@example.com', '888 Spruce St', 'Ontario', '123-456-7890'),
    new Customer(12, 'Ethan', 'Turner', 'ethan@example.com', '999 Cedar St', 'British Columbia', '234-567-8901'),
    new Customer(13, 'Liam', 'Walker', 'liam@example.com', '123 Oakwood Ave', 'Ontario', '345-678-9012'),
    new Customer(14, 'Oliver', 'Scott', 'oliver@example.com', '234 Elmwood Ave', 'Ontario', '456-789-0123'),
    new Customer(15, 'Lucas', 'King', 'lucas@example.com', '345 Pine St', 'Ontario', '567-890-1234'),
    new Customer(16, 'Aria', 'White', 'aria@example.com', '456 Birch St', 'Alberta', '678-901-2345'),
    new Customer(17, 'Mason', 'Turner', 'mason@example.com', '567 Cedar St', 'Quebec', '789-012-3456'),
    new Customer(18, 'Harper', 'Baker', 'harper@example.com', '678 Oak St', 'Quebec', '890-123-4567'),
    new Customer(19, 'Evelyn', 'Garcia', 'evelyn@example.com', '789 Pine St', 'Nova Scotia', '901-234-5678'),
    new Customer(20, 'Logan', 'Adams', 'logan@example.com', '890 Elm St', 'Ontario', '012-345-6789'),
];

// Retrieve equipment details from session storage
const storedCustomerDetails = sessionStorage.getItem('customerDetails');
const customerDetails = JSON.parse(storedCustomerDetails);



let indice = customerDetails.ID;




//full name
function FullName(id){
    let fullName = "";
    customersData.forEach((user,index)=>{
        if(id == index + 1){
            fullName += user.FirstName + " "
            + user.LastName;
        }
    });
    fname = document.getElementById("name");
    fname.innerHTML = fullName;
}


//DataTable
let dataTable;
let dataTanleIsInitialized = false;

const dataTableOptions={
    destroy:true,
    bPaginate: false,
    bFilter: false,
    bInfo:false
};

const initDataTable = async()=>{
    if(dataTanleIsInitialized){
        dataTable.destroy();
    }
    await listUser(indice);
    dataTable = $("#datatable_users").dataTable(dataTableOptions);
    dataTableIsInitialized = true;
};

//User
const listUser = async(id)=>{
    try{
        let content = ``;
        customersData.forEach((user,index)=>{
            if(index+1 == id){
                content +=`
            <tr>
                <td>${index+1}</td>
                <td>${user.FirstName}</td>
                <td>${user.LastName}</td>
                <td>${user.Email}</td>
                <td>${user.Phone}</td>
                <td>${user.Street}</td>
                <td>${user.Province}</td>
            </tr>`;
            }
            
        });
        tableBody_users.innerHTML = content;
    }
    catch(ex){
        alert(ex);
    }
};
window.addEventListener("load",async()=>{
    await initDataTable();
    await FullName(indice);
    
})

