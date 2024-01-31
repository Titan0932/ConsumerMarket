import React, { useState } from "react";

export const PasswordInput = () => {
  const [pwVisible, setpwVisible] = useState(false);

  const togglePwVisibility = () => {
    setpwVisible((prev) => !prev);
  };

  return (
    <div id="password-input-container" className="pw-input-container">
      <div>
        <label for="inputPassword" class="sr-only">
          Password
        </label>
        <input
          type={pwVisible ? "text" : "password"}
          id="inputPassword"
          className="form-control p-1 border-none"
          placeholder="Password"
          required={true}
          minLength={8}
        />
      </div>
      <div
        onClick={() => {
          togglePwVisibility();
        }}
        style={{ cursor: "pointer", borderLeft: "1px solid #dee2e6" }}
        className="d-flex justify-center items-center"
      >
        {pwVisible ? (
          <i class="bx bx-low-vision bx-sm"></i>
        ) : (
          <i class="bx bx-show bx-sm"></i>
        )}
      </div>
    </div>
  );
};

export const FormInput = (props) => {
  const { type, label, required= false } = props;

  return (
    <div id={`${type}-input-container`}>
      <label for={`input${type}`} class="sr-only">
        {label}
      </label>
      <input
        type={type}
        id={`input${type}`}
        class="form-control p-1"
        placeholder={label}
        required={required}
        autoFocus=""
      />
    </div>
  );
};
