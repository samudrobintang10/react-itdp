import React from 'react'

function Input(props) {
    const {type, placeholder, value, onChange} = props;

  return (
    <input
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
  )
}

export default Input