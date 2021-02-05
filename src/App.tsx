import Footer from './components/Footer';
import Home from './Home';
import Brand from "./components/Brand"
import { Route, Switch } from 'react-router-dom';
import Term from './pages/Term';
import Header from './components/Header';
import Privacy from './pages/Privacy';

function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route path="/privacy">
          <Privacy/>
        </Route>
        <Route path="/term">
          <Term/>
        </Route>
        <Route path="/">
          <Home/>
        </Route>
      </Switch>
      <Brand />
      <Footer />
    </div>
  );
}

export default App;
