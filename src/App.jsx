import { Routes, Route } from "react-router-dom"
import Navigation from "./components/Navigation"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import Activitys from "./pages/Activitys"
import ToDo from "./pages/ToDo"

function App() {

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="activitys" element={<Activitys />} />
        <Route path="todo/:id" element={<ToDo />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
