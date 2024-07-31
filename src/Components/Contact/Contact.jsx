import React, { useState } from "react";
import Model from "./Model";

const Contact = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 to-gray-900 text-white">
      <h1 className="py-7 text-center text-2xl font-bold md:text-8xl">
        Contact Us
      </h1>
      <div className="grid place-items-center gap-10 px-2 md:grid-cols-2 md:px-6 md:py-8">
        <div className="flex min-h-72 flex-col gap-10 rounded-md border px-4 py-6 md:px-12">
          <p className="text-center text-3xl font-bold">
            Talk to a member of our Sales Team
          </p>
          <p className="text-md text-center">
            We will help you to find the product and pricing for your business.
          </p>
          <button
            onClick={() => setIsOpen(true)}
            className="rounded-sm border-2 border-white px-2 py-1 text-2xl text-white hover:border-blue-800"
          >
            Contact
          </button>
        </div>
        <div className="flex min-h-72 flex-col gap-10 rounded-md border px-4 py-6 md:px-12">
          <p className="text-center text-3xl font-bold">
            Talk to Product and account support
          </p>
          <p className="text-md text-center">
            We will help you to find the product and pricing for your business.
          </p>
          <button
            onClick={() => setIsOpen(true)}
            className="rounded-sm border-2 border-white px-2 py-1 text-2xl text-white hover:border-blue-800"
          >
            Contact
          </button>
        </div>
      </div>

      <Model
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        popupheader={<div className="text-xl font-bold">Contact Form</div>}
        popupfooter={
          <div className="flex justify-end gap-4">
            <button
              onClick={() => setIsOpen(false)}
              className="rounded-md border bg-black px-6 py-2 font-semibold hover:border-blue-600"
            >
              Send
            </button>
          </div>
        }
      >
        {/* passed as a children */}
        <div className="-mx-4 my-3 flex flex-col flex-wrap gap-4 border-y px-4 py-4 text-black">
          <input
            placeholder="Your Name"
            className="grow rounded border border-gray-600 px-2 py-1"
            type="text"
          />

          <textarea
            placeholder="write something"
            className="grow rounded border border-gray-600 px-2 py-1"
            type=""
          ></textarea>
        </div>
      </Model>
    </div>
  );
};

export default Contact;
