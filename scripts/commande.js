let cart = {};

let buttons_minus = document.getElementsByClassName("minus_b");
let buttons_plus = document.getElementsByClassName("plus_b");
let quantity_counters = document.getElementsByClassName("quantity_counter");
let next_button = document.getElementById("next_b");



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
