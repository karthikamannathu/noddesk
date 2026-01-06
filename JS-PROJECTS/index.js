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