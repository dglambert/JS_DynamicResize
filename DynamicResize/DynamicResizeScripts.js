//DynamicResizeScripts.js
var windowX;
var windowY;
var x1920 = { width: 1920, height: 985, color: "yellow" };
var x1280 = { width: 1280, height: 705, color: "green" };
var x944 = { width: 944, height: 977, color: "orange" };
var x624 = { width: 624, height: 697, color: "lime" };



window.onload = function ()
{
    detectSize();
    loadBody(document.body);
}

window.onresize = function ()
{
    detectSize();
    loadBody(document.body);
}

function detectSize()
{
	windowX = window.innerWidth;
	windowY = window.innerHeight;
}

function loadBody(body)
{
	if (compareToWindow(x1920) >= 0)
	    updateBody(body, x1920);
	else if(compareToWindow(x1280) >=0)
	    updateBody(body, x1280);
	else if(compareToWindow(x944) >= 0)
	    updateBody(body, x944);
	else
	    updateBody(body, x624);
}

function compareToWindow(template)
{
   var x = template.width;
	if(x < windowX)
		return 1;
	if(x == windowX)
		return 0;
	else
		return -1;
}

function updateBody(body, template)
{
    body.innerWidth = template.width;
    body.innerHeight = template.height;
    body.style.backgroundColor = template.color;
}
