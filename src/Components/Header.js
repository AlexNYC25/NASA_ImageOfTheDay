import React, {useState, useEffect} from 'react'
import '../../node_modules/foundation-sites/dist/css/foundation.css'

import {Link} from 'react-router-dom'

function Header(){

    return(
        <div className="grid-x header-section">
            <div className="cell small-12 medium-8 large-8">
                <ul className="menu align-left">
                    <li>
                        <Link to="/">NASA Picture of the day</Link>
                        
                    </li>
                </ul>
            </div>

            <div className="cell small-12  medium-4 large-4">
                <ul className="menu align-left">
                    <li>
                        <Link to="/search">Look up a specific date</Link>
                    </li>
                    <li>
                        <a>Learn about this web app</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Header;