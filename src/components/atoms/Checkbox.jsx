import React from 'react';

const Checkbox = ({ id, name, label, value, onChange, onBlur }) => {
  return (
    <div className="flex items-center space-x-2">
      <input
        type="checkbox"
        id={id}
        name={name}
        checked={value}
        onChange={onChange}
        onBlur={onBlur}
        className="w-4 h-4 border-gray-300 rounded focus:ring-blue-500"
      />
      <label htmlFor={id} className="text-gray-700">
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
