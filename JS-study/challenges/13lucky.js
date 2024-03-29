/*
 * ❗️❗️ 필독 ❗️❗️
 * - 함수 블록 내부에만 작성해주세요.
 */

/*  문제 출제
 *
 *   ☘️당신의 운을 시험해 보세요☘️
 * - n은 내가 정하는 수 1~9까지의 숫자만 넣어주세요.
 * - 1~9번 중 랜덤으로 행운의 숫자를 출력합니다.
 * - 콘솔에 1~10회차의 각 행운의 숫자를 비교해 당첨 여부를 표시합니다. ex) 1회차 행운의 숫자 : 2 당첨!
 * - 총 당첨 횟수와 배팅금액을 곱해주세요.
 * - 최종 금액을 콘솔에 표시해주세요. ex) 당첨금은 30000원 입니다.
 *
 *  *❗️ 제한 조건 ❗️
 * - 랜덤 숫자는 정수 입니다.
 *
 *
 */

function question(n, m) {
    let result
    let reward = 0
    for (let i=1;i<=10;i++){
        let luckyNum = Math.floor(Math.random()*9+1)
        if (luckyNum == n){
            result = '당첨!'
            reward += m
        } else{
            result = '낙첨...'
        }
        console.log(`${i}회차 ☘️행운의 숫자☘️ : ${luckyNum} ${result}`)
    }
    console.log(`당첨금은 ${reward}원 입니다.`)
    return reward
}

question(4, 10000);