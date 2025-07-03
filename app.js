import "dotenv/config";
import axios from "axios";
import cron from "node-cron";
import * as convert from "xml-js";

async function getEvents() {
  try {
    const response = await axios.get(`${process.env.BASEURL}/${process.env.TESTE}`);

    // Convertendo a resposta para JSON
    // TODO: O JSON convertido está meio estranho, talvez olhar mais algumas opções do xml-js pra tentar melhorar a conversão
    console.log(convert.xml2json(response.data, { compact: true, spaces: 4 }));
  } catch (error) {
    console.log(error);
  }
}

// O código abaixo usa uma expressão cron para chamar a função getEvents() a cada 5 minutos.
// https://tool.crontap.com/cronjob-debugger
cron.schedule('*/5 * * * *', () => {
  getEvents()
})

// getEvents();
