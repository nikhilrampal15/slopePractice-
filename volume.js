/*
 var pi = Math.PI;

 var sphereRadius = 15;

 var coneBase = 11;
 var coneHeight = 22;

 var rectLength = 5;
 var rectHeight = 11;
 var rectWidth = 467;
 */

var pi = Math.PI;

var sphereRadius = 15;

var coneBase = 11;
var coneHeight = 22;

var rectLength = 5;
var rectHeight = 11;
var rectWidth = 467;


function sphereVolume(radius){
    return 4/3*pi*Math.pow(radius, 3);
}
sphereVolume(sphereRadius);

function coneVolume(radius, height){
    return pi*(Math.pow(radius, 2))*height/3;
}
coneVolume(coneBase, coneHeight);
function rectangleVolume(length, width, height){
    return length*width*height;
}
rectangleVolume(rectLength, rectWidth, rectHeight);
