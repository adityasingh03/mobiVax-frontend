import React, {Component} from 'react';

import styles from './Patient.module.css'

class Patient extends Component{

    render() {

        return(
            <div>
                <div className={styles.name}>{this.props.name}</div>
                <div className={styles.age}>{this.props.age}</div>
                <div className={styles.gender}>{this.props.gender}</div>
                <div className={styles.aadhar}>{this.props.aadhar}</div>

                <div className={styles.address}>Address</div>

                <input type="radio" id="covaxine" value="covaxine"/>
                <label for="covaxine">covaxine</label>
                <input type="radio" id="covishield"  value="covishield"/>
                <label for="covishield">covishield</label>

                <div>Done</div>
            </div>
        )
    }
}

export default Patient; 