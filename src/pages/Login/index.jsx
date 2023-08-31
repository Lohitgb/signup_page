import '@/pages/Login/index.css';
function Login() {
    return (
      <div className="container">
        <div className="section1">
          <div className="section_title">
            <div className="title">
              <h2>Login</h2>
            </div>
            <div className="sub_title">
              <p>Log in and start creating your next task</p>
              <p>
                Do not have an account?
                <a href=""> Sign up</a>
              </p>
            </div>
          </div>
        </div>
  
        <div className="section2">
          <form>
            <div className="input_box">
              <input placeholder="Email" type="email" required />
              <input placeholder="Password" type="password" />
            </div>
          </form>
        </div>
      </div>
    );
  }
export default Login;