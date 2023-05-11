import * as blogsAPI from './blogs-api' 

export async function getBlogs(){
        try {
            const data = await blogsAPI.index()
            console.log(data)
            return data
        }catch(err){
            console.log(err)
            throw new Error(err)
        }
    }

    export async function createBlogs(form){
        try {
            const data = await blogsAPI.create(form)
            return data
        }catch(err){
            console.log(err)
            throw new Error(err)
        }
    }

    export async function showBlog(id){
        try {
            const blogData = await blogsAPI.show(id)
            return blogData
        }catch(err){
            console.log(err)
            throw new Error(err)
        }
    }