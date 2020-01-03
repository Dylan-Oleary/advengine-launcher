import React, { useContext } from "react";

import { GameContext } from "../../../contexts";
import ChoiceGroup from "../ChoiceGroup";
import Choice from "../Choice";

const Room = () => {
    const { gameState, movePlayer, loseGame, winGame } = useContext(GameContext);
    const { playerLocation } = gameState;

    const renderChoice = (choice, index) => {
        let clickHandler;

        if(choice.exit.effect === null){
            clickHandler = () => movePlayer(choice.exit.level, choice.exit.room);
        } else {
            if(choice.exit.effect === "win"){
                clickHandler = () => winGame(choice.exit.effectDescription);
            } else {
                clickHandler = () => loseGame(choice.exit.effectDescription);
            }
        }

        return (
            <Choice
                key={index}
                onClick={clickHandler}
                message={choice.message}
            />
        );
    };

    return (
        <div id="Room">
            <h2 className="room-message">{playerLocation.scenario}</h2>
            <ChoiceGroup
                className="room-choice-group"
            >
                {playerLocation.choices && playerLocation.choices.map((choice, index) => renderChoice(choice, index))}
            </ChoiceGroup>
        </div>
    );
};

export default Room;