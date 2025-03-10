import { useQuery } from "@tanstack/react-query";
import { getAPI } from "../services/apiCalls";

function Dashboard() {
  const { data, isError } = useQuery({
    queryKey: ["application"],
    queryFn: () => getAPI("applications"),
  });

  if (isError) return <h2>Something went wrong!</h2>;
  if (!data) return null;
  const { data: parsedData } = data;
  return (
    <main>
      <section className="max_width mb-10">
        <div className="global_container flex flex-col justify-center items-center">
          <h1 className="font-bold">
            <span className="text-black">Candidates Detail From </span>
            <span style={{ color: "#0d9488" }}>Resume/Applications</span>
          </h1>
        </div>

        <table style={{ marginBottom: 40 }}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Skills</th>
              <th>Education</th>
              <th>Experience</th>
              <th>Resume</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {parsedData.length > 0 ? (
              parsedData.map((items: any, i: number) => {
                const { status, parsedfields, resumeUrl } = items;
                return (
                  <tr key={i}>
                    <td>{parsedfields?.name || "NA"}</td>
                    <td>{parsedfields?.email || "NA"}</td>
                    <td> {parsedfields?.phone || "NA"}</td>
                    <td>
                      {parsedfields?.skills.length > 0
                        ? parsedfields?.skills.map(
                            (item: string, i: number) => (
                              <span key={i}>
                                {item}
                                {i < parsedfields.skills.length - 1
                                  ? ", "
                                  : ""}{" "}
                              </span>
                            )
                          )
                        : "Skill not available"}
                    </td>
                    <td>
                      {parsedfields?.education.length > 0
                        ? parsedfields?.education.map(
                            (item: any, i: number) => {
                              return (
                                <div key={i}>
                                  <span className="lowercase">
                                    {item?.name}{" "}
                                  </span>
                                </div>
                              );
                            }
                          )
                        : "Education not available"}
                    </td>
                    <td>
                      {parsedfields?.experience.length > 0
                        ? parsedfields?.experience.map(
                            (item: any, i: number) => {
                              return (
                                <div key={i}>
                                  <span className="lowercase">
                                    {item?.title} - {item?.organization}
                                  </span>
                                </div>
                              );
                            }
                          )
                        : "Experience not available"}
                    </td>
                    <td>
                      <a
                        className="font-bold"
                        href={resumeUrl}
                        target={"_blank"}
                        style={{ color: "#0d9488" }}
                      >
                        Download Resume
                      </a>
                    </td>
                    <td>{status}</td>
                  </tr>
                );
              })
            ) : (
              <h2>No Application Found! Apply now </h2>
            )}
          </tbody>
        </table>
      </section>
    </main>
  );
}

export default Dashboard;
