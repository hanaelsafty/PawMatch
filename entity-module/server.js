const dns = require("dns");

dns.setServers(["8.8.8.8", "8.8.4.4"]);

require("dotenv").config();

const express = require("express");
const authRouter = require("./routes/auth-routes");
const petRouter = require("./routes/pet-routes");
const dbConnect = require("./config/db-connect");
const path = require("path");

const app = express();

dbConnect();

app.use(express.json());

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/pets", petRouter);

app.use(
    "/api/v1/uploads",
    express.static(path.join(__dirname, "uploads"))
);

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});