import React from "react";
import MyButton from "../Elements/Button/MyButton";
import {Link} from "react-router-dom";
import img from "../../assets/image.png";

export default function SingleBlog() {
  return (
    <main className="lg:max-w-6xl mx-auto px-3">
      <MyButton>Technology</MyButton>
      <h1 className="text-xl md:text-2xl font-semibold ">
        The Impact of Technology on the Workplace: How Technology is Changing
      </h1>
      <section className="flex items-center gap-x-3">
        <Link to={"/profile"} className="w-6 h-6 rounded-full overflow-hidden">
          <img src={img} alt="assets" className="w-full h-full object-cover" />
        </Link>
        <p className="text-sm opacity-80">
          Jason Francisco
          <span className="pl-3 md:pl-6 ">Agu,02 024</span>
        </p>
      </section>
    </main>
  );
}
