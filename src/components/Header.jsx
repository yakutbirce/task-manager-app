import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="left-links">
        <h1>Görev Takibi</h1>
        <NavLink to="/" activeClassName="active">
          Görev Listesi
        </NavLink>
        <NavLink to="/add-task" activeClassName="active">
          Görev Ekle
        </NavLink>
      </div>
      <div className="right-links">
        <NavLink to="/signup" activeClassName="active">
          Kayıt Ol
        </NavLink>
        <NavLink to="/login" activeClassName="active">
          Oturum Aç
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
