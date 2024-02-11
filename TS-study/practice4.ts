// 4-1 DOM
// (1)문제: HTML 문서에 id가 "myButton"인 버튼 요소가 있습니다. 
//         이 버튼에 클릭 이벤트 리스너를 추가하여, 
//         클릭 시 콘솔에 "Button clicked!"라고 출력하는 코드를 작성하세요.
const btn = document.getElementById('myButton') as HTMLButtonElement
btn.addEventListener('click', (): void => console.log("Button clicked!"))
// (2)문제: id가 "userInput"인 입력 필드에서 사용자의 입력값을 가져오는 코드를 작성하세요.
//         입력 필드는 input 태그로 가정합니다.
const input = document.getElementById('userInput') as HTMLInputElement

// 4-2 Type Narrowing
// (1)문제: 함수 processInput은 number 또는 string 타입의 매개변수 input을 받습니다.
//         입력된 input이 숫자인 경우 "Number received"를,
//         문자열인 경우 "String received"를 콘솔에 출력하는 코드를 작성하세요.
function processInput(input: number | string): void{
    if(typeof input === "number"){
        console.log("Number received")
    }else if(typeof input === "string"){
        console.log("String received")
    }
}
// (2)문제: LightState 타입을 "on" | "off"의 유니언 타입으로 정의하고, changeLightState 함수를 구현합니다.
//         이 함수에서는 매개변수의 값이 "on"인지 "off"인지를 확인하고, 그에 맞는 메시지를 콘솔에 출력합니다.
type LightState = "on" | "off"
function changeLightState(state: LightState): void{
    if(state === "on"){
        console.log("Light On")
    }else{
        console.log("Light Off")
    }
}
// (3)문제: 두 가지 타입의 객체를 구별하는 함수 processDevice를 구현하세요. 
//         이 함수는 Smartphone 타입과 Tablet 타입의 객체 중 하나를 매개변수로 받습니다.
//         Smartphone 객체에는 call 메서드가 있고, Tablet 객체에는 draw 메서드가 있습니다.
//         함수는 in 키워드를 사용하여 객체 타입을 확인하고, 각 타입에 맞는 메서드를 호출합니다.
type Smartphone = {
    call(): void;
}
type Tablet = {
    draw(): void;
}

function processDevice(device: Smartphone | Tablet): void{
    if ('call' in device){
        device.call()
    } else{
        device.draw()
    }
}

// 4-5 const assertion
// (1)
// 여기에 config 객체를 생성하고 상수 단언을 적용하세요.
const config = {
  server: "naver",
  port: "400" 
} as const
// config의 server 속성을 변경하려는 시도를 하세요.
// config.server = "daum"

// (2)
// 여기에 ProductStatus 객체를 생성하고 상수 단언을 적용하세요.
const ProductStatus = {
    inStock: "Available"
} as const;
// ProductStatus의 특정 키에 해당하는 값을 변경하려는 시도를 하세요.
// ProductStatus.inStock = "Unavailable"

// challenge
// 1
const buttons = document.querySelectorAll('button') as NodeListOf<HTMLButtonElement>
buttons.forEach(button => 
    button.addEventListener('click', ():void =>console.log(button.id)))

// 2
function processData(data: string | string[] | number | number[]): void {
    if(typeof data === ("string" || "number")){
        console.log(data)
    }else if(Array.isArray(data)){
        data.forEach(item => console.log(item))
    }
}

// 3
interface Product {
    id: number;
    name: string;
    price: number;
}
// 여기에 세 가지 새로운 타입을 만드세요.
type Optional = Partial<Product>
type ReadOnly = Readonly<Product>
type Essential = Pick<Product, "id">

// 각 타입에 대한 변수를 선언하고 초기화하세요.
const optional : Optional = {id : 123, name : 'rucy', price: 22200}
const readonlyy : ReadOnly = {id: 123, name: 'mangom', price: 33000}
const essential : Essential = {id: 333}

// 4
type HandleRequest = (url: string, method: string) => void;
type Params = Parameters<HandleRequest>

function logRequest(...params: Params): void{
    const [url, method] = params
    console.log(url)
    console.log(method)
}

//5 
const StatusCodes = { "404" : "Not Found" } as const
function message(): string{
    return StatusCodes["404"]
}
message()