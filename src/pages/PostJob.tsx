import { GoDotFill } from "react-icons/go";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { useState } from "react";
import PostJobModal from "../components/PostJobModal";
import { useQuery } from "@tanstack/react-query";
import { deleteAPI, getAPI } from "../services/apiCalls";
import { MdDelete } from "react-icons/md";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { MdEdit } from "react-icons/md";

function PostJob() {
  const [postjobModal, setPostJobModal] = useState(false);
  const [passItems, setPassItems] = useState("");
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (id: object) => deleteAPI(`jobs/${id}`),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["jobs"] });
    },
    onError: (error) => {
      console.error("Error deleting job", error);
    },
  });

  const { data, isError } = useQuery({
    queryKey: ["jobs"],
    queryFn: () => getAPI(`jobs`),
  });
  if (isError) return <h1>Something went wrong!Refresh Page </h1>;
  if (!data) return null;

  const { getJobs } = data;

  return (
    <main>
      <section className="max_width">
        <div className="global_container flex flex-row justify-between gap-5 items-center">
          <h1 className="font-bold">
            <span className="text-black"> Post </span>
            <span style={{ color: "#0d9488" }}>Jobs</span>
          </h1>
          <button
            className="flex flex-row gap-2 items-center justify-center"
            onClick={() => setPostJobModal(true)}
          >
            <AiOutlinePlusCircle size={18} color="white" />
            <span className="t4"> PostJobs</span>
          </button>
        </div>
        <div className="flex flex-row flex-wrap gap-10">
          {getJobs.length > 0 ? (
            getJobs.map((items: any, i: number) => {
              const { title, description, status, _id } = items;
              return (
                <div key={i} className="jobs_card flex flex-col gap-5">
                  <div className="flex flex-row justify-between gap-12 items-end">
                    <h3 style={{ color: "#0d9488" }} className="font-semibold">
                      {title}
                    </h3>
                    <div className="flex flex-row gap-5">
                      <MdEdit
                        size={25}
                        color="#0d9488"
                        className="cursor-pointer"
                        onClick={() => {
                          setPostJobModal(!postjobModal), setPassItems(items);
                        }}
                      />
                      <MdDelete
                        size={25}
                        color="#0d9488"
                        className="cursor-pointer"
                        onClick={() => mutation.mutate(_id)}
                      />
                    </div>
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
                      <span className="font-semibold capitalize">{status}</span>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <h1>No Jobs are available!!!</h1>
          )}
        </div>
      </section>
      {postjobModal && (
        <PostJobModal
          closeModal={() => setPostJobModal(false)}
          items={passItems}
        />
      )}
    </main>
  );
}

export default PostJob;
