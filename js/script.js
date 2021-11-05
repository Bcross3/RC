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

function footColor() {
	document.getElementById('me').style.color = "red";
	setTimeout(function() {
		document.getElementById('me').style.color = "green";
		setTimeout(function() {
			document.getElementById('me').style.color = "blue";
		}, 200);
	}, 200);
}

function imgChange() {
	
	setTimeout(function() {
		$('#travelCenter').fadeTo(1500, 0.0, function() {
			document.getElementById('travelCenter').src = "./images/img1.jpg";
		});
		$('#travelCenter').fadeTo(1500, 1);
		
		setTimeout(function() {
			$('#travelCenter').fadeTo(1500, 0.0, function() {
				document.getElementById('travelCenter').src = "./images/img2.jpg";
			});
			$('#travelCenter').fadeTo(1500, 1);
			
			setTimeout(function() {
				$('#travelCenter').fadeTo(1500, 0.0, function() {
					document.getElementById('travelCenter').src = "./images/img3.jpg";
				});
				$('#travelCenter').fadeTo(1500, 1);
				
				setTimeout(function() {
					$('#travelCenter').fadeTo(1500, 0.0, function() {
						document.getElementById('travelCenter').src = "./images/img4.jpg";
					});
					$('#travelCenter').fadeTo(1500, 1);
					
					setTimeout(function() {
						$('#travelCenter').fadeTo(1500, 0.0, function() {
							document.getElementById('travelCenter').src = "./images/img5.jpg";
						});
						$('#travelCenter').fadeTo(1500, 1);
						
						setTimeout(function() {
							$('#travelCenter').fadeTo(1500, 0.0, function() {
								document.getElementById('travelCenter').src = "./images/travelcenter.jpg";
							});
							$('#travelCenter').fadeTo(1500, 1);
						}, 5000);
					}, 5000);
				}, 5000);
			}, 5000);
		}, 5000);
	}, 5000);
}

function jokes() {
	var joke = new Array();
	
	joke[0] = "What do you call a boomerang that won't come back?\nA stick.";
	joke[1] = "What does a cloud wear under his raincoat?\nThunderwear.";
	joke[2] = "Two pickles fell out of a jar onto the floor. What did one say to the other?\nDill with it.";
	joke[3] = "What time is it when the clock strikes 13?\nTime to get a new clock.";
	joke[4] = "How does a cucumber become a pickle?\nIt goes through a jarring experience.";
	joke[5] = "What did one toilet say to the other?\nYou look a bit flushed.";
	joke[6] = "What do you call a joke that isn't funny?\nA sentence.";
	joke[7] = "What did one stranger say to the other?\nNothing. They didn't know each other.";
	joke[8] = "What did one Frenchman say to the other Frenchman?\nI don't know; I don't speak French.";
	joke[9] = "Why did the swan hiss?\nBiologically, it's coded in their genes to do so when threatened.";
	joke[10] = "What do you call a pigeon that can't find its way back home?\nA pigeon.";
	joke[11] = "What's the best thing about Switzerland?\nI don't know, but the flag is a big plus.";
	
	index = Math.floor(Math.random() * joke.length);
	window.alert(joke[index]);
}

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
			links[i].style.boxShadow = "5px 5px 0px dimgray";
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

function weather() {
	$('#weatherwidget-io').fadeTo(1000, 1, function() {
		document.getElementById('weatherwidget-io').style.display = "block";
	});
	
	document.getElementById('weather').style.display = "none";
	document.getElementById('noWeather').style.display = "initial";
}

function noWeather() {
	$('#weatherwidget-io').fadeTo(1000, 0.0, function() {
		document.getElementById('weatherwidget-io').style.display = "none";
	});
	
	document.getElementById('weather').style.display = "initial";
	document.getElementById('noWeather').style.display = "none";
}

function fadeIn() {
	$('.Main').fadeTo(1000, 1);
	$('.Top').fadeTo(1000, 1);
}

$(document).ready(function() {
	
	imgChange();
	setInterval(imgChange, 30000); 
	
	setInterval(footColor, 600);
	
	fadeIn();
});