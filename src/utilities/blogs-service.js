import * as blogsAPI from './blogs-api'
// because the api will export an exports object all modules can be imported with an * (wildcard)
// the as import keyword will provide a variable reference to the different sub-modules we will export from blogs-api.js 

export async function getBlogs(){
    try {
        // Delegate the network request code to the blogs-api.js API module
			  // which will ultimately return a JSON document
        const data = await blogsAPI.index()
        return data
    
		}catch(err){
        return err
    }
}