import React, { useEffect, useState } from "react";
import axios from "axios";

import "../fonts/8-Bit.ttf";
import "../fonts/Serif-Gothic.otf";
import AdvengineLogo from "../images/advengine.png";

import AudioPlayer from "./AudioPlayer";
import Game from "./Game";
import GameCase from "./GameCase";


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
                    <div className="choose-game">
                        <AudioPlayer />
                        <img
                            className="logo"
                            src={AdvengineLogo}
                            alt=""
                        />
                        <div className="game-selection">
                            <h2 className="header">CHOOSE YOUR ADVENTURE...</h2>
                            <div className="games">
                                {gameLibrary.map(game => (
                                    <GameCase
                                        startGame={setSelectedGame}
                                        game={game}
                                    />
                                ))}
                            </div>
                        </div>
                        <div className="footer">
                            <p>&copy; 2020 WALKAWAY WILD INC.</p>
                            <p>HAPPY BIRTHDAY MOTHER F#@KER!</p>
                        </div>
                    </div>
                )
            }
        </div>
    )
};

export default Launcher