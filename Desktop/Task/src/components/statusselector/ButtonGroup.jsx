import React from 'react';
import './ButtonGroup.css';

const ButtonGroup = ({ options, selectedOption, onOptionSelect }) => {
  return (
    <div className="button-group">
      {options.map((option) => (
        <button
            style={{fontFamily:'inherit' }}
          key={option}
          className={`button ${option === selectedOption ? 'selected' : ''}`}
          onClick={() => onOptionSelect(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default ButtonGroup;
