const colorSwap = document.querySelector('#colorful-switch-cb').addEventListener('click', colorSwap2);
const buttonConsole = document.querySelector('#colorful-switch-cb-2').addEventListener('click', consoleSwap);
const cssStyle = document.getElementById('css');

let isLight = false;
let isConsole = false;

function swapColors(){
    isLight = !isLight;
    if (isLight){
        cssStyle.href='../assets/codeblocks-light.css';
        document.body.style.backgroundColor = "#fffcf2";
        document.body.style.color = "black";
        let preTag = document.querySelectorAll('pre')
        preTag.forEach(element => {
            element.style.border = "1px solid grey";
        })
        document.getElementById('color-mode-text').innerText = "Light Mode";
    }
    else {
        cssStyle.href='../assets/codeblocks.css';
        document.body.style.backgroundColor = "#17191d";
        document.body.style.color = "white";
        let preTag = document.querySelectorAll('pre')
        preTag.forEach(element => {
            element.style.border = "none";
        })
        document.getElementById('color-mode-text').innerText = "Dark Mode";
        document.getElementById('jsConsole').style="background-color: #17191d;"
        document.getElementById('jsConsole').style="color: white;"
    }
    return isLight;
}

function consoleButton(colorMode){
    isConsole = !isConsole;
    if (isConsole){ // If console is ON
        if(!isLight){ // If Dark Mode ON
            // Give me dark console
            document.getElementById('console-mode-text').innerText = "Disable Console";
            document.getElementById('jsConsole').src="../assets/jsconsole/jsconsole.html"
            document.getElementById('jsConsole').height="200"
        }
        else{
            // If Light Mode
            // Give me light console
            document.getElementById('console-mode-text').innerText = "Disable Console";
            document.getElementById('jsConsole-light').src="../assets/jsconsole/jsconsole-light.html"
            document.getElementById('jsConsole-light').height="200"
        }
    }
    else {
        document.getElementById('console-mode-text').innerText = "Enable Console";
        document.getElementById('jsConsole').src=""
        document.getElementById('jsConsole').height="0"
        document.getElementById('jsConsole-light').src=""
        document.getElementById('jsConsole-light').height="0"
    }
}

function consoleSwap(){
    if (!isLight){ // If light-mode is OFF
        consoleButton('dark') // Give me dark console
    }
    else { // If light-mode is ON
        consoleButton('light') // Give me light console
    }
}

function colorSwap2(){
    if (isConsole){ // If console is ON
        document.querySelector('#colorful-switch-cb-2').click();
        swapColors() // Swap colors
    }
    else { // If console is OFF
        swapColors() // Swap colors
    }
}

function consoleButton2(){
    isConsole = !isConsole;
    if (!isLight){
        document.getElementById('jsConsole-light').src=""
        document.getElementById('jsConsole-light').height="0"
        document.getElementById('jsConsole').src="../assets/jsconsole/jsconsole.html";
        document.getElementById('jsConsole').height="200"
        if (isConsole){
            document.getElementById('console-mode-text').innerText = "Disable Console";
        }
        else {
            document.getElementById('console-mode-text').innerText = "Enable Console";
        }
    }
    else {
        document.getElementById('jsConsole').src="";
        document.getElementById('jsConsole').height="0"
        document.getElementById('jsConsole-light').src="../assets/jsconsole/jsconsole-light.html"
        document.getElementById('jsConsole-light').height="200"
        if (isConsole){
            document.getElementById('console-mode-text').innerText = "Disable Console";
        }
        else {
            document.getElementById('console-mode-text').innerText = "Enable Console";
        }
    }
}


// window.onload = function() {
//     let myiFrame = document.getElementById("jsConsole");
//     let doc = myiFrame.contentDocument;
//     doc.body.innerHTML = doc.body.innerHTML + '<style>/color: white;/style>';
// }
