let product_column = document.getElementById("product_column");
let quantity_column = document.getElementById("quantity_column");
let price_column = document.getElementById("price_column");
let points_column = document.getElementById("points_column");
let total_p = document.getElementById("total_paragraph");
let total_p_points = document.getElementById("total_paragraph_points");
let pay_button = document.getElementById("pay_b");

let c_button = document.getElementById("connection_button");
let c_modal = document.getElementById("connection_modal");
let close_b = document.getElementById("modal_close_button1");
let login_button = document.getElementById("login_button");

c_button.onclick = function() {
  c_modal.classList.toggle("is-active")
}

close_b.onclick = function() {
  c_modal.classList.toggle("is-active")
}

function addEntry(name, quantity, price, point_price) {
    let element = document.createElement("p");
    element.appendChild(document.createTextNode(name));
    product_column.appendChild(element);
  
    element = document.createElement("p");
    element.appendChild(document.createTextNode(quantity));
    quantity_column.appendChild(element);

    element = document.createElement("p");
    element.appendChild(document.createTextNode(price));
    price_column.appendChild(element);
    
    element = document.createElement("p");
    element.appendChild(document.createTextNode(point_price));
    points_column.appendChild(element);
}

async function getOrder(oid) {
    try {
      const url = `http://localhost:5000/orders/${oid}`;
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

const order_id = sessionStorage.getItem("order_id");

if(order_id !== undefined) {
    let order_data = getOrder(order_id);

    order_data.then((data) => {
        data.forEach(element => {
            addEntry(element.product_name, element.quantity, element.price, element.point_price);
        });
    });
    
    let total = order_data.then((data) => {
        let total = 0
        data.forEach(element => {
           
            total = total + (element.price * element.quantity);
           
            
        });
        total_p.textContent="Le total à payer est de: " + total +"€";
        return total
    });

    let totalpoints = order_data.then((data) =>{
        let totalpoints = 0
        data.forEach(element => {
            totalpoints = totalpoints - (element.point_price * element.quantity);
        });
        total_p_points.textContent="Ou: " + totalpoints + " points";
        return totalpoints
    })

    totalpoints.then((points) =>{
      sessionStorage.setItem("totalpoints", points);
    })
   

    pay_button.onclick = function(){
        sessionStorage.setItem('total_a_p', total)
        window.open ("commande_payement.html")
    }
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


