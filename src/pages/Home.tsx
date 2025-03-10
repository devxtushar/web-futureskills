import { useState } from "react";
import { GoDotFill } from "react-icons/go";
import { AiFillFire } from "react-icons/ai";
import { useQuery } from "@tanstack/react-query";
import { getAPI, postAPI } from "../services/apiCalls";
import Cookies from "js-cookie";
import Nav from "../components/Nav";
import { toast } from "react-toastify";

const CLOUD_NAME = "dcdkwntju";
const UPLOAD_PRESET = "resumes";

function Home() {
  const [uploadId, setUploadId] = useState<number | undefined>();
  const [file, setFile] = useState(null);
  const [uploadLoading, setUploadLoading] = useState(false);

  const { data, isError } = useQuery({
    queryKey: ["jobs"],
    queryFn: () => getAPI(`jobs`),
  });
  if (isError) return <h1>Something went wrong!Refresh Page </h1>;
  if (!data) return null;

  const { getJobs } = data;
  async function handleApply(id: number) {
    if (!Cookies.get("accessToken") || Cookies.get("role") === "recruiter") {
      toast("Login as candidate to apply", { autoClose: 2000 });
    } else {
      setUploadId(id);
    }
  }

  const handleFileChange = (event: any) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const handleUpload = async (jobId: string) => {
    if (!file) {
      toast("Please select a PDF file!", { autoClose: 2000 });
      return;
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", UPLOAD_PRESET);

    try {
      setUploadLoading(true);
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/upload`,
        {
          method: "POST",
          body: formData,
        }
      );
      if (response) {
        setUploadLoading(false);
        const data = await response.json();
        console.log(data.secure_url, "data url");
        const payload = {
          candidateId: Cookies.get("id"),
          jobId: jobId,
          resumeUrl: data.secure_url,
        };
        const parseFields: any = await postAPI("applications", payload);
        console.log(parseFields, "parsefiels");
        if (parseFields) {
          toast("Applied Successfully!");
        }
      }
    } catch (error) {
      setUploadLoading(false);
      console.error("Upload failed:", error);
      toast("Error on uploading! Try again", { autoClose: 2000 });
    } finally {
      setUploadLoading(false);
    }
  };

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
                const { title, description, status, _id } = items;
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
                      {status === "active"
                        ? Cookies.get("role") != "recruiter" && (
                            <button
                              className="t5 flex flex-row gap-2 items-center"
                              onClick={() => handleApply(i)}
                            >
                              <AiFillFire size={18} />
                              Apply Now
                            </button>
                          )
                        : Cookies.get("role") != "recruiter" && (
                            <button
                              className="t5 flex flex-row gap-2 items-center"
                              style={{ backgroundColor: "gray" }}
                            >
                              <AiFillFire size={18} />
                              Apply Now
                            </button>
                          )}
                    </div>
                    {uploadId === i && (
                      <div className="flex flex-col gap-5">
                        <input
                          type="file"
                          accept=".pdf"
                          onChange={handleFileChange}
                        />
                        <button
                          onClick={() => handleUpload(_id)}
                          className="t5"
                        >
                          {uploadLoading
                            ? "Uploading..."
                            : "        Upload Resume"}
                        </button>
                      </div>
                    )}
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
