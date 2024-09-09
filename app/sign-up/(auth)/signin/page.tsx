import React from "react";
import Link from "next/link";
import SigninCard from "@/components/sign-up/SigninCard";

const signin = () => {
  return (
    <div>
      <SigninCard />
      <p>
        Don't have an account? <Link href="./signup">Sign up</Link>
      </p>
    </div>
  );
};

export default signin;
