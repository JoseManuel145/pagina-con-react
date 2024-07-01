import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/header/Header';
import { Folleto } from '../components/cards/Card';
import city from '../assets/img_00.jpg';
import asylum from '../assets/img_01.jpg';
import city2 from '../assets/img_02.jpg';
import knight from '../assets/img_03.jpg';
import origins from '../assets/img_04.jpg';
import '../home.css';

function Home() {
  return (
    <>
      <Header />
      <div className="container">
        <Folleto titulo="Batman: Arkham City" imagen={city} />
        <Folleto titulo="Batman: Arkham Asylum" imagen={asylum} />
        <Folleto titulo="Batman: Arkham City" imagen={city2} />
        <Folleto titulo="Batman: Arkham Knight" imagen={knight} />
        <Folleto titulo="Batman: Arkham Origins" imagen={origins} />
      </div>
      <Link to="/info">Mas informacion...</Link>
    </>
  );
}

export default Home;
