import React from 'react';

function Button ({title, text, disabled}) {
    return (
        <button
            type="button"
            disabled={disabled}
            onClick={() => console.log({text})}
        >
            {title}
        </button>
    );
}

export default Button;