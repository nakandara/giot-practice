import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Next from "./Next";
import Reducer from "./Componenet.js/Reducer";
import NewReducer from "./Componenet.js/NewReducer";
import { NewReducer1 } from "./Componenet.js/NewReducer1";

function App() {
  return (
    // <div>
    //   <Home/>
    // </div>
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/next" element={<Next />} exact />
          <Route path="/Reducer" element={<Reducer />} exact />
          <Route path="/NewReducer" element={<NewReducer />} exact />
          <Route path="/NewReducer1" element={<NewReducer1 />} exact />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
