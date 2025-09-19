// Write a recursive function that counts down from a given number to 1, logging each number along the way.
const countdown = (num) => {
    if (num <= 0) {
        return;
    }
    console.log(num);
    countdown(num - 1);
};

countdown(5);