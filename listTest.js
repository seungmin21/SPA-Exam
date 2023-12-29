const FirstContainer = () => {
  const names = [
    "김우진", "김현", "방승희", "변호녕", "소사무엘", "송영준", "신동현", "오승민",
    "유승민", "윤준현", "이민구", "이유안", "이채이", "정영식", "최성민", "최은철", "홍문기"
  ];


  return (
    <ul id="first-container">
      {names.map((name) => (
        <li>{name}</li>
      ))}
    </ul>
  );
};
console.log(FirstContainer())