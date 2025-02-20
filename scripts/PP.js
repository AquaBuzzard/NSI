let c_button = document.getElementById("connection_button");
let c_modal = document.getElementById("connection_modal");
let close_b = document.getElementById("modal_close_button");
let cont_b = document.getElementById("b_con");
let account_b = document.getElementById("account_b");
let body = document.getElementsByTagName("body");

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