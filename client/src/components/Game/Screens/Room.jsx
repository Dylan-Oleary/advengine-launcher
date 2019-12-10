import React, { useContext, useEffect, useRef } from "react";

import { GameContext } from "../../../contexts";
import ChoiceGroup from "../ChoiceGroup";

const Room = () => {
    const { gameState, handlePlayerChoice, loseGame, winGame } = useContext(GameContext);
    const { currentLevel, currentRoom } = gameState;
    const firstChoice = useRef();

    useEffect(() => {
        firstChoice.current.focus();
    }, [firstChoice.current])

    const renderChoice = (choice, index) => {
        let clickHandler;

        if(choice.exits.endCondition){
            if(choice.exits.endCondition === "win"){
                clickHandler = () => winGame();
            } else if(choice.exits.endCondition === "lose"){
                clickHandler = () => loseGame();
            }
        } else {
            clickHandler = () => handlePlayerChoice(choice.exits.level, choice.exits.room);
        }

        return (
            <button
                key={`${currentLevel.id}-${currentRoom.id}-${index}`}
                ref={index === 0 ? firstChoice : null}
                onClick={clickHandler}
            >
                {choice.message}
            </button>
        );
    };

    return (
        <div id="Room">
            <h2 className="room-message">{currentRoom.message}</h2>
            <ChoiceGroup
                className="room-choice-group"
            >
                {currentRoom.choices && currentRoom.choices.map((choice, index) => renderChoice(choice, index))}
            </ChoiceGroup>
        </div>
    );
};

export default Room;