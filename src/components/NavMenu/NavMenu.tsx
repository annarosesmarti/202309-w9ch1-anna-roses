import { NavLink } from "react-router-dom";
import NavMenuStyled from "./NavMenuStyled";
import React from "react";

const NavMenu = (): React.ReactElement => {
  return (
    <NavMenuStyled className="nav-menu">
      <ul className="nav-menu__container">
        <li className="nav-menu__item">
          <NavLink className="nav-menu__link" aria-label="Home" to={"/films"}>
            Home
          </NavLink>
        </li>
        <li className="nav-menu__item">
          <NavLink
            className="nav-menu__link"
            aria-label="add film"
            to={"/add-film"}
          >
            Add film
          </NavLink>
        </li>
      </ul>
    </NavMenuStyled>
  );
};

export default NavMenu;
