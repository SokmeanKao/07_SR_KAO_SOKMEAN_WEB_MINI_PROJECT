"use client";
import React, { useState } from "react";
import Image from "next/image";
import loginImage from "../../../../public/assets/icons/login.svg";
import logoImage from "../../../../public/assets/icons/logo.svg";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
const LoginPage = () => {
  const router = useRouter();
  // define handle login
  async function handleLogin(userInfo) {
    // define structure object
    const newUserInfo = {
      email: userInfo.get("email"),
      password: userInfo.get("password"),
    };
    // calling next auth service and passing " newUseInfo "
    const res = await signIn("credentials", {
      redirect: false,
      ...newUserInfo,
    });
    // checking is login success nor not
    if (res?.status === 200) {
      router.push("/todo-list");
    } 
  }
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div>
      <section className="bg-green w-[80%] h-lvh m-auto">
        <div className="h-full">
          <div className="h-[15%] flex flex-col justify-end">
            <Image className="w-[150px]" src={logoImage} alt="" />
          </div>
          <div className=" h-[70%] m-auto flex justify-center">
            <div className="w-[50%] flex">
              <div className="m-auto w-[60%]">
                <div>
                  <h1 className=" text-2xl font-bold">Login</h1>
                </div>
                <form action={handleLogin} className="flex flex-col gap-5">
                  <input
                    className="p-2 mt-8 rounded-sm border"
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                  />
                  <div className="relative">
                    <input
                      className="p-2 rounded-sm border w-full"
                      type={showPassword ? "text" : "password"}
                      name="password"
                      id="password"
                      placeholder="Password"
                    />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="gray"
                      id="togglePassword"
                      className="bi bi-eye absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer z-20 opacity-100"
                      viewBox="0 0 16 16"
                      onClick={() => {
                        setShowPassword((prev) => !prev);
                      }}
                    >
                      {showPassword ? (
                        <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"></path>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-eye-slash"
                          viewBox="0 0 16 16"
                        >
                          <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7 7 0 0 0-2.79.588l.77.771A6 6 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755q-.247.248-.517.486z" />
                          <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829" />
                          <path d="M3.35 5.47q-.27.24-.518.487A13 13 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7 7 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12z" />
                        </svg>
                      )}

                      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"></path>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-eye-slash-fill absolute top-1/2 right-3 -z-1 -translate-y-1/2 cursor-pointer hidden"
                      id="mama"
                      viewBox="0 0 16 16"
                    >
                      <path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z"></path>
                      <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12-.708.708z"></path>
                    </svg>
                  </div>
                  <button
                    className="bg-[#757575] text-white py-2 rounded-sm hover:scale-105 duration-300 hover:bg-[#206ab1] font-medium"
                    type="submit"
                  >
                    Login
                  </button>
                </form>
                <div className="mt-6 items-center text-gray-100 flex flex-row">
                  <p>Don`t have an account?</p>
                  <Link href={`/register/`} className="text-blue-500 pl-3">
                    {" "}
                    Register
                  </Link>
                </div>
                <div className="mt-6 items-center text-gray-100 grid grid-cols-3 gap-4">
                  <hr className="border-gray-300 w-full" />
                  <p className="text-sm text-center">Continue with</p>
                  <hr className="border-gray-300 w-full" />
                </div>
                <button className="bg-white border py-2 w-full rounded-sm mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300 hover:bg-[#8e8e8e4f] font-medium">
                  <svg
                    className="mr-3"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 48 48"
                    width="25px"
                  >
                    <path
                      fill="#FFC107"
                      d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                    ></path>
                    <path
                      fill="#FF3D00"
                      d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                    ></path>
                    <path
                      fill="#4CAF50"
                      d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                    ></path>
                    <path
                      fill="#1976D2"
                      d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                    ></path>
                  </svg>
                  Google
                </button>
              </div>
            </div>
            <div className="w-[50%]">
              <Image className="h-[100%]" src={loginImage} alt="" />
            </div>
          </div>
          <div className="h-[15%]">
            &#169; 2024 My Office. All Rights Reserved
          </div>
        </div>
      </section>
    </div>
  );
};

export default LoginPage;
