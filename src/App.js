import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";

import Home from "./pages/home/home.jsx";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./app.css";

function App() {
  return (
    <div>
      <Topbar />
      <div className="container">
        <Router>
          <Sidebar />
          <Switch>
            <Route to="/" component={Home} />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
