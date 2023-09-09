import "@/pages/Signup/index.css";
function Signup() {
  return (
    <div className="signup">
      <div className="signup_container">
        <div className="signup_section1">
          <form>
          <div className="input-box">
          <input placeholder="Username" type="text" required />
          <input placeholder="Email" type="email" required />
          <input placeholder="Password" type="password" required />
          <input placeholder="Confirm Password" type="password" required />
          </div>

          <div className="signup_section">
            <button type="submit">Sign Up</button>
              </div> 
          </form>
        </div>

          <div className="signup_section2">
            <div className="signup_tittle">
              <h2>Sign Up</h2>
              <p>Register and create an account on Todo List. Write your tasks anytime and anywhere</p>
              <p>
              Already have an account ? <a href="#"> Login </a>
              </p>
            </div>
          </div>
      </div>
    </div>
  );
}

export default Signup;
