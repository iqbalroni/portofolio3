let buttonwa = document.getElementById('wa');
let reply = document.getElementById('balas');
let whatsapp = document.querySelector('.whatsapp');
let exwhatsapp = document.querySelector('.exit-wht');
let minwhatsapp = document.querySelector('.minim-wht');

// zoom in out
let showwhatsapp = document.querySelector('.show-wht');
let outwhatsapp = document.querySelector('.min-wht');


let icon = document.querySelector('.show-min-wht');

// wallpaper
let wa = document.querySelector('.wa');



reply.onclick = function(){
    whatsapp.style.top = "46%";
    whatsapp.style.width = "55%";
    whatsapp.classList.add('active');
    showwhatsapp.style.display = "block";
    outwhatsapp.style.display = "none";
    wa.style.height = "95%";
}
buttonwa.onclick = function(){
    whatsapp.style.top = "46.%";
    whatsapp.style.width = "55%";
    whatsapp.classList.add('active');
    showwhatsapp.style.display = "block";
    outwhatsapp.style.display = "none";
    wa.style.height = "95%";
}
exwhatsapp.onclick = function(){
    whatsapp.classList.remove('active');
}
minwhatsapp.onclick = function(){
    whatsapp.style.top = "150%";
    whatsapp.style.width = "0";
}

showwhatsapp.onclick = function(){
    // whatsapp.style.transition = "all 1s ease-in-out";
    whatsapp.style.width = "90%";
    whatsapp.style.height = "85%";
    whatsapp.style.top = "50%";
    whatsapp.style.left = "50%";
    showwhatsapp.style.display = "none";
    outwhatsapp.style.display = "block";
    wa.style.height = "95%";
}

icon.onclick = function(){
    whatsapp.style.width = "55%";
    whatsapp.style.height = "90%";
    whatsapp.style.top = "46%";
    whatsapp.style.left = "52%";
    showwhatsapp.style.display = "block";
    outwhatsapp.style.display = "none";
    wa.style.height = "95%";
}