import '@/pages/Login/index.css';
function Login() {
    return (
      <div className="container">

        <div className="section1">
            <div className="title">
              <h2>Login</h2>
              <p>Log in and start creating your next task</p>
              <p>
                Do not have an account?
                <a href=""> Sign up</a>
              </p>
              </div>
        </div>
        
  
        <div className="section2">
          <form>
              <input placeholder="Email" type="email" required />
              <input placeholder="Password" type="password" />
            
            <div className="login_section">
              <button type="submit">Login</button>
              <p className="forgot">
                Forgot your password ?
                <a href="">Forgot Password</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    );
  }
export default Login;