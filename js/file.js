let popup = document.querySelector('.openfile');
let exit = document.querySelector('.exit');
let ex = document.querySelector('.ex');
let minim = document.querySelector('.minim');
let show = document.querySelector('.show');
let showmin = document.querySelector('.min');

// container
let jumbotron = document.querySelector('.jumbotron');

// button
let button = document.getElementById('file');
let button2 = document.getElementById('file2');

button.onclick = function(){
    popup.style.borderRadius= "15px";
    ex.style.borderRadius = "0 15px 0 0";
    show.style.display = "block";
    showmin.style.display = "none";
    popup.style.width = "80%";
    popup.style.height = "500px";
    popup.style.top= "50%";
    popup.classList.add('active');
    jumbotron.style.height = "400px";
}

button2.onclick = function(){
    popup.style.borderRadius= "15px";
    ex.style.borderRadius = "0 15px 0 0";
    show.style.display = "block";
    showmin.style.display = "none";
    popup.style.width = "80%";
    popup.style.height = "500px";
    popup.style.top= "50%";
    popup.classList.add('active');
    jumbotron.style.height = "400px";
}

exit.onclick = function(){
    popup.classList.remove('active');
}
minim.onclick = function(){
    popup.style.top= "150%";
    popup.classList.remove('active');
    popup.style.width = "0";
}

show.onclick = function(){
    popup.style.width = "100%";
    popup.style.height = "100%";
    popup.style.borderRadius= "0";
    ex.style.borderRadius = "0";
    show.style.display = "none";
    showmin.style.display = "block";
    jumbotron.style.height = "600px";
}

showmin.onclick = function(){
    popup.style.width = "80%";
    popup.style.height = "500px";
    popup.style.borderRadius= "15px";
    ex.style.borderRadius = "0 15px 0 0";
    show.style.display = "block";
    showmin.style.display = "none";
    jumbotron.style.height = "400px";
}