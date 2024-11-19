import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="cabecalho">
      <nav className="cabecalho__menu">
        <Link className="cabecalho__menu__links" to="/">Início</Link>
        <Link className="cabecalho__menu__links" to="/sobre">Sobre mim</Link>
        <Link className="cabecalho__menu__links" to="/contato">Contato</Link>
        <Link className="cabecalho__menu__links" to="/jogo">Jogo Senha</Link>
      </nav>
    </header>
  );
}

export default Header;