import React from "react";

const Choice = ({ onClick, message, choiceRef }) => {
    return (
        <button
            className="choice"
            onClick={onClick}
            ref={choiceRef}
        >
            {message}
        </button>
    );
};

export default Choice;