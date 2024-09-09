import React from "react";

const FormSelect = ({ label, name, list, defaultValue, size }) => {
  return (
    <div className="form-control">
      <label htmlFor={name} className="label-text capitalize">
        {label}
      </label>
      <select
        id={name}
        name={name}
        defaultValue={defaultValue}
        className={`select select-bordered ${size}`}
      >
        {list.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FormSelect;
