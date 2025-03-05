import { GoDotFill } from "react-icons/go";
import { AiFillFire } from "react-icons/ai";
import { AiOutlinePlusCircle } from "react-icons/ai";
function PostJob() {
  return (
    <main>
      <section className="max_width">
        <div className="global_container flex flex-row justify-between gap-5 items-center">
          <h1 className="font-bold">
            <span className="text-black"> Post </span>
            <span style={{ color: "#0d9488" }}>Jobs</span>
          </h1>
          <button className="flex flex-row gap-2 items-center justify-center">
            <AiOutlinePlusCircle size={18} color="white" />
            <span className="t4"> PostJobs</span>
          </button>
        </div>
        <div className="flex flex-row flex-wrap gap-10">
          <div className="jobs_card flex flex-col gap-5">
            <div className="flex flex-row justify-between gap-12 items-end">
              <h3 style={{ color: "#0d9488" }} className="font-semibold">
                Junior Associate
              </h3>
              <h4 style={{ color: "#0d9488" }} className="font-semibold">
                Job Id (A12F6G)
              </h4>
            </div>
            <h5>
              Junior Associate | F&A Operate: Record to Report | Bengaluru |
              Finance Transformation
            </h5>
            <div
              className="flex flex-row justify-between gap-5"
              style={{ marginTop: 10 }}
            >
              <div className="t5 flex flex-row gap-2 items-center">
                <GoDotFill color="darkgreen" size={18} />
                <span className="font-semibold ">Active</span>
              </div>
              <button className="t5 flex flex-row gap-2 items-center">
                <AiFillFire size={18} />
                Apply Now
              </button>
            </div>
          </div>
          <div className="jobs_card flex flex-col gap-5">
            <div className="flex flex-row justify-between gap-2 items-end">
              <h3 style={{ color: "#0d9488" }} className="font-semibold">
                Junior Associate
              </h3>
              <h4 style={{ color: "#0d9488" }} className="font-semibold">
                Job Id (A12F6G)
              </h4>
            </div>
            <h5>
              Junior Associate | F&A Operate: Record to Report | Bengaluru |
              Finance Transformation
            </h5>
            <div
              className="flex flex-row justify-between gap-5"
              style={{ marginTop: 10 }}
            >
              <div className="t5 flex flex-row gap-2 items-center">
                <GoDotFill color="darkgreen" size={18} />
                <span className="font-semibold ">Active</span>
              </div>
              <button className="t5 flex flex-row gap-2 items-center">
                <AiFillFire size={18} />
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default PostJob;
