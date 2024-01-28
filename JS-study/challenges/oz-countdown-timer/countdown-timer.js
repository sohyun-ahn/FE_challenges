const h1 = document.querySelector('h1')
const userInput = document.querySelector('input')
const btn = document.querySelector('button')
const settingBox = document.querySelector('.setting')
const timerBox = document.querySelector('.timer')
let targetYear;
let targetMonth;
let targetDay;

function splitTargetDate(){
    const target = userInput.value.split('-')
    targetYear = target[0]
    targetMonth = target[1]
    targetDay = target[2]
}
function splitTime(remainingTimeInSeconds){
    let remainingUnits = [];
    const remainingDays = Math.floor(remainingTimeInSeconds/60/60/24)
    const remainingHours = Math.floor((remainingTimeInSeconds/60/60)%24)
    const remainingMins = Math.floor((remainingTimeInSeconds/60)%60)
    const remainingSecs = remainingTimeInSeconds%60
    remainingUnits.push(remainingDays,remainingHours,remainingMins,remainingSecs)
    return remainingUnits
}
function displayPaddedNumber(remainingUnits){
    remainingUnits = remainingUnits.forEach((time,i) => {
        const timeBox = timerBox.querySelector(`:nth-child(${i+1})`)
        timeBox.textContent = String(time).padStart(2,'0')
    });
}
function applyErrStyle(){
    timerBox.classList.add('countdown-end')
    timerBox.innerHTML = ''
    const p = document.createElement('p')
    p.innerHTML = '남은 시간이 없습니다!! <br/>날짜를 확인해주세요!'
    p.classList.add('finish')
    timerBox.prepend(p)
}
function applyCountdownStartStyle(){
    document.body.classList.add('back-color')
    Array.from(timerBox.querySelectorAll('span')).filter((item, i) => i%4 !== 3).forEach(item => item.classList.add('countdown-hidden'))
    timerBox.querySelector('span:nth-child(4)').classList.add('countdown-visible')
    timerBox.classList.add('countdown-start')
}
function applyCountdownEndStyle(){
    document.body.classList.remove('back-color')
    h1.innerHTML = `Ta-Da! &nbsp;<u style='color: purple;'>${targetYear}년 ${targetMonth}월 ${targetDay}일</u>&nbsp; 입니다!!!`
    h1.style.color = 'violet'   
    timerBox.classList.remove('countdown-start')
    timerBox.classList.add('countdown-end')
    timerBox.innerHTML = ''
    const p = document.createElement('p')
    p.innerHTML = 'Have a Good Time😃'
    p.classList.add('finish')
    timerBox.prepend(p)
}
// 시작!버튼 클릭시 타이머 화면으로 바뀌기
btn.addEventListener('click', function(){ 
    const today = new Date()
    const targetDate = new Date(`${userInput.value}T00:00:00`)
    splitTargetDate()
    settingBox.style.display = 'none'
    timerBox.style.display = 'grid'
    h1.textContent = `목표일 ${targetYear}년 ${targetMonth}월 ${targetDay}일까지 남은 시간`
    let remainingTimeInSeconds = Math.floor((targetDate - today)/1000) // 남은 시간 단위 ms -> s 변경
    if (remainingTimeInSeconds<=0){
        // 남은 시간이 없을시, error 
        applyErrStyle()
    } else {
        // 남은 시간이 있을시, countdown 시작
        let timeCode = setInterval(()=>{
            remainingTimeInSeconds -= 1
            const remainingTime = splitTime(remainingTimeInSeconds)
            displayPaddedNumber(remainingTime)
            if (remainingTimeInSeconds == 10){ // 남은 시간이 10s, countdown 시작
                applyCountdownStartStyle()
            }
            if(remainingTimeInSeconds<=0 || Date.now()>=targetDate.getTime()){ // countdown 종료
                clearInterval(timeCode)
                applyCountdownEndStyle()
            }
        }, 1000)
    }   
})