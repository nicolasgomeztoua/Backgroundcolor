var cssdisplay = document.querySelector("h3");
var color1 = document.getElementById('color1');
var color2 = document.getElementById('color2'); 
var body = document.getElementById("body");
var btn = document.getElementById("btn");



function changebackground(){		
	body.style.background = "linear-gradient(to right, " 
	+color1.value
	+","
	+color2.value
	+ ")";

cssdisplay.textContent=body.style.background+";";}

color1.addEventListener("input", changebackground); 
color2.addEventListener("input", changebackground);


function randomizecolors(){ 	
	color1.value = randomColor();
	color2.value = randomColor();
	changebackground();
};

function randomColor() {
	var rand = "0123456789ABCDEF";
	var value = "#";
	for (var i = 0; i < 6; i++) {
		value += rand[Math.floor(Math.random() * 16)];
	}
	return value;
}

btn.addEventListener("click", randomizecolors);
randomizecolors();
