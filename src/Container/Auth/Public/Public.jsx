import React, {Component} from 'react';
// import {Redirect} from 'react-router-dom';
import { connect } from 'react-redux';

import styles from './Public.module.css'
import logo from '../../../images/logo.png';
import Admin from '../Admin/Admin'
import * as actions from '../../../Store/actions/auth'
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

    onSubmitHandler = () => {
        this.props.onAuth(this.state.phone, true)
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
//         edit_modal: state.user.edit_modal,
//         create_modal: state.user.create_modal,
//         loading: state.auth.loading,
//         isAuth: state.auth.auth
//     }
// }

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (no, staff) => dispatch(actions.auth(no, staff)),
       
    }
}

export default connect(null, mapDispatchToProps)(Public);