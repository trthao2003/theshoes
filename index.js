// JavaScript Document

// _______________________Ads
// Thiet lap ngay het han
var countDownDate = new Date("June 1, 2023 0:0:0").getTime();

// Cap nhat chuc nang nay sau moi giay
var x = setInterval(function() {
	// Lay mot bien la thoi gian hien tai
	var now = new Date().getTime();

	// Tinh khoang cach giua hien tai va ngay den han
	var distance = countDownDate - now;

	// Quy doi tu ms sang s
	var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((distance % (1000 * 60)) / 1000);

	// Hien thi ra the voi id="ads"
	document.getElementById("ads").innerHTML = days + " ngày " + hours + " giờ " + minutes + " phút " + seconds + " giây ";

	//
	if (distance < 0) {
		clearInterval(x);
		document.getElementById("ads").innerHTML = "EXPIRED";
	}
}, 1000);
//Icon X, remove ads when click on



//-----------------------------Nav Bar

	//Use for button in sidebar
function w3_open() {
	document.getElementById("mySidebar").style.display = "block";
	document.querySelector(".w3-beside-sidebar-right").style.display = "block";
	document.getElementById("nav").style.opacity = "0.3";
}
function w3_close() {
	document.getElementById("mySidebar").style.display = "none";
	document.querySelector(".w3-beside-sidebar-right").style.display = "none";
	document.getElementById("nav").style.opacity = "1";
}

//Dropdown click in side bar
function myAccFunc() {
var x = document.getElementById("demoAcc");
	if (x.className.indexOf("w3-show") == -1) {
		x.className += " w3-show";
		x.previousElementSibling.className += " w3-green";
	} else { 
		x.className = x.className.replace(" w3-show", "");
		x.previousElementSibling.className = 
		x.previousElementSibling.className.replace(" w3-green", "");
	}
}

function myDropFunc() {
	var x = document.getElementById("demoDrop");
	if (x.className.indexOf("w3-show") == -1) {
		x.className += " w3-show";
		x.previousElementSibling.className += " w3-black";
	} else { 
		x.className = x.className.replace(" w3-show", "");
		x.previousElementSibling.className = 
		x.previousElementSibling.className.replace(" w3-black", "");
	}
}



//--------------------------------Content

/*product*/
$(".for-mens img").hover(function(){
	$(this).attr("src", "images/products/white_w27445_giay_sneaker_cole_haan__1__4092c0e413c94e7f964e4098ae99b4ff_large.pnj.webp");
	}, function(){
	$(this).attr("src", "images/products/white_w27445_giay_sneaker_cole_haan__3__634d619fe3ac4a1c96c1d58dcd290cd9_large (1).png");
});




