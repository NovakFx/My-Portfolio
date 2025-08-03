// Switch.jsx
import React from 'react';

const Switch = ({ onClick, checked }) => {
  return (
    <label
      htmlFor="nav_bar_icon"
      className="w-9 h-10 cursor-pointer flex flex-col items-center justify-center space-y-1.5 z-50"
      aria-label={checked ? 'Close navigation menu' : 'Open navigation menu'}
    >
      <input
        id="nav_bar_icon"
        type="checkbox"
        className="hidden peer"
        checked={checked}
        onChange={onClick}
      />
      <div className="w-2/3 h-1.5 bg-blue-400 rounded-lg transition-all duration-400 ease-in-out origin-right peer-checked:w-full peer-checked:rotate-[-30deg] peer-checked:translate-y-[-5px] z-50" />
      <div className="w-full h-1.5 bg-blue-400 rounded-lg transition-all duration-400 ease-in-out origin-center peer-checked:rotate-90 peer-checked:translate-x-4 z-50" />
      <div className="w-2/3 h-1.5 bg-blue-400 rounded-lg transition-all duration-400 ease-in-out origin-right peer-checked:w-full peer-checked:rotate-[30deg] peer-checked:translate-y-[5px] z-50" />
    </label>
  );
};

export default Switch;