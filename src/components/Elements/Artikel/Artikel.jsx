import React from "react";
import img from "../../../assets/image.png";
import ProfileAuthor from "../InfoAuthor/ProfileAuthor";
import MyButton from "../Button/MyButton";
import {Link} from "react-router-dom";

export default function Artikel() {
  return (
    <section className="md:max-w-xs space-y-2 md:space-y-3 p-2 lg:p-3 border rounded-lg bg-secondary">
      <img src={img} alt="assets" className="rounded-lg" />
      <MyButton>Technology</MyButton> <br />
      <Link
        to={"/single-post"}
        className="md:text-lg font-semibold dark:text-primary">
        The Impact of Technology on the Workplace: How Technology is Changing
      </Link>
      <ProfileAuthor />
    </section>
  );
}
