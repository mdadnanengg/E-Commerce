import { Route, Routes } from "react-router-dom";
import NavigationBar from "./components/NavBar/NavigationBar"
import Home from "./components/pages/Home"

function App() {
  return (
    <>
    <NavigationBar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
    </Routes>
    </>
  );
}

export default App;
