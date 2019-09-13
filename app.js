var pics = [
	"imgs/img1.jpg", 
	"imgs/img2.jpg",  
	"imgs/img3.jpg",  
	"imgs/img4.jpg" 
]
var img = document.querySelector(".image");
var counter = 0;

function changeImg() {
	img.src = pics[counter];
	if (counter < pics.length - 1) {
		counter++;
	} else {
		counter = 0;
	}
	setTimeout("changeImg()", 2000);
}
window.onload = changeImg;