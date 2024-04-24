"use server";
import { signupService } from "@/service/auth.service";
import { redirect } from "next/navigation";

// server action insert workspace
export async function handlerRegister(userRegister) {
  console.log(userRegister);
  // define object structure
  const newRegister = {
    firstname: userRegister.get("fname"),
    lastname: userRegister.get("lname"),
    gender: userRegister.get("gender"),
    profile_url: userRegister.get("profile_url"),
    email: userRegister.get("email"),
    password: userRegister.get("password"),
  };
  const res = await signupService(newRegister);
  if (res?.status === 200) {
    redirect("/login");
  }
}
