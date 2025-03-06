import { Outlet, Navigate } from "react-router-dom";
import Nav from "./Nav";
import Cookies from "js-cookie";
import { toast } from "react-toastify";

function RecruiterLayout() {
  console.log(Cookies.get("role"), "role -r");

  if (!Cookies.get("accessToken") || Cookies.get("role") === "candidate")
    return (
      toast("Login as recruiter to access", { autoClose: 2000 }),
      (<Navigate to="/" replace />)
    );

  return (
    <div>
      <Nav />
      <Outlet />
    </div>
  );
}

export default RecruiterLayout;
