import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import Header from './components/Header.jsx';
import BackgroundVideo from './components/BackgroundVideo.jsx';
import ImageCarousel from './components/ImageCarousel.jsx';
import UsInformation from './components/usInformation.jsx';
import CustomCard from './components/Card.jsx';

function App() {
  const cardsData = [
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxKsKYV0mB4AkDLGmIcctCJ83q3031S0Vm4w&s',
      title: 'Ultimo Cohete',
      description: 'El ultimo cohete de SpaceX llamado Starship con una altura total de 120 metros y un diámetro de 9 metros.',
      link: 'https://example.com'
    },
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxdM3jw-Yph4baXW-q9GtWWrwQQIyF37IBZw&s',
      title: 'Ultimo Lanzamiento',
      description: 'SpaceX utiliza el Falcon 9 para una variedad de misiones',
      link: 'https://example.com'
    },
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1N1l0myrNQgh2l8_JclPI9hMZkKrfTg7S7w&s',
      title: 'SpaceX Starlink',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      link: 'https://example.com'
    },
    {
      image: 'https://c.files.bbci.co.uk/07BD/production/_112518910_49399916862_1d531af572_c.jpg',
      title: 'Novedades',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      link: 'https://example.com'
    },
    // Añade más tarjetas según sea necesario
  ];

  return (
    <div className="App">
      <BackgroundVideo />
      <Header />
      <div className="main-content">
        <div className="carousel-container">
          <ImageCarousel />
          <UsInformation />
        </div>
        <div className="cards-container">
          {cardsData.map((card, index) => (
            <CustomCard 
              key={index}
              image={card.image}
              title={card.title}
              description={card.description}
              link={card.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
