// 공장파일이니까 공장(authReducer) 만들기! - 작업지시서(action)에 따른 상태 변경 처리하는 곳
// 인자로, 상태를 변경하기위한 이전상태(prevState)와 작업지시서(action)이 필요함
// prevState는 아예 처음 초기상태가 없을 수 있기 때문에 초기 상태를 지정해줘야함. !!

export function authReducer(prevState = { isLoggedIn: false }, action) {
  // 작업시작
  // 작업의 이름(action.type)에 따라 다른 작업을 시행해줘야함. => 조건문

  const newState = { ...prevState }; // React 불변성을 위해

  if (action.type === "로그인하기") {
    newState.isLoggedIn = true;
  }
  if (action.type === "로그아웃하기") {
    newState.isLoggedIn = false;
  }

  return newState; // 작업 후 저장소(redux store)에 바뀐 상태 반환
}
