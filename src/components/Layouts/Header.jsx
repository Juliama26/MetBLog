import * as React from "react";
import {Link} from "react-router-dom";
import {CgMenuRight, CgClose} from "react-icons/cg";
import {CiSearch} from "react-icons/ci";

import Search from "../Elements/Search/Search";
import logo from "../../assets/unionMet.png";

const items = [
  {name: "Home", to: ""},
  {name: "About", to: "about"},
  {name: "Blogs", to: "blogs"},
  {name: "MetShop", to: "metshop"},
  {name: "Contact", to: "contact"},
];

export default function Header() {
  const [open, setOpen] = React.useState(false);
  const [scrollY, setScrollY] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrollY(true);
      } else {
        setScrollY(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0">
      <nav
        className={`relative lg:flex lg:items-center lg:justify-between lg:max-w-6xl mx-auto px-3 py-4  ${
          scrollY
            ? "bg-accent lg:px-10 rounded-b-3xl lg:rounded-b-full transition-all duration-500 ease-in-out"
            : ""
        }`}>
        <Link to={"/"} className="flex items-center gap-x-2 ">
          <img src={logo} alt="assets" />
          <h1 className="text-3xl font-semibold">
            Met<strong>Blog</strong>
          </h1>
        </Link>
        <button
          onClick={() => setOpen(!open)}
          className="absolute right-3 top-4 lg:hidden">
          {open ? <CgClose size={30} /> : <CgMenuRight size={30} />}
        </button>
        <ul
          className={`flex flex-col gap-y-3 lg:flex-row lg:gap-x-6 lg:text-lg transform transition-transform duration-300 ease-in-out ${
            open ? "flex py-6" : "hidden lg:flex"
          }`}>
          {items.map((item, index) => (
            <li
              key={index}
              className="relative hover:text-primary after:contents-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full">
              <Link to={`/${item.to}`}>{item.name}</Link>
            </li>
          ))}
        </ul>
        <Search
          icon={<CiSearch size={25} />}
          type="text"
          placeholder="Search..."
          className="hidden lg:block"
        />
      </nav>
    </header>
  );
}
