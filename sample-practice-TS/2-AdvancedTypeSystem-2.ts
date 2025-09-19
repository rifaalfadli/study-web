// Generic
function getIdentity<T>(identityName: T): T {
    return identityName;
}
const identityNameAsString = getIdentity<string>("My indentity is Employee Worker");
console.log(identityNameAsString);
const identityNameAsNumber = getIdentity<number>(123456789);
console.log(identityNameAsNumber);
