import React from "react";
import signUpImage from "../../../../public/assets/icons/sign-up.svg";
import logoImage from "../../../../public/assets/icons/logo.svg";
import Image from "next/image";
import { handlerRegister } from "@/actions/signupAction";
// import { handlerRegister } from "@/actions/signUpAction";

const RegisterPage = async () => {
  // const router = useRouter();
  // // define handle login
  // async function handleRegister(userInfo) {
  //   // define structure object
  //   const newUserInfo = {
  //     email: userInfo.get("email"),
  //     password: userInfo.get("password"),
  //   };
  //   // calling next auth service and passing " newUseInfo "
  //   const res = await signIn("credentials", {
  //     redirect: false,
  //     ...newUserInfo,
  //   });
  //   // checking is login success nor not
  //   if (res.ok) {
  //     router.push("/login");  
  //   }
  // }
  return (
    <div className="h-lvh">
      <div className="w-[80%] h-full m-auto flex">
        <div className="w-[60%] flex flex-col justify-center ">
          <div className="p-10">
            <Image src={logoImage} alt="" />
          </div>
          <div className="w-[100%] p-10">
            <form className="grid grid-cols-2 gap-5" action={handlerRegister}>
              <div>
                <label className="block font-semibold" for="name">
                  First Name :
                </label>
                <input
                  className="w-full bg-[#EEEEEE] rounded-lg placeholder-gray text-sm p-4 border-none block mt-1"
                  id="name"
                  type="text"
                  name="fname"
                  required="required"
                  autofocus="autofocus"
                  placeholder="Enter your name..."
                />
              </div>
              <div>
                <label className="block font-semibold" for="name">
                  Last Name :
                </label>
                <input
                  className="w-full bg-[#EEEEEE] bg-gray-100 rounded-lg placeholder-gray text-sm p-4 border-none block mt-1"
                  id="name"
                  type="text"
                  name="lname"
                  required="required"
                  autofocus="autofocus"
                  placeholder="Enter your name..."
                />
              </div>

              <div className="mt-4">
                <label className="block font-semibold" for="email">
                  Email :
                </label>
                <input
                  className="w-full bg-[#EEEEEE] rounded-lg placeholder-gray text-sm p-4 border-none block mt-1"
                  id="email"
                  type="email"
                  name="email"
                  required="required"
                  placeholder="info@xyz.com"
                />
              </div>

              <div className="mt-4">
                <label className="block font-semibold" for="email">
                  Gender :
                </label>
                <input
                  className="w-full bg-[#EEEEEE] rounded-lg text-sm p-4 border-none block mt-1 "
                  id="gender"
                  type="gender"
                  name="gender"
                  required="required">
                    
                </input>
              </div>

              <div className="mt-4">
                <label className="block font-semibold" for="email">
                  Password :
                </label>
                <input
                  className="w-full bg-[#EEEEEE] rounded-lg placeholder-gray text-sm p-4 border-none block mt-1"
                  id="password"
                  type="password"
                  name="password"
                  required="required"
                />
              </div>

              <div className="mt-4">
                <label className="block font-semibold" for="password">
                profile_url
                </label>
                <input
                  className="w-full bg-[#EEEEEE] rounded-lg placeholder-gray text-sm p-4 border-none block mt-1"
                  id="profile_url"
                  type="profile_url"
                  name="profile_url"
                  required="required"
                  // autocomplete="new-password"
                />
              </div>

              <div className="flex items-center justify-between mt-8">
                <button
                  type="submit"
                  className="flex items-center justify-center px-8 py-2 border border-transparent text-base font-medium rounded-xl text-white bg-blue-500"
                >
                  Sign Up
                </button>
              </div>
            </form>
          </div>
          <div></div>
        </div>
        <div className="w-[40%] flex justify-center items-center">
          <Image src={signUpImage} alt="" />
        </div>
      </div>
    </div>
  );
};
export default RegisterPage;
