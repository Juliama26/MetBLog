import React from "react";

export default function MyButton(props) {
  // eslint-disable-next-line react/prop-types
  const {children} = props;
  return <button className="px-3 py-2 bg-accent rounded">{children}</button>;
}
