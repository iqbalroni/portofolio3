let iconsettings = document.getElementById('set');
let pagesettings = document.querySelector('.settings');

let closeSetting = document.getElementById('set-close');

iconsettings.onclick = function(){
    pagesettings.classList.add('open');
}

closeSetting.onclick = function(){
    pagesettings.classList.remove('open');
}