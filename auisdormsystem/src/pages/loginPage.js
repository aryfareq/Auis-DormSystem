import "./loginPage.css";
function LoginPage() {
  return (
    <div className="login-page">
      <form>
        <div>
        <select id="accountType" name="accountType" required>
          <option value="student">Student</option>
          <option value="fmd">FMD</option>
        </select>
        </div>
      <h1>Welcome to AUIS Dorm Booker!</h1>
        <div className="login-inputs">
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" required />
        </div>
        <div className="login-inputs">
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" required />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;