import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import DarkMode from "../Elements/Button/DarkMode";

// lg:max-w-6xl mx-auto px-3

// eslint-disable-next-line react/prop-types
export default function RouteLayout({children}) {
  return (
    <section className="dark:bg-primary min-h-screen flex flex-col justify-between">
      <Header />
      <main className="py-2 md:py-4 lg:py-6">{children}</main>
      <Footer />
      <DarkMode />
    </section>
  );
}
