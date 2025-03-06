import { Outlet, Navigate } from "react-router-dom";
import Nav from "./Nav";
import Cookies from "js-cookie";
import { toast } from "react-toastify";

function CandidateLayout() {
  console.log(Cookies.get("role"), "role");
  if (!Cookies.get("accessToken") || Cookies.get("role") === "recruiter")
    return (
      toast("Login as candidate to access", { autoClose: 2000 }),
      (<Navigate to="/" replace />)
    );

  return (
    <div>
      <Nav />
      <Outlet />
    </div>
  );
}

export default CandidateLayout;
