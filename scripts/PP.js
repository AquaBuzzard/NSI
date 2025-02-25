let c_button = document.getElementById("connection_button");
let c_modal = document.getElementById("connection_modal");
let close_b = document.getElementById("modal_close_button1");
let cont_b = document.getElementById("b_cont");
let account_b = document.getElementById("account_b");


function navb_b_manage(logged_in){
  if(logged_in == true){
    c_button.style.display = "none";
    account_b.style.display = "block";
  }
  else{
    c_button.style.display = "block";
    account_b.style.display = "none";
  }
}

c_button.onclick = function() {
  c_modal.classList.toggle("is-active")
}

close_b.onclick = function() {
  c_modal.classList.toggle("is-active")
}

cont_b.onclick = function() {
  c_modal.classList.toggle("is-active")
}

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

