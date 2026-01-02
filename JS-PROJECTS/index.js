const prices = [10.50, 5.25, 20.00, 3.75];

const total = prices.reduce((accumlator,currentValue) => {
    console.log(`Accumlator:${accumlator},current value: ${currentValue}`)
    return currentValue + accumlator;

},0);

console.log(`final total :${total}`);