var UserRepository = /** @class */ (function () {
    function UserRepository() {
        this.users = [];
    }
    UserRepository.prototype.save = function (user) {
        if (user.id.length > 0) {
            this.users.push(user);
            return true;
        }
        else {
            console.log('Failed to save user');
            return false;
        }
    };
    UserRepository.prototype.displayUsers = function () {
        console.log(this.users);
    };
    return UserRepository;
}());
// 여기에 UserRepository 인스턴스를 생성하고, 사용자를 추가 및 검색하는 코드를 작성하세요.
var userRepo = new UserRepository();
userRepo.save({ id: "mangom", pw: "love2024", birth: 240120 });
userRepo.save({ id: "apple", pw: "love2023", birth: 231120 });
userRepo.save({ id: "rucy", pw: "love2025", birth: 240130 });
userRepo.displayUsers();
