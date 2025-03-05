function Nav() {
  return (
    <nav>
      <div className="max_width flex flex-wrap justify-between gap-5 nav_inside">
        <div>
          <h2 className="font-bold" style={{ color: "#0d9488" }}>
            FutureSkillers
          </h2>
        </div>
        <div>
          <div className="flex flex-wrap gap-10 justify-center items-center">
            <h3 className="cursor-pointer">Home</h3>
            <h3 className="cursor-pointer">My Applications</h3>
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
