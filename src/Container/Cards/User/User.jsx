import React, {Component} from 'react';

import styles from './User.module.css'

class Patient extends Component{

    render() {

        return(
            <div>
                <div className={styles.name}>Sidharth saini</div>
                <div className={styles.time}>12:12:12</div>
                <div className={styles.age}>21</div>
                <div className={styles.gender}>male</div>

                <input type="radio" id="male" value="male"/>
                <label for="male">male</label>
                <input type="radio" id="female"  value="female"/>
                <label for="female">female</label>
                <input type="radio" id="other"  value="other"/>
                <label for="other">other</label>

            </div>
        )
    }
}

export default Patient; 