"use client";

import { use, useCallback, useState } from "react";
import { FieldValues, useForm, SubmitHandler } from "react-hook-form";
import { BsGithub, BsGoogle } from "react-icons/bs";

import Input from "../../components/inputs/Input";
// import Input from "@/app/components/inputs/Input"; (uses alias)
import Button from "@/app/components/Button";
import AuthSocialButton from "./AuthSocialButton";

type Variant = "LOGIN" | "REGISTER";

export default function AuthForm() {
  const [variant, setVariant] = useState<Variant>("LOGIN");

  // used to disable buttons after submitting logging form
  const [isLoading, setisLoading] = useState<boolean>(false);

  const toggleVariant = useCallback(() => {
    if (variant === "LOGIN") {
      setVariant("REGISTER");
    } else {
      setVariant("LOGIN");
    }
  }, [variant]);

  // actions for form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  // handles ON submitting action of sign in form
  //  onSubmit={handleSubmit(onSubmit)} because you need handleSubmit to pass obSubmit data from the form
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setisLoading(true);

    if (variant === "REGISTER") {
      //axios register
    }

    if (variant === "LOGIN") {
      // nextauth sign in
    }
  };

  const socialAction = (action: string) => {
    setisLoading(true);
  };

  return (
    <div
      className="
            mt-8
            sm:mx-auto
            sm:w-full
            sm:max-w-md
        "
    >
      <div
        className="
                bg-white
                px-4
                py-8
                shadow
                sm:rounded-lg
                sm:px-10
            "
      >
        <form
          className="
                space-y-6
            "
          onSubmit={handleSubmit(onSubmit)}
        >
          {variant === "REGISTER" && (
            <Input
              id="name"
              label="Name"
              register={register}
              errors={errors}
              disabled={isLoading}
            />
          )}

          <Input
            id="email"
            label="Email Address"
            type="email"
            register={register}
            errors={errors}
            disabled={isLoading}
          />
          <Input
            id="password"
            label="Password"
            type="password"
            register={register}
            errors={errors}
            disabled={isLoading}
          />
          <div>
            <Button disabled={isLoading} fullWidth type="submit">
              {variant === "LOGIN" ? "Sign in" : "Register"}
            </Button>
          </div>
        </form>

        <div className="mt-6">
          <div className="relative">
            <div
              className="
                absolute
                inset-0
                flex
                items-center
              "
            >
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-white px-2 text-gray-500">
                Or continue with
              </span>
            </div>
          </div>

          {/* alternative login options */}
          <div className="mt-6 flex gap-2">
            <AuthSocialButton
              icon={BsGithub}
              onClick={() => {
                socialAction("github");
              }}
            />
            <AuthSocialButton
              icon={BsGoogle}
              onClick={() => {
                socialAction("google");
              }}
            />
          </div>
        </div>

        {/* toggle login/register */}
        <div
          className="
            flex
            gap-2
            justify-center
            text-sm
            mt-6
            px-2
            text-gray-500
        "
        >
          <div>
            {variant === "LOGIN"
              ? "Don't have an account?"
              : "Already have an account?"}
          </div>
          <div onClick={toggleVariant} className="underline cursor-pointer">
            {variant === "LOGIN" ? "Create an account" : "Login"}
          </div>
        </div>
      </div>
      Authentication Form2!
      <p>testing</p>
    </div>
  );
}
