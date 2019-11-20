import React from 'react';
import {useParams} from "react-router-dom";

export const Home = () => <h1>Home</h1>

export const Profile = () => {
  const {id} = useParams();

  return(
    <div>
      <h1>Profile</h1>
      <h2>This is user {id}'s profile</h2>
    </div>
  )
}

export const Portfolio = () => {
  const {id} = useParams();

  return(
    <div>
      <h1>Portfolio</h1>
      <h2>This is user {id}'s portfolio</h2>
    </div>
  )
}

export const Contact = () => {
  const {id} = useParams();

  return(
    <div>
      <h1>Contact</h1>
      <h2>This is user {id}'s contact information</h2>
    </div>
  )
}
