import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import {
  Home,
  Portfolio,
  Profile,
  Contact,
  Detail,
  Search,
  Identify,
  Compare
} from './pages';



const Root = () => {

  const routes = [
    {path:`/`, component: Home, exact: true},
    {path:`/search`, component: Search, exact: false},
    {path:`/profile/:id`, component: Profile, exact: false},
    {path:`/portfolio/:id`, component: Portfolio, exact: false},
    {path:`/contact/:id`, component: Contact, exact: false},
    {path:`/detail/:id`, component: Detail, exact: true},
    {path:`/detail/:id/identify`, component: Identify, exact: false},
    {path:`/detail/:id/compare`, component: Compare, exact: false},
  ]
  
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/portfolio/5456">Portfolio</Link>
          </li>
          <li>
            <Link to="/profile/2324">Profile</Link>
          </li>
          <li>
            <Link to="/contact/5125">Contact</Link>
          </li>
          <li>
            <Link to="/detail/151135">Detail</Link>
          </li>
          <li>
            <Link to="/search">Search</Link>
          </li>
        </ul>
        <hr />
      <Switch>
      {routes.map(({path,component,exact}, key) => <Route key={key} path={path} component={component} exact={exact}/>)}
      </Switch>
      </div>
    </Router>
  
  )
}

export default Root
