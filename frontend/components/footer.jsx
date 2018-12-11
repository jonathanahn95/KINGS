import React from "react";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <ul className="footer-top-list">
          About
          <li>
            <a
              target="_blank"
              href="https://github.com/jonathanahn95/BetterHelp"
            >
              About BetterHelp
            </a>
            <a target="_blank" href="https://jonahn.io">
              About Me
            </a>
          </li>
        </ul>
        <ul className="footer-top-list">
          Connect
          <a target="_blank" href="https://github.com/jonathanahn95/">
            GitHub
          </a>
          <a target="_blank" href="https://www.linkedin.com/in/jonathanahn95/">
            LinkedIn
          </a>
          <a target="_blank" href="https://angel.co/jonathan-ahn-1">
            Angel List
          </a>
        </ul>
        <ul className="footer-top-list">
          Other Projects
          <a target="_blank" href="https://betterhelp.herokuapp.com/">
            BetterHelp
          </a>
          <a target="_blank" href="http://fatal-start.jonahn.io/">
            Fatal-Start
          </a>
        </ul>
      </div>
      <div className="footer-bottom">
        <div className="footer-left">
          <p className="footer-logo">KINGS</p>
          <h3 className="footer-slogan">We make it easy to find your thing.</h3>
        </div>

        <div className="footer-right">
          <h1 className="footer-credit">Created by Jonathan Ahn</h1>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
