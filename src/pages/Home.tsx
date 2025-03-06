import { GoDotFill } from "react-icons/go";
import { AiFillFire } from "react-icons/ai";
import { useQuery } from "@tanstack/react-query";
import { getAPI } from "../services/apiCalls";
import Nav from "../components/Nav";

function Home() {
  const { data, isError } = useQuery({
    queryKey: ["jobs"],
    queryFn: () => getAPI(`jobs`),
  });
  if (isError) return <h1>Something went wrong!Refresh </h1>;
  if (!data) return null;

  const { getJobs } = data;

  return (
    <div>
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
            {getJobs.length > 0 ? (
              getJobs.map((items: any, i: number) => {
                const { title, description, status } = items;
                return (
                  <div key={i} className="jobs_card flex flex-col gap-5">
                    <div className="flex flex-row justify-between gap-12 items-end">
                      <h3
                        style={{ color: "#0d9488" }}
                        className="font-semibold"
                      >
                        {title}
                      </h3>
                    </div>
                    <h5>
                      {description && description.length > 200
                        ? `${description.slice(0, 199)}...`
                        : description}
                    </h5>
                    <div
                      className="flex flex-row justify-between gap-5"
                      style={{ marginTop: 10 }}
                    >
                      <div className="t5 flex flex-row gap-2 items-center">
                        {status === "active" ? (
                          <GoDotFill color="darkgreen" size={18} />
                        ) : (
                          <GoDotFill color="gray" size={18} />
                        )}
                        <span className="font-semibold capitalize">
                          {status}
                        </span>
                      </div>
                      <button className="t5 flex flex-row gap-2 items-center">
                        <AiFillFire size={18} />
                        Apply Now
                      </button>
                    </div>
                  </div>
                );
              })
            ) : (
              <h1>No Jobs are available!!!</h1>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;
