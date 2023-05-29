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

const baliseImage = document.querySelector(".banner-img");
const tagLine = document.querySelector("#banner p");
const dotElements = document.getElementsByClassName("dot");/*récupère toutes les class dot*/
const dotsElement = document.querySelector(".dots");

let currentSlide = 0

	// création des dots
for(let i = 0; i < slides.length; i++) {	
	const div = document.createElement("div");
	div.classList.add("dot");			
	dotsElement.appendChild(div);		
}

	// on change la source de l'image et du paragraphe
function next(){
	baliseImage.src = slides[currentSlide].image;	
	tagLine.innerHTML = slides[currentSlide].tagLine;	
}

	// On appel la fonction pour afficher le 1er objet de sliders
next()

	// on fait avancer le sliders en boucle
function showSlide(){
	if(currentSlide >= slides.length) {
		currentSlide = 0;
	}
	if(currentSlide < 0) {
		currentSlide = slides.length - 1;
	}
}

	// on fait avancer les dots en fonctions des images
function dot(){	
	for(i = 0; i < dotElements.length; i++) {
		dotElements[i].classList.remove('dot_selected');/*je retire dot-selected de tous les points*/
	}	
	dotElements[currentSlide].classList.add('dot_selected');/*j'ajoute dot-selected sur le point selectionné*/
}	
// function dot(){		/*seulement si les "dot" sont crées directement dans le DOM avec ajout de la balise "dot_selected"*/
// 	document.querySelector('.dot_selected').classList.remove('dot_selected');/*je retire dot-selected du dernier point slectionné*/		 
// 	dotElements[currentSlide].classList.add('dot_selected');/*j'ajoute dot-selected sur le point selectionné*/
// }	

	// Fonction qui regroupe les fonctions du slider
function updateSlide(){
	showSlide()
	next()
	dot()
}
	
	// Ajout listener pour flèche de gauche
const arrowLeft = document.querySelector(".arrow_left");

arrowLeft.addEventListener("click", function() {
	currentSlide--;	
	updateSlide()
});

	// Ajout listener pour flèche de droite
const arrowRight = document.querySelector(".arrow_right");

arrowRight.addEventListener("click", function() {
	currentSlide++;
	updateSlide()
});

