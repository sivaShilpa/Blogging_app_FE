import { Routes, Route } from "react-router-dom"
import Blog from "../../pages/Blogs/Blogs"
import Show from "../../pages/Show/Show"
import MyBlogs from "../../pages/MyBlogs/MyBlogs"
import Create from "../../pages/Create"
import Edit from "../../pages/Edit/Edit"

const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Blog />} />
        <Route path="/blogs/:id" element={<Show />} />
        <Route path="/blogs/myblogs" element={<MyBlogs/>} />
        <Route path="/blogs/create" element={<Create />} />
        <Route path="/blogs/:id/edit" element={<Edit />} />
        
      </Routes>
    </main>
  )
}

export default Main