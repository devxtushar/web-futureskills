import { AiOutlineCloseCircle } from "react-icons/ai";
import { useForm, SubmitHandler } from "react-hook-form";
import { postAPI } from "../services/apiCalls";
import Cookies from "js-cookie";
import { toast } from "react-toastify";

function LoginModal({ closeModal }: { closeModal: () => void }) {
  type Inputs = {
    email: string;
    password: string;
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const response = await postAPI("auth/login", data);
    console.log(response, "respo");
    if (response) {
      Cookies.set("accessToken", response?.accessToken);
      Cookies.set("role", response?.role);
      toast(response.message, { autoClose: 1000 });

      reset();
      closeModal();
    }
  };

  return (
    <div className="modal_overlay">
      <div className="modal">
        <form
          className="flex flex-col gap-10"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-row justify-between items-center">
            <h2>Login Now!</h2>
            <AiOutlineCloseCircle
              size={30}
              color="#64748b"
              className="cursor-pointer"
              onClick={closeModal}
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Enter you email"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <h6 className="text-red-500">Email is required*</h6>
            )}
          </div>
          <div>
            <input
              type="password"
              placeholder="Enter you password"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <h6 className="text-red-500">Password is required*</h6>
            )}
          </div>
          <div className="text-center">
            <button className="t2">Login Now</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginModal;
