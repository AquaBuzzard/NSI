let c_button = document.getElementById("connection_button");
let c_modal = document.getElementById("connection_modal");
let close_b = document.getElementById("modal_close_button1");
let login_button = document.getElementById("login_button");

let cart = {};

let buttons_minus = document.getElementsByClassName("minus_b");
let buttons_plus = document.getElementsByClassName("plus_b");
let quantity_counters = document.getElementsByClassName("quantity_counter");
let next_button = document.getElementById("next_b");

c_button.onclick = function() {
  c_modal.classList.toggle("is-active")
}

close_b.onclick = function() {
  c_modal.classList.toggle("is-active")
}

function updateQuantities(){
  for(let i=0; i<quantity_counters.length; i++){
    let counter = quantity_counters[i];
    let product = counter.parentElement.parentElement.getAttribute("data-product");
    let quantity = cart[product];
    if(quantity === undefined){
      quantity = 0;
    }
    counter.innerText = quantity;
  }
}

async function createNewOrder() {
  try {
    const url = "http://localhost:5000/orders";
    console.log(JSON.stringify(cart))
    const response = await fetch(url,
       {method: "POST", headers: { "Content-Type": "application/json"},
        body: JSON.stringify(cart)});
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    data = await response.json()
    sessionStorage.setItem("order_id", data.order_id)
    window.open("cart.html");
  } catch (error) {
    console.error(error.message);
  }

}

for(let i=0; i<buttons_minus.length; i++){
  let button = buttons_minus[i];
  button.onclick = function () {
    let product = this.parentElement.parentElement.getAttribute("data-product");
    let quantity = cart[product];
    if(quantity === undefined){
      quantity = 0;
    }
    cart[product] = Math.max(quantity - 1, 0);
    updateQuantities();
  }
}

for(let i=0; i<buttons_plus.length; i++){
  let button = buttons_plus[i];
  button.onclick = function () {
    let product = this.parentElement.parentElement.getAttribute("data-product");
    let quantity = cart[product];
    if(quantity === undefined){
      quantity = 0;
    }
    cart[product] = quantity + 1;
    updateQuantities();
  }
}

next_button.onclick = createNewOrder;

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
