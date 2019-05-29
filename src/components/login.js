import React from "react";

import "../checkStyle.scss";

export const Login = ({ getLogin }) => {
  let n, e, p;

  /* document.addEventListener("DOMContentLoaded", () => {
    n = document.getElementById("name").value;
    e = document.getElementById("email").value;
    p = document.getElementById("password").value;
  });*/

  const get = () => {
    n = document.getElementById("name").value;
    e = document.getElementById("email").value;
    p = document.getElementById("password").value;

    getLogin(n, e, p);
  };
  return (
    <div className="main_login">
      <div className="login_contain">
        <input id="name" placeholder="name" className="login_input" />
        <input id="email" placeholder="email" className="login_input" />
        <input id="password" placeholder="password" className="login_input" />
        <button onClick={() => get()}> log in</button>
      </div>
    </div>
  );
};
