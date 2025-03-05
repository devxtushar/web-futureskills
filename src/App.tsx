import "../src/css/Global.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Applications from "./pages/Applications";
import Dashboard from "./pages/Dashboard";
import PostJob from "./pages/PostJob";
import NoPage from "./pages/NoPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="applications" element={<Applications />} />
          <Route path="recruiter/dashboard" element={<Dashboard />} />
          <Route path="recruiter/postjobs" element={<PostJob />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
