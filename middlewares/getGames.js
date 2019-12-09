const fs = require("fs");
const path = require("path");

const getGames = (req, res, next) => {
    fs.readdir(path.join(__dirname, "../games"), (error, fileNames) => {
        if(error) return next(error);

        return Promise.all(fileNames.map(file => {
            return new Promise((resolve, reject) => {
                fs.readFile(path.join(__dirname, `../games/${file}`), "utf-8", (error, contents) => {
                    if(error){
                        reject(error);
                    } else {
                        //Iterate over keys and fill in all blanks
                        resolve(JSON.parse(contents));
                    }
                })
            });
        })).then(gameLibrary => {
            req.gameLibrary = gameLibrary;

            return next();
        }).catch(next);
    });
};

module.exports = getGames;