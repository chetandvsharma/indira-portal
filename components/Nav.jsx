"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import { useRouter } from "next/navigation";

const Nav = () => {
  const { data: session } = useSession();
  const router = useRouter();

  const [providers, setProviders] = useState(null);
  const [toggleDropDown, setToggleDropDown] = useState(false);

  useEffect(() => {
    const setUpProviders = async () => {
      const response = await getProviders();

      setProviders(response);
    };

    setUpProviders();
  }, []);

  const handleSsoLogin = () => {
    router.push("/auth/sign-up");
  };

  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href="/" className="flex gap-2 flex-center">
        <Image
          src="/assets/images/logo.svg"
          alt="next-prompt logo"
          width={60}
          height={60}
          className="object-contain"
        />
        <p className="logo_text">INDIRA SECURITIES</p>
      </Link>

      {/* ************************************************** Desktop Navigation ************************************* */}
      <div className="sm:flex hidden">
        {session?.user ? (
          <div className="flex gap-3 md:gap-5">
            <Link href="/request-pledge" className="black_btn">
              Request Pledge
            </Link>

            <Link href="/create-prompt" className="black_btn">
              Create Prompt
            </Link>

            <button type="button" onClick={signOut} className="outline_btn">
              Sign Out
            </button>

            <Link href="/profile">
              <Image
                src={session?.user?.image}
                width={37}
                height={37}
                className="rounded-full"
                alt="profile"
              />
            </Link>
          </div>
        ) : (
          <>
            <button
              type="button"
              // key={provider.name}
              onClick={() => handleSsoLogin()}
              className="black_btn"
            >
              Sign up
            </button>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type="button"
                  key={provider.name}
                  onClick={() => router.push("/auth/sign-in")}
                  className="black_btn"
                >
                  Sign In
                </button>
              ))}
          </>
        )}
      </div>

      {/* ************************************************** Mobile Navigation ************************************* */}
      <div className="sm:hidden flex relative">
        {session?.user ? (
          <div className="flex">
            <Image
              src={session?.user?.image}
              width={37}
              height={37}
              className="rounded-full"
              alt="profile"
              onClick={() => setToggleDropDown((prev) => !prev)} // ++++Good practice
              //   onClick={() => setToggleDropDown(!toggleDropDown)} // -----bad practice: unexpected behavier
            />

            {toggleDropDown && (
              <div className="dropdown">
                <Link
                  href="/profile"
                  className="dropdown_link"
                  onClick={() => setToggleDropDown(false)}
                >
                  My Profile
                </Link>

                <Link
                  href="/request-pledge"
                  className="dropdown_link"
                  onClick={() => setToggleDropDown(false)}
                >
                  Request Pledge
                </Link>

                <Link
                  href="/create-prompt"
                  className="dropdown_link"
                  onClick={() => setToggleDropDown(false)}
                >
                  Create Prompt
                </Link>

                <button
                  type="button"
                  className="mt-5 w-full black_btn"
                  onClick={() => {
                    setToggleDropDown(false);
                    signOut();
                  }}
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            <button
              type="button"
              // key={provider.name}
              onClick={() => handleSsoLogin()}
              className="black_btn"
            >
              Sign up
            </button>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type="button"
                  key={provider.name}
                  onClick={() => router.push("/auth/sign-in")}
                  className="black_btn"
                >
                  Sign In
                </button>
              ))}
          </>
        )}
      </div>
    </nav>
  );
};

export default Nav;
