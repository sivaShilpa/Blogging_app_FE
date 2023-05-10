import { useState } from 'react';
import "./Create.css"
import { Navigate } from "react-router-dom";



const Create = () => {
    const [form, setForm] = useState({
        title: "",
        content: "",
        image: ""
    })

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(form)

        const response = await fetch("http://localhost:4000/blogs", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form)
        })

        if (response.ok) {
            <Navigate to="/" />
        }
       
    }
    return (
        <section>
            <form onSubmit={handleSubmit} className='newBlogForm'>
                <div><label>Title: </label><input onChange={handleChange} value={form.title} name="title"></input></div>
                <div><label>Content: </label><input onChange={handleChange} value={form.content} className='content' name="content"></input></div>
                <div><label>Image: </label><input onChange={handleChange} value={form.image} name="image"></input></div>
                {/* <div><input type='submit'>Create a blog</input></div>  */}
                <button>Create a blog</button>
            </form>
        </section>
    )
}

export default Create