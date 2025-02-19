let button = document.getElementById("b_pay");
let modal = document.getElementById("mod_pay");
let closeButton = document.getElementById("close_x");
let contButton = document.getElementById("continue_b");


button.onclick = function(){
  modal.classList.toggle("is-active")
}
closeButton.onclick = function(){
  modal.classList.toggle("is-active")
}
contButton.onclick = function(){
  modal.classList.toggle("is-active")
}