import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Screen/Home";
import LoginScreen from "./Screen/LoginScreen";

const App = () => {
  return (
    <div className="">
      <Router>
        <Routes>
          <Route  path="/" element={<Home />} />
          <Route path="/login" element={<LoginScreen />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
