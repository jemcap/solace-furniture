import React from "react";

const Footer = () => {
  return (
    <footer className="footer footer-center bg-base-200 text-base-content rounded p-10">
      <nav className="grid grid-flow-col gap-4">
        <a
          href="https://github.com/jemcap/solace-furniture"
          className="link link-hover"
        >
          Github Repo
        </a>

        <a
          href="https://www.linkedin.com/in/joshuaecapito/"
          className="link link-hover"
        >
          LinkedIn
        </a>
      </nav>
      <nav></nav>
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by Solace
          Furnitures
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
