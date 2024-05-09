"use client";

import Link from "next/link";

const RequestPledge = () => {
  const handleSubmit = () => {
    alert("Are you sure");
  }
  return (
    <>
      <section className="w-full max-w-full flex-start flex-col">
        <h1 className="head_text text-left">
          <span className="blue_gradient">Request Pledge Setup</span>
        </h1>

        <p className="desc text-left max-w-md">
          Pledged shares meaning is the practice of using any shares as
          collateral to secure a loan. In this process, a shareholder or the
          pledged holdings (the pledgor) provides their shares to a lender (the
          pledgee) as security for a loan or credit, also called collateral
          margin. The ownership of the shares remains with the pledgor, allowing
          them to continue receiving dividends and exercising voting rights.
          However, if the pledgor fails to meet the loan obligations, the
          pledgee may have the right to sell the pledged shares to recover the
          outstanding amount. The pledge of shares as collateral security or
          margin against shares is used by investors and promoters to access
          capital while retaining ownership of their shares.
        </p>
      </section>

      <div className="flex-end mx-3 mb-5 gap-4">
        <Link href="/" className="text-gray-500 text-sm">
          Cancel
        </Link>

        <button
          type="button"
          onClick={() => handleSubmit()}
          className="px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white"
        >
          Request
        </button>
      </div>
    </>
  );
};

export default RequestPledge;
