import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useRef, useState, useEffect, useContext } from "react";
import AuthContext from "../components/context/AuthProvider";
import axios from "axios";
const LOGIN_URL =
  "https://blogapi-production-87cd.up.railway.app/api/v1/signin";
const Login = () => {
  const { setAuth } = useContext(AuthContext);
  const errRef = useRef();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    // userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [email, password]);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ email, password }),
        {
          headers: { "content-type": "application/json" },
        }
      );
      console.log(JSON.stringify(Response?.data));
      //console.log(JSON.stringify(Response));
      const accessToken = response?.data?.token;
      localStorage.setItem("token", accessToken);
      console.log(accessToken);
      setAuth({ email, password, accessToken });
      setEmail("");
      setPassword("");
      setSuccess(true);
      console.log(email, password);
      navigate("/Chart");
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 400) {
        setErrMsg("Missing Username or password");
      } else if (err.response?.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Login Failed");
      }
      errRef.current.focus();
    }
  };
  return (
    <>
      {success ? (
        <section className="loginrespons">
          <h1>success!</h1>
          <p>
            <Link to="/Chart">Go to Home</Link>
          </p>
        </section>
      ) : (
        <div>
          <h1 className="logintop">LOGIN</h1>
          <form onSubmit={handleSubmit}>
            <p
              ref={errRef}
              className={errMsg ? "errmsg" : "offscreen"}
              aria-live="assertive"
            >
              {errMsg}
            </p>
            <label>Email</label>
            <input
              type="Email"
              id="Email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your Email"
            />
            <label>Password</label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="password"
              placeholder='Enter password"'
            />{" "}
            <br />
            <button>Login</button>
            <p>
              Don't have an account?{" "}
              <Link
                to="/register"
                style={{ color: "inherit", textDecoration: "inherit" }}
              >
                Signup
              </Link>
            </p>
          </form>

          <section id="footer">
            <div class="container footer">
              <Link
                to="/"
                style={{ color: "inherit", textDecoration: "inherit" }}
              >
                {" "}
                <h1>MY BLOG</h1>{" "}
              </Link>
            </div>
            <div class="container footer">
              <p>
                Quality Service Makes Different <br></br>
                Terms Of Service <br></br>
                Privacy Policy <br></br>
                <p>&copy;IC-25</p>
              </p>
            </div>
            <div class="container footer">
              <p>
                <b> NOT QUITE READY FOR BLOG</b> <br></br>
                Join our online blog no-code community for free.No spam.Ever{" "}
                <br></br>
                <input
                  id="footerinput"
                  type="Email"
                  placeholder="Enter your Email"
                />
                <button id="footerbutton">Subscribe</button> <br></br>
              </p>
            </div>
          </section>
        </div>
      )}
    </>
  );
};

export default Login;
