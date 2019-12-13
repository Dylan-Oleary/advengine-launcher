import React, { useContext, useState } from "react";

import { GameContextProvider, ThemeContext} from "../../contexts";
import { Error, GameOver, GameWon, Room, StartMenu } from "./Screens";

const Game = ({ cartridge }) => {
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
                { renderScreen() }
            </div>
        </GameContextProvider>
    );
};

export default Game;