import Header from "../../components/Header/Header";
import { useState, useEffect } from "react";
import {showBlog} from '../../utilities/blogs-services'
import { useParams } from "react-router";

const Show = (props) => {
  const {id} = useParams()
  const [blog, setBlog] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  async function handleRequest(){
    try{
      const blogData = await showBlog(id)
      setBlog(blogData)
    }catch(err){
      console.log(err)
    }

  }

  useEffect(()=>{
    handleRequest()
  },[])

    return (
      <h1>Show Page-{blog?._id}</h1>
    )
  }
  
  export default Show