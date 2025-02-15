import { Link } from "react-router-dom";
import "../../scss/SignUp.scss";

export default function SignUpForm() {
  return (
    <>
    <div className="signup">
    <h2>Sign Up</h2>
    <div className="signup-form">
      <form>
        <div>
        <input type="text" placeholder="First name" />
        </div>
        <div>
        <input type="text" placeholder="Last name" />
        </div>    
        <div>
        <input type="email" placeholder="Enter your email" />
        </div>
        <div>
        <input type="password" placeholder="Enter your password"/>
        </div>
        <button type="submit">Sign Up</button>
        <p>Already have an account? <Link to={"/sign-in"}>Log In</Link></p>
      </form>
      </div>
      </div>
    </>
  );
}
