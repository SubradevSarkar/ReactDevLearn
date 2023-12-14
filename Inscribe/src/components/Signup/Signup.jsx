import { useState } from "react";
import { Button, Input, Logo } from "../index";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import authService from "../../appwrite/auth";
import { login } from "../../store/authSlice";
import { useForm } from "react-hook-form";

function Signup() {
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const create = async (data) => {
    setError("");
    try {
      const user = await authService.createAccount(data);
      if (user) {
        const userData = await authService.getCurrentUser();
        if (userData) dispatch(login({ userData }));

        navigate("/");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center">
      <div className="mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border-black/10">
        <div className="mb-2 flex justify-center">
          <span className=" inline-block w-full max-w-[100px]">
            <Logo width="100%" />
          </span>
        </div>
        <h2 className="text-center text-2xl font-bold leading-tight">
          Sign in to your account
        </h2>
        <p className=" mt-2 text-center text-base text-black/60">
          Already have any account?&nbsp;
          <Link
            to="/login"
            className=" font-medium text-primary transition-all duration-200 hover:underline"
          >
            Sign In
          </Link>
        </p>
        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}

        <form onSubmit={handleSubmit(create)}>
          <div className=" space-y-5">
            <Input
              label="Name:"
              placeholder="Enter your full name"
              {...register("name", {
                required: true,
              })}
            />
            <Input
              label="Password:"
              placeholder="Enter your full Password"
              {...register("password", {
                required: true,
              })}
            />
            <Input
              label="Email:"
              placeholder="Enter your email"
              type="email"
              {...register("email", {
                required: true,
                validate: {
                  matchPattern: (pattern) =>
                    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
                      pattern
                    ) || "Email address must be a valid address",
                },
              })}
            />
            <Button type="submit" className="w-full">
              Create account
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;