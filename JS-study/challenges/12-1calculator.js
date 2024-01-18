const td = document.querySelectorAll('td')
const c = document.querySelector('.cancel')
const equal = document.querySelector('.equal')
const exscreen = document.querySelector('.exscreen')

let expression;
let numArr;
let operArr;
let expressionTemp = []

function makeExpression(e){
    const item = e.target.textContent
    if (item == equal.textContent){     // '=' 누를시, 종료
        return expressionTemp
    }
    if (item == c.textContent){    // 'C' 누를시, 제거
        expressionTemp.pop()
    }else{
        expressionTemp.push(item)
    }
    exscreen.textContent = expressionTemp.join('')
}

/* 계산기 버튼 클릭시 발생하는 이벤트 정의 */
for (let i=0;i<td.length;i++){
    td[i].addEventListener('click', function(event){ 
        expression = makeExpression(event)
        if (expression != undefined){  // '=' 클릭 후, expression에  결과가 생겼으면,
            expressionTemp = []        // 임시 expression은 초기화
            arrsNumAndOper = isNumOrisOper(expression)
            numArr = arrsNumAndOper[0]
            operArr = arrsNumAndOper[1]
            result = parseInt(evaluate(numArr, operArr))
            exscreen.textContent = result
            expressionTemp.push(result)  // result 가지고 operator 버튼 클릭해도 연속으로 수식만들기
        }
    })
}

function isNumOrisOper(mixedArr){
    let arrNum = []
    let arrOper = []
    let singleNums = []
    for (let i=0;i<mixedArr.length;i++){
        let combinedNum;
        if(isNaN(mixedArr[i])){
            combinedNum = parseInt(singleNums.join('').toString())  // num들을 하나로 이어 붙이기고 문자열로 바꾸기
            arrNum.push(combinedNum)
            arrOper.push(mixedArr[i])
            singleNums = []  // single-digit number 담는 곳 초기화
        }else{
            singleNums.push(mixedArr[i])
        }
        if(i==mixedArr.length-1){  // if, 마지막 숫자들도 arrNum에 추가하기 위해,
            combinedNum = parseInt(singleNums.join('').toString())  // num들을 하나로 이어 붙이기고 문자열로 바꾸기
            arrNum.push(combinedNum)
        }
    }
    return [arrNum, arrOper]
}

function add(a, b){
    return a + b
}
function subtract(a, b){
    return a - b
}
function divide(a, b){
    return a / b
}
function multiply(a, b){
    return a * b
}

function calculate(a, b, op){
    if (op == '+'){
        return add(a,b)
    }else if (op == '-'){
        return subtract(a,b)
    }else if (op == '/'){
        return divide(a,b)
    }else if (op == 'x'){
        return multiply(a,b)
    }
}

function updateArrNum(arrNum, arrOper, i){
    arrNum[i] = calculate(arrNum[i], arrNum[i+1], arrOper[i])
    arrNum.splice(i+1,1)
    arrOper.splice(i,1)
    return [arrNum, arrOper]
}

function getPriority(arrOper){
    let priority = []
    arrOper.forEach( (op,i) =>{
        if(op == '/' || op =='x'){
            priority.push(i)
        }
    })
    return priority
}

function evaluate(arrNum, arrOper){
    let count = 1;
    let priority = getPriority(arrOper)
    let arrsNumAndOper;
    console.log(`연산자 우선순위 : ${priority}`)
    console.log(`0회 연산, 현재 numbers: ${arrNum}, op: ${arrOper}`)
    if(priority.length>0){
        for(let i=0;i<priority.length;i++){
            arrsNumAndOper = updateArrNum(arrNum, arrOper, priority[i]-i) // priority의 값 update 해주기 (index 커질수록 여러번 업데이트 되므로 -i)
            numArr = arrsNumAndOper[0]
            operArr = arrsNumAndOper[1]
            console.log(`${count}회 연산, 남은 numbers: ${arrNum}, op: ${arrOper}`)
            count++
        }
    } 
    while(arrNum.length>1){
        arrsNumAndOper = updateArrNum(arrNum, arrOper, 0)
        numArr = arrsNumAndOper[0]
        operArr = arrsNumAndOper[1]
        console.log(`${count}회 연산, 남은 numbers: ${arrNum}, op: ${arrOper}`) 
        count++
    }
    return arrNum
}
