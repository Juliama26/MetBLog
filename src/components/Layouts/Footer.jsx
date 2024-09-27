import React from "react";
import {Link} from "react-router-dom";
import {CiMail} from "react-icons/ci";
import logo from "../../assets/union.png";
import Search from "../Elements/Search/Search";
import MyButton from "../Elements/Button/MyButton";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-neural dark:bg-primary py-6">
      <section className="grid grid-cols-1 md:grid-cols-3 lg:max-w-6xl mx-auto px-3">
        <section className="flex flex-col gap-y-3">
          <h2 className="text-lg font-semibold">About</h2>
          <p className="pr-6">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro, hic
            voluptatum et facilis vitae ea, sunt officiis tempore ipsum quae,
            vel ex! Sapiente, accusamus saepe?
          </p>
          <section>
            <p>
              <span className="font-semibold">Email: </span> example@gmail.com
            </p>
            <p>
              <span className="font-semibold">Phone: </span>
              0812759372
            </p>
          </section>
        </section>
        <section className="grid grid-cols-2 gap-y-3 py-6">
          <h2 className="text-lg font-semibold">Quick Link</h2>
          <h2 className="text-lg font-semibold">Category</h2>
          <section className="flex flex-col gap-y-2">
            <Link to={"/"}>Home</Link>
            <Link to={"/"}>About</Link>
            <Link to={"/"}>Blog</Link>
            <Link to={"/"}>Author</Link>
            <Link to={"/"}>Contact</Link>
            <Link to={"/"}>Login</Link>
          </section>
          <section className="flex flex-col gap-y-2">
            <Link to={"/"}>Lifestyle</Link>
            <Link to={"/"}>Technology</Link>
            <Link to={"/"}>Travel</Link>
            <Link to={"/"}>Businiss</Link>
            <Link to={"/"}>Economy</Link>
            <Link to={"/"}>Sports</Link>
          </section>
        </section>
        <section className="flex flex-col justify-around gap-y-3 rounded-lg p-6 bg-secondary dark:bg-accent2">
          <h2 className="text-2xl text-center font-semibold">
            Weekly Newsletter
            <p className="text-center text-sm font-thin">
              Get blog articles and offer via email
            </p>
          </h2>
          <Search
            icon={<CiMail size={25} />}
            type="email"
            placeholder="Your email!"
          />
          <MyButton>Subscribe</MyButton>
        </section>
      </section>
      <section className="flex flex-col md:flex-row md:items-center gap-y-6 justify-between lg:max-w-6xl mx-auto px-3 pt-6">
        <figure className="flex items-center gap-x-2">
          <img src={logo} alt="assets" />
          <figcaption className="-space-y-1">
            <h2 className="text-xl">
              Met<strong>BLog</strong>
            </h2>
            <p className="text-sm">
              © JS Template {year}. All Rights Reserved.
            </p>
          </figcaption>
        </figure>
        <figcaption className="flex gap-x-6 text-sm">
          <p>Terms of Use</p>
          <p>Privacy Policy</p>
          <p>Cookie Policy</p>
        </figcaption>
      </section>
    </footer>
  );
}
