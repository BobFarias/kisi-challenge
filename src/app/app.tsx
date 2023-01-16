import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

//  import styles from "./app.module.scss";

import Home from "./pages/Home";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route index element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
