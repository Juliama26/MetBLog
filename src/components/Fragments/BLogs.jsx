import React from "react";
import Iklan from "./Iklan";
import img from "../../assets/image.png";
import MyButton from "../Elements/Button/MyButton";
import Artikel from "../Elements/Artikel/Artikel";
import {Link} from "react-router-dom";

export default function BLogs() {
  return (
    <section className="flex flex-col items-center gap-y-6 lg:max-w-6xl mx-auto px-3">
      <main className="relative">
        <img src={img} alt="assets" className="rounded-lg" />
        <section className="absolute bottom-3 lg:left-6 lg:w-1/2 mx-6 lg:mx-0 p-3 space-y-1 lg:space-y-3">
          <MyButton>Technology</MyButton>
          <h1 className="text-xl md:text-2xl font-semibold text-secondary">
            The Impact of Technology on the Workplace: How Technology is
            Changing
          </h1>
          <section className="flex items-center gap-x-3">
            <Link
              to={"/profile"}
              className="w-6 h-6 rounded-full overflow-hidden">
              <img
                src={img}
                alt="assets"
                className="w-full h-full object-cover"
              />
            </Link>
            <p className="text-sm opacity-80 text-secondary">
              Jason Francisco
              <span className="pl-3 md:pl-6 text-secondary">Agu,02 024</span>
            </p>
          </section>
        </section>
      </main>
      <Iklan />
      <article className="flex flex-wrap justify-between gap-y-3">
        <Artikel />
        <Artikel />
        <Artikel />
        <Artikel />
        <Artikel />
        <Artikel />
        <Artikel />
        <Artikel />
        <Artikel />
      </article>
      <Iklan />
    </section>
  );
}
