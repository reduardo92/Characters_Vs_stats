import React from 'react';

const Input = ({ name, label, value, onChange, addClass, onKeyUP }) => {
  return (
    <div className='form-group'>
      <label htmlFor={name}>
        <i className={addClass}> {label}</i>
      </label>
      <input
        className='form-control'
        type='text'
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        onKeyUp={onKeyUP}
      />
    </div>
  );
};

export default Input;
