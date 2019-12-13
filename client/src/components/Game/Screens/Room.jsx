import React, { useContext, useEffect, useRef } from "react";

import { GameContext } from "../../../contexts";
import ChoiceGroup from "../ChoiceGroup";
import Choice from "../Choice";

const Room = () => {
    const { gameState, movePlayer, loseGame, winGame } = useContext(GameContext);
    const { playerLocation } = gameState;
    const firstChoice = useRef(null);

    useEffect(() => {
        firstChoice.current.focus();
    }, [firstChoice.current])

    const renderChoice = (choice, index) => {
        let clickHandler;

        if(choice.effect === null){
            clickHandler = () => movePlayer((playerLocation.level + 1), choice.id);
        } else {
            if(choice.effect === "win"){
                clickHandler = () => winGame();
            } else {
                clickHandler = () => loseGame();
            }
        }

        return (
            <Choice
                key={index}
                onClick={clickHandler}
                message={choice.message}
                choiceRef={index === 0 ? firstChoice : null}
            />
        );
    };

    return (
        <div id="Room">
            <h2 className="room-message">{playerLocation.room.scenario}</h2>
            <ChoiceGroup
                className="room-choice-group"
            >
                {playerLocation.room.choices && playerLocation.room.choices.map((choice, index) => renderChoice(choice, index))}
            </ChoiceGroup>
        </div>
    );
};

export default Room;