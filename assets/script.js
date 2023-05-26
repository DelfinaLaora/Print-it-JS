const slides = [
	{
		"image":"./assets/images/slideshow/slide1.jpg",
		"tagLine":`Impressions tous formats <span>en boutique et en ligne</span>`
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
	const bannerElement = document.querySelector("#banner");		
// 	bannerElement.appendChild(imageElement);		
// }
	
	
// for (i = 0; i < slides.length; i++) {
	// let image = document.getElementsByTagName('img');
	// img.src = slides[i].image;
	// image.className = ("banner-img");
	let baliseImage = document.getElementById("baliseImage")
	let tagLine = document.getElementById('baliseTagLine');
	// let tagLine = document.getElementsByTagName('p');
	// bannerElement.appendChild(tagLine)
	// baliseImage.innerHTML = tagLine
	// baliseImage.src = slides[0].image /*modifie l'image dans le dom*/
	
	const images = slides.map(slides => slides.image);/*fait appel aux images uniquement dans un nouveau tableau*/
	// const imageDelete = images.splice(0, 1);/*enlève la première image du tableau*/
	let i = 0

	baliseImage.src = images[i]
	let slide = images.length

	const tagLines = slides.map(slides => slides.tagLine);/*fait appel aux textes uniquement dans un nouveau tableau*/
	// const tagLinesDelete = tagLines.splice(0, 1);/*enlève le premier paragraphe du tableau*/

	// let contenuTagLine = tagLine.innerHTML;/*récupère le contenu du tagline dans le dom*/
	let newTagLine = `<p>${tagLines[i]}</p>`/*modifie la tagline dans le dom*/
	tagLine.innerHTML = newTagLine

function suivant(){
	baliseImage.src = images[i]
	newTagLine = `<p>${tagLines[i]}</p>`/*modifie la tagline dans le dom*/
	tagLine.innerHTML = newTagLine
}

	// Ajout listener pour flèche de gauche

const arrowLeft = document.querySelector(".arrow_left");

arrowLeft.addEventListener("click", function() {
	i--;	
	if( i >= slide) {
		i = 0;
	}
	if( i < 0) {
		i = slide-1;
	}
	suivant()
	
		console.log("Bonjour à gauche")	
	});


	// Ajout listener pour flèche de droite
const arrowRight = document.querySelector(".arrow_right");

arrowRight.addEventListener("click", function() {
	i++;
	if( i >= slide) {
		i = 0;
	}
	if( i < 0) {
		i = slide-1;
	}
	suivant()
	
	console.log("Bonjour à droite");
})

