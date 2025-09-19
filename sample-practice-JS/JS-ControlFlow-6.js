// Cook a rice with an initial temperature 0, cook it until the temperature is 100 celcius or above, then.
// Show text if the rice is cooked! use recursion.
// ver 1
function cookRice(temperature) {
    temperature++;
    if (temperature >= 100) {
        return console.log("Rice is Cooked!");
    }
    return cookRice(temperature);
}
cookRice(0);

// ver 2
function cookRice(temperature) {
    if (temperature >= 100) {
        console.log("Rice is Cooked!");
        return;
    }  
    temperature +=10;
    console.log("Current temperature: " + temperature + " degrees Celcius");
    cookRice(temperature);
}
console.log("Start cooking rice...");
cookRice(0);