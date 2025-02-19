let c_button = document.getElementById("connection_button");
let c_modal = document.getElementById("connection_modal");
let close_b = document.getElementById("modal_close_button");
let cont_b = document.getElementById("b_con");

c_button.onclick = function() {
  c_modal.classList.toggle("is-active")
}

close_b.onclick = function() {
  c_modal.classList.toggle("is-active")
}

cont_b.onclick = function() {
  c_modal.classList.toggle("is-active")
}