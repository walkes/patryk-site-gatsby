import React from 'react'
import { Link } from 'gatsby'

export default function NotFound() {
    return (
        <div>
            <Link to="/">
                <h1>Sorry, couldn't find that page.</h1>
            </Link>
        </div>
    )
}