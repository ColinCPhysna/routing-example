import React from 'react';
import {
  useParams,
  useRouteMatch,
  Link} from "react-router-dom";


  export const Detail = () => {
    const {id} = useParams();
    const {url} = useRouteMatch();
    return(
      <div>
        <h1>Detail</h1>
        <h2>Details on model {id}</h2>
        <h3><Link to={`${url}/identify/`}>Identify</Link></h3>
        <h3><Link to={`${url}/compare/`}>Compare</Link></h3>
      </div>
    )
  }
  
  export const Identify = () => {
    const {id} = useParams();
    return(
      <div>
        <h1>Identify</h1>
        <h2>Identify parts of model {id}</h2>
      </div>
    )
  }

  export const Compare = () => {
    const {id} = useParams();
    return(
      <div>
        <h1>Compare</h1>
        <h2>Compare model {id} to other models in the Database</h2>
      </div>
    )
  }




export const Search = () => <h1>Search</h1>



