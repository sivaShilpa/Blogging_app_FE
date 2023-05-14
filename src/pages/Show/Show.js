
import { useState, useEffect } from "react";
import {showBlog} from '../../utilities/blogs-services'
import { useParams } from "react-router";
import { Link } from "react-router-dom";

  const Show = (props) => {
  const {id} = useParams()
  const [blog, setBlog] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const fallbackImage = ""

  async function handleRequest(){
    try{
      const blogData = await showBlog(id)
      setBlog(blogData)
      setIsLoading(false)
    }catch(err){
      console.log(err)
    }

  }

  useEffect(()=>{handleRequest()
                  // eslint-disable-next-line
                },[])

  const loaded=()=>{
    return(
      <div className="Blog">
        <h1>Show Page</h1>
        <h2>{blog.title}</h2>
        <p>{blog.content}</p>
        <img src={blog.image || fallbackImage} alt={blog.title}></img>
        <Link to={`/blogs/${blog._id}/edit`}><button>Edit Blog</button></Link>
      </div>
    )
  }

  const loading = () => (
    <div className="blogs-list">
      <h1>
        Loading...
        <span>
          <img alt="" className="spinner" src="https://freesvg.org/img/1544764567.png"/>{" "}
        </span>
      </h1>
    </div>
  );

    return (
      <section>
        {isLoading? loading() : loaded() }
      </section>
      
    )
  }
  
  export default Show