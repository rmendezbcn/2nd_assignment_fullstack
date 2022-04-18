document.getElementById('solo').addEventListener('click', addSingleUser);
//document.getElementById('multiplayer').addEventListener('click', addMultipleUser);

function addSingleUser() {
    let formObject = document.getElementById('addUserForm');
    if (formObject.className === "not-visible") {
        formObject.className = "visible";
    } 
}



