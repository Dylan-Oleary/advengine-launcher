const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const getGames = require("./middlewares/getGames");
const errorHandler = require("./middlewares/errorHandler");

app.use(getGames);
app.use(errorHandler);

app.get("/", (req, res) => {
    const gameLibrary = req.gameLibrary;

    res.status(200);
    res.send(gameLibrary);
});

app.listen(port, () => {
    console.log("server is up and running");
});