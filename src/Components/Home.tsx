import './Header.css'
import {  NavLink } from 'react-router-dom';
import { Label, TextField, DefaultButton} from '@fluentui/react';



function Home(){
    return(
        <body className='body1'>
        <div className='wrapper' >
        <div className='form-box login' >
        <h2>Login</h2>
            <form >
                <div className='input-box'>
                <Label className='Label'>Email</Label>
                <TextField></TextField>
                </div>
                <div className='input-box'>
                <Label className='Label'>Password</Label>
                <TextField></TextField>
                </div>
                <DefaultButton className='btn'>Login</DefaultButton>
                <div className='login-register'>
                    <p>Don't have an account?
                        <NavLink  to="/register" className='register-link'>Register</NavLink>
                    </p>
                </div>
            </form>
        </div>
    </div>
    </body>
    )
}

export default Home;