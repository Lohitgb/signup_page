import "@/pages/ForgotPassword/index.css";
function ForgotPassword() {
  return (
    <div className="forgot-password">
      <div className="forgot-container">
        <div className="forgot-section1">
          <div className="forgot-tittle">
            <h2>Forgot Password</h2>
            <p>
              Forgot your password ? Write an email and check the your inbox for
              further instructions
            </p>
          </div>
        </div>

        <div className="forgot-section2">
          <form>
            <div className="forgot-input">
              <input placeholder="Email" type="email" required />
            </div>
            <div className="forgot-password_section">
              <button type="submit">Reset Password</button>
              <p className="forgot">
                Go back to
                <a href="#">Login</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
