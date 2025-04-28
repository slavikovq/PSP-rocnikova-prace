import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider";
import { useState } from "react";
import signInStyles from "../../scss/SignIn.module.scss";
import { loginUser } from "../../models/user";
import { alert } from "../../function/sweetalert";

export default function SignInForm() {
  const [formData, setFormData] = useState();
  const [info, setInfo] = useState();
  const navigate = useNavigate();
  const { login } = useAuth();

  const sendData = async () => {
    const res = await loginUser(formData);
    if (res.status === 200) {
      login(res.token);
      alert("success", "You were logged in succesfully!");
      return navigate("/");
    }

    if (res.status === 500) {
      alert("error", "Wrong email input!");
    }

    setInfo(res.message);
  };

  const handleInput = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleButton = (e) => {
    e.preventDefault();
    sendData();
  };

  return (
    <>
      <div className={signInStyles.signin}>
        <h2>Sign In</h2>
        <div className={signInStyles.signinForm}>
          <form>
            <div>
              <input
                type="email"
                placeholder="Enter your email"
                name="email"
                onChange={handleInput}
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Enter your password"
                name="password"
                onChange={handleInput}
              />
            </div>
            <p>{info}</p>
            <button type="submit" onClick={handleButton}>
              Sign In
            </button>
            <p>
              Dont have an account yet? <Link to={"/sign-up"}>Sign Up</Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
