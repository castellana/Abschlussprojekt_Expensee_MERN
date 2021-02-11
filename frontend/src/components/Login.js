const Login = () => {
  return (
    <section>
      <div className="login-wrapper">
        <div className="logo">
          <h1>Expensee</h1>
        </div>
        <div className="login">
          <button>
            <a href="http://localhost:5000/auth/google">Login mit Google</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Login;
