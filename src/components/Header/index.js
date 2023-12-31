import React from "react";
import coverImage from "../../assets/cover/cover-image-2.jpg";

function Header(props) {
  return (
    <header className="flex-row space-between px-1">
      <h1>Austin Grech</h1>
      <img src={coverImage} alt="coding background"></img>
      {props.children}
    </header>
  );
}

export default Header;
