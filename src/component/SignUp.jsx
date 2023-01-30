import React, {useState} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowLeftLong} from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'

function SignUp() {

    // state untuk form sign up
    const [name, setName] = useState('')
    const [born, setBorn] = useState()
    const [email, setEmail] = useState('')
    const [gender,setGender] = useState(undefined)
    const [phone, setPhone] = useState(0)
    const [userName, setUserName] = useState('')
    const [pass, setPass] = useState('')
    const [agree, setAgree] = useState(false)

    const handleSignUp = (e) => {
        e.preventDefault()
    }

    return (
        <div className='sign-wrapper'>
            <div className='sign-container'>
                <div className='sign-main d-flex flex-row justify-content-center'>
                    <Link to='/' className='me-3'><FontAwesomeIcon icon={faArrowLeftLong} size='3x'color='white'/></Link>
                    <div className='sign-form'>
                        <h2 className='signup'>Sign Up</h2>
                        <form onSubmit={handleSignUp} id='sign-form'>
                            <div className='sign-input'>
                                <label>Nama Lengkap</label>
                                <input type="text" className='ms-3' value={name} onChange={e => setName(e.target.value)}/>
                            </div>
                            <div className='sign-input'>
                                <label>Tanggal Lahir</label>
                                <input type="date" value={born} onChange={e => setBorn(e.target.value)}/>
                            </div>
                            <div className='sign-input'>
                                <label>Email</label>
                                <input type="text" name='email' value={email} onChange={e => setEmail(e.target.value)}/>
                            </div>
                            <div className='sign-input'>
                                <label>Gender</label>
                                <input type="radio" name='gender' value='Male' onChange={(e) => setGender(e.target.value)} />
                                <label>Male</label>
                                <input type="radio" name='gender' value='Female' onChange={(e) => setGender(e.target.value)} />
                                <label>Female</label>
                            </div>
                            <div className='sign-input'>
                                <label>No. Handphone</label>
                                <input type="text" value={phone} onChange={e => setPhone(e.target.value)}/>
                            </div>
                            
                            <div className='sign-input'>
                                <label>Username</label>
                                <input type="text" name='username' value={userName} onChange={e => setUserName(e.target.value)}/>
                            </div>
                            <div className='sign-input'>
                                <label>Password</label>
                                <input type="password" name='password' value={pass} onChange={e => setPass(e.target.value)}/>
                            </div>
                            <div className='sign-input'>
                                <input type="checkbox" value={!agree} onChange={e => setAgree(e.target.value)}/>
                                Completed
                            </div>
                            <div className='form-submit'><Link to='/'><button className='submit-button'>Submit</button></Link></div>                            
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp