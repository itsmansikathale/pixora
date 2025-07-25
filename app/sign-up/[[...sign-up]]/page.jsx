"use client";
import { SignUp } from "@clerk/nextjs";
import React from "react";

const SignUpPage = () => {
  return (
    <div className="flex justify-center pt-50">
      <SignUp />;
    </div>
  );
};

export default SignUpPage;
