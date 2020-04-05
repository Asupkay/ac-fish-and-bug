import React, {useState} from 'react';
import './Tracker.css';

import Item from './Item';
import Modal from './Modal';

const Tracker = ({title, items}) => {
  const [showModal, setModal] = useState(false);
  const [activeItem, setActiveItem] = useState(null);

  const renderItems = (items) => {
    return items.map((item, index) => 
      <Item 
        key={index} 
        item={item}
        onClick={() => {setModal(true); setActiveItem(item)}}
      />
    );
  };

  return (
    <div>
      <h2 className="title">{title}</h2>
      {renderItems(items)} 
      <Modal 
        show={showModal} 
        handleClose={() => setModal(false)}
      >
        {activeItem && <p>{activeItem.name}</p>}
      </Modal>
    </div>
  );
};

export default Tracker;
