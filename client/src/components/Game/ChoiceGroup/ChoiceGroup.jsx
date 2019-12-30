import React from "react";

const ChoiceGroup = ({ children, className = "" }) => {
    return (
        <div  className={className}>
            {children}
        </div>
    );
};

export default ChoiceGroup;