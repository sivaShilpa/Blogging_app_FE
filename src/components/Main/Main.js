import { Routes, Route } from "react-router-dom"
import Blog from "../../pages/Blog/Blog"
import Show from "../../pages/Show/Show"

const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Blog />} />
        <Route path="/Blog/:id" element={<Show />} />
      </Routes>
    </main>
  )
}

export default Main