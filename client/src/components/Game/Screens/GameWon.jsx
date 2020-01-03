import React, { useContext } from "react";

import { GameContext } from "../../../contexts";
import ChoiceGroup from "../ChoiceGroup";

const GameWon = () => {
    const { goToStartMenu, gameState } = useContext(GameContext);
    const { playerMessage } = gameState;

    return (
        <div id="GameWon">
            <h1 className="title landing">You Win!</h1>
            <div className="summary landing">{playerMessage}</div>
            <ChoiceGroup
                className="game-won-choice-group"
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

export default GameWon;