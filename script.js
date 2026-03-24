const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("nav");

hamburger.addEventListener("click", () => {
nav.classList.toggle("active");
});

// SLIDER
const images = [
"https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg",
"https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg",
"https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg"
];

let current = 0;

function showSlide(){
document.getElementById("slider-img").src = images[current];
}

function nextSlide(){
current = (current + 1) % images.length;
showSlide();
}

function prevSlide(){
current = (current - 1 + images.length) % images.length;
showSlide();
}

// PRICE CALCULATION
const checkin = document.getElementById("checkin");
const checkout = document.getElementById("checkout");

const pricePerNight = 420;

function calculate(){
if(checkin.value && checkout.value){
const start = new Date(checkin.value);
const end = new Date(checkout.value);
const nights = (end - start) / (1000*60*60*24);

if(nights > 0){
document.getElementById("totalPrice").innerText = "$" + (nights * pricePerNight);
}
}
}

checkin?.addEventListener("change", calculate);
checkout?.addEventListener("change", calculate);