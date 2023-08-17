import logo from "../../assets/logo.jpg";
import "./styles.scss";
import { useEffect, useState, useRef } from "react";
import Menu from "../menu";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLAnchorElement | null>(null);

  const handleClick = (event: any) => {
    if (
      !event.target.classList.contains(".ham-icon") &&
      !event.target.classList.contains(".bar") &&
      isOpen === true
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.documentElement.addEventListener("click", handleClick);

    return () => {
      document.documentElement.removeEventListener("click", handleClick);
    };
  }, [handleClick]);

  // useEffect(() => {
  //   // let menuButton: HTMLElement | null = document.querySelector("a#menu-icon");

  //   if (menuRef.current && window.innerWidth <= 960) {
  //     menuRef.current.addEventListener("click", function (e) {
  //       e.preventDefault();

  //       if (menuRef.current) menuRef.current.classList.toggle("close");
  //     });
  //   }

  //   return () => {
  //     if (menuRef.current)
  //       menuRef.current.removeEventListener("click", function (e) {
  //         e.preventDefault();
  //         if (menuRef.current) menuRef.current.classList.toggle("close");
  //       });
  //   };
  // }, []);

  const handleMenu = () => {
    setIsOpen(!isOpen);
    if (menuRef.current && window.innerWidth <= 960)
      menuRef.current.classList.toggle("close");
  };

  return (
    <>
      <header>
        <div>
          <img src={logo} alt="logo" className="logo" />
        </div>
        <div className="nav-container">
          <nav>
            <div>
              <a href="#">Signup</a>
            </div>
            <div>
              <a href="#">About</a>
            </div>
            <div>
              <a href="#">Products</a>
            </div>
            <div>
              <a href="#">Pricing</a>
            </div>
            <div>
              <a href="#">Support</a>
            </div>
          </nav>
          <div className="ham-icon" onClick={handleMenu}>
            {/* <i className="fa fa-bars" aria-hidden="true"></i> */}
            <a href="#" id="menu-icon" ref={menuRef}>
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </a>
          </div>
        </div>
      </header>
      {isOpen ? <Menu /> : null}
    </>
  );
};

export default Header;
