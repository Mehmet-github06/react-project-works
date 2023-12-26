// Faq.js

import React from 'react';

const Faq = ({ title, active, setActive ,item}) => {
  const handleClick = () => {
    setActive((prev) => (prev === title ? '' : title));
  };

  return (
    <div className='accordion'>
      <div className='accordionHeading'>
        <p>{title}</p>
        <span role='button' onClick={handleClick}>
          CLICK ME
        </span>
      </div>
      <div className={`accordionContent ${active === title ? 'show' : ''}`}>
        <div className='container'>
          <p>
             {item}) Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nemo id soluta sequi repellendus. Eaque consequuntur magni veniam sequi doloremque quia. Expedita?
          </p>
        </div>
      </div>
      
    </div>
    
  );
};

export default Faq;
