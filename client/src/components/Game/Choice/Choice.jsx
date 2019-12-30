import React from "react";

const Choice = ({ onClick, message }) => {
    return (
        <div
            className="choice"
            onClick={onClick}
        >
            {message}
        </div>
    );
};

export default Choice;