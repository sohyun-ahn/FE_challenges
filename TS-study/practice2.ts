interface WithId {
  id: string;
}

interface User {
  id: string;
  pw: string;
  birth: number;
}

interface Store<T extends WithId> {
  // 여기에 인터페이스 구현을 작성하세요.
  save(item: T): boolean;
}

class UserRepository implements Store<User> {
  // 여기에 클래스 구현을 작성하세요.
  private users : User[];
  constructor(){
    this.users = [];
  }
  save(user: User): boolean {
    if(user.id.length>0){
      this.users.push(user)
      return true
    }else{
      console.log('Failed to save user')
      return false
    }
  }
  displayUsers(): void{
    console.log(this.users)
  }
}

// 여기에 UserRepository 인스턴스를 생성하고, 사용자를 추가 및 검색하는 코드를 작성하세요.
const userRepo = new UserRepository()
userRepo.save({id: "mangom", pw: "love2024", birth: 240120})
userRepo.save({id: "apple", pw: "love2023", birth: 231120})
userRepo.save({id: "rucy", pw: "love2025", birth: 240130})
userRepo.displayUsers()