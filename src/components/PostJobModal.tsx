import { AiOutlineCloseCircle } from "react-icons/ai";
function PostJobModal({ closeModal }: { closeModal: () => void }) {
  return (
    <div className="modal_overlay">
      <div className="modal">
        <form className="flex flex-col gap-10">
          <div className="flex flex-row justify-between items-center">
            <h2>PostJob!</h2>
            <AiOutlineCloseCircle
              size={30}
              color="#64748b"
              className="cursor-pointer"
              onClick={closeModal}
            />
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
