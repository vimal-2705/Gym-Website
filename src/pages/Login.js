import React from "react";

function Login() {
  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login login-name">
          <i class="fa fa-user" aria-hidden="true"></i>
          <input type="text" name="username" placeholder="Username..."></input>
        </div>
        <div className="login login-password">
          <i class="fa fa-unlock-alt" aria-hidden="true"></i>
          <input
            type="password"
            name="password"
            placeholder="Password..."
          ></input>
        </div>
      </div>
    </div>
  );
}

export default Login;
