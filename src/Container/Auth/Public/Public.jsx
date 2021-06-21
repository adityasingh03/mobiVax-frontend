import React, {Component} from 'react';
// import {Redirect} from 'react-router-dom';
// import { connect } from 'react-redux';

import logo from '../../../images/logo.png';
import styles from './Public.module.css'
import Admin from '../Admin/Admin'
// import * as actions from '../../../store/actions/auth'
// import Login from "../Signin/Singnin"
// import Spinner from "../../../UI/Spinner/Spinner"

class Public extends Component {

    state = {
        phone: null,
        admin: false
    }

    onPhoneChange = (event) => {
        this.setState({phone: event.target.value})
    }

    onSwitchLoginHandler = () => {
        this.setState({admin: !this.state.admin})
    }

    onSwitchEyeHandler = () => {
        this.setState({showpass: !this.state.showpass})
    }
    
    render () {

        // const spinner = this.props.loading ? <Spinner/> : null

        return(

            <div className={styles.back}>

                <Admin show={this.state.admin} switch={this.onSwitchLoginHandler}/>

                {/* {spinner} */}

                {/* {this.props.isAuth ?  <Redirect to="/user" /> : null} */}

                {/* <Login switch={this.props.switch} show={this.props.modal_show}/>  */}

                <div className={styles.nav}>
                    <img alt="logo" className={styles.logo} src={logo} />
                    <div className={styles.name}><span className={styles.mobi}>mobi</span>Vax</div>
                    <div className={styles.admin} onClick={this.onSwitchLoginHandler}>Login as Admin</div>
                </div>

                <div className={styles.signup}>
                    <div className={styles.welcome}>WELCOME</div>
                    <div className={styles.text}>Consectetur exercitation duis consequat commodo excepteur ex adipisicing commodo non.</div>
                    <form>
                        <input type="text" className={`${styles.input} ${styles.namee}`} placeholder="Phone" onChange={this.onPhoneChange}></input><br/>
                        {/* <input type="email" className={`${styles.input} ${styles.email}`} placeholder="Email" onChange={this.onEmailChange}></input><br/> */}
                        {/* <input type={this.state.showpass ? "text" : "password"} className={`${styles.input} ${styles.pass}`} placeholder="Password" onChange={this.onPassChange}></input> */}
                        <br/>
                    </form>

                    {/* {!this.state.showpass 
                    ?  <div className={styles.eye} onClick={this.onSwitchEyeHandler} ><i className="fa fa-eye"></i></div>
                    : <div className={styles.eye} onClick={this.onSwitchEyeHandler}><i className="fa fa-eye-slash"></i></div>} */}
                   
                   
                    <button className={styles.button} onClick={this.onSubmitHandler}>Verify</button>
                   
                </div >

                <div className={styles.feat_cont}>
                    <div className={styles.feature}>
                        <div className={styles.cont}>
                            <div className={styles.icon}><i className="fa fa-lock"></i></div>
                            <div className={styles.feat_txt}>Secure</div>
                        </div>
                        
                    </div>

                    <div className={styles.feature}>
                        <div className={styles.cont}>
                            <div className={styles.icon}><i className="fa fa-home"></i></div>
                            <div className={styles.feat_txt}>Convinient</div>
                        </div>
                        
                    </div>

                    <div className={styles.feature}>
                        <div className={styles.cont}>
                            <div className={styles.icon}><i className="fa fa-plus"></i></div>
                            <div className={styles.feat_txt}>Safe</div>
                        </div>
                        
                    </div>
                </div>
            </div>
        )
    }
}

// const mapStateToProps = state => {
//     return{
//         modal_show: state.auth.modal_show,
//         isAuth: state.auth.auth,
//         loading: state.auth.loading
//     }
// }

// const mapDispatchToProps = dispatch => {
//     return {
//         onAuth: (name, email, pass, signup) => dispatch(actions.auth(name, email, pass, signup)),
//         switch: () => dispatch(actions.switchSign())
//     }
// }

export default Public;