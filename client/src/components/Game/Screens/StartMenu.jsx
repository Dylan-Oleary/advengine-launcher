import React, { useContext } from "react";

import { GameContext } from "../../../contexts";
import ChoiceGroup from "../ChoiceGroup";

const StartMenu = () => {
    const { 
        startGame,
        gameState: {
            title,
            meta: {
                tagline
            }
        }
    } = useContext(GameContext);

    return (
        <div id="StartMenu">
            <h1 className="title main">{title}</h1>
            <div className="title tagline">{tagline}</div>
            <div className="d-flex justify-content-center">
                <button onClick={startGame}>Start</button>
            </div>
        </div>
    );
};

export default StartMenu;