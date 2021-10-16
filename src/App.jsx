import { Route, Switch } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout/Layout";
import DealsState from "./context/DealsState";
import DealDetail from "./pages/DealDetail/DealDetail";
import Deals from "./pages/Deals/Deals";

function App() {
  return (
    <div className="App">
      <DealsState>
        <Layout>
          <Switch>
            <Route path="/" exact component={Deals} />
            <Route path="/deal/:id" exact component={DealDetail} />
          </Switch>
        </Layout>
      </DealsState>
    </div>
  );
}

export default App;
