import React, { useEffect, useState } from "react";
import { Howl, Howler } from "howler";

import { GameContextProvider, ThemeContext } from "../../contexts";
import { Error, GameOver, GameWon, Room, StartMenu } from "./Screens";
import Halloween from "../../audio/Halloween.mp3";

const Game = ({ cartridge, closeGame }) => {
    const { title, meta } = cartridge;
    const [ gameState, setGameState ] = useState({
        title,
        meta,
        screenDisplay: {
            start: true,
            gameOver: false,
            gameWon: false
        },
        isPlaying: false,
        isWon: false,
        isLost: false,
        playerLocation: null
    });

    const handleKeyPress = keyPress => {
        if(keyPress.keyCode === 88){
            closeGame();
        }
    };

    useEffect(() => {
        document.addEventListener("keydown", handleKeyPress);

        //**TODO: This is hard coded - find a way to make unique game tunes without importing all of them */
        const song = new Howl({
            src: Halloween,
            html5: true,
            autoplay: true,
            loop: true
        });

        return () => {
            document.removeEventListener("keydown", handleKeyPress);
            song.stop();
        };
    },[]);

    const renderScreen = () => {
        const { isPlaying, screenDisplay } = gameState;

        if(isPlaying && screenDisplay.room){
            return <Room />
        } else {
            if(screenDisplay.start){
                return <StartMenu />
            } else if(screenDisplay.gameOver){
                return <GameOver />
            } else if(screenDisplay.gameWon){
                return <GameWon />
            } else {
                return <Error />
            }
        }
    };

    return (
        <GameContextProvider
            gameState={gameState}
            setGameState={setGameState}
            cartridge={cartridge}
        >
            <div className={`${cartridge.meta.theme} game-wrapper`}>
                <div className="options">
                    <p onClick={closeGame}>EXIT TO ADVENGINE [X]</p>
                </div>
                { renderScreen() }
            </div>
        </GameContextProvider>
    );
};

export default Game;