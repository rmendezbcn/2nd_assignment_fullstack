let gameModes = `
    <div id="solo" onclick="addSingleUser">
        <img src="https://icon-library.com/images/sandclock-icon/sandclock-icon-21.jpg" alt="Against the clock"
        height="120px;">
        <p>Solo against the clock</p>
        <form action="/add-user" id="addUserForm" class="not-visible">
            <input type="text" id="userName" name="userName">
            <input type="submit" value="Submit">
        </form> 
    </div>
    <div id="multiplayer" onclick="addMultipleUser">
        <img src="http://cdn.onlinewebfonts.com/svg/img_351582.png" alt="Multiplayer" height="120px;">
        <p>Multiplayer</p>
    </div>`

document.getElementById('main').addEventListener('click', showGameModes);
function showGameModes() {
    document.getElementById('main').innerHTML = gameModes;
}
let existCondition = setInterval(function() {
 if (document.getElementById('solo')) {
    console.log("solo exists!");
    clearInterval(existCondition);
    document.getElementById('solo').addEventListener('click', addSingleUser);
    document.getElementById('multiplayer').addEventListener('click', addMultipleUser);
    }
}, 100); // check every 100ms

function addSingleUser() {
    let formObject = document.getElementById('addUserForm');
    console.log('the current class is ' + formObject.className);
    if (formObject.className === "not-visible") {
        formObject.className = "visible";
        console.log('after the if is ' + formObject.className);
    } 
}



