import React, { createContext } from "react";
import { runInNewContext } from "vm";

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
            playerLocation: {
                level: 0,
                room: levels[0]["rooms"][0]
            }
        });
    };

    const loseGame = () => {
        setGameState({
            ...gameState,
            isPlaying: false,
            playerLocation: {
                level: null,
                room: null
            },
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
            playerLocation: {
                level: null,
                room: null
            },
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
            playerLocation: {
                level: null,
                room: null
            },
            screenDisplay: {
                start: true,
                gameOver: false,
                gameWon: false,
                room: false
            },
        });
    };

    const movePlayer = (newLevel, newRoom) => {
        setGameState({
            ...gameState,
            playerLocation: {
                level: newLevel,
                room: levels[newLevel]["rooms"][newRoom]
            }
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
    )
};