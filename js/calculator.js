function insert(num){
    document.form.hasil.value = document.form.hasil.value+num;
}

function equal(){
    const exp = document. form.hasil.value;

    if(exp){
        document.form.hasil.value = eval(exp);
    }
}


function clean(){
    document.form.hasil.value = "";
}

function back(){
    const exp = document.form.hasil.value;
    document.form.hasil.value = exp.substring(0,exp.length-1);
}

let iconkalkulator = document.getElementById('icon-kalkulator');
let kalkulator = document.querySelector('.kalkulator');

let exitkalkulator = document.querySelector('.ex-kal');
let minimkalkulator = document.querySelector('.minim-kal');

iconkalkulator.onclick = function(){
    kalkulator.style.top = "50%";
    kalkulator.classList.add('open');
}

exitkalkulator.onclick = function(){
    kalkulator.classList.remove('open');
}

minimkalkulator.onclick = function(){
    kalkulator.style.top = "150%";
}