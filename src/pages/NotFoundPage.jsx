import React from 'react'
import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div>
        <h1>Oops</h1>
        <h2>404 - Page Not Found</h2>
        <Link to="/">
            <p>Back to Home</p>
        </Link>
    </div>
  )
}

export default NotFoundPage