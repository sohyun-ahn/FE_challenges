const submitBtn = document.getElementById('signup')
const resetBtn = document.getElementById('reset')

const form = document.getElementById('form')

form.addEventListener('submit', (e)=>{
    e.preventDefault();  
    if (e.target.id.value.length < 6){
        alert('아이디를 6자 이상 입력해주세요')
        return
    }else if (e.target.pw.value != e.target.pw2.value){
        alert('비밀번호가 일치하지 않습니다')
        return
    }
    
    printList = ['ID', 'name', 'phone', 'jobs', 'gender']

    document.body.innerHTML = ""
    const h2 = document.createElement('h2')
    const h4 = document.createElement('h4')
    const hr = document.createElement('hr')
    h2.textContent = `${e.target.id.value}님 가입을 환영합니다🤗`
    h4.textContent = `회원가입시 입력하신 내용은 다음과 같습니다.`
    document.body.append(h2)
    document.body.append(h4)
    document.body.append(hr)

    printList.forEach(printItem => {
        const p = document.createElement('p')
        p.textContent = `${printItem} : ${e.target.elements[printItem].value}`
        document.body.append(p)
    }); 
})