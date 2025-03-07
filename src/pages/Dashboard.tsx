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
      <section className="max_width">
        <div className="global_container flex flex-col justify-center items-center">
          <h1 className="font-bold">
            <span className="text-black">Candidates Detail From </span>
            <span style={{ color: "#0d9488" }}>Resume/Applications</span>
          </h1>
        </div>

        <div className="flex flex-col gap-20">
          {parsedData.length > 0 ? (
            parsedData.map((items: any, i: number) => {
              const { status, parsedfields, resumeUrl } = items;
              return (
                <div key={i}>
                  <div className="flex flex-row justify-between gap-10 overflow-x-auto">
                    <h3 style={{ color: "#0d9488" }} className="font-semibold">
                      {parsedfields?.name}
                    </h3>
                    <h3 className="font-semibold"> {parsedfields?.email}</h3>
                    <h3 style={{ color: "#0d9488" }} className="font-semibold">
                      {parsedfields?.phone}
                    </h3>
                    {parsedfields?.skills.length > 0 &&
                      parsedfields?.skills.map((item: string, i: number) => (
                        <h3 className="font-semibold" key={i}>
                          {item}
                        </h3>
                      ))}
                    <h3 style={{ color: "#0d9488" }} className="font-semibold">
                      Status <span>{status}</span>
                    </h3>

                    <h3 className="font-semibold">{resumeUrl}</h3>
                  </div>
                  <hr style={{ marginTop: 15 }} />
                </div>
              );
            })
          ) : (
            <h2>No Application Found! Apply now </h2>
          )}
        </div>
      </section>
    </main>
  );
}

export default Dashboard;
