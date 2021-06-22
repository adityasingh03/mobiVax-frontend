import React, {Component} from 'react';

import styles from './Home.module.css'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'

class Home extends Component {

    render() {

        return(
            <div>
                 <Navbar/>
                 <div className={styles.parallax}>
                     <div className={styles.tag}>Get your whole family vaccinated here</div>
                     <div className={styles.tag}>at home!</div>
                 </div>
                

                <Footer/>
            </div>
           
        )
    }
}

export default Home;