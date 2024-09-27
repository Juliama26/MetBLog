import React from "react";
import Iklan from "./Iklan";
import img from "../../assets/image.png";

export default function Home() {
  return (
    <section className="lg:max-w-6xl mx-auto px-3">
      <main>
        <img src={img} alt="assets" />
        <h1>Home</h1>
      </main>
      <Iklan />
      <article>
        <h1>Hello World</h1>
      </article>
      <Iklan />
    </section>
  );
}
