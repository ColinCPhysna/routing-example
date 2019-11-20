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
} from './pages';

const Root = () => {
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
        {/*User Routes*/}
        <Route exact path="/" component={Home} />
        <Route path="/portfolio/:id" component={Portfolio} />
        <Route path="/profile/:id" component={Profile} />
        <Route path="/contact/:id" component={Contact}/>

        {/*Model Routes*/}
        <Route exact path="/detail/:id" component={Detail} />
        <Route path="/search" component={Search} />
      </Switch>
      </div>
    </Router>
  
  )
}

export default Root
