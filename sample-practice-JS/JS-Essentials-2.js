// Build a code to define a pool is a clean pool
const CLEAN_POOL_COLOR = "BLUE";
const CLEAN_POOL_PH_INDICATOR = 8;

var poolWaterColor = "blue";
var poolPhIndicator = 8;

var isPoolClean = poolWaterColor === "blue" && poolPhIndicator >= 8;
console.log(isPoolClean);