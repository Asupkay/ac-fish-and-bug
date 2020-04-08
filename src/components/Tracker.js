import React, {useState} from 'react';
import Cookies from 'universal-cookie';
import './Tracker.css';

import Item from './Item';
import Modal from './Modal';
import ItemInfo from './ItemInfo';

const Tracker = ({title, items, offset}) => {
  const [showModal, setModal] = useState(false);
  const [activeItem, setActiveItem] = useState(null);
  const [cookies, setCookies] = useState(new Cookies());

  const handleCheck = (e) => {
    cookies.set(e.target.value, e.target.checked);
    setCookies(new Cookies());
  }

  const renderItems = (items) => {
    return items.map((item, index) => 
      <Item 
        key={index} 
        item={item}
        found={cookies.get(item.name)}
        onClick={() => {setModal(true); setActiveItem(item)}}
      />
    );
  };

  return (
    <div>
      <h2 className="title">{title}</h2>
      <div className="items-container">
        {renderItems(items)} 
      </div>
      <Modal 
        show={showModal} 
        handleClose={() => setModal(false)}
      >
        {activeItem && 
          <ItemInfo 
            handleCheck={handleCheck} 
            checked={cookies.get(activeItem.name)}
            item={activeItem}
            offset={offset}
          />
        }
      </Modal>
    </div>
  );
};

export default Tracker;
