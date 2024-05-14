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
    username: "",
    password: "",
  });

  const signUp = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const response = await fetch("http://localhost:4000/auth/sign-up", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: creds.email,
          username: creds.username,
          password: creds.password,
        }),
      });

      if (response.ok) {
        router.push("/auth/sign-in");
      }
    } catch (error) {
      console.error(error);
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
