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

// Fonction qui génère toute la page
function showSlides(slides) { /*prends l'argument slides qui sera l'index à afficher */

	for(let i = 0; i < slides.length; i++) {

		const bullet = slides[i];
		const bannerElement = document.querySelector("#banner");

		// const bannerImgElement = document.querySelectorAll("img.banner-img");
		// bannerElement.appendChild(bannerImgElement);

		const imageElement = document.createElement("img");			
		imageElement.src = slides[i].image;
		// imageElement.src = bullet.image;
		bannerElement.appendChild(imageElement);
		// document.querySelector("img").appendChild("#banner-img");

		// const bannerImgElement = document.getElementsByClassName("banner-img");		
		// // imageElement.src = slides[i].image;
		// // // imageElement.src = bullet.image;
		// bannerElement.appendChild(bannerImgElement);

		const tagLineElement = document.createElement("p");
		tagLineElement.innerHTML = bullet.tagLine;
		bannerElement.appendChild(tagLineElement);

		const dotsElement = document.querySelector(".dots");

		const dotElement = document.querySelector(".dot");		
		dotsElement.appendChild(dotElement);
		// dotElement = slides[i];

		
		
	}		
}

// premier affichage de la page
showSlides(slides);


	// Ajout listener pour flèche de gauche
const arrowLeft = document.querySelector(".arrow_left");

arrowLeft.addEventListener("click", function() {
	// showSlides(slideIndex += n);
	console.log("Bonjour à gauche");	
})

// Ajout listener pour flèche de droite
const arrowRight = document.querySelector(".arrow_right");

arrowRight.addEventListener("click", function() {
	// showSlides(slideIndex = n);
	console.log("Bonjour à droite");	
})





