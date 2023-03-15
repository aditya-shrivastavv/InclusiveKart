import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home/Home";
import Category from "./components/Category/Category";
import Header from "./components/Header/Header";
import TheProduct from "./components/TheProduct/TheProduct";
import Newsletter from "./components/Footer/Newsletter/Newsletter";
import AppContext from "./utils/context";

function App() {
  return (
    <BrowserRouter>
      <AppContext>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category:id" element={<Category />} />
          <Route path="/product:id" element={<TheProduct />} />
        </Routes>
        <Newsletter />
      </AppContext>
    </BrowserRouter>
  );
}

export default App;
