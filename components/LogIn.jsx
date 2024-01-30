import React from "react";

export const LogIn = () => {
  return (
    <form class="form-signin flex flex-col justify-center align-items-center">
      <div className="card p-4 gap-3" style={{width: "40vw"}}>
        <div>
          {/* <img class="mb-4" src="" alt="" width="72" height="72" /> */}
        </div>
        <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
        <div className="flex flex-col gap-3" id="login-input-container">
          <div id="email-input-container">
            <label for="inputEmail" class="sr-only">
              Email address
            </label>
            <input
              type="email"
              id="inputEmail"
              class="form-control p-1 text-white"
              placeholder="Email address"
              required=""
              autoFocus=""
            />
          </div>
          <div id="password-input-container">
            <label for="inputPassword" class="sr-only">
              Password
            </label>
            <input
              type="password"
              id="inputPassword"
              class="form-control p-1 text-white"
              placeholder="Password"
              required=""
              fdprocessedid="0yizag"
            />
          </div>
        </div>
        <div class="checkbox">
          <label>
            <input type="checkbox" value="remember-me" /> Remember me
          </label>
        </div>
        <button class="primary-button" type="submit" fdprocessedid="of74gx">
          Sign in
        </button>
      </div>
    </form>
  );
};
