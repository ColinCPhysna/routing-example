import React from 'react';
import {
  useParams,
  useRouteMatch,
  Switch,
  Route,
  Link} from "react-router-dom";

  export const Identify = ({id}) => {
  
    return(
      <div>
        <h1>Identify</h1>
        <h2>Identify parts of model {id}</h2>
      </div>
    )
  }

  export const Compare = ({id}) => {
  
    return(
      <div>
        <h1>Compare</h1>
        <h2>Compare model {id} to other models in the Database</h2>
      </div>
    )
  }


export const Detail = () => {
  const {id} = useParams();
  const {path, url} = useRouteMatch();

  return(
    <div>
      <h1>Detail</h1>
      <h2>Details on model {id}</h2>
      <h3><Link to={`${url}/identify/`}>Identify</Link></h3>
      <h3><Link to={`${url}/compare/`}>Compare</Link></h3>
      <hr />
      <Switch>
        <Route exact path={path}>
          <h1>Would you like to Identify or Compare?</h1>
        </Route>
        <Route path={`${path}/identify/`}>
          <Identify id={id} />
        </Route>
        <Route path={`${path}/compare/`}>
          <Compare id={id} />
        </Route>
      </Switch>
        
    </div>
  )
}

export const Search = () => <h1>Search</h1>



