import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { routes } from "./const";
import { MainLayout } from "./layouts";
import { Header, Footer } from "./components";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <MainLayout>
      <Router>
        <Header />
        <div className="container">
          <Switch>
            {routes.map((route) => (
              <Route key={route.path} {...route} />
            ))}
          </Switch>
        </div>
        <Footer />
      </Router>
    </MainLayout>
  );
}

export default App;
