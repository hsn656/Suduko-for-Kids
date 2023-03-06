import './Statusselector.css'

import React, { useState } from 'react';
import ButtonGroup from './ButtonGroup';

const options = ['موثق', 'غير موثق', 'الكل'];

const Statusselector = () => {
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className='buttonWrapper'>
      <ButtonGroup
        options={options}
        selectedOption={selectedOption}
        onOptionSelect={handleOptionSelect}
      />
    </div>
  );
};

export default Statusselector;