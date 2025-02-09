import React from 'react';

const RadioButton = ({ name, options, value, onChange, onBlur }) => {
  return (
    <div className="flex flex-col space-y-2">
      {options.map((option) => (
        <label key={option.value} className="flex items-center space-x-2">
          <input
            type="radio"
            name={name}
            value={option.value}
            checked={value === option.value}
            onChange={onChange}
            onBlur={onBlur}
            className="w-4 h-4"
          />
          <span>{option.label}</span>
        </label>
      ))}
    </div>
  );
};

export default RadioButton;
