const showAllButton = document.querySelector('#showAll');
const catsButton = document.querySelector('#cats');
const dogsButton = document.querySelector('#dogs');
const backTopButton = document.querySelector('#top');

// Interactive Recipe Gallery
const thumbImages = document.querySelectorAll('.thumb-img');

for(const image of thumbImages) {

    image.addEventListener('click', ()=> {

        const bigId = (image.id).split("-")[0];

        const bigImg = document.querySelector(`#${bigId}`);
        bigImg.src = image.src;

        for(let i = 1; i < 5; i++) {
            const thumbImg = document.querySelector(`#${bigId}-t${i}`);
            thumbImg.classList.remove('clicked');
        }
        image.classList.add('clicked');
    });
}


// Functions to redirect to a given page
function goToTravelPage() {
    window.location.href= "travel.html";
}

function goToPetsPage() {
    window.location.href= "pets.html";
}

function goToRecipesPage() {
    window.location.href= "recipes.html";
}

// Filtering chips: Functions to help filter animals cards
function showAllCards() {
    const allCats = document.querySelectorAll('.cat');
    const allDogs = document.querySelectorAll('.dog');

    for(const dog of allDogs) {
        dog.style.display = "block";
    }

    for(const cat of allCats) {
        cat.style.display = "block";
    }

    // Update the button state
    showAllButton.classList.add('selected');
    catsButton.classList.remove('selected');
    dogsButton.classList.remove('selected');

}

function filterDogs() {

    const allCats = document.querySelectorAll('.cat');
    const allDogs = document.querySelectorAll('.dog');

    for(const cat of allCats) {
        cat.style.display = "none";
    }

    for(const dog of allDogs) {
        dog.style.display = "block";
    }

    showAllButton.classList.remove('selected');
    catsButton.classList.remove('selected');
    dogsButton.classList.add('selected');
}

function filterCats() {
    const allCats = document.querySelectorAll('.cat');
    const allDogs = document.querySelectorAll('.dog');

    for(const cat of allCats) {
        cat.style.display = "block";
    }

    for(const dog of allDogs) {
        dog.style.display = "none";
    }

    showAllButton.classList.remove('selected');
    catsButton.classList.add('selected');
    dogsButton.classList.remove('selected');
}

// Function to add functionality to the Back to the Top button
window.onscroll = function() {scrollFunc()};

function scrollFunc() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        backTopButton.style.display = "block";
    } else {
        backTopButton.style.display = "none";
    }
}

function backtoTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}




document.querySelector('h1').innerHTML = "Maia";

document.querySelector('body').style.background = "lightblue";
document.querySelector('body').style.margin = "10%";

document.querySelector('#URL').innerHTML = document.URL;
document.querySelector('#items').innerHTML = document.querySelectorAll('h2').lenght;
document.querySelector('#time').innerHTML = new Date();

function copyFunction() {
    document.querySelector('#cheer').innerHTML += "<br>Go Blue!\n"
}