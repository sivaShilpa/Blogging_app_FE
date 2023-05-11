import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import { showBlog, deleteBlog } from "../../utilities/blogs-services"
import { useParams, useNavigate } from "react-router-dom"

export default function Edit(){
    const {id} = useParams()
    const navigate = useNavigate()
    const [blog, setBlog] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    async function handleRequest(){
        try{
            const editBlog = await showBlog(id)
            setBlog(editBlog)
            setIsLoading(false)

        }catch(err){
            console.log(err)
            return err
        }

    }

    useEffect(()=>{
        handleRequest()
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

    const loaded = () =>{
        return(
            <section className="edit-container">
                <h1>Edit Page</h1>
                <button onClick={handleBlogDelete}>Delete Blog</button>
            </section>
        )
    }

    const loading = () => (
        <div className="blogs-list">
          <h1>
            Loading...
            <span>
              <img
                className="spinner"
                src="https://freesvg.org/img/1544764567.png"
              />{" "}
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