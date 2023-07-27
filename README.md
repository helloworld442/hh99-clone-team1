# 항해99 1조 클론 코딩 1론머스크 조

## 기획

##### 뉴닉과 일론머스크의 조합으로 일론머스크의 기사들이 담긴 뉴닉을 제작했습니다.

##### S.A 링크 : https://www.notion.so/2-SA-346bc5586c9b4efcab9c48ed3e9b2371

##### 서비스 링크 : https://fe-mini-project.vercel.app/

## 기술 스택

### FRONT-END

![](https://camo.githubusercontent.com/eea3c89b5aa320f391bd9ce962c4ef7d92c943a56c376c6cbac82be641585101/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4a6176615363726970742d4637444631453f7374796c653d666f722d7468652d6261646765266c6f676f3d4a617661536372697074266c6f676f436f6c6f723d626c61636b)![](https://camo.githubusercontent.com/20779f9d605be40d4f84bbc93a5fee22e86068e785a0c0ed8d90d3d15041a3fc/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f52656163742d3631444146423f7374796c653d666f722d7468652d6261646765266c6f676f3d5265616374266c6f676f436f6c6f723d626c61636b)![](https://camo.githubusercontent.com/40ae88f73ae80a91fc3035364417afdb9936bb558c50cbb9fbed2d476d7daa87/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f526561637420526f757465722d4341343234353f7374796c653d666f722d7468652d6261646765266c6f676f3d526561637420526f75746572266c6f676f436f6c6f723d7768697465)![](https://camo.githubusercontent.com/40a02fbec2410fe98c2dfbe605d4243eaec9d28f187d4db194f028159fb89ec0/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4178696f732d3541323945343f7374796c653d666f722d7468652d6261646765266c6f676f3d4178696f73266c6f676f436f6c6f723d7768697465)![](https://camo.githubusercontent.com/2fae549118710fd8284be62292b9e9a6cdd561cb50d46f35938b08dc3fc2c4e7/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f56657263656c2d3030303030303f7374796c653d666f722d7468652d6261646765266c6f676f3d76657263656c266c6f676f436f6c6f723d7768697465)<img src="https://img.shields.io/badge/REACT QUERY-FF4154?style=flat-square&logo=REACT QUERY&logoColor=white"/><img src="https://img.shields.io/badge/redux-764ABC?style=flat-square&logo=redux&logoColor=white"/><img src="https://img.shields.io/badge/Redux thuck-999999?style=flat-square&logo=redux&logoColor=white"/><img src="https://img.shields.io/badge/Redux ToolKit-4D148C?style=flat-square&logo=redux&logoColor=white"/>

## 🌲 기술적 의사 결정

### FRONT-END

| 사용 기술             | 기술 설명                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Styled-Components** | - CSS in JS라는 접근 방식으로 동적 스타일링이 가능해짐<br>- 재사용 컴포넌트를 만드는데에 유리함<br>- 각 요소에 고유의 클래스 이름 부여로 className으로 인한 스타일 충돌 문제를 효과적으로 방지                                                                                                                                                                                                                                                  |
| **Vercel**            | - Github에 Push를 통해 자동적으로 빌드와 배포 과정이 이루어짐<br>- 배포 과정 최적화와 복잡한 작업의 단순화에 큰 도움이 됨 > 개발 프로세스가 한층 간편해짐                                                                                                                                                                                                                                                                                       |
| **Axios**             | - instance : 코드 가독성, 유지 보수에 큰 장점을 가짐<br>- interceptor : 토큰 처리, 에러 핸들링, 로그 관리 등 다양한 작업 수행에 유용                                                                                                                                                                                                                                                                                                            |
| **React-Query**       | -react-query는 서버 상태 관리에 최적화 된 라이브러리이고 이번 프로젝트에서는 서버와 통신을 주고 받는 부분들이 많았고 ( 게시글 받기 , 토근 받기 등) 이를 최적화 시킬 필요가 있었기 때문에 react-query를 사용함<br> -infiniteQuery를 사용하여 게시물을 미리 prefetch하고 데이터를 캐싱하여 사용자 경험을 개선하고 효율적인 로직을 구현함<br> -쿼리키를 구분하여 관리하고 데이터들을 정확하게 구분하여 필요한 만큼만 리렌더링 하는 구조를 만들었음 |
| **Redux**             | -redux는 전역 상태 관리 라이브러리이며 이번 프로젝트에서는 전역적으로 상태를 관리해야 하는 순간 (유저 정보 , 다크 모드 등 ) 이 있었기에 redux를 사용함<br> -redux로는 최소한의 서버상태 관리만을 하도록 redux와 react-query의 역할을 확실히 하여 데이터들을 구분하여 관리함                                                                                                                                                                     |

## 🧨 트러블 슈팅

<details>
<summary>다크모드 유지 중 다른 페이지로 이동 시 다크모드가 풀리는 현상</summary>
<br>

**`문제`**
a태그로 되어 있다면 이동시 새로고침하며 이동되는 현상

**`해결`**
Link태그로 바꾸어 문제 해결

</details>
<details>
<summary>프로그래스 바와 다크모드 진행 중 출력 되지 않음</summary>
<br>

**`문제`**
다크모드 프랍을 각컴포넌트를 감싸는 Layout에 주려했으나 다른 동작은 다 됨
하지만 프로그래스 바가 나오지 않는 이슈

**`해결`**
프로그래스바에 다크모드를 직적 프랍하여 반전시켜보려 했음
하지만 해결 실패 시간부족으로 인해 다른 컴포넌트 작업 진행

</details>
<details>
<summary>디테일 페이지 렌더링 시 화면 하단부가 출력되는 현상</summary>
<br>

**`문제`**
디테일 페이지에서 useLocation으로 pathname을 찾음

**`해결`**
useEffect로 pathname에 해당하는 페이지 렌더시에 다음 과정을 수행
scrollTo를 이용해 상단부터 출력되게 정의함

</details>
<details>
<summary>프리렌더 이슈</summary>
<br>

**`문제`**
테스트 서버와의 싱크가 맞지 않아 발생함

**`해결`**
와야할 정보가 오기전에 컴포넌트가 출력
테스트 서버를 pull받아온 후 정상 작동

</details>
<details>
<summary>리스트 뷰 반응형 문제</summary>
  <br>
  
  **`문제`**
  
  문제상황 : 리스트 뷰를 화면에 따라 4x4 , 3x4 , 2x4 , 1x4이런 식으로 바뀌어야 하는 상황이었다. 이때 나는 flex-grow와 flex-shrink을 이용하여 화면의 비율에 맞취서 리스트 뷰를 자동적으로 바꿨다. 하지만 게시글이 하나 일때 게시글이 화면에 다 맞춰서 렌더링 된다는  문제가 있었다.
    
  **`해결`**
  
  grid와 media query를 통해서 화면에 비율이 바뀔 때마다 grid-template-columns: repeat(변수, 1fr) 의 값을 바꿔주면서 해당 문제를 해결했다.

</details>

<details>
<summary>실제 서비스를 하기 위한 수준의 Validation을 서비스에 적용하는것</summary>
  <br>
  
  **`문제`**
  
   로그인 / 회원가입 / 비밀번호 찾기 등의 서비스에서 기존과는 다르게 실제 서비스를 하기 위한 수준의 validation 조건을 충족시킬 필요성을 느낌
    
  **`해결`**
  
  효율적인 알고리즘 및 validation 순서에 맞게 이를 반영하고 피드백 메세지를 화면에 출력하는 것을 구현하기 위해 실제 사이트의 구조와 request / response 를 직접 시연하며 이해하여 반영함

</details>

</br>
<strong>자세한 트러블 슈팅 링크</strong> : https://broad-wishbone-2bb.notion.site/Frontend-41fa02f16cd54c14855f26df28d1deb0?pvs=4
