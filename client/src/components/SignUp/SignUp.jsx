import { Link, useNavigate } from "react-router-dom";
import signUpStyles from "../../scss/SignUp.module.scss";
import { useAuth } from "../../context/AuthProvider";
import { useEffect, useState } from "react";
import { registerUser } from "../../models/user";
import { alert } from "../../function/sweetalert"

export default function SignUpForm() {
  const [formData, setFormData] = useState();
  const [info, setInfo] = useState();
  const navigate = useNavigate();
  const { login } = useAuth();

  const sendData = async () => {
    const res = await registerUser(formData);
    if (res.status === 201) {
      login(res.token);
      return navigate("/");
    }

    if(res.status === 500){
      alert("error", "Wrong email input!")
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
      <div className={signUpStyles.signup}>
        <h2>Sign Up</h2>
        <div className={signUpStyles.signupForm}>
          <form>
            <div>
              <input type="text" placeholder="First name" name="firstName" onChange={handleInput}/>
            </div>
            <div>
              <input type="text" placeholder="Last name" name="lastName" onChange={handleInput} />
            </div>
            <div>
              <input type="email" placeholder="Enter your email" name="email" onChange={handleInput}/>
            </div>
            <div>
              <input type="password" placeholder="Enter your password" name="password" onChange={handleInput}/>
            </div>
            <p>{info}</p>
            <button type="submit" onClick={handleButton}>Sign Up</button>
            <p>
              Already have an account? <Link to={"/sign-in"}>Log In</Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
