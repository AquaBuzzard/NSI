let c_button = document.getElementById("connection_button");
let c_modal = document.getElementById("connection_modal");
let close_b = document.getElementById("modal_close_button");
let cont_b = document.getElementById("b_con");
var acc = document.getElementsByClassName("button has-background-white has-text-success mb-0 ml-0");
var i;

c_button.onclick = function(){
  c_modal.classList.toggle("is-active")
}
close_b.onclick = function(){
  c_modal.classList.toggle("is-active")
}
cont_b.onclick = function() {
  c_modal.classList.toggle("is-active")
}

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

