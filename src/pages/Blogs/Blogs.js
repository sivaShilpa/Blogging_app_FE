import Header from "../../components/Header/Header";
import { useState, useEffect } from 'react';
import "./Blogs.css"
import {Link} from 'react-router-dom'

const Blogs= (props) => {
    const [isLoading, setIsLoading] = useState(true)
    const [ blogs, setBlogs ] = useState([]);

    const BASE_URL = "http://localhost:4000/blogs";

    const getBlogs = async () => {
        try {
            const response = await fetch(BASE_URL)
            const allBlogs = await response.json()
            setBlogs(allBlogs)
			setIsLoading(false)
        }catch(err){
            console.log(err)
        }
    }

    useEffect(()=>{getBlogs()}, [])

    const loaded = () => {
        return blogs?.map((blog) => {
          return (
            <div key={blog._id}>
              <h1>{blog.title}</h1>
              <h3>{blog.content}</h3>
              <img className="blog-image" src={blog.image} />
            </div>
          );
        });
      };

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
        <section className="blogs-list">
           <div> {isLoading ?  loading() : loaded()}</div>
            <div className="create"><a href="/myblogs/create">+</a></div>
        </section>
    )
  }
  
  export default Blogs