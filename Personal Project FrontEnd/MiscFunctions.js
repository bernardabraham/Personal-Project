function progressBar() {
    let progress = (v / m) * 100;
    document.getElementById("progressBar").value = progress;
    progressInt = parseInt(progress)
    document.getElementById("progress1").innerText = progressInt + "%";
}

function runScript(e) {
    if (e.keyCode == 13) {
        document.getElementById("submit1").click();
        return false;
    }
}

function runScript2(e) {
    if (e.keyCode == 13) {
        document.getElementById("submit2").click();
        return false;
    }
}

function runScript3(e) {
    if (e.keyCode == 13) {
        document.getElementById("submit3").click();
        return false;
    }
}

function strikeThrough() {

    var ele = document.getElementByClassName("task1");
    ele.style.setProperty("text-decoration", "line-through");

}
function signOut() {
    sessionStorage.setItem('usernameId', 0);
    window.location = 'Main.html';
}

function goToSettings(method, url, username) {
    window.location = 'Login/Settings.html';
}
function goToRegister(method, url, username) {
    window.location = 'Login/Register.html';
}
function goToLogin(method, url, username) {
    window.location = 'Login/Login.html';
}
function goToMain(method, url, username) {
    window.location = 'Main.html';
}