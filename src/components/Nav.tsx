import { Link, useNavigate } from "react-router-dom";
import LoginModal from "./LoginModal";
import { useState } from "react";
import SignupModal from "./SignupModal";
import Cookies from "js-cookie";
import { toast } from "react-toastify";

function Nav() {
  const navigate = useNavigate();
  const [loginModal, setLoginModal] = useState(false);
  const [signupModal, setSignupModal] = useState(false);

  function handleLogout() {
    Cookies.remove("accessToken");
    Cookies.remove("role");
    toast("Logout Successful!", { autoClose: 1000 });
    navigate("/");
  }

  return (
    <nav>
      <div className="max_width flex flex-wrap justify-between gap-5 nav_inside">
        <div>
          <Link to="/">
            <h2 className="font-bold" style={{ color: "#0d9488" }}>
              FutureSkillers
            </h2>
          </Link>
        </div>
        <div>
          <div className="flex flex-wrap gap-10 justify-center items-center">
            <Link to="/">
              <h3 className="cursor-pointer">Home</h3>
            </Link>
            <Link to="/applications">
              <h3 className="cursor-pointer">My Applications</h3>
            </Link>
            <Link to="/recruiter/dashboard">
              <h3 className="cursor-pointer">Dashboard</h3>
            </Link>
            <Link to="/recruiter/postjobs">
              <h3 className="cursor-pointer">PostJobs</h3>
            </Link>
          </div>
        </div>
        <div className="flex gap-5">
          {Cookies.get("accessToken") ? (
            <button className="t5" onClick={() => handleLogout()}>
              Logout
            </button>
          ) : (
            <button className="t5" onClick={() => setLoginModal(true)}>
              Login
            </button>
          )}

          <button className="t5" onClick={() => setSignupModal(true)}>
            Signup
          </button>
        </div>
      </div>
      {loginModal && <LoginModal closeModal={() => setLoginModal(false)} />}
      {signupModal && <SignupModal closeModal={() => setSignupModal(false)} />}
    </nav>
  );
}

export default Nav;
