import React, { createContext } from "react";

export const GameContext = createContext();

export const GameContextProvider = ({
    children,
    gameState,
    setGameState,
    cartridge
}) => {

    const startGame = () => {
        setGameState({
            ...gameState,
            screenDisplay: {
                start: false,
                gameOver: false,
                gameWon: false,
                room: true
            },
            isPlaying: true,
            currentLevel: cartridge["levels"]["1"],
            currentRoom: cartridge["levels"]["1"]["rooms"]["1"],
        });
    };

    const loseGame = () => {
        setGameState({
            ...gameState,
            isPlaying: false,
            currentLevel: null,
            currentRoom: null,
            screenDisplay: {
                start: false,
                gameOver: true,
                gameWon: false,
                room: false
            },
        });
    };

    const winGame = () => {
        setGameState({
            ...gameState,
            isPlaying: false,
            currentLevel: null,
            currentRoom: null,
            screenDisplay: {
                start: false,
                gameOver: false,
                gameWon: true,
                room: false
            },
        });
    }

    const goToStartMenu = () => {
        setGameState({
            ...gameState,
            isPlaying: false,
            currentLevel: null,
            currentRoom: null,
            screenDisplay: {
                start: true,
                gameOver: false,
                gameWon: false,
                room: false
            },
        });
    };

    const handlePlayerChoice = (newLevel, newRoom) => {
        setGameState({
            ...gameState,
            currentLevel: cartridge["levels"][newLevel],
            currentRoom: cartridge["levels"][newLevel]["rooms"][newRoom],
        });
    };

    return (
        <GameContext.Provider
            value={{
                gameState,
                startGame,
                loseGame,
                winGame,
                handlePlayerChoice,
                goToStartMenu
            }}
        >
            {children}
        </GameContext.Provider>
    )
};