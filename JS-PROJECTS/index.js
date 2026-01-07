async function fetchDataSafe(params) {
    try {
    console.log('Fetching all user data ...')

    const user = await fetchUser('user123');
    console.log('Got user :',user);
    
    const posts = await fetchPosts(user.id);
    console.log('Got post:',posts);

    const comments = await fetchComments(posts[0].id);
    console.log('Got user :',comments);
    
    return comments;
        
    } catch (error) {
       console.error('An error occured:',error); 
    } finally{
        console.log("All operations are complete.");
    }
}

fetchDataSafe();