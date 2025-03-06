function PostJobModal() {
  return (
    <div className="modal_overlay">
      <div className="modal">
        <form className="flex flex-col gap-10">
          <div>
            <h2>PostJob !</h2>
          </div>
          <div>
            <input type="text" placeholder="Enter you title" />
          </div>
          <div>
            <input type="text" placeholder="Enter you description" />
          </div>
          <div>
            <input type="text" placeholder="Status only active or inactive" />
          </div>
          <div className="text-center">
            <button className="t2">Post Now</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PostJobModal;
