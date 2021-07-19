let opentrash = document.querySelector('.trash');
let extrash = document.querySelector('.bar-trs');

let buttontrash = document.getElementById('clear');

buttontrash.onclick = function(){
    opentrash.classList.add('open');
}

extrash.onclick = function(){
    opentrash.classList.remove('open');
}