import React, { createContext } from "react";

export const GameContext = createContext();

export const GameContextProvider = ({
    children,
    gameState,
    setGameState,
    cartridge
}) => {
    const { levels } = cartridge;

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
            playerLocation: levels[0]["rooms"][0]
        });
    };

    const loseGame = () => {
        setGameState({
            ...gameState,
            isPlaying: false,
            playerLocation: null,
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
            playerLocation: null,
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
            playerLocation: null,
            screenDisplay: {
                start: true,
                gameOver: false,
                gameWon: false,
                room: false
            },
        });
    };

    const movePlayer = (newLevel, newRoom) => {
        console.log(newLevel)
        console.log(newRoom)

        console.log(levels[newLevel].rooms[0])
        setGameState({
            ...gameState,
            playerLocation: levels[newLevel]["rooms"][newRoom]
        });
    };

    return (
        <GameContext.Provider
            value={{
                gameState,
                startGame,
                loseGame,
                winGame,
                movePlayer,
                goToStartMenu
            }}
        >
            {children}
        </GameContext.Provider>
    );
};