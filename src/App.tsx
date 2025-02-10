import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import ListUsers from "./pages/ListUsers"

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/list-users" element={<ListUsers />} />
        </Routes>
      </Router>
    </>
  )
}

export default App