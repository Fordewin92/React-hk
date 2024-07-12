import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import './ImageCarousel.css';
import { Link } from 'react-router-dom';

const ImageCarousel = () => {
  const images = [
    {
      original: 'https://www.agences-spatiales.fr/wp-content/uploads/2018/03/Untitled-1.jpg',
      thumbnail: 'https://via.placeholder.com/150?text=Imagen+1',
      navLink: '/enlace1'
    },
    {
      original: 'https://conexionhispanoamerica.com/wp-content/uploads/2024/06/Starship-SpaceX.png',
      thumbnail: 'https://via.placeholder.com/150?text=Imagen+2',
      navLink: '/enlace2',
    },
    {
      original: 'https://conexionhispanoamerica.com/wp-content/uploads/2023/09/satrlink-gadgets-tec.webp',
      thumbnail: 'https://via.placeholder.com/150?text=Imagen+3',
      navLink: '/enlace3',
    },
    {
      original: 'https://teslaclubsweden.se/wp-content/uploads/2022/02/StarlinkPremium.jpg',
      thumbnail: 'https://via.placeholder.com/150?text=Imagen+3',
      navLink: '/enlace4',
    },
    
  ];

  return (
    <div className="image-carousel">
      <ImageGallery 
        items={images} 
        showThumbnails={false} 
        showFullscreenButton={false} 
        showPlayButton={false}
        autoPlay={true}
      />
    </div>
  );
};


export default ImageCarousel;
