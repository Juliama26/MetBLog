import React from "react";
import img from "../../../assets/image.png";
import {Link} from "react-router-dom";

export default function ProfileAuthor() {
  return (
    <section className="flex items-center gap-x-3">
      <Link to={"/profile"} className="w-6 h-6 rounded-full overflow-hidden">
        <img src={img} alt="assets" className="w-full h-full object-cover" />
      </Link>
      <p className="text-sm opacity-80 dark:text-primary">
        Jason Francisco{" "}
        <span className="pl-3 md:pl-6 dark:text-primary">Agu,02 024</span>
      </p>
    </section>
  );
}
