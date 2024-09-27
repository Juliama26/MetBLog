import React from "react";
import Iklan from "./Iklan";
import img from "../../assets/image.png";
import ProfileAuthor from "../Elements/InfoAuthor/ProfileAuthor";
import MyButton from "../Elements/Button/MyButton";
import Artikel from "../Elements/Artikel/Artikel";

export default function Home() {
  return (
    <section className="flex flex-col gap-y-6 lg:max-w-6xl mx-auto px-3">
      <main className="relative mb-6">
        <img src={img} alt="assets" className="rounded-lg" />
        <section className="absolute -bottom-12 lg:left-6 lg:w-1/2 mx-6 lg:mx-0 p-3 space-y-1 lg:space-y-3 rounded-lg bg-secondary">
          <MyButton>Technology</MyButton>
          <h1 className="text-xl md:text-2xl font-semibold dark:text-primary">
            The Impact of Technology on the Workplace: How Technology is
            Changing
          </h1>
          <ProfileAuthor />
        </section>
      </main>
      <Iklan />
      <article>
        <h1 className="text-xl lg:text-2xl pb-3 underline font-semibold">
          Latest Post
        </h1>
        <section className="flex flex-wrap justify-between gap-y-3">
          <Artikel />
          <Artikel />
          <Artikel />
          <Artikel />
          <Artikel />
          <Artikel />
          <Artikel />
        </section>
      </article>
      <Iklan />
    </section>
  );
}
