"use client";

import Link from "next/link";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import AuthForm from "@components/AuthForm";

const SignUp = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const [submitting, setSubmitting] = useState(false);
  const [creds, setCreds] = useState({
    email: "",
    password: "",
  });

  const signUp = async (e) => {
    e.preventDefault();
    console.log("creds ==> ", creds);
    setSubmitting(true);
    try {
      const response = await fetch("/api/auth/sign-up", {
        method: "POST",
        body: JSON.stringify({
            email: creds.email,
            password: creds.password,
        }),
      });
      console.log("response => ", response);
      if (response.ok) {
      console.log("response ok=> ", response);
        router.push("/auth/sign-in");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <AuthForm
    type="Up"
    creds={creds}
    setCreds={setCreds}
    submitting={submitting}
    handleSubmit={signUp}
  />
  );
};

export default SignUp;