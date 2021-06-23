import React, {Component} from 'react';

import styles from './Home.module.css'
import AddMember from '../../UI/Modal/Modal'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import Member from '../../Container/Cards/User/User'

class Home extends Component {

    state={
        modal: false,
        firstName: "",
        LastName: "",
        Gender: "",
        Aadhar: ""
    }

    modalSwitchhandler = () => {
        this.setState({modal: !this.state.modal})
    }

    render() {

       

    
        return(
            <div>
                 <Navbar/>

                 <AddMember show={this.state.modal} switch={this.modalSwitchhandler}>

                    <div className={styles.addMem}>
                     
                        <div className={styles.inst}>
                            <div>Please fill the details</div>
                            <i className="fa fa-pencil"></i>
                        </div>

                        <div className={styles.inputs}>
                            <input className={styles.input} placeholder="First Name"></input>
                            <input className={styles.input} placeholder="Last Name"></input>
                            <br/>
                            <input className={styles.input} placeholder="Aadhar no."></input><br/>
                            <input className={styles.input} placeholder="Address Line 1"></input>
                            <input className={styles.input} placeholder="Address Line 2"></input>
                        </div>

                        <div className={styles.submit}>Submit</div>
                     </div>
                   
                 </AddMember>

                 <div className={styles.parallax}>
                     <div className={styles.tag}>Get your whole family vaccinated here</div>
                     <div className={styles.tag}>at home!</div>
                 </div>

                 <div className={styles.date}>12/12/12</div>

                 <div>
                     <Member/>
                     <Member/>
                     <Member/>
                     <Member/>
                 </div>
                
                <div className={styles.home_cont}>
                    <div className={styles.members}>You can register 4 members with one mobile number</div>
                    <div className={styles.add_button} onClick={this.modalSwitchhandler}>Add Member</div>

                    <div className={styles.info}>
                    One registration per person is sufficient. Please do not register with multiple mobile numbers or different Photo ID Proofs for same individual.
                    Scheduling of Second dose should be done from the same account (same mobile number) from which the first dose has been taken, for generation of final certificate. Separate registration for second dose is not necessary.
                    Please carry the registered mobile phone and the requisite documents, including appointment slip, the Photo ID card used for registration, Employment Certificate (HCW/FLW) etc., while visiting the vaccination center, for verification at the time of vaccination.
                    Please check for additional eligibility conditions, if any, prescribed by the respective State/UT Government for vaccination at Government Vaccination Centers, for 18-44 age group, and carry the other prescribed documents (e.g. Comorbidity Certificate etc.) as suggested by respective State/UT (on their website).
                    The slots availability is displayed in the search (on district, pincode or map) based on the schedule populated by the DIOs (for Government Vaccination Centers) and private hospitals for their vaccination centers.
                    The vaccination schedule published by DIOs and private hospitals displays the list of vaccination centers with the following information
                    The vaccine type.
                    The age group (18-44/45+ etc.).
                    The number of slots available for dose 1 and dose 2.
                    Whether the service is Free or Paid (Vaccination is free of cost at all the Government Vaccination Centers).
                    Per dose price charged by a private hospital.
                    If you are seeking 1st dose vaccination, the system will show you only the available slots for dose 1. Similarly, if you are due for 2nd dose, the system will show you the available slots for dose 2 after the minimum period from the date of 1st dose vaccination has elapsed.
                    Once a session has been published by the DIO/ private hospital, the session now can not be cancelled. However, the session may be rescheduled. In case you have booked an appointment in any such vaccination session that is rescheduled for any reason, your appointment will also be automatically rescheduled accordingly. You will receive a confirmation SMS in this regard. On such rescheduling, you would still have the option of cancelling or further rescheduling such appointment.
                    </div>
                </div>
                <Footer/>
            </div>
           
        )
    }
}

export default Home;