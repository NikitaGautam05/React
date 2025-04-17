import React from "react";
import FormInput from "./FormInput";

function FormSection() {
  return (
    <section className="flex flex-col items-center px-10 py-12 w-6/12 max-sm:px-5 max-sm:py-8 max-sm:w-full">
      <h1 className="mb-44 text-5xl italic font-bold text-cyan-600 max-md:mb-24 max-md:text-4xl max-sm:mb-16 max-sm:text-3xl">
        Welcome
      </h1>
      <h2 className="mb-11 text-2xl font-light text-stone-500 max-md:mb-8 max-md:text-xl">
        Register
      </h2>

      <div className="flex gap-6 mb-10 w-full max-sm:flex-col max-sm:gap-5">
        <FormInput placeholder="First Name" halfWidth />
        <FormInput placeholder="Last Name" halfWidth />
      </div>

      <FormInput placeholder="Email" className="mb-10" />
      <FormInput placeholder="Password" type="password" className="mb-10" />
      <FormInput
        placeholder="Confirm Password"
        type="password"
        className="mb-10"
      />
    </section>
  );
}

export default FormSection;