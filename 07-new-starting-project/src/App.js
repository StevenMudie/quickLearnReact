import { Route, Switch } from "react-router-dom";
import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupsPage from "./pages/NewMeetups";
import Favourites from "./pages/Favourites";
import MainNav from "./components/layout/MainNav";

function App() {
  return (
    <div>
      <MainNav />
      <Switch>
        <Route path="/" exact>
          <AllMeetupsPage />
        </Route>
        <Route path="/newmeetups">
          <NewMeetupsPage />
        </Route>
        <Route path="/favourites">
          <Favourites />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
