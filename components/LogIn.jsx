import React from "react";
import {FormInput, PasswordInput} from "./inputs/FormInputs";
import Link from "next/link";


export const LogIn = () => {

  return (
    <form class="form-signin flex flex-col justify-center align-items-center" style={{height: "70vh"}}>
      <div className="card d-flex p-4 gap-3" style={{minWidth: "35vw"}}>
        <div>
          {/* <img class="mb-4" src="" alt="" width="72" height="72" /> */}
        </div>
        <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
        <div className="flex flex-col gap-3" id="login-input-container">
          <FormInput type="email" label="Email Address" required={true} />
          <PasswordInput />
        </div>
        <div class="checkbox">
          <label>
            <input type="checkbox" value="remember-me" /> Remember me
          </label>
        </div>
        <div class="ForgotPassword">
          <label>
            <a href="#" className="underline" style={{color: "blue"}}> Forgot Password? </a>
          </label>
        </div>
        <div class="SignUp">
            <Link href="/signUp">
              <a> Don't have an account? <span className="underline" style={{color: "blue"}}>Sign up!</span> </a>
            </Link>
        </div>
        <button class="primary-button" type="submit">
          Sign in
        </button>
      </div>
    </form>
  );
};
