import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "./navbar.css";
import logo from "../../assets/logo.svg";

const Menu = () => (
  <>
    <li>
      <a href="#home">Home</a>
    </li>
    <li>
      <a href="#wgpt3">What is GPT-3?</a>
    </li>
    <li>
      <a href="#openai">Open AI</a>
    </li>
    <li>
      <a href="#casestudies">Case Studies</a>
    </li>
    <li>
      <a href="#library">Library</a>
    </li>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <ul className="gpt3__navbar-links_container">
          <Menu />
        </ul>
      </div>

      <div className="gpt3__navbar-sign">
        <p>Sign in</p>
        <button>Sign up</button>
      </div>

      <div className="gpt3__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine color="#fff" onClick={() => setToggleMenu(false)} />
        ) : (
          <RiMenu3Line color="#fff" onClick={() => setToggleMenu(true)} />
        )}

        {toggleMenu && (
          <ul className="gpt3__navbar-menu_container scale-up-center">
            <Menu />
            <div className="gpt3__navbar-menu_container-links-sign">
              <p>Sign in</p>
              <button>Sign up</button>
            </div>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Navbar;
