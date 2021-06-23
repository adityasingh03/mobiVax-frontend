import React, {Component} from 'react';

import styles from './Admin.module.css'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import Patient from '../Cards/Patient/Patient'

class Admin extends Component {

    render() {

        return(

            <div>
                <Navbar admin={true}/>

                <Patient
                name="sidharth saini"
                age="21"
                gender="male"
                aadhar="123456789"
                />

                <Patient
                name="sidharth saini"
                age="21"
                gender="male"
                aadhar="123456789"
                />

                <Patient
                name="sidharth saini"
                age="21"
                gender="male"
                aadhar="123456789"
                />

                <Patient
                name="sidharth saini"
                age="21"
                gender="male"
                aadhar="123456789"
                />
                <Footer/>
            </div>

        )
    }
}

export default Admin;