 function calculateSqureRoot(number) {
if (typeof number !== 'number') {
    throw new TypeError('Invalued input: a number was excuted');
}
if (number < 0) {
    throw new Error( "the negative value was excuted");  
}
return Math.sqrt(number);
}


try {
    const result1 = calculateSqureRoot('e');
    console.log(result1,"Result 1");
    const result2 = calculateSqureRoot(-9);
    console.log(result2,"Result 2")
} catch (error) {
    console.error('caught a custom error:',error.message);
}
