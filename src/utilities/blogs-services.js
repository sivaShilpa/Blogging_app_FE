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
            const blogData = await blogsAPI.detail(id)
            return blogData
        }catch(err){
            console.log(err)
            throw new Error(err)
        }
    }
    export async function deleteBlog(id){
        try {
            const deletedBlog = await blogsAPI.destroy(id)
            return deletedBlog
        }catch(err){
            console.log(err)
            throw new Error(err)
        }
    }
    export async function updateBlog(id){
        try {
            const updatedBlog = await blogsAPI.update(id)
            return updatedBlog
        }catch(err){
            console.log(err)
            throw new Error(err)
        }
    }

    