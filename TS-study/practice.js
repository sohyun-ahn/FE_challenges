var Item = /** @class */ (function () {
    function Item(name, date) {
        this.name = name;
        this.date = date;
    }
    Item.prototype.displayInfo = function () {
        console.log("".concat(this.name, " milk can drink until ").concat(this.date));
    };
    return Item;
}());
// 여기에 Item<string> 클래스의 인스턴스를 생성하고 사용하는 코드를 작성하세요.
var milk = new Item('maeil', '2024/02/07');
milk.displayInfo();
