import React from 'react';
import Modal from 'react-modal';

const OptionModal = props => (
  <Modal isOpen={props.state} contentLabel="selected option">
    <h3>selected option</h3>
  </Modal>
);

export default OptionModal;
