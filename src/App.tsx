import Nav from "./components/Nav";
import "../src/css/Global.css";
import { GoDotFill } from "react-icons/go";
import { AiFillFire } from "react-icons/ai";

function App() {
  return (
    <>
      <Nav />
      <main>
        <section className="max_width">
          <div className="global_container flex flex-col justify-center items-center">
            <h1 className="font-bold">
              <span className="text-black"> Job </span>
              <span style={{ color: "#0d9488" }}>Openings</span>
            </h1>
            <h3 className="font-semibold">
              Meet our recruiters who are dedicated to helping you succeed in
              your career journey.
            </h3>
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
    </>
  );
}

export default App;
