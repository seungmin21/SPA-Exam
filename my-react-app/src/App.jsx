import React, { useState } from "react";
import "./ContainerBox/styles.css";

const App = () => {
  // useState가 배열을 반환하는 점
  // 객체가 아닌 배열로 감싸 값을 추출 = 배열 비구조화
  const [selectedItem, setSelectedItem] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [hiddenItems, setHiddenItems] = useState([]);
  const studentList = [
    "김우진",
    "김현",
    "방승희",
    "변호녕",
    "소사무엘",
    "송영준",
    "신동현",
    "오승민",
    "유승민",
    "윤준현",
    "이민구",
    "이유안",
    "이채이",
    "정영식",
    "최성민",
    "최은철",
    "홍문기",
  ];

  const handleListItemClick = (name) => {
    // 상태를 변경할 때 set 함수를 사용
    setSelectedItem(name);
  };

  const handleShowButtonClick = () => {
    const matchName = studentList.find((name) => name === inputValue);

    if (matchName) {
      // 숨긴다는 단어의 상태 값 초기화
      setHiddenItems([]);
      // 선택한 아이템의 상태 값을 보여주는 데이터
      setSelectedItem(matchName);
    } else {
      setSelectedItem("");
      setHiddenItems(studentList);
    }
  };

  return (
    <div id="root">
      {/* First Container */}
      <ul id="first-container">
        {studentList.map((name, index) => (
          <li
            key={index}
            onClick={() => handleListItemClick(name)}
            style={{ display: hiddenItems.includes(name) ? "none" : "block" }}
          >
            {name}
          </li>
        ))}
      </ul>

      <div id="line"></div>

      {/* Second Container */}
      <div id="second-container">
        {/* 직접적인 상태 데이터가 사용될 때 */}
        <div
          id="first-title"
          style={{ display: selectedItem ? "block" : "none" }}
        >
          {selectedItem && <div>{selectedItem} 소개</div>}
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur. Mfuris vitae nullam
          suspendisse ut amet quis nibh pellentesque. Non ut neque pellentesque
          FFfnisl imperdiet turpis nulla ut. Ut id massa eu eu rhoncus elementum
          adipiscing metus. Mi risus nulla phasellus nisl molestie dignissim
          risus arcu elementum. Habitasse tortor tempus sed enim lectus duis
          volutpat. Pellentesque lacinia suspendisse sit malesuada sit a
          faucibus sed mattis. Egestas mauris id mattis id pulvinar nunc euismod
          id diam. Amet amet aliquet pharetra sed nam ipsum aenean dis tempor.
          Nisl in egestas cursus sagittis sed in integer. Sed sed cursus tempor
          porttitor. Cras viverra arcu sed laoreet volutpat enim sem sapien. Est
          nibh velit eu ipsum praesent vitae vestibulum aliquam. Sagittis nisi
          faucibus libero luctus tincidunt. Porttitor laoreet tellus maecenas
          tempor. Vehicula ut vulputate lorem congue. Eget dignissim aliquam
          integer tincidunt massa nulla duis mauris. Pellentesque aenean sit
          mauris morbi. Dolor non aliquam elit risus elementum dictumst. Eu
          egestas turpis diam dictum. Dictumst leo senectus velit porta. Pretium
          tortor velit nulla sit ipsum vel sagittis. Eget elit donec sed amet
          vel in mattis aenean nibh. Fermentum et ac purus diam sit erat in
          vitae tellus. In at sit ornare fermentum. Risus blandit amet eget id.
        </p>
        <div
          id="second-title"
          style={{ display: selectedItem ? "block" : "none" }}
        >
          {selectedItem && <div>{selectedItem} 장점</div>}
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur. Consectetur morbi fames in id
          sit turpis eget lectus ut. Neque orci hendrerit scelerisque nam ac ac
          eu dui urna. Aliquet vulputate tortor odio ut. Turpis nam sagittis non
          iaculis. Eu purus mollis cursus sagittis sit. Tempor tempor tincidunt
          ac in. Ullamcorper eros ullamcorper tincidunt sagittis. Libero massa
          nec gravida libero. Volutpat orci bibendum morbi porta mauris
          pellentesque. Natoque gravida at penatibus vestibulum purus tristique
          mollis imperdiet amet. Sed magna dignissim luctus cras nulla. Ultrices
          sapien sed quis consectetur turpis fusce sem facilisis eget.
        </p>
        <div id="third-container">
          <input
            type="text"
            id="student-name"
            placeholder="Write your name."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button id="Button" onClick={handleShowButtonClick}>
            show
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
