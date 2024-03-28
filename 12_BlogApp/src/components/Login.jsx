// Its a Login Component not a "Login Page!", Also we are using React-hook-Form in it

import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login as StoreLogin } from "../store/authSlice"; // renaming "login" to "AuthLogin" for this file code.
import { Button, Input, Logo } from "./index";
import { useDispatch } from "react-redux";
import authService from "../appwrite/authentication";
import { useForm } from "react-hook-form";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [error, setError] = useState();
  const { register, handleSubmit } = useForm();
  // ya register koi sign-up wala register nahi hai, ya aik form handling ka tareeka hai react-hook-form mai, haam isko syntax bhi kaah sakhty hai, tooh kindly is saay mai confuse na hoo.

  // We will pass this "login" function inside react-hook-form method ( handleSubmit ) like this handleSubmit(login), its a way of telling react-hook-form library that we will handle our form like this.
  const login = async (data) => {
    setError(""); // whenever user is going to do login, clear all the previous error messages
    try {
      const session = await authService.login(data);
      if (session) {
        const userData = await authService.getCurrentUser();
        if (userData) {
          dispatch(StoreLogin(userData));
          navigate("/"); //navigating user to root after login
        }
      }
    } catch (error) {
      setError(error.message); //storing error msg in error state
    }
  };

  return (
    <div className="flex items-center justify-center w-full">
      <div
        className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}
      >
        <div className="mb-2 flex justify-center">
          <span className="inline-block w-full max-w-[100px]">
            <Logo width="100%" />
          </span>
        </div>
        <h2 className="text-center text-2xl font-bold leading-tight">
          Sign in to your account
        </h2>
        <p className="mt-2 text-center text-base text-black/60">
          Don&apos;t have any account?&nbsp;
          <Link
            to="/signup"
            className="font-medium text-primary transition-all duration-200 hover:underline"
          >
            Sign Up
          </Link>
        </p>
        {error && (<p className="text-red-600 mt-8 text-center">{error}</p>)}
        {/* 1) HANDLE SUBMIT */}
        <form onSubmit={handleSubmit(login)} className="mt-8">
          <div className="space-y-5">
            <Input
              label="Email: "
              placeholder="Enter your email"
              type="email"
        // {/*  2) REGISTER no.1 */}
              {...register("email", {
                required: true,
                validate: {
                  matchPatern: (value) =>
                    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                    "Email address must be a valid address",
                },
              })}
            />
            <Input
              label="Password: "
              type="password"
              placeholder="Enter your password"
        // {/*  REGISTER no.2 */}
              {...register("password", {
                required: true,
              })}
            />
            <Button type="submit" className="w-full">
              Sign in
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
