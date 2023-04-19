import React from 'react';

interface ButtonProps {
    text?: string
}

const Button: React.FC<ButtonProps> = ({ text = 'World' }) => {
    return (
        <button>hi team {text}</button>
    );
}

export default Button;