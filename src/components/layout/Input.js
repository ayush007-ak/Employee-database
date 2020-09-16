import React from 'react'



//passing Input as a props here 
const Input = (props) => {
    const {placeholder="Enter placeholder text", value, onChange,type="text", name} = props;
    return (
        <input
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        type={type}
        className="form-control" />
    );
}

export default Input
