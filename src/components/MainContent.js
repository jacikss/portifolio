import React from 'react';
import { Link } from 'react-router-dom';
import instaImage from '../assets/insta.png';
import githubImage from '../assets/github.png';
import linkedinImage from '../assets/linkedin (1).png';
import backImage from '../assets/971.jpg';

const MainContent = () => {
  return (
    <main className="apresentacao">
      <section className="apresentacao__conteudo">
        <h1 className="apresentacao__conteudo__titulo">
          Soluções personalizadas para <strong className="titulo-destaque"> um back-end eficiente!</strong>
        </h1>
        <p className="apresentacao__conteudo__paragrafo">
          Olá! Sou Jacileide Karla, estudante de Sistem para internet em tempo integral, apaixonada por tecnologia. 
          Nas horas vagas, sou aspirante a jogadora de Valorant haha
          Vamos conversar?
        </p>
        <div className="apresentacao__links">
          <h2 className="apresentacao__links__conteudo">Acesse minhas redes:</h2>
          <a className="apresentacao__links__click" href="https://www.instagram.com/jacikarla/" target="_blank" rel="noopener noreferrer">
            <img src={instaImage} alt="Instagram" /> Instagram
          </a>
          <a className="apresentacao__links__click" href="https://github.com/jacikss" target="_blank" rel="noopener noreferrer">
            <img src={githubImage} alt="GitHub" /> GitHub
          </a>
          <a className="apresentacao__links__click" href=" linkedin.com/in/jacileide-karla-santos-362083a4" target="_blank" rel="noopener noreferrer">
            <img src={linkedinImage} alt="LinkedIn" /> LinkedIn
          </a>
        </div>
      </section>
      <span><img src={backImage} alt="Foto" width="350" height="300" /></span>
    </main>
  );
}

export default MainContent;