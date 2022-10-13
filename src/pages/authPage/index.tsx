import { Link } from "react-router-dom";
import "./authPage.scss";

const AuthPage = () => {
  return (
    <div className="auth-page-wrapper">
      <div className="hero-side">
        <div className="logo">
          <img src="/vectors/logo.svg" alt="" />
        </div>
        <div className="hero">
          <img src="/images/hero.png" alt="" />
        </div>
      </div>
      <div className="login-side">
        <div className="input-container">
          <h2 className="input-header">Welcome!</h2>
          <p className="text-primary text-xl">Enter details to login.</p>

          <div className="input-wrap mb-6 mt-[3.75rem]">
            <input placeholder="Email" type="email" />
          </div>
          <div className="input-wrap flex mb-6 justify-between items-center">
            <input placeholder="Password" type="password" />

            <p className="text-lemon text-xs font-semibold cursor-pointer">
              SHOW
            </p>
          </div>
          <p className="text-lemon text-xs font-semibold">Forgot PASSWORD?</p>

          <Link to="/users">
            <div className="button">
              <button>LOG IN</button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
