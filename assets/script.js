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

const bannerElement = document.querySelector("#banner");	

const baliseImage = document.getElementById("baliseImage");
const tagLine = document.getElementById("baliseTagLine");
const bannerImg = document.getElementsByClassName("banner-img")	
const dotElement = document.getElementsByClassName("dot")

// création des dots
for(let i = 0; i < slides.length; i++) {
	const dotElement = document.createElement("div");
	dotElement.classList.add("dot");
	const dotsElement = document.querySelector(".dots");		
	dotsElement.appendChild(dotElement);		
}

let i = 0
let slide = slides.length;

	// On modifie la source des images dans le DOM
baliseImage.src = slides[i].image;

	// On modifie la source des taglines dans le DOM
tagLine.innerHTML = slides[i].tagLine;

	// on fait avancer les sliders en changeant la source
function suivant(){
	baliseImage.src = slides[i].image;	
	tagLine.innerHTML = slides[i].tagLine;	
}

	// on fait avancer les sliders en boucle
function ShowSlide(){
	if( i >= slide) {
		i = 0;
	}
	if( i < 0) {
		i = slide-1;
	}
}


	// on fait avancer les dots en fonctions des images
function dot(){	
	for(let i = 0; i < dotElement.length; i++) {
		dotElement[i].classList.remove('dot_selected');/*je retire dot-selected de tous les points*/
	}	 
	dotElement[i].classList.add('dot_selected');/*j'ajoute dot-selected sur le point selectionné*/
}	
	
	// Ajout listener pour flèche de gauche
const arrowLeft = document.querySelector(".arrow_left");

arrowLeft.addEventListener("click", function() {
	i--;	
	ShowSlide()
	suivant()
	dot()
});

	// Ajout listener pour flèche de droite
const arrowRight = document.querySelector(".arrow_right");

arrowRight.addEventListener("click", function() {
	i++;
	ShowSlide()
	suivant()
	dot()
});

