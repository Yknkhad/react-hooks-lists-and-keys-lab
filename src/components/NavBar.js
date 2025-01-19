import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return (
    <nav>
      {/* Iterate over the links array and create an <a> tag for each link */}
      {links.map((link, index) => (
        <a href={`#${link}`} key={index}>
          {link}
        </a>
      ))}
    </nav>
  );
}

export default NavBar;
