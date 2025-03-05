import { Link } from "react-router-dom";
function NoPage() {
  return (
    <div
      className="flex justify-center items-center "
      style={{ height: "90vh" }}
    >
      <h1>
        404! Oops page not found...
        <Link to="/" style={{ color: "#0d9488" }}>
          <span className="font-semibold">Go to home</span>
        </Link>
      </h1>
    </div>
  );
}

export default NoPage;
