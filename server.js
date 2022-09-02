const cron = require("node-cron");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const axios = require("axios");

const app = express();

app.use((req, res, next) => {
  console.log(`Request_Endpoint: ${req.method} ${req.url}`);
  next();
});

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(cors());

const api = require("./routes/routes");
app.use("/api/v1/", api);

// CRON JOB EXECUTANDO DE UM EM UM MINUTO
cron.schedule("* * * * *", () =>
  axios.get("http://localhost:5000/api/v1/send-log-wordpress")
);

app.listen(5000, () => console.log(`BACK_END_SERVICE_PORT: ${5000}`));
