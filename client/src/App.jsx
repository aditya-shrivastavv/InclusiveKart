import { BrowserRouter } from "react-router-dom";

import Navbar from "./components/Header/Navbar";
import Home from "./components/Home/Home";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Home />
      </div>
    </BrowserRouter>
  );
}

export default App;
