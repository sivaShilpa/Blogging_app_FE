
import { useState, useEffect } from "react"
import { showBlog, deleteBlog, updateBlog } from "../../utilities/blogs-services"
import { useParams, useNavigate } from "react-router-dom"

export default function Edit(){
    const {id} = useParams()
    const navigate = useNavigate()
    // const [blog, setBlog] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [editForm, setEditForm] = useState({
        title: "", 
        content: "",
        image: ""
    })

    async function handleRequest(){
        try{
            const editBlog = await showBlog(id)
            // setBlog(editBlog)
            const {title, content, image} = editBlog
            setEditForm({title, content, image})
            setIsLoading(false)

        }catch(err){
            console.log(err)
            return err
        }

    }

    useEffect(()=>{ handleRequest() 
                    // eslint-disable-next-line
                },[isLoading])

    async function handleBlogDelete(){
        try{
             const delResponse = await deleteBlog(id)
             if(delResponse._id){
                navigate('/')
             }
             else{
                throw new Error("Something went wrong")
             }

        }catch(err){
            console.log(err)
            navigate(`/blogs/${id}`)
        }
    }


    const handleChange=(e)=>{
        setEditForm({...editForm, [e.target.name] : e.target.value})
    }

    const handleSubmit = async (e)=>{
        e.preventDefault()
        try{
            const updatedBlog = await updateBlog(id, editForm)
            console.log(updatedBlog)
            if(updatedBlog._id){
                navigate(`/blogs/${id}`)
            }
            else{
                throw new Error("Something went wrong")
            }
        }catch(err){
            console.log(err)
            navigate(`/blogs/${id}/edit`)
        }

    }

    const loaded = () =>{
        return(
            <section className="edit-container">
                <h1>Edit Page</h1>
                <form onSubmit={handleSubmit} className='newBlogForm'>
                    <div><label>Title: </label><input onChange={handleChange} value={editForm.title} name="title"></input></div>
                    <div><label>Content: </label><input onChange={handleChange} value={editForm.content} className='content' name="content"></input></div>
                    <div><label>Image: </label><input onChange={handleChange} value={editForm.image} name="image"></input></div>
                    <div><button type='submit'>Edit blog</button></div> 
                </form>
                <button onClick={handleBlogDelete}>Delete Blog</button>
            </section>
        )
    }

    const loading = () => (
        <div className="blogs-list">
          <h1>
            Loading...
            <span>
              <img className="spinner" src="https://freesvg.org/img/1544764567.png" alt=""/>{" "}
            </span>
          </h1>
        </div>
      );

    return (
    <section className="edit-container">
        {isLoading? loading() : loaded()}
    </section>
    )
}