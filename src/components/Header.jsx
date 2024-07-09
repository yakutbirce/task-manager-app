import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1>Görev Yöneticisi</h1>
      <div className="nav-left">
        <Link to="/">Görev Listesi</Link>
        <Link to="/add-task">Görev Ekle</Link>
      </div>
      <div className="nav-right">
        <Link to="/signup">Kayıt Ol</Link>
        <Link to="/login">Giriş Yap</Link>
      </div>
    </header>
  );
};

export default Header;
