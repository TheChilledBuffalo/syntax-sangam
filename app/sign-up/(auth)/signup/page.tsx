import React from "react";
import Link from "next/link";
import SignupCard from "@/components/sign-up/SignupCard";

const signup = () => {
  return (
    <div>
      <SignupCard />
      <p>
        Already have an account? <Link href="./signin">Sign in</Link>
      </p>
    </div>
  );
};

export default signup;
