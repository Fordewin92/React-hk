// src/components/usInformation.jsx
import React, { useState } from 'react';
import { Icon } from 'semantic-ui-react';
import ModalComponent from './ModalComponent';
import './usInformation.css';

const UsInformation = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedMember, setSelectedMember] = useState('');

  const openModal = (memberName) => {
    setSelectedMember(memberName);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="us-information">
      <h2>Nuestros integrantes:</h2>
      <div className="team-member">
        <img className="ui medium circular image" src="https://semantic-ui.com/images/avatar2/large/elyse.png" alt="Integrante 1 del equipo" style={{ width: '69px', height: '69px' }}/>
        <h3>Martin Nicolas Duran Salinas</h3>
        <p><strong>Jefe de proyecto</strong></p>
        <div className='icon'>
          <Icon name='question circle outline' onClick={() => openModal('Martin Nicolas Duran Salinas')} />
        </div>
      </div>

      <div className="team-member">
        <img className="ui medium circular image" src="https://semantic-ui.com/images/avatar/large/christian.jpg" alt="Integrante 2 del equipo" style={{ width: '64px', height: '64px' }}/>
        <h3>Benjamin Hurtado Peralta</h3>
        <p><strong>Programador</strong></p>
        <div className='icon'>
          <Icon name='question circle outline' onClick={() => openModal('Benjamin Hurtado Peralta')} />
        </div>
      </div>

      <div className="team-member">
        <img className="ui medium circular image" src="https://react.semantic-ui.com/images/avatar/large/elliot.jpg" alt="Integrante 3 del equipo" style={{ width: '64px', height: '64px' }}/>
        <h3>Pablo Andres Miranda Letelier</h3>
        <p><strong>Investigador</strong></p>
        <div className='icon'>
          <Icon name='question circle outline' onClick={() => openModal('Pablo Andres Miranda Letelier')} />
        </div>
      </div>

      <div className="team-member">
        <img className="ui medium circular image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgF5WyWTQd8RE-Zi6juP1uRFswpwsKzloFHA&s" alt="Integrante 4 del equipo" style={{ width: '64px', height: '64px' }}/>
        <h3>Martin Exequiel Ferrari Cardenas</h3>
        <p><strong>Encargado Diseño</strong></p>
        <div className='icon'>
          <Icon name='question circle outline' onClick={() => openModal('Martin Exequiel Ferrari Cardenas')} />
        </div>
      </div>

      <ModalComponent open={modalOpen} onClose={closeModal} memberName={selectedMember} />
    </div>
  );
};

export default UsInformation;
