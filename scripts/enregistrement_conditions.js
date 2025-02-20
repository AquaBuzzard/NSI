let checkbox = document.getElementById("t_checkbox");
let button = document.getElementById("cont_b");
let active = false;
let f = false;
let v = true;

checkbox.onclick = function(){
    if(active == f){
        active = true
        button.style.display = "block"
    }
    else if(active == v){
        active = false
        button.style.display = "none"
    }
}

button.onclick = function(){
    location.href = 'enregistrement.html'
}
