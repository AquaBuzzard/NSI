const FLASK_SERVER = "http://localhost:5000/"

async function getRequest(url) {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
  
      const json = await response.json();
      console.log(json);
      return json;
    } catch (error) {
      console.error(error.message);
    }
}

async function getUser() {
    const url = `${FLASK_SERVER}/users`;
    data = getRequest(url);
    console.log(data);
}
