class Item<T> {
    // 여기에 클래스 구현을 작성하세요.
    private name: T;
    date: T;

    constructor(name: T, date: T){
      this.name = name;
      this.date = date;
    }
  
    displayInfo(): void{
      console.log(`${this.name} milk can drink until ${this.date}`)
    }
  }

// 여기에 Item<string> 클래스의 인스턴스를 생성하고 사용하는 코드를 작성하세요.
const milk = new Item('maeil', '2024/02/07')
milk.displayInfo()