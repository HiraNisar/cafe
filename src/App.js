import "./styles/App.css";

import Home from "./Home";
import CafeList from "./CafeList";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route exact path="/CafeList" component={CafeList} />
      </Switch>
    </>
  );
}

export default App;
