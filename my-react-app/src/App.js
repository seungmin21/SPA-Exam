import React, { useState } from 'react';
import SecondContainer from './ContainerBox/SecondContainer';
import './ContainerBox/styles.css';
import FirstContainer from './ContainerBox/FirstContainer';

const App = () => {

  const { firstTitle, setFirstTitle } = useState('');
  const { secondTitle, setSecondTitle } = useState('');

  const handleItemClick = (name) => {
    setFirstTitle(name + " 소개");
    setSecondTitle(name + " 장점");
  };

  return (
    <div id="root">
      <FirstContainer />
      <div id="line"></div>
      <SecondContainer />
    </div>
  );
};

export default App;
