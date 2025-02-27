var acc = document.getElementsByClassName("button has-background-white has-text-success mb-0 ml-0");
var i;

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

let c_button = document.getElementById("connection_button");
let c_modal = document.getElementById("connection_modal");
let close_b = document.getElementById("modal_close_button1");
let login_button = document.getElementById("login_button");


let username = "";
let userpassword = "";
let userpoints = 0;
let user_display = document.getElementById("user_static_button");
let points_display = document.getElementById("points_static_button");
let user_button_username = document.getElementById("user_button_username")
let connection_button = document.getElementById("connection_button");

async function getUser(usid) {
  try {
    const url = `http://localhost:5000/users/${usid}`;
    const response = await fetch(url,
       {method: "GET", headers: { "Content-Type": "application/json"}});
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error(error.message);
  }
}


const user_id = localStorage.getItem("user_id");

if(user_id !== null){
  getUser(user_id).then((user_data) => {
    username = user_data.username;
    userpassword = user_data.password;
    userpoints = user_data.points;
  
    user_button_username.innerText = username;
    points_display.innerText = "Points: " + userpoints;
    user_display.style.display = "block";
    points_display.style.display = "block";
    connection_button.style.display = "none"; 
  })
}



c_button.onclick = function() {
  c_modal.classList.toggle("is-active")
}

close_b.onclick = function() {
  c_modal.classList.toggle("is-active")
}

async function getUserOnLogin(username, password) {
  try {
    const url = `http://localhost:5000/users/${username}/${password}`;
    const response = await fetch(url,
       {method: "GET", headers: { "Content-Type": "application/json"}});
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
     const data = await response.json();
    return data
  } catch (error) {
    console.error(error.message);
  }
}

login_button.onclick = function(){
  let demanding_password = document.getElementById("password_input").value;
  let demanding_username = document.getElementById("username_input").value;
 
  let user = getUserOnLogin(demanding_username, demanding_password);
  user.then((data) => {
    if(data == null) {
      alert("Nom d'utilisateur ou Mot de Passe incorrectes");
      
    }
    else {
      localStorage.setItem("user_id", data.id);
      getUser(data.id).then((user_data) => {
        username = user_data.username;
        userpassword = user_data.password;
        userpoints = user_data.points;
      
        user_button_username.innerText = username;
        points_display.innerText = "Points: " + userpoints;
        user_display.style.display = "block";
        points_display.style.display = "block";
        connection_button.style.display = "none"; 
      })
    } 

})
c_modal.classList.toggle("is-active")

}