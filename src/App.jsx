import HomePage from "./pages/HomePage"
import Sidebar from "./components/Sidebar"
import { Route, Routes } from "react-router-dom"
import FavouritesPage from "./pages/FavouritesPage";

function App() {

  return (
    <div>
      <div className="flex">
        <Sidebar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/favourites" element={<FavouritesPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App
