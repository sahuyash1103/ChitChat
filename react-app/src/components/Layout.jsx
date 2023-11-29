import React from 'react'
import { Outlet } from 'react-router-dom'

function Layout({ children, element }) {
    return (
        <div>
            <Outlet />
        </div>
    )
}

export default Layout