import { Link } from "react-router-dom";
import classes from "./MainNav.module.css";

const MainNav = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
          </li>
          <li>
            <Link to="newmeetups">Add New Meetup</Link>
          </li>
          <li>
            <Link to="favourites">Favourites</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNav;
