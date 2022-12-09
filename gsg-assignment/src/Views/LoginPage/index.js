import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import style from "./style.module.css";
import { Navigate, redirect } from "react-router-dom";
function LoginPage() {
  const [formData, setFormData] = useState({});
  const [cookies, setCookie] = useCookies([]);
  const handleUserNameChange = (e) => {
    setFormData({ ...formData, username: e.target.value });
  };
  const handlePasswordChange = (e) => {
    setFormData({ ...formData, password: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    const data = await axios.post(
      "https://fakestoreapi.com/auth/login",
      formData
    );
    setCookie("token", data.data.token, { path: "/" });
    setCookie("name", formData.username, { path: "/" });
    window.location.reload();
  };
  if (!!cookies.name) return <Navigate to="/" />;
  else
    return (
      <>
        <section className={`${style.def} ${style.bgg}`}>
          <div className={style.container}>
            <div className={style.screen}>
              <div className={style.screenContent}>
                <form className={style.login}>
                  <div className={style.loginField}>
                    <i className={`${style.login__icon} ${style.fas}`}></i>
                    <input
                      type="text"
                      value={formData.username}
                      className={style.login__input}
                      onChange={handleUserNameChange}
                      placeholder="User name"
                    />
                  </div>
                  <div className={style.login__field}>
                    <i className={`${style.login__icon} ${style.fas}`}></i>
                    <input
                      type="password"
                      value={formData.password}
                      className={style.login__input}
                      onChange={handlePasswordChange}
                      placeholder="Password"
                    />
                  </div>
                  <button
                    className={`${style.button} ${style.login__submit}`}
                    onClick={handleSubmit}
                  >
                    <span className={style.button__text}>Log In Now</span>
                    <i className={`${style.button__icon} ${style.fas}`}></i>
                  </button>
                </form>
              </div>
              <div className={style.screen__background}>
                <span
                  className={`${style.screen__background__shape} ${style.screen__background__shape4}`}
                ></span>
                <span
                  className={`${style.screen__background__shape} ${style.screen__background__shape3}`}
                ></span>
                <span
                  className={`${style.screen__background__shape} ${style.screen__background__shape2}`}
                ></span>
                <span
                  className={`${style.screen__background__shape} ${style.screen__background__shape1}`}
                ></span>
              </div>
            </div>
          </div>
        </section>
      </>
    );
}
export default LoginPage;
