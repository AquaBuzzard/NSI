let button1 = document.getElementById("pickup_b");

async function getData() {
    const url = "http://localhost:5000/users";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
  
      const json = await response.json();
      console.log(json);
    } catch (error) {
      console.error(error.message);
    }
}

button1.onclick = getData;