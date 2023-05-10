import { Routes, Route } from "react-router-dom"
import Blog from "../../pages/Blogs/Blogs"
import Show from "../../pages/Show/Show"
import MyBlogs from "../../pages/MyBlogs/MyBlogs"
import Create from "../../pages/Create/Create"

const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Blog />} />
        <Route path="/blogs/:id" element={<Show />} />
        <Route path="/myblogs" element={<MyBlogs/>} />
        <Route path="/myblogs/create" element={<Create />} />
        
      </Routes>
    </main>
  )
}

export default Main