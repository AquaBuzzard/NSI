let product_column = document.getElementById("product_column");
let quantity_column = document.getElementById("quantity_column");
let price_column = document.getElementById("price_column");
let total_p = document.getElementById("total_paragraph");
let pay_button = document.getElementById("pay_b");

function addEntry(name, quantity, price) {
    let element = document.createElement("p");
    element.appendChild(document.createTextNode(name));
    product_column.appendChild(element);
  
    element = document.createElement("p");
    element.appendChild(document.createTextNode(quantity));
    quantity_column.appendChild(element);

    element = document.createElement("p");
    element.appendChild(document.createTextNode(price));
    price_column.appendChild(element);
  
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
            addEntry(element.product_name, element.quantity, element.price);
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

    pay_button.onclick = function(){
        sessionStorage.setItem('total_a_p', total)
        window.open ("commande_payement.html")
    }
}




