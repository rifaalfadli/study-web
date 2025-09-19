// Make a function of turning on a water heater, then suddenly the electricity goes down 
// when the currentElectricityRate is more than the maximum Electricityrate, and then show the text "Electricity Goes Down!"
// ver 1
function onWaterHeater(electricityRate, maxElectricityRate) {
    console.log("The water heater is turned on...");
    if (electricityRate > maxElectricityRate) {
        throw new Error("Electricity Goes Down");
    }
    console.log("The water heater remains on safely.");
}

try {
    onWaterHeater(100000, 500000);
    onWaterHeater(100000, 50000);
} catch (error) {
    console.error(error.message);
}

// ver 2
function nyalakanPemanasAir(tarifListrik, tarifMaksimum) {
    try {
        console.log("Pemanas air dinyalakan...");

        if (tarifListrik > tarifMaksimum) {
            throw new Error("Listrik Turun!");
        }

        console.log("Pemanas air tetap menyala dengan aman.");
    } catch (error) {
        console.log(error.message);
    }
}

nyalakanPemanasAir(1200, 1000);
nyalakanPemanasAir(800, 1000);  