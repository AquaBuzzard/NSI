let submit_button = document.getElementById("subm_b");
let user_info = {name: "", lastname: "", email: "", username: "", points: 0, candidate_account: ""};
let input_fields = document.getElementsByClassName("input register_input");
let values = []

function registerSubmit(){
 for (let i=0; i<input_fields.length; i++){
    let field = input_fields[i];
    values.push(field.value)
 }
 let x = 0
 for(y in user_info){
    user_info[y] = values[x]
 }
 console.log(user_info);
 return user_info
}

async function createNewUSer() {
    try {
      const url = "http://localhost:5000/orders";
      console.log(JSON.stringify(user_info))
      const response = await fetch(url,
         {method: "POST", headers: { "Content-Type": "application/json"},
          body: JSON.stringify(user_info)});
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      data = await response.json()
      sessionStorage.setItem("user_id", data.user_id)
      window.open("cart.html");
    } catch (error) {
      console.error(error.message);
    }
  
  }

  submit_button.onclick = registerSubmit;
