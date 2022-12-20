import React from "react";

import "./styles.css";

function TextInput({
  label,
  id,
  type,
  onChange,
  InputRef,
  value,
  name,
  required,
}) {
  return (
    <div>
      <label fhtmlFor={id} className={"form-label"}>
        {label}
      </label>
      <input
        type={type}
        required={required}
        id={id}
        value={value}
        name={name}
        onChange={onChange}
        ref={InputRef}
        className="form-control input-style"
      />
    </div>
  );
}
export default TextInput;
