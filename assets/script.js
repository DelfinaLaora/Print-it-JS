const slides = [
	{
		"image":"./assets/images/slideshow/slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"./assets/images/slideshow/slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"./assets/images/slideshow/slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"./assets/images/slideshow/slide4.png",
		"tagLine":"Autocollants <span> avec découpe laser sur mesure </span>"
	}
]

// for(let i = 0; i < slides.length; i++) {
// 	const dotElement = document.createElement("div");
// 	dotElement.classList.add("dot");
// 	const dotsElement = document.querySelector(".dots");		
// 	dotsElement.appendChild(dotElement);		
// }

// for(let i = 0; i < slides.length; i++) {
// 	const imageElement = document.createElement("img");
// 	imageElement.classList.add(".banner-img");
// 	const bannerElement = document.querySelector("#banner");		
// 	bannerElement.appendChild(imageElement);		
// }

for (i = 0; i < slides.length; i++) {
	let img = document.getElementsByClassName('img');
	img.src = slides[i].image;
	img.className = ("banner-img");
	let tagLine = document.getElementsByClassName('p');
	tagLine = slides[i].tagLine		
	}

	let slide = 0

	// Ajout listener pour flèche de gauche

const arrowLeft = document.querySelector(".arrow_left");

arrowLeft.addEventListener("click", function() {	

	slide++;
	if (slide >= slides.length) {		
		slide = 0;
	}

	console.log(slide);	
	console.log("Bonjour à gauche");
});


	// Ajout listener pour flèche de droite
const arrowRight = document.querySelector(".arrow_right");

arrowRight.addEventListener("click", function() {
	slide--;
	if (slide < 0) {
		slide = slides.length -1;	
	}
	console.log(slide);
	console.log("Bonjour à droite");	
})

