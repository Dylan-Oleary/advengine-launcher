import React, { useContext } from "react";

import { GameContext } from "../../../contexts";
import ChoiceGroup from "../ChoiceGroup";

const StartMenu = () => {
    const { 
        startGame,
        gameState: {
            title,
            meta: {
                tagline,
                cover
            }
        }
    } = useContext(GameContext);

    return (
        <div id="StartMenu">
            <div className="cover-wrapper">
                <img src={require(`../../../images/${cover}`)} alt=""/>
            </div>
            <h1 className="title">{title.toUpperCase()}</h1>
            <div className="summary">{tagline}</div>
            <div className="d-flex justify-content-center">
                <div
                    className="choice"
                    onClick={startGame}
                >
                    Start
                </div>
            </div>
        </div>
    );
};

export default StartMenu;