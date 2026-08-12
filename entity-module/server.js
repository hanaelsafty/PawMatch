const dns = require("dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);

require("dotenv").config();
require("dotenv").config();

const express = require("express");
const dbConnect = require("./config/db-connect");
const petRouter = require("./routes/pet-routes");

const app = express();

dbConnect();

app.use(express.json());

app.use("/pet", petRouter);

app.use("/api/v1/uploads", express.static("uploads"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});