import React, { useEffect, useRef } from "react";
import "./styles.scss";
import kite from "../../assets/kite-logo.svg";
import console from "../../assets/console.svg";
import kconnect from "../../assets/kite-connect.svg";
import coin from "../../assets/coin.svg";

const Menu = () => {
  const menuDivRef = useRef(null);

  return (
    <>
      <div className="menu" ref={menuDivRef}>
        <div className="row-0">
          <div className="row-0-text">
            <strong>Signup</strong>
          </div>

          <div className="row-0-text">
            <strong>About</strong>
          </div>

          <div className="row-0-text">
            <strong>Products</strong>
          </div>

          <div className="row-0-text">
            <strong>Pricing</strong>
          </div>

          <div className="row-0-text">
            <strong>Support</strong>
          </div>
        </div>
        <div className="row-1">
          <div className="row-1-col">
            <div className="image-div">
              <img src={kite} alt="menu-img" />
            </div>
            <div className="menu-text">
              <strong>Kite</strong>
            </div>
            <p className="menu-subtext">Trading platform</p>
          </div>
          <div className="row-1-col">
            <div className="image-div">
              <img src={console} alt="menu-img" />
            </div>
            <div className="menu-text">
              <strong>Console</strong>
            </div>
            <p className="menu-subtext">Backoffice</p>
          </div>
          <div className="row-1-col">
            <div className="image-div">
              <img src={kconnect} alt="menu-img" />
            </div>
            <div className="menu-text">
              <strong>Kite Connect</strong>
            </div>
            <p className="menu-subtext">Trading APIs</p>
          </div>
          <div className="row-1-col">
            <div className="image-div">
              <img src={coin} alt="menu-img" />
            </div>
            <div className="menu-text">
              <strong>Coin</strong>
            </div>
            <p className="menu-subtext">Mutual funds</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
