import React, {Component} from 'react';

import {NavLink} from 'react-router-dom';
import styles from './Navbar.module.css'

class Navbar extends Component {

    render() {

        return (
            <div>
               <ul className={styles.main_nav}>
                    <li className={styles.link}>
                      <NavLink exact to="/" activeClassName={styles.active}>Home</NavLink>
                    </li> 

                    <li className={styles.link}>
                      <NavLink exact to="/support" activeClassName={styles.active}>Support</NavLink>
                    </li> 

                    <li className={styles.link}>
                      <NavLink exact to="/auth" activeClassName={styles.active}>Chat</NavLink>
                    </li> 
               </ul>
            </div>
        )
    }
}

export default Navbar;