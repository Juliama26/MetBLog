import * as React from "react";
import {CiLight, CiDark} from "react-icons/ci";

export default function DarkMode() {
  const [toggle, setToggle] = React.useState(false);

  React.useEffect(() => {
    if (toggle) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [toggle]);
  return (
    <button
      className="fixed bottom-5 right-5 p-3 bg-accent rounded-full"
      onClick={() => {
        setToggle(!toggle);
      }}>
      {toggle ? (
        <CiLight size={30} className="" />
      ) : (
        <CiDark size={30} className="" />
      )}
    </button>
  );
}
