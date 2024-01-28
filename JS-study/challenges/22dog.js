const apiRandomDogs = "https://dog.ceo/api/breeds/image/random/12"
const apiAllBreeds = "https://dog.ceo/api/breeds/list/all"
const requestDogs = new XMLHttpRequest()
const requestBreeds = new XMLHttpRequest()
const input = document.querySelector('input')
const filterBtn = document.getElementById('filter-btn')
const moreBtn = document.getElementById('more')
const topBtn = document.getElementById('top')
const resetBtn = document.getElementById('reset-btn')
const select = document.querySelector('select')
const imgsBox = document.querySelector('.imgs')
let currentDogs = []
let filteredDogs = []
const fetchRandomDogImages = function(){
    const response = JSON.parse(requestDogs.response)
    response.message.forEach(url => {
        const breed = url.split('/').reverse()[1]  // breed 부분만 slice
        const dog = new Dog(url, breed)
        currentDogs.push(dog)
        displayDog(dog)
    });
}
const fetchAllBreeds = function(){
    const response = JSON.parse(requestBreeds.response)
    Object.keys(response.message).forEach(breed => {
        const option = document.createElement('option')
        select.append(option)
        option.textContent = breed
        option.value = breed
    })
}
function Dog(url, breed){
    this.url = url
    this.breed = breed
}
function displayDog(dog){ // 화면에 dogs img 넣기
    const img = document.createElement('img')
    img.src = dog.url
    img.alt = dog.breed
    img.title = `견종: ${dog.breed}입니다!`
    imgsBox.append(img)
}
function displayFilteredDogs(userInput, unusedInput){ // 화면에 filtered dogs img 넣기
    filterDogs(userInput)
    imgsBox.innerHTML = ''
    filteredDogs.forEach(dog=>displayDog(dog))
    unusedInput.value = ''
}
function filterDogs(userInput){  // userInput과 같은 dog만 filtering 하기
    filteredDogs = currentDogs.filter(dog =>
        dog.breed.includes(userInput.value) 
    )
}
// window load시 발생 event
window.addEventListener("load", function(){ 
    requestDogs.open('get', apiRandomDogs)
    requestDogs.addEventListener("load", fetchRandomDogImages)
    requestDogs.send()

    requestBreeds.open('get', apiAllBreeds)
    requestBreeds.addEventListener('load', fetchAllBreeds)
    requestBreeds.send()
})
// select의 견종으로 선택될(change)시 발생 event
select.addEventListener('change', () => displayFilteredDogs(select, input))
// 필터링버튼 클릭시 발생 event
filterBtn.addEventListener('click', () => displayFilteredDogs(input, select))
// more 클릭시 발생 event 
moreBtn.addEventListener('click', function(){
    requestDogs.open('get', apiRandomDogs)  
    requestDogs.send()
})
// top 클릭시 발생 event (css - scroll-behavior : smooth)
topBtn.addEventListener('click', () => window.scrollTo({top:0}))
// reset 클릭시 발생 event 
resetBtn.addEventListener('click', function(){
    currentDogs = []
    imgsBox.innerHTML = ''
    input.value = ''
    select.value = ''
    requestDogs.removeEventListener('load', fetchRandomDogImages)
    requestDogs.open('get', apiRandomDogs)
    requestDogs.addEventListener("load", fetchRandomDogImages)
    requestDogs.send()
})