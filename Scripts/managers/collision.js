var managers;
(function (managers) {
    var Collision = /** @class */ (function () {
        function Collision() {
        }
        //private inst. vars
        //public props
        //constructor
        //private methods
        //public methods
        Collision.Check = function (obj1, obj2) {
            if (util.Vector2.Dist(obj1.Position, obj2.Position) < (obj1.HalfHeight + obj2.HalfHeight)) {
                if (!obj2.IsColliding) {
                    obj2.IsColliding = true;
                    console.log("Colliding with " + obj2.name);
                }
            }
            else {
                obj2.IsColliding = false;
            }
        };
        return Collision;
    }());
    managers.Collision = Collision;
})(managers || (managers = {}));
//# sourceMappingURL=collision.js.map