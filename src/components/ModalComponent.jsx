import React from 'react';
import { Modal, Icon } from 'semantic-ui-react';
import './ModalComponent.css';

const ModalComponent = ({ open, onClose, memberName }) => {
  return (
    <Modal open={open} onClose={onClose} size='tiny' style={{ width: '80%', maxWidth: '1500px' }}>
      <Modal.Header>Informacion Participantes:</Modal.Header>
      <Modal.Content class='modal'>
        <div className='Duran'>

          <h1 className='hmodal'>Nombre: Martín Nicolás Durán Salinas</h1>
          <p className='pmodal'>Edad: 18</p>
          <p className='pmodal'>Sexo: Masculino</p>
          <p className='pmodal'>Nacionalidad: Chileno</p>
          <p className='pmodal'>Carrera: Ing Civil Informatica</p>
          <p className='pmodal'>Semestre: Primero</p>

        </div>

        <div className='Benja'>

          <h1 className='hmodal'>Nombre: Benjamin Hurtado Peralta</h1>
          <p className='pmodal'>Edad: 21</p>
          <p className='pmodal'>Sexo: Masculino</p>
          <p className='pmodal'>Nacionalidad: Chileno</p>
          <p className='pmodal'>Carrera: Ing Civil Informatica</p>
          <p className='pmodal'>Semestre: Primero</p>
          
        </div>

        <div className='Pablo'>

          <h1 className='hmodal'>Nombre: Pablo Andres Miranda Letelier</h1>
          <p className='pmodal'>Edad: 21</p>
          <p className='pmodal'>Sexo: Masculino</p>
          <p className='pmodal'>Nacionalidad: Chileno</p>
          <p className='pmodal'>Carrera: Ing Civil Informatica</p>
          <p className='pmodal'>Semestre: Primero</p>
          
        </div>

        <div className='Martin'>

          <h1 className='hmodal'>Nombre: Martín Exequiel Ferrari Cardenas</h1>
          <p className='pmodal'>Edad: 26</p>
          <p className='pmodal'>Sexo: Masculino</p>
          <p className='pmodal'>Nacionalidad: Chileno</p>
          <p className='pmodal'>Carrera: Ing Civil Informatica</p>
          <p className='pmodal'>Semestre: Primero</p>
          
        </div>
      </Modal.Content>
      <Modal.Actions>
        <Icon name='close' onClick={onClose} className='close-icon' />
      </Modal.Actions>
    </Modal>
  );
};

export default ModalComponent;