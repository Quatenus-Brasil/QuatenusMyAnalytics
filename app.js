import "dotenv/config";
import axios from "axios";

// TODO: Tudo
async function getEvents() {
  try {
    const response = await axios.get(`${process.env.BASEURL}/${process.env.TESTE}`);

    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
}

getEvents();
