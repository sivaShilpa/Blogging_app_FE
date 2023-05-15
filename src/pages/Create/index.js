import { useState } from 'react';
import "./Create.css"
// import { useNavigate } from "react-router-dom";
import {createBlogs} from '../../utilities/blogs-services'
import { useNavigate } from "react-router-dom";


const Create = () => {
    const [form, setForm] = useState({
        title: "",
        content: "",
        image: ""
    })

    const navigate = useNavigate();


    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try{
            const apiResponse = await createBlogs(form)
            console.log(apiResponse)
            if(apiResponse.ok){
                navigate("/");
            }
            else{
                throw new Error(apiResponse.statusText)
            }
    
            
        }catch(err){
            console.log(err)
        }
        
       
    }
    return (
        <section>
            <form onSubmit={handleSubmit} className='newBlogForm'>
                <div><label>Title: </label><input onChange={handleChange} value={form.title} name="title"></input></div>
                <div><label>Content: </label><input onChange={handleChange} value={form.content} className='content' name="content"></input></div>
                <div><label>Image: </label><input onChange={handleChange} value={form.image} name="image"></input></div>
                <div><button type='submit'>Create a blog</button></div> 
            </form>
        </section>
    )
}

export default Create
