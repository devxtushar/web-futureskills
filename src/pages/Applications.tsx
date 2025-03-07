import { useQuery } from "@tanstack/react-query";
import { getAPI } from "../services/apiCalls";
import Cookies from "js-cookie";

function Applications() {
  const { data, isError } = useQuery({
    queryKey: ["application"],
    queryFn: () => getAPI(`applications/${Cookies.get("id")}`),
  });

  if (isError) return <h2>Something went wrong!</h2>;
  if (!data) return null;
  const { data: parsedData } = data;
  return (
    <main>
      <section className="max_width">
        <div className="global_container flex flex-col justify-center items-center">
          <h1 className="font-bold">
            <span className="text-black">My Job </span>
            <span style={{ color: "#0d9488" }}>Applications</span>
          </h1>
        </div>

        <div className="flex flex-col gap-20">
          {parsedData.length > 0 ? (
            parsedData.map((items: any, i: number) => {
              const { status, parsedfields } = items;
              return (
                <div key={i}>
                  <div className="flex flex-row justify-between gap-10 ">
                    <h3 style={{ color: "#0d9488" }} className="font-semibold">
                      {parsedfields?.name}
                    </h3>
                    <h3 className="font-semibold">{parsedfields?.email}</h3>
                    <h3 style={{ color: "#0d9488" }} className="font-semibold">
                      Status
                    </h3>
                    <h3 className="font-semibold">{status}</h3>
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

export default Applications;
