
 //Modal
 const modal = document.getElementById("modal");
 const btnOpenModal = document.getElementById("open-modal");
 const btnCloseModal = document.getElementById("cancelRole");
 const btnSubmit = document.getElementById("submitRole");
 const btnOpenEditModal = document.getElementById("modalEdit");
 const btnEditModal = document.getElementById("editModal");

 btnCloseModal.addEventListener('click',(e)=>{
    e.stopPropagation();
    modal.classList.toggle("translate");
   });
  
   btnSubmit.addEventListener('click',(e)=>{
    e.stopPropagation();
    modal.classList.toggle("translate");
   });

  function handleButtonClick() {
    btnOpenEditModal.classList.toggle("translateE")
   
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
    title: "Delete Customer",
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
      const response = await fetch("/services/employee.json");
      const users = await response.json();
      
        let content = ``;
        
        users.forEach((user,index)=>{
            
            content +=`
            <tr>
                <td>${index+1}</td>
                <td>${user.empFirstName +" " + user.empLastName}</td>
                <td>${user.positionName}</td>
                <td>
                  <button onclick="handleButtonClick()"  class="btn btn-sm btn-primary" 
                  data-bs-toggle="tooltip" data-bs-placement="top" title="Edit Rol">
                    
                      <i class="fa-regular fa-pen-to-square" ></i>
                    
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
    
});


