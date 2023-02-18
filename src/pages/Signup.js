import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {useNavigate } from "react-router-dom";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    console.log(name, email, password);
    try {
      await axios.post(
        "https://blogapi-wm30.onrender.com/api/v1/signup",
        JSON.stringify({ name, email, password }),
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      setSuccess(true);
      navigate("/Login");
    } catch (err) {
      console.error(err.response);
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 409) {
        setErrMsg("Username Taken");
      } else {
        setErrMsg("Registration Failed");
      }
    }
  };
  return (
    <>
      {success ? (
        <section className="signuprespons" >
          <h1>Success!</h1>
          <p>
            <Link to="/login">Log in</Link>
          </p>
        </section>
      ) : (
        <div>
          <h1 className="logintop">REGISTER HERE</h1>
          <p>{errMsg}</p>
          <form onSubmit={handleRegister}>
            <label>Username</label>
            <input
              type="text"
              id="names"
              placeholder="Enter your Username"
              onChange={(e) => setName(e.target.value)}
            />
            <label>Email</label>
            <input
              type="Email"
              id="Email"
              placeholder="Enter your Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <label>Password</label>
            <input
              type="password"
              id="password"
              placeholder='Enter password"'
              onChange={(e) => setPassword(e.target.value)}
            />{" "}
            <br />
            <button id="signbuton">Register</button>
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
}

export default Signup;
