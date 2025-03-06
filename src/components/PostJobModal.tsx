import { AiOutlineCloseCircle } from "react-icons/ai";
import { useForm, SubmitHandler } from "react-hook-form";
import { postAPI } from "../services/apiCalls";
import { useMutation, useQueryClient } from "@tanstack/react-query";

function PostJobModal({ closeModal }: { closeModal: () => void }) {
  const queryClient = useQueryClient();
  type Inputs = {
    title: string;
    description: string;
    status: string;
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  const mutation = useMutation({
    mutationFn: (data: object) => postAPI("jobs", data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["jobs"] });
      reset();
      closeModal();
    },
    onError: (error) => {
      console.error("Error creating job", error);
    },
  });
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    mutation.mutate(data);
  };
  return (
    <div className="modal_overlay">
      <div className="modal">
        <form
          className="flex flex-col gap-10"
          onSubmit={handleSubmit(onSubmit)}
        >
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
            <input
              type="text"
              placeholder="Enter you title"
              {...register("title", { required: true })}
            />
            {errors.title && (
              <h6 className="text-red-500">Title is required*</h6>
            )}
          </div>
          <div>
            <input
              type="text"
              placeholder="Enter you description"
              {...register("description", { required: true })}
            />
            {errors.description && (
              <h6 className="text-red-500">Description is required*</h6>
            )}
          </div>
          <div>
            <input
              defaultValue="active"
              type="text"
              placeholder="Status only active or inactive"
              {...register("status")}
            />
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
