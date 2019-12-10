import React, { useContext } from "react";

import { GameContext } from "../../../contexts";
import ChoiceGroup from "../ChoiceGroup";

const GameWon = () => {
    const { goToStartMenu } = useContext(GameContext);

    return (
        <div id="GameWon">
            <h1 className="title landing">You Win!</h1>
            <ChoiceGroup
                className="game-won-choice-group"
            >
                <button onClick={goToStartMenu} >Play Again</button>
            </ChoiceGroup>
        </div>
    );
};

export default GameWon;