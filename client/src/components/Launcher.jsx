import React, { useEffect, useState } from "react";
import axios from "axios";

import Game from "./Game";

const Launcher = () => {
    const [gameLibrary, setGameLibrary] = useState([]);
    const [selectedGame, setSelectedGame] = useState({});

    useEffect(() => {
        axios.get("/api/games").then(({ data: gameLibrary }) => {
            setGameLibrary(gameLibrary);
        }).catch(error => {
            console.error(error);
        })
    }, []);

    const closeGame = () => {
        setSelectedGame({});
    };

    return (
        <div id="Launcher">
            {Object.entries(selectedGame).length > 0 
                ? (
                    <Game 
                        cartridge={selectedGame}
                        closeGame={closeGame}
                    />
                ) : (
                    <div className="game-selection-row">
                        {gameLibrary.map(game => <button onClick={() => setSelectedGame(game)}>{game.title}</button>)}
                    </div>
                )
            }
        </div>
    )
};

export default Launcher