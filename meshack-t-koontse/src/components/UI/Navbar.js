import classes from "./Navbar.module.css";
import { useEffect, useState } from "react";

import Link from "next/link";

const Navbar = (props) => {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    window.onscroll = (e) => {
      setScroll(window.scrollY);
    };
  }, []);

  const img = "/images/profile-icon-removebg-preview.png";
  return (
    <>
      <nav class="navbar scrolled fixed-top navbar-expand-lg bg-body-tertiary">
        <div class="container px-0">
          <ul className={"name"}>
            <Link className={classes.a} href="/">
              <h5>Meshack T. Koontse</h5>
            </Link>
          </ul>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i class="fa-solid fa-bars"></i>
          </button>
          <div class="collapse navbar-collapse " id="navbarSupportedContent">
            <ul className={classes.ul + " d-lg-flex d-block mx-auto"}>
              <Link className={classes.a} href="/#home">
                <li className={classes.li}>Home</li>
              </Link>
              <Link className={classes.a} href="/#About-me">
                <li className={classes.li}>About me</li>
              </Link>
              <Link className={classes.a} href="/#projects">
                <li className={classes.li}>Projects</li>
              </Link>
            </ul>
            <Link href="/#contact-me">
              <button>Contact me</button>
            </Link>
          </div>
        </div>
      </nav>
      {/* <nav className={"scrolled fixed-top navbar navbar-expand-lg"}>
        <div className="container px-3 d-lg-flex d-block">
          <ul className={"name"}>
            <Link className={classes.a} href="/">
              <h5>Meshack T. Koontse</h5>
            </Link>
          </ul>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <ul className={classes.ul + " d-lg-flex d-block"}>
            <Link className={classes.a} href="/#home">
              <li className={classes.li}>Home</li>
            </Link>
            <Link className={classes.a} href="/#About-me">
              <li className={classes.li}>About me</li>
            </Link>
            <Link className={classes.a} href="/#projects">
              <li className={classes.li}>Projects</li>
            </Link>
          </ul>
          <Link href="/#contact-me">
            <button>Contact me</button>
          </Link>
        </div>
      </nav> */}
    </>
  );
};

export default Navbar;
