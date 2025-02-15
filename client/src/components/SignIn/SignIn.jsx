import { Link } from "react-router-dom";
import "../../scss/SignIn.scss";

export default function SignInForm() {
  return (
    <>
    <div className="signin">
    <h2>Sign In</h2>
    <div className="signin-form">
      <form>
        <div>
        <input type="email" placeholder="Enter your email" />
        </div>
        <div>
        <input type="password" placeholder="Enter your password"/>
        
        </div>
        <button type="submit">Sign In</button>
       <p>Dont have an account yet? <Link to={"/sign-up"}>Sign Up</Link></p> 
      </form>
      </div>
      </div>
    </>
  );
}
