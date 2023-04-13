//  Startup Event 
window.onload = function () {
    setTimeout(function () {
        document.getElementById('preloader').style.display = "none";
    }, 2900);
    setTimeout(function () {
        document.getElementById('startscreen').style.display = "block";
        document.getElementById('re4logo').classList.add('imgfade');
    }, 2900)
}

function showmodeselection() {
    document.getElementById('startscreen').style.display = "none";
    document.getElementById('modeselection').style.display = "block";
}
function showstart() {
    document.getElementById('startscreen').style.display = "block";
    document.getElementById('modeselection').style.display = "none";
}
function showstory() {
    document.getElementById('story').style.display = "block";
    document.getElementById('modeselection').style.display = "none";
}
function showmode1() {
    document.getElementById('story').style.display = "none";
    document.getElementById('modeselection').style.display = "block";
}
function showoptions() {
    document.getElementById('options').style.display = "block";
    document.getElementById('modeselection').style.display = "none";
}
function showmode2() {
    document.getElementById('options').style.display = "none";
    document.getElementById('modeselection').style.display = "block";
}
function showstore() {
    document.getElementById('store').style.display = "block";
    document.getElementById('modeselection').style.display = "none";
}
function hidestore() {
    document.getElementById('store').style.display = "none";
    document.getElementById('modeselection').style.display = "block";
}
function showcontentshop() {
    document.querySelector('.contentnotfound').style.display = "block";
}
function hidecontentshop() {
    document.querySelector('.contentnotfound').style.display = "none";
}
document.getElementById('new_game').onclick = function showgamemode() {
    document.querySelector('.gamemode').style.display = "block";
}

function hidegamemode() {
    document.querySelector('.gamemode').style.display = "none";
}
document.getElementById('results').onclick = function showresults() {
    document.querySelector('.results').style.display = "block";
}
function hideresults() {
    document.querySelector('.results').style.display = "none";
}
// Mouse Hover Events 

// Story
document.getElementById('continue').onclick = function () { document.querySelector(".continuegame").style.display = "block"; }
document.getElementById('ok').onclick = function () { document.querySelector(".continuegame").style.display = "none"; }
document.getElementById('continue').onmouseover = function () { document.getElementById('downtext').innerHTML = "Continue playing from your last save."; }
document.getElementById('load_game').onmouseover = function () { document.getElementById('downtext').innerHTML = "Load a saved game."; }
document.getElementById('load_game').onclick = function () { document.querySelector(".savedgameslist").style.display = "block"; }
document.getElementById('load_game').onmouseout = function () { document.querySelector(".savedgameslist").style.display = "none"; }
document.getElementById('new_game').onmouseover = function () { document.getElementById('downtext').innerHTML = "Start a new game"; }

// Settings (Camera)
document.getElementById('controls').onclick = function () {
    document.querySelector(".controls").style.display = "block";
    document.querySelector(".camera").style.display = "none";
    document.querySelector(".display").style.display = "none";
    document.querySelector(".graphics").style.display = "none";
    document.querySelector(".language").style.display = "none";
    document.querySelector(".audio").style.display = "none";
}
document.getElementById('camera').onclick = function () {
    document.querySelector(".controls").style.display = "none";
    document.querySelector(".camera").style.display = "block";
    document.querySelector(".display").style.display = "none";
    document.querySelector(".graphics").style.display = "none";
    document.querySelector(".language").style.display = "none";
    document.querySelector(".audio").style.display = "none";
}
document.getElementById('display').onclick = function () {
    document.querySelector(".controls").style.display = "none";
    document.querySelector(".camera").style.display = "none";
    document.querySelector(".display").style.display = "block";
    document.querySelector(".graphics").style.display = "none";
    document.querySelector(".language").style.display = "none";
    document.querySelector(".audio").style.display = "none";
}
document.getElementById('graphics').onclick = function () {
    document.querySelector(".controls").style.display = "none";
    document.querySelector(".camera").style.display = "none";
    document.querySelector(".display").style.display = "none";
    document.querySelector(".graphics").style.display = "block";
    document.querySelector(".language").style.display = "none";
    document.querySelector(".audio").style.display = "none";
}
document.getElementById('language').onclick = function () {
    document.querySelector(".controls").style.display = "none";
    document.querySelector(".camera").style.display = "none";
    document.querySelector(".display").style.display = "none";
    document.querySelector(".graphics").style.display = "none";
    document.querySelector(".language").style.display = "block";
    document.querySelector(".audio").style.display = "none";
}
document.getElementById('audio').onclick = function () {
    document.querySelector(".controls").style.display = "none";
    document.querySelector(".camera").style.display = "none";
    document.querySelector(".display").style.display = "none";
    document.querySelector(".graphics").style.display = "none";
    document.querySelector(".language").style.display = "none";
    document.querySelector(".audio").style.display = "block";
}

//  Mouse Hover Events (Extra Content Shop)

document.getElementById('extra_cotent_shop').onmouseover = function () {
    document.getElementById('store').style.backgroundImage = "url(../images/bg01.jpg)";
    document.getElementById('storedown').innerHTML = "Use Completion Points(CP) to purchase bonus content.";
}
document.getElementById('concept_arts').onmouseover = function () {
    document.getElementById('store').style.backgroundImage = "url(../images/bg03.png)";
    document.getElementById('storedown').innerHTML = "View concept art.";
}
document.getElementById('models').onmouseover = function () {
    document.getElementById('store').style.backgroundImage = "url(../images/bg04.png)";
    document.getElementById('storedown').innerHTML = "View in-game models.";
}
document.getElementById('challenges').onmouseover = function () {
    document.getElementById('store').style.backgroundImage = "url(../images/bg05.png)";
    document.getElementById('storedown').innerHTML = "View challenges and their rewards.";
}
document.getElementById('credits').onmouseover = function () {
    document.getElementById('store').style.backgroundImage = "url(../images/bg06.png)";
    document.getElementById('storedown').innerHTML = "View the credits";
}