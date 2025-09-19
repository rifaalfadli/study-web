// Enum
// sample 1
enum Direction {
    North,
    South,
    East,
    West
}

let myDirection: Direction = Direction.North;
console.log(myDirection);

const myDirectionString: string = Direction[myDirection];
console.log(myDirectionString);


// sample 2
enum Statuss {
    Active = 1,
    Inactive = 0,
    Complete = 'complete'
}

const myStatus: Statuss = Statuss.Active;
console.log(myStatus);

const myStatusString: string = Statuss.Complete;
console.log(myStatusString); // "complete"
