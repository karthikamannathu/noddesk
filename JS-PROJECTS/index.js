const fetchData = new Promise((resolve, reject) =>{
 console.log('Executor function stared... (Fetach)')
 
 
 setTimeout(() => {
    const success = true;
    if (success) {
        const data = { id: 1,message:'Hello Promise!'};
        console.log('Data fetched. Resolving promise!')
       resolve(data);
    } else {
        const error = new Error('culoud not fetch data!');
        console.log('Error fetching Rejecting promise.')
        reject(error);
        
    }
 },2000);
})

console.log('program started.');

fetchData
.then((result) => {
    console.log("Promise Fulfilled!")
    console.log("Received data:",result)

})
.catch((error) => {
    console.error("Promise Rejected!");
    console.error(error.message);
})
.finally(() => {
    console.log("Promise has settled. Hiding loading spinner.");
});
console.log("This log before the promise is fulifilled!");