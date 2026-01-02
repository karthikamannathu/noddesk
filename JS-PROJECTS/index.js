const furits =['apple' ,'banna', 'cherry'];

furits.forEach(function(furits,index){
console.log(`Item at index ${index} is ${furits}`);
});


furits.forEach((furits,index) => {
    console.log(`Item at index ${index} is ${furits}`);
});