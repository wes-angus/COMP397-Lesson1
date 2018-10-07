module managers {
    export class Collision {
        //private inst. vars

        //public props

        //constructor

        //private methods

        //public methods
        public static Check(obj1: objects.GameObject, obj2: objects.GameObject): void {
            if (util.Vector2.Dist(obj1.Position, obj2.Position) < (obj1.HalfHeight + obj2.HalfHeight)) {
                if (!obj2.IsColliding) {
                    obj2.IsColliding = true;
                    console.log(`Colliding with ${obj2.name}`);
                }
            }
            else {
                obj2.IsColliding = false;
            }
        }
    }
}