import "../src/css/Global.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CandidateLayout from "./components/CandidateLayout";
import Home from "./pages/Home";
import Applications from "./pages/Applications";
import Dashboard from "./pages/Dashboard";
import PostJob from "./pages/PostJob";
import NoPage from "./pages/NoPage";
import { ToastContainer } from "react-toastify";
import RecruiterLayout from "./components/RecruiterLayout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CandidateLayout />}>
            <Route path="applications" element={<Applications />} />
          </Route>
          <Route path="/" element={<RecruiterLayout />}>
            <Route path="recruiter/dashboard" element={<Dashboard />} />
            <Route path="recruiter/postjobs" element={<PostJob />} />
          </Route>
          <Route index element={<Home />} />

          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
}

export default App;
