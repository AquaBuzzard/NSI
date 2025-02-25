let c_button = document.getElementById("connection_button");
let c_modal = document.getElementById("connection_modal");
let close_b = document.getElementById("modal_close_button1");
let cont_b = document.getElementById("b_cont");
let account_b = document.getElementById("account_b");
var acc = document.getElementsByClassName("button has-background-white has-text-success mb-0 ml-0");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function(){
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
};


c_button.onclick = function() {
    c_modal.classList.toggle("is-active")
};
  
close_b.onclick = function() {
    c_modal.classList.toggle("is-active")
};
  
cont_b.onclick = function() {
    c_modal.classList.toggle("is-active")
};

let tr1 = document.getElementById("tr1");
let tr2 = document.getElementById("tr2");
let tr3 = document.getElementById("tr3");
let tr4 = document.getElementById("tr4");
let tr5 = document.getElementById("tr5");
let tr6 = document.getElementById("tr6");
let tr7 = document.getElementById("tr7");
let tr8 = document.getElementById("tr8");
let tr9 = document.getElementById("tr9");
let tr10 = document.getElementById("tr10");
let tr11 = document.getElementById("tr11");
let tr12 = document.getElementById("tr12");
let tr13 = document.getElementById("tr13");
let continue_b = document.getElementById("continue_b");
let is_displayed = false;

tr1.onclick = function(){
    tr1.classList.toggle("is-selected")
    if (is_displayed == false){
        continue_b.style.display = "block"
        is_displayed = true
    } else if (is_displayed == true){
        continue_b.style.display = "none"
        is_displayed = false
    }
}
tr2.onclick = function(){
    tr2.classList.toggle("is-selected")
    if (is_displayed == false){
        continue_b.style.display = "block"
        is_displayed = true
    } else if (is_displayed == true){
        continue_b.style.display = "none"
        is_displayed = false
    }
}
tr3.onclick = function(){
    tr3.classList.toggle("is-selected")
    if (is_displayed == false){
        continue_b.style.display = "block"
        is_displayed = true
    } else if (is_displayed == true){
        continue_b.style.display = "none"
        is_displayed = false
    }
}
tr4.onclick = function(){
    tr4.classList.toggle("is-selected")
    if (is_displayed == false){
        continue_b.style.display = "block"
        is_displayed = true
    } else if (is_displayed == true){
        continue_b.style.display = "none"
        is_displayed = false
    }
}
tr5.onclick = function(){
    tr5.classList.toggle("is-selected")
    if (is_displayed == false){
        continue_b.style.display = "block"
        is_displayed = true
    } else if (is_displayed == true){
        continue_b.style.display = "none"
        is_displayed = false
    }
}
tr6.onclick = function(){
    tr6.classList.toggle("is-selected")
    if (is_displayed == false){
        continue_b.style.display = "block"
        is_displayed = true
    } else if (is_displayed == true){
        continue_b.style.display = "none"
        is_displayed = false
    }
}
tr7.onclick = function(){
    tr7.classList.toggle("is-selected")
    if (is_displayed == false){
        continue_b.style.display = "block"
        is_displayed = true
    } else if (is_displayed == true){
        continue_b.style.display = "none"
        is_displayed = false
    }
}
tr8.onclick = function(){
    tr8.classList.toggle("is-selected")
    if (is_displayed == false){
        continue_b.style.display = "block"
        is_displayed = true
    } else if (is_displayed == true){
        continue_b.style.display = "none"
        is_displayed = false
    }
}
tr9.onclick = function(){
    tr9.classList.toggle("is-selected")
    if (is_displayed == false){
        continue_b.style.display = "block"
        is_displayed = true
    } else if (is_displayed == true){
        continue_b.style.display = "none"
        is_displayed = false
    }
}
tr10.onclick = function(){
    tr10.classList.toggle("is-selected")
    if (is_displayed == false){
        continue_b.style.display = "block"
        is_displayed = true
    } else if (is_displayed == true){
        continue_b.style.display = "none"
        is_displayed = false
    }
}
tr11.onclick = function(){
    tr11.classList.toggle("is-selected")
    if (is_displayed == false){
        continue_b.style.display = "block"
        is_displayed = true
    } else if (is_displayed == true){
        continue_b.style.display = "none"
        is_displayed = false
    }
}
tr12.onclick = function(){
    tr12.classList.toggle("is-selected")
    if (is_displayed == false){
        continue_b.style.display = "block"
        is_displayed = true
    } else if (is_displayed == true){
        continue_b.style.display = "none"
        is_displayed = false
    }
}
tr13.onclick = function(){
    tr13.classList.toggle("is-selected")
    if (is_displayed == false){
        continue_b.style.display = "block"
        is_displayed = true
    } else if (is_displayed == true){
        continue_b.style.display = "none"
        is_displayed = false
    }
}
