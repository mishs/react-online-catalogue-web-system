import React from 'react'
import Header from '../Header/Header'

function Layout(props) {
    return (
        <div>
            <Header/>
            <div className="app_content">
                {props.children}
            </div>
        </div>
    )
}

export default Layout
