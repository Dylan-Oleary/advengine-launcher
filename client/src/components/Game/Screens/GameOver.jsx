import React, { useContext } from "react";

import { GameContext } from "../../../contexts";
import ChoiceGroup from "../ChoiceGroup";

const GameOver = () => {
    const { goToStartMenu } = useContext(GameContext);

    return (
        <div id="GameOver">
            <h1 className="title landing">Game Over</h1>
            <ChoiceGroup
                className="game-over-choice-group"
            >
                <button onClick={goToStartMenu}>Play Again</button>
            </ChoiceGroup>
        </div>
    );
};

export default GameOver;