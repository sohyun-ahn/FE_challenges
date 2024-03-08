const completeReducer = (prevState = { isComplete: false }, action) => {
  const newState = { ...prevState };
  // 공장만들기 => function
  // action 작업지시서
  // 조건문
  if (action.type === "완료") {
    newState.isComplete = true;
  } else if (action.type === "진행중") {
    newState.isComplete = false;
  }
  return newState;
};

export default completeReducer;
