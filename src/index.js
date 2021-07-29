import LinkedList from './LinkedList.js';

const SVG_NS = "http://www.w3.org/2000/svg";
const circleProperties = {cx:"50", cy:"50", r:"40",
stroke: "black", "stroke-width":"3", fill:"white"};
var list = null;

let createListButton = document.getElementById("createList");

function drawList(numberElements){
    let circle = document.createElementNS(SVG_NS,'circle');
    let canvas = document.getElementById("window");
    for(let property in circleProperties){
        if( circleProperties.hasOwnProperty(property)){
            circle.setAttributeNS(null,property,circleProperties[property]);
        }
    }
    canvas.appendChild(circle);
}

createListButton.onclick = function() {
    let size = parseInt(document.getElementsByName("listSize")[0].value);
    if(Number.isNaN(size)){
        alert("Enter a number, not a String");
        return
    }
    if(size < 0){
        alert("Enter a number greather than 0");
        return
    }
    list = new LinkedList();
    if(size != 0){
        for(let i = 0; i < size; i++){
            list.append(i);
        }
        drawList(size);
    }
    alert("List already created")
}