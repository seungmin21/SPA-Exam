###사용한 기능
CRA 방식의 React 설치
npx create-react-app my-react-app

###진행 방향
1. note로 맨처음 작성을 진행
2. li태그로 하는 것인지 혹은 점 자체가 위치로 배치 되는지에 대한 구상
3. li 태그의 dot을 숨겨서 만들기로 결정
4. html로 메인 틀을 작성
5. 기능을 각각 구현하면서 React로 변형을 진행
6. addEventListener -> On.click으로 변형
7. 컴포넌트를 각각 나눠서 App.jsx에선 잔재만 확인하려고 시도
8. 최종 결과물은 App.jsx에 두는 것으로 결정

컴포넌트화 하려고 진행했던 시도는 실패했으며
시도에 대한 자료는 ContainerBox에 남아있습니다.

컴포넌트를 진행하려고 했던 점은 first-container, second-container, third-container로 나누려고 했었습니다.
하지만 Event.click의 기능으로 묶여있어서 App.jsx에 전부 작성하는 방안으로 진행을 했습니다.

메인 틀 작성 시에 third-container로 작성했지만 이는 second-container에 속한 영역으로 만들었기 때문에
둘의 분리할 수 없는 상태로 만듬

selectedItem : 선택한 아이템이 보여지는 상태값
inputValue : input 태그에 입력하는 value의 데이터
hiddenItems : display의 속성에 사용하는 상태 작성되있는 데이터를 숨기려는 의도를 가짐
