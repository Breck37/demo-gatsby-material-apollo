import React from "react"
import { Router } from "@reach/router"
import { Link } from "gatsby"

const Home = () => <p>Home</p>
const Profile = () => <p>Profile</p>

const User = () => (
  <>
    <nav>
      <Link to="/user">Home</Link>{" "}
      <Link to="/user/profile">Profile</Link>{" "}
    </nav>
    <Router>
      <Home path="/user" />
      <Profile path="/user/profile" />
    </Router>
  </>
)

export default User;

// Auth 0 reference
// https://auth0.com/blog/securing-gatsby-with-auth0/