import {addShade, addTint} from "./colorFunctions.js"

const mainColor = "#6030A3";
const increment = 10;
// Get Color Divs
const mainColorDiv = document.getElementById("main-color");
const shadesDiv = document.getElementById("shadeDiv");
const tintsDiv = document.getElementById("tintDiv");
const secShadesDiv = document.getElementById("secShadeDiv");
const secTintsDiv = document.getElementById("secTintDiv");
const accentsDiv = document.getElementById("accents");

// Display Main Color
let mainColorItem = document.createElement("div");
let mainColorElement = document.createElement("div");
mainColorItem.classList.add("color-item");
mainColorElement.classList.add("color-element");
mainColorElement.style.backgroundColor = mainColor;
mainColorItem.innerHTML = "Main Color: " + mainColor;
mainColorDiv.appendChild(mainColorItem);
mainColorItem.appendChild(mainColorElement);

// Generate Shades
function generateShades(color, div){
    for (let i = 0; i < increment + 1; i++){
        var num = i / increment;
        var newShade = addShade(num, color);
        var newShadeItem = document.createElement("div");
        var newShadeElement = document.createElement("div");
        newShadeItem.classList.add("color-item");
        newShadeElement.classList.add("color-element");
        newShadeElement.style.backgroundColor = newShade;
        newShadeItem.innerHTML = "Shade " + i*increment.toString() + "%: " + newShade;
        div.appendChild(newShadeItem);
        newShadeItem.appendChild(newShadeElement);
    }
}
// Generate tints
function generateTints(color, div){
for (let i = 0; i < increment + 1; i++){
    var num = i / increment;
    var newTint = addTint(num, color);
    var newTintItem = document.createElement("div");
    var newTintElement = document.createElement("div");
    newTintItem.classList.add("color-item");
    newTintElement.classList.add("color-element");
    newTintElement.style.backgroundColor = newTint;
    newTintItem.innerHTML = "Tint " + i*increment.toString() + "%: " + newTint;
    div.appendChild(newTintItem);
    newTintItem.appendChild(newTintElement);
    }
}
var coefBase = 0.5;

generateShades(mainColor, shadesDiv);
generateTints(mainColor, tintsDiv);
generateShades(addTint(coefBase,mainColor), secShadesDiv);
generateTints(addShade(coefBase,mainColor), secTintsDiv);