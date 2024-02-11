class Country {
    protected name: string;
    protected capital: string;
  
    constructor(name: string, capital: string) {
      this.name = name;
      this.capital = capital;
    }
  
    displayInfo(): string {
      return `${this.name}, Capital: ${this.capital}`;
    }
}
  
// 여기에 Employee 클래스를 Country 클래스로부터 상속받아 정의하고, 필요한 메서드를 추가하세요.
class Employee extends Country{
    protected id: number;
    protected department: string;
    constructor(country: string, capital: string, id: number, department: string){
        super(country, capital);
        this.id = id;
        this.department = department;
    }
    displayEmployeeInfo(): string{
        return `ID: ${this.id} From ${this.name}, Capital: ${this.capital}, Department: ${this.department}`;
    }
}

// 출력 예시
const employee = new Employee("South Korea", "Seoul", 123, "Engineering");
console.log(employee.displayEmployeeInfo());