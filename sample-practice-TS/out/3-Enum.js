// Enum
// sample 1
var Direction;
(function (Direction) {
    Direction[Direction["North"] = 0] = "North";
    Direction[Direction["South"] = 1] = "South";
    Direction[Direction["East"] = 2] = "East";
    Direction[Direction["West"] = 3] = "West";
})(Direction || (Direction = {}));
let myDirection = Direction.North;
console.log(myDirection);
const myDirectionString = Direction[myDirection];
console.log(myDirectionString);
// sample 2
var Statuss;
(function (Statuss) {
    Statuss[Statuss["Active"] = 1] = "Active";
    Statuss[Statuss["Inactive"] = 0] = "Inactive";
    Statuss["Complete"] = "complete";
})(Statuss || (Statuss = {}));
const myStatus = Statuss.Active;
console.log(myStatus);
const myStatusString = Statuss.Complete;
console.log(myStatusString); // "complete"
//# sourceMappingURL=3-Enum.js.map