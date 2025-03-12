var acc = document.getElementsByClassName("button has-background-white has-text-link mb-0 ml-0");
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
function openTab(evenement, tabName) {
 
  var i, tabcontent;

  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
    
  }

  document.getElementById(tabName).style.display = "block";
  evenement.currentTarget.className += "is-active";
}

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