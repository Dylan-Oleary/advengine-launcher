import React, { useContext } from "react";

import { GameContext } from "../../../contexts";
import ChoiceGroup from "../ChoiceGroup";

const GameOver = () => {
    const { goToStartMenu, gameState } = useContext(GameContext);
    const { playerMessage } = gameState;

    return (
        <div id="GameOver">
            <h1 className="title landing">Game Over</h1>
            <div className="summary landing">{playerMessage}</div>
            <ChoiceGroup
                className="game-over-choice-group"
            >
                <div
                    className="choice"
                    onClick={goToStartMenu}
                >
                    Play Again
                </div>
            </ChoiceGroup>
        </div>
    );
};

export default GameOver;