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
		$('#travelCenter').fadeTo(1000, 0.0, function() {
			document.getElementById('travelCenter').src = "./images/img1.jpg";
		});
		$('#travelCenter').fadeTo(1000, 1);
		
		setTimeout(function() {
			$('#travelCenter').fadeTo(1000, 0.0, function() {
				document.getElementById('travelCenter').src = "./images/img2.jpg";
			});
			$('#travelCenter').fadeTo(1000, 1);
			
			setTimeout(function() {
				$('#travelCenter').fadeTo(1000, 0.0, function() {
					document.getElementById('travelCenter').src = "./images/img3.jpg";
				});
				$('#travelCenter').fadeTo(1000, 1);
				
				setTimeout(function() {
					$('#travelCenter').fadeTo(1000, 0.0, function() {
						document.getElementById('travelCenter').src = "./images/img4.jpg";
					});
					$('#travelCenter').fadeTo(1000, 1);
					
					setTimeout(function() {
						$('#travelCenter').fadeTo(1000, 0.0, function() {
							document.getElementById('travelCenter').src = "./images/img5.jpg";
						});
						$('#travelCenter').fadeTo(1000, 1);
						
						setTimeout(function() {
							$('#travelCenter').fadeTo(1000, 0.0, function() {
								document.getElementById('travelCenter').src = "./images/travelcenter.jpg";
							});
							$('#travelCenter').fadeTo(1000, 1);
						}, 3000);
					}, 3000);
				}, 3000);
			}, 3000);
		}, 3000);
	}, 3000);
}

function loadIn() {
	$('.Main').fadeIn(1000, 1);
}

$(document).ready(function() {
	window.alert("Links don't function on this site.");
	
	imgChange();
	setInterval(imgChange, 18000); 
	
	setInterval(footColor, 600);
	loadIn();
});
