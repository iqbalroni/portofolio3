let win = document.getElementById('windows');
let menu = document.querySelector('.menu-windows');
let cls = document.getElementById('cls');

win.onclick = function(){
    menu.classList.add('active');
}

cls.onclick = function(){
    menu.classList.remove('active');
}