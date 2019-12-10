const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const path = require("path");
const getGames = require("./middlewares/getGames");
const errorHandler = require("./middlewares/errorHandler");

//Serve static files from React
app.use(express.static(path.join(__dirname, "client/build")));

//Middlewares
app.use(getGames);
app.use(errorHandler);

//Routes
app.get("/api/games", (req, res) => {
    const gameLibrary = req.gameLibrary;

    res.status(200);
    res.send(gameLibrary);
});

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client/build/index.html"));
});

//Start server
app.listen(port, () => {
    console.log("server is up and running");
});