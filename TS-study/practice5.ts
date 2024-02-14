// 5-1 에러처리
// 문제 1: 양수와 음수에 대한 에러 처리를 테스트하는 TypeScript 코드를 작성하세요.
// checkPositiveNumber 함수는 주어진 숫자가 양수인지 확인하고, 양수라면 메시지를 출력합니다.
// 그렇지 않으면 "number should be positive"라는 에러 메시지를 throw 합니다.
// 함수 시그니처: function checkPositiveNumber(num: number): void
function checkPositiveNumber(num: number): void {
  if (num > 0) {
    console.log("양수입니다");
  } else {
    throw new Error("number should be positive");
  }
}
try {
  checkPositiveNumber(10);
  checkPositiveNumber(-10);
} catch (err) {
  if (err instanceof Error) {
    console.error(err.message);
  }
}

// 문제 2: CustomError 클래스를 사용하여 사용자 정의 에러를 발생시키고, 이 에러를 처리하는 TypeScript 코드를 작성하세요.
// CustomError 클래스는 Error 클래스를 상속하여 사용자 정의 에러를 만듭니다.
// 에러 메시지는 생성자에서 전달받습니다.
// 클래스 시그니처: class CustomError extends Error
class CustomError extends Error {
  constructor(err: string) {
    super(err);
    this.name = "CustomError";
  }
}
try {
  throw new CustomError("custom error 발생");
} catch (err) {
  if (err instanceof CustomError) {
    console.error(err.message);
  }
}

// 5-2 비동기 처리
const fetchData = (): Promise<string> => {
  return new Promise((resolve, reject) => {
    // 비동기 작업 수행
    const success = true;
    if (success) {
      resolve("data fetch complete");
    } else {
      reject("Something went wrong");
    }
  });
};

async function main() {
  const result = await fetchData();
  console.log(result);
}

main();
