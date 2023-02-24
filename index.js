console.log('+50'); 
 
// Burger 
 
var sidenav = document.getElementById("mySidenav"); 
var openBtn = document.getElementById("openBtn"); 
var closeBtn = document.getElementById("closeBtn"); 
 
openBtn.onclick = openNav; 
closeBtn.onclick = closeNav; 
 
 
function openNav(e) { 
  sidenav.classList.add("active"); 
  e.stopPropagation(); 
} 
 
 
function closeNav() { 
  sidenav.classList.remove("active"); 
} 
 
document.addEventListener("click", function(e) { 
  let actMenu = document.querySelector(".sidenav.active"); 
  if (actMenu && e.target !== actMenu && !actMenu.contains(e.target)) { 
    actMenu.classList.remove("active"); 
  } 
}); 
 
// console.log('\n+50'); 
 
// slider 
const prev = document.querySelector('.left') 
const next = document.querySelector('.right') 
cards = document.querySelectorAll('.card') 
dots = document.querySelectorAll('.dot') 
const slider  = document.querySelector('.adaptivny-slayder') 
let index = 1; 
const translateMap = { 
    0: 60, 
    1: 0, 
    2: -60 
} 
 
next.addEventListener('click', sliderNextClick); 
prev.addEventListener('click', sliderPrevClick); 
 
function sliderPrevClick(e) { 
    if (index == 0) { 
        index = cards.length - 1; 
    } else { 
        index--; 
    } 
 
    activeSlide(index); 
    activeDot(index); 
 
    if (window.innerWidth > 390) { // desktop 
        slider.style.transform = `translateX(${translateMap[index]}%)`; 
    } 
} 
 
function sliderNextClick(e) { 
    if (index == cards.length - 1) { 
        index = 0; 
    } else { 
        index++; 
    } 
 
    activeSlide(index); 
    activeDot(index); 
 
    if (window.innerWidth > 390) { // desktop 
        slider.style.transform = `translateX(${translateMap[index]}%)`; 
    } 
} 
 
 
const activeSlide = n =>{ 
    for(card of cards){ 
        card.classList.remove('active'); 
    } 
    cards[n].classList.add('active'); 
} 
 
const activeDot = n =>{ 
    for(dot of dots){ 
    dot.classList.remove('active_dot'); 
    } 
    dots[n].classList.add('active_dot'); 
}






// pop up

document.querySelector('.pop_up').addEventListener("click", function(e) { 
    let content = document.querySelector(".pop_up-item"); 
    if (content && e.target !== content && !content.contains(e.target)) { 
        document.querySelector('.pop_up').classList.remove("active"); 
    } 
});

function popupShowOnClick(e) {
    document.querySelector('.pop_up').classList.add("active"); 
}

function popupShowRegisterOnClick(e) {
    const signinDiv = document.querySelector('.pop_sign_in');
    const signupDiv = document.querySelector('.pop_sign_up');
    signinDiv.classList.remove("active");
    signupDiv.classList.add("active");
}

function popupShowLoginOnClick(e) {
    const signinDiv = document.querySelector('.pop_sign_in');
    const signupDiv = document.querySelector('.pop_sign_up');
    signupDiv.classList.remove("active");
    signinDiv.classList.add("active");
}

function signInOnClick(params) {
    const email = document.querySelector('.signin_email').value;
    const password = document.querySelector('.signin_password').value;

    alert(`email: ${email}\npassword: ${password}`);
}