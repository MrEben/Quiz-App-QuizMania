import React from "react";

const AuthForm = ({ headerName, closemodal, cta }) => {
  return (
    <div className="modal-overlay">
      <div className="wrapper modal-content">
        <form className="form-signin">
          <h2 className="form-signin-heading">{headerName}</h2>
          <input
            type="text"
            className="form-control"
            name="username"
            placeholder="Email Address"
            required
            autoFocus
          />
          <input
            type="password"
            className="form-control"
            name="password"
            placeholder="Password"
            required
          />
          <label className="checkbox">
            <input
              type="checkbox"
              value="remember-me"
              id="rememberMe"
              name="rememberMe"
            />{" "}
            Remember me
          </label>
          <button
            className="btn btn-lg btn-primary btn-block"
            type="submit"
            onClick={closemodal}
          >
            {cta}
          </button>

          <button className="btn btn-secondary">
            Dont have an account? {cta === "Register" ? "Login" : "Register"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AuthForm;
