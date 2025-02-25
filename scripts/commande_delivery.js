let c_button = document.getElementById("connection_button");
let c_modal = document.getElementById("connection_modal");
let close_b = document.getElementById("modal_close_button1");
let cont_b = document.getElementById("b_cont");
let account_b = document.getElementById("account_b");

c_button.onclick = function() {
    c_modal.classList.toggle("is-active")
  }
  
  close_b.onclick = function() {
    c_modal.classList.toggle("is-active")
  }
  
  cont_b.onclick = function() {
    c_modal.classList.toggle("is-active")
  }

let map = document.getElementById("em_map");