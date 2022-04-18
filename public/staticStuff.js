document.getElementById('solo').addEventListener('click', addSingleUser);

function addSingleUser() {
    let formObject = document.getElementById('addUserForm');
    if (formObject.className === "not-visible") {
        formObject.className = "visible";
    } 
}
//document.getElementById('multiplayer').addEventListener('click', addMultipleUser);

document.getElementById('addUserNamebtn').addEventListener('click', showLevels);


function showLevels(event) {
    event.preventDefault();
    let userName = document.getElementById('userName').value;
    document.getElementById('levelTitle').innerText = userName + ' choose a level'
    
    let sectionElement = document.getElementById('levelsSection');
    //console.log(sectionElement.className);
    if (sectionElement.className === "not-visible container") {
        sectionElement.className = "visible container";
        console.log(sectionElement.className);
    } 
}

