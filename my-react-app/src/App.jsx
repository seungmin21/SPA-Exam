import React, { useState } from 'react';
import ThirdContainer from './ContainerBox/ThirdContainer'
import './ContainerBox/styles.css'

const App = () => {
  const names = [
    "김우진", "김현", "방승희", "변호녕", "소사무엘", "송영준", "신동현", "오승민",
    "유승민", "윤준현", "이민구", "이유안", "이채이", "정영식", "최성민", "최은철", "홍문기"
  ];

  const [firstTitle, setFirstTitle] = useState('');
  const [secondTitle, setSecondTitle] = useState('');

  const handleItemClick = (name) => {
    setFirstTitle(name + " 소개");
    setSecondTitle(name + " 장점");
  };

  return (
    <div id="root">
      <ul id="first-container">
        {names.map((name, index) => (
          <li key={index} onClick={() => handleItemClick(name)}>{name}</li>
        ))}
      </ul>
      <div id="line"></div>
      <div id="second-container">
        <div id="first-title">{firstTitle}</div>
        <p>Lorem ipsum dolor sit amet consectetur. Mfuris vitae nullam suspendisse ut amet quis nibh pellentesque. Non ut
          neque pellentesque FFfnisl imperdiet turpis nulla ut. Ut id massa eu eu rhoncus elementum adipiscing metus. Mi
          risus nulla phasellus nisl molestie dignissim risus arcu elementum. Habitasse tortor tempus sed enim lectus duis
          volutpat. Pellentesque lacinia suspendisse sit malesuada sit a faucibus sed mattis. Egestas mauris id mattis id
          pulvinar nunc euismod id diam. Amet amet aliquet pharetra sed nam ipsum aenean dis tempor. Nisl in egestas
          cursus sagittis sed in integer. Sed sed cursus tempor porttitor. Cras viverra arcu sed laoreet volutpat enim sem
          sapien. Est nibh velit eu ipsum praesent vitae vestibulum aliquam.
          Sagittis nisi faucibus libero luctus tincidunt. Porttitor laoreet tellus maecenas tempor. Vehicula ut vulputate
          lorem congue. Eget dignissim aliquam integer tincidunt massa nulla duis mauris. Pellentesque aenean sit mauris
          morbi.
          Dolor non aliquam elit risus elementum dictumst. Eu egestas turpis diam dictum. Dictumst leo senectus velit
          porta. Pretium tortor velit nulla sit ipsum vel sagittis. Eget elit donec sed amet vel in mattis aenean nibh.
          Fermentum et ac purus diam sit erat in vitae tellus. In at sit ornare fermentum. Risus blandit amet eget id.</p>
        <div id="second-title">{secondTitle}</div>
        <p>
          Lorem ipsum dolor sit amet consectetur. Consectetur morbi fames in id sit turpis eget lectus ut. Neque orci
          hendrerit scelerisque nam ac ac eu dui urna. Aliquet vulputate tortor odio ut. Turpis nam sagittis non iaculis.
          Eu purus mollis cursus sagittis sit. Tempor tempor tincidunt ac in. Ullamcorper eros ullamcorper tincidunt
          sagittis. Libero massa nec gravida libero. Volutpat orci bibendum morbi porta mauris pellentesque. Natoque
          gravida at penatibus vestibulum purus tristique mollis imperdiet amet. Sed magna dignissim luctus cras nulla.
          Ultrices sapien sed quis consectetur turpis fusce sem facilisis eget.
        </p>
        <ThirdContainer />
      </div>
    </div>
  );
};

export default App;
