var Champion = /** @class */ (function () {
    function Champion(nameChamp, slgChamp, health) {
        this.nameChap = nameChamp;
        this.slgChamp = slgChamp;
        this.health = health;
    }
    Champion.prototype.show = function () {
        console.log(this.health);
    };
    return Champion;
}());
var Champion1 = new Champion('Darius', 'Riu vuong', 700);
Champion1.show();
