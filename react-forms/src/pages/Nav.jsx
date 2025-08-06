import { useState } from "react";

const Nav = () => {
  const [value, setValue] = useState(0);

  return (
    <div className="navbar justify-between ">
      <h1 className="btn  btn-active">Music</h1>
      <button className="btn rounded-lg">Collections : {value}</button>
    </div>
  );
};

export default Nav;
