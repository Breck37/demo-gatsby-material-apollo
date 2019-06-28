import React from "react"
import { Link } from "gatsby"

export default () => (
  <div>
    <p>Login</p>
    <Link to="/auth/reset-password">Reset Password</Link>
    <Link to="/user/profile">Go To Profile</Link>
  </div>
)