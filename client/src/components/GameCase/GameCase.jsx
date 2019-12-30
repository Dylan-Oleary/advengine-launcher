import React, { useState } from "react";

const GameCase = ({ game, startGame }) => {
    const [ isHovering, setIsHovering ] = useState(false);
    const { cover } = game.meta;

    console.log(isHovering)

    return (
        <div className="game-case">
            <img
                className={isHovering ? "hover" : ""}
                src={require(`../../images/${cover}`)}
                alt=""
            />
            <div
                className={`choice ${isHovering ? "hover" : ""}`}
                onClick={() => startGame(game)}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
            >
                Play
            </div>
        </div>
    );
};

export default GameCase;