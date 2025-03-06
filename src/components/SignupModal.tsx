function SignupModal() {
  return (
    <div className="modal_overlay">
      <div className="modal">
        <form className="flex flex-col gap-10">
          <div>
            <h2>Register Now!</h2>
          </div>
          <div>
            <input type="email" placeholder="Enter you email" />
          </div>
          <div>
            <input type="password" placeholder="Enter you password" />
          </div>
          <div className="text-center">
            <button className="t2">Register Now</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignupModal;
