var mseOver = elem => elem.style.color = "black";
var mseOverBody = elem => elem.style.backgroundColor = "red";
var mseOut = elem => elem.style.color = "forestgreen";
var mseOutBody = elem => elem.style.backgroundColor = "wheat";

var ovr = elem => elem.src = "./images/logo1.png";
var out = elem => elem.src = "./images/logo.png";

var ovrTop = elem => elem.style.borderColor = "red";
var outTop = elem => elem.style.borderColor = "forestgreen";

var ovrImg = elem => elem.style.filter = "grayscale(100%)";
var outImg = elem => elem.style.filter = "grayscale(0%)";

function anti() {
	
	$('#Main').fadeTo(1000, 0.0, function() {
		document.getElementById('Main').style.background = "linear-gradient(to bottom right, black, black, dimgray)";
		document.getElementById('Main').style.borderColor = "red";
		
		document.getElementById('Head').style.color = "red";
		document.getElementById('Head').style.textShadow = "5px 5px 5px gray";
		
		document.getElementById('weatherwidget-io').style.borderColor = "red";
		document.getElementsByClassName('weatherwidget-io')[0].style.filter = "grayscale(100%) brightness(75%) saturate(0)";
		
		document.getElementById('travelCenter').style.borderColor = "red";
		document.getElementById('travelCenter').style.boxShadow = "5px 5px 25px white";
		document.getElementById('travelCenter').style.filter = "grayscale(100%)";
		
		document.getElementById('anti').style.display = "none";
		document.getElementById('normal').style.display = "initial";
		
		document.body.style.background = "linear-gradient(to bottom right, black, black, red, white, white)";
		document.body.style.borderColor = "red";
		
		var links = document.querySelectorAll('.link');
		var i;
		for(i = 0; i < links.length; i++){
			links[i].style.backgroundColor = "red";
			links[i].style.color = "black";
			links[i].style.boxShadow = "5px 5px 0px dimgray";
		}
		
		var hr = document.querySelectorAll('HR');
		var a;
		for(a = 0; a < hr.length; a++){
			hr[a].style.backgroundColor = "red";
		}
	});
	$('#Main').fadeTo(1000, 1);
	
	$('.Top').fadeTo(1000, 0.0, function() {
		document.getElementById('Top').style.backgroundColor = "black";
		document.getElementById('Top').style.borderColor = "red";
		document.getElementById('Top').style.filter = "blur(1px)";
		document.getElementById('imgOriginal').style.display = "none";
		document.getElementById('imgAnti').style.display = "initial";
		
		document.getElementById('mobileLogo').src = "images/logo1.png";
		document.getElementById('mobileLogo').style.backgroundColor = "black";
		document.getElementById('mobileLogo').style.borderColor = "red";
		document.getElementById('mobileLogo').style.filter = "blur(1px)";
	});
	$('.Top').fadeTo(1000, 1);
	
	$('#me').fadeTo(1000, 0.0, function() {
		document.getElementById('me').style.filter = "grayscale(100%)";
	})
	$('#me').fadeTo(1000, 1);
	
	mseOver = elem => elem.style.color = "forestgreen";
	mseOverBody = elem => elem.style.backgroundColor = "wheat";
	mseOut = elem => elem.style.color = "black";
	mseOutBody = elem => elem.style.backgroundColor = "red";
	
	ovr = elem => elem.src = "./images/logo.png";
	out = elem => elem.src = "./images/logo1.png";
	
	ovrTop = elem => elem.style.borderColor = "forestgreen";
	outTop = elem => elem.style.borderColor = "red";
	
	ovrImg = elem => elem.style.filter = "grayscale(0%)";
	outImg = elem => elem.style.filter = "grayscale(100%)";

}

function normal() {
	
	$('#Main').fadeTo(1000, 0.0, function() {
		document.getElementById('Main').style.background = "linear-gradient(to bottom right, forestgreen, white)";
		document.getElementById('Main').style.borderColor = "white";
		
		document.getElementById('Head').style.color = "white";
		document.getElementById('Head').style.textShadow = "5px 5px 5px black";
		
		document.getElementById('weatherwidget-io').style.borderColor = "black";
		document.getElementsByClassName('weatherwidget-io')[0].style.filter = "grayscale(0%) brightness(100%) saturate(1)";
		
		document.getElementById('travelCenter').style.borderColor = "black";
		document.getElementById('travelCenter').style.boxShadow = "5px 5px 5px black";
		document.getElementById('travelCenter').style.filter = "grayscale(0%)";
		
		document.getElementById('anti').style.display = "initial";
		document.getElementById('normal').style.display = "none";
		
		document.body.style.background = "wheat";
		document.body.style.borderColor = "wheat";
		
		var links = document.querySelectorAll('.link');
		var i;
		for(i = 0; i < links.length; i++){
			links[i].style.backgroundColor = "wheat";
			links[i].style.color = "forestgreen";
			links[i].style.boxShadow = "5px 5px 0px black";
		}
		
		var hr = document.querySelectorAll('HR');
		var a;
		for(a = 0; a < hr.length; a++){
			hr[a].style.backgroundColor = "black";
		}
		
	});
	$('#Main').fadeTo(1000, 1);
	
	$('.Top').fadeTo(1000, 0.0, function() {
		document.getElementById('Top').style.backgroundColor = "white";
		document.getElementById('Top').style.borderColor = "forestgreen";
		document.getElementById('Top').style.filter = "blur(.55px)";
		document.getElementById('imgOriginal').style.display = "initial";
		document.getElementById('imgAnti').style.display = "none";
		
		document.getElementById('mobileLogo').src = "images/logo.png";
		document.getElementById('mobileLogo').style.backgroundColor = "white";
		document.getElementById('mobileLogo').style.borderColor = "black";
		document.getElementById('mobileLogo').style.filter = "blur(.55px)";
	});
	$('.Top').fadeTo(1000, 1);
	
	$('#me').fadeTo(1000, 0.0, function() {
		document.getElementById('me').style.filter = "grayscale(0%)";
	});
	$('#me').fadeTo(1000, 1);
	
	mseOver = elem => elem.style.color = "black";
	mseOverBody = elem => elem.style.backgroundColor = "red";
	mseOut = elem => elem.style.color = "forestgreen";
	mseOutBody = elem => elem.style.backgroundColor = "wheat";
	
	ovr = elem => elem.src = "./images/logo1.png";
	out = elem => elem.src = "./images/logo.png";
	
	ovrTop = elem => elem.style.borderColor = "red";
	outTop = elem => elem.style.borderColor = "forestgreen";
	
	ovrImg = elem => elem.style.filter = "grayscale(100%)";
	outImg = elem => elem.style.filter = "grayscale(0%)";
	
}

function christmas() {
	function christmasInterval() {
		document.body.style.borderColor = "green";
		document.getElementById('Top').style.backgroundColor = "red";
		document.getElementById('imgAnti').src = "./images/logo.png";
		document.getElementById('mobileLogo').style.backgroundColor = "red";
		document.getElementById('mobileLogo').src = "./images/logo.png";
		document.getElementById('Main').style.background = "linear-gradient(green, white, red)";
		setTimeout(function() {
			document.body.style.borderColor = "red";
			document.getElementById('Top').style.backgroundColor = "green";
			document.getElementById('imgAnti').src = "./images/logo1.png";
			document.getElementById('mobileLogo').style.backgroundColor = "green";
			document.getElementById('mobileLogo').src = "./images/logo1.png";
			document.getElementById('Main').style.background = "linear-gradient(red, white, green)";
		}, 500);
	}
	document.body.style.background = "white";
	document.body.style.borderWidth = "thick";
	setInterval(christmasInterval, 1000);
	
	document.getElementById('Main').style.background = "linear-gradient(red, white, green)";
	document.getElementById('Main').style.borderColor = "green";
	
	document.getElementById('imgAnti').style.display = "initial";
	document.getElementById('imgOriginal').style.display = "none";
	
	document.getElementById('Top').style.borderColor = "white";
	
	$.snowfall.start();
	
	document.getElementById('anti').style.display = "none";
}

$(document).ready(function() {
	var month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
	m = new Date();
	var currentM = month[m.getMonth()];
	
	var date = new Date().getDate();
	
	if(currentM == 'November' && date == '7'){
		christmas();
	}else{
		normal();
	}
});