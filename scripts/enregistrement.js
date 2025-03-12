let submit_button = document.getElementById("subm_b");
let form = document.getElementById("register_form");
let input_fields = document.getElementsByClassName("input register_input");
let is_logged = false

function getFormData(){
  let data = {};
  data["name"] = document.getElementById("input_firstname").value;
  data["lastname"] = document.getElementById("input_lastname").value;
  data["email"] = document.getElementById("input_email").value;
  data["username"] = document.getElementById("input_username").value;
  data["password"] = document.getElementById("input_password").value;
  data["candidate_account"] = document.getElementById("options_account_type").value == "client";
  return data;
}

async function createNewUSer() {
    try {
      const user_info = getFormData();
      const url = "http://localhost:5000/users";
      const response = await fetch(url,
         {method: "POST", headers: { "Content-Type": "application/json"},
          body: JSON.stringify(user_info)});
      if (!response.ok) {
        console.log("oops");
      }
      data = await response.json();
      localStorage.setItem("user_id", data.id);
    } catch (error) {
      console.error(error.message);
    }

    
    return true;
  }

  submit_button.onclick = createNewUSer;
