import { Link } from "react-router-dom";

function Nav() {
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
          <button className="t5">Login</button>
          <button className="t5">Signup</button>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
