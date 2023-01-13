import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { routes } from "./const";
import { MainLayout } from "./layouts";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <MainLayout>
      <Router>
        <Switch>
        {routes.map((route) => (
          <Route key={route.path} {...route} />
        ))}
      </Switch>
      </Router>
    </MainLayout>
  );
}

export default App;
