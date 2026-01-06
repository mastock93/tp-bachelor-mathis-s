let slideIndex = 1;
let slides = document.getElementsByClassName("slide");
let dots = document.getElementsByClassName("dot");

showSlides(slideIndex);

// Contrôle suivant/précédent
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Contrôle des points (dots)
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}


for (let i = 0; i < dots.length; i++) {
    dots[i].addEventListener("click", function() {
        currentSlide(i + 1);

    });
}

document.getElementById("prev").addEventListener("click", function() {
    plusSlides(-1);
});

document.getElementById("next").addEventListener("click", function() {
    plusSlides(1);
});