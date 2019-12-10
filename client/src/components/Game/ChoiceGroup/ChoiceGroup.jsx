import React from "react";
import FocusLock from "react-focus-lock";

const ChoiceGroup = ({ children, className = "" }) => {
    return (
        <FocusLock>
            <div  className={className}>
                {children}
            </div>
        </FocusLock>
    );
};

export default ChoiceGroup;