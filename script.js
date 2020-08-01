var cssdisplay = document.querySelector("h3");
var color1 = document.getElementById('color1');
var color2 = document.getElementById('color2'); 
var body = document.getElementById("body");




function changebackground(){		
	body.style.background = "linear-gradient(to right, " 
	+color1.value
	+","
	+color2.value
	+ ")";

cssdisplay.textContent=body.style.background+";";}

color1.addEventListener("input", changebackground); 
color2.addEventListener("input", changebackground);