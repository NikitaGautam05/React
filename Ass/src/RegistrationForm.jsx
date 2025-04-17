"use client";
import React from "react";
import WelcomeSection from "./WelcomeSection";
import FormSection from "./FormSection";

function RegistrationForm() {
  return (
    <main className="flex justify-center items-center p-5 w-full min-h-screen bg-sky-400">
      <section className="flex overflow-hidden mx-auto w-full bg-stone-50 h-[652px] max-w-[1069px] rounded-[40px] max-md:h-auto max-md:max-w-[90%] max-sm:flex-col max-sm:max-w-screen-sm">
        <WelcomeSection />
        <FormSection />
      </section>
    </main>
  );
}

export default RegistrationForm;