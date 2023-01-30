import React, {useState, useEffect}from 'react'
import avatar from '../asset/avatar.png'
import google from '../asset/google.png'
import microsoft from '../asset/microsoft.png'
import {Link} from 'react-router-dom'
// import ForgotForm from './ForgotForm'

function LoginForm() {

    // status string kosong & tampilan
    const [userInput, setUserInput] = useState('')
    const [userPass, setUserPass] = useState('')
    const [agree, setAgree] = useState(false)

    // input username
    const usernameInput = (e) => {
        setUserInput(e.target.value)
    }

    // password user
    const passwordUser = (e) => {
        setUserPass(e.target.value)
    }

    // handlesubmit
    const handleSubmit = (e) => {
        e.preventDefault()
        setUserInput('')
        setUserPass('')
    }

    // const renderForgotForm = () => {
    //     return <ForgotForm/>
    // }

    return (
        <div className='form-wrapper'>
            <div className='form-container'>
                
                <div className='form-main'>
                    <div className='form-login d-flex justify-content-center flex-column'>

                        {/* avatar icon */}
                        <div className='d-flex justify-content-center'>
                            <img src={avatar} alt="icon" style={{width: '90px'}}/>
                        </div>
                        <form onSubmit={handleSubmit} id='form-login'>

                            {/* input */}
                            <div className='form-input'>
                                <label htmlFor="username">Username</label>
                                <input type="text" id='username' name='username' placeholder='Masukan username...' value={userInput} onChange={usernameInput} required/>
                            </div>
                            <div className='form-input text-left'>
                                <label htmlFor="password">Password</label>
                                <input type="password" id='password' name='password' placeholder='Masukan password...' value={userPass} onChange={passwordUser} required/>
                            </div>
                            <div className='form-check mb-3 mt-2 d-flex'>
                                <input type="checkbox" onChange={() => setAgree(!agree ? true : false)}/>
                                <label>Ingat Aku</label>
                            </div>
                            <div className='form-submit'>
                                <Link to='/main/*'><button className='submit-button mb-2 b-submit'>Submit</button></Link>
                            </div>
                            <div className='form-text'>
                                <Link to='/sign-up' className='text'><p className='text-white ms-3'>Sign Up</p></Link>
                                <Link to='/forgot' className='text'><p className='text-white ms-3'>Forgot Password?</p></Link>
                            </div>
                        </form>
                    </div>
                </div>                
                <div className='form-footer'>
                    <p>Another Option</p>
                    <div className='form-icon'>
                        <img src={google} alt="google" width='40px' className='me-3'/>
                        <img src={microsoft} alt="microsoft" width='40px' />
                    </div>
                </div>
            </div>            
        </div>
    )
}

export default LoginForm