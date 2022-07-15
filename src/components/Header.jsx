import React from "react";
import { GlobalContext } from "../components/GlobalContext";
import { NavLink } from "react-router-dom";
import logo from "../img/logo-beer.png";

const Header = () => {
  const global = React.useContext(GlobalContext);

  return (
    <header>
      <div className="bg-neutral-500 fixed top-0 left-0 right-0 z-10 border-b-8 border-colorPrimary">
        <div className="flex justify-between items-center max-w-[1200px] mx-auto py-3 px-2">
          <NavLink to="/" end>
            <img className="w-[250px]" src={logo} alt="" />
          </NavLink>
          <NavLink
            className="bg-colorPrimary hover:bg-colorHover p-3 rounded-md relative"
            to="carrinho"
          >
            <svg className="w-6" viewBox="0 0 576 512">
              <path d="M96 0c11.5 0 21.4 8.19 23.6 19.51L121.1 32h420.7c20.3 0 36.5 20.25 30.8 40.66l-54 192.04c-3.9 13.8-16.5 23.3-30.8 23.3H170.7l9.2 48H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H159.1c-10.6 0-20.5-8.2-22.7-19.5L76.14 48H24C10.75 48 0 37.25 0 24S10.75 0 24 0h72zm32 464c0-26.5 21.5-48 48-48s48 21.5 48 48-21.5 48-48 48-48-21.5-48-48zm384 0c0 26.5-21.5 48-48 48s-48-21.5-48-48 21.5-48 48-48 48 21.5 48 48z"></path>
            </svg>
            <span className="absolute w-6 bg-colorSecundary text-white rounded-full text-center ml-5">
              {!global ? "" : global.quantidade}
            </span>
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
