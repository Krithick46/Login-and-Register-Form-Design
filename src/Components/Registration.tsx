import './Registration.css'
import { Label, TextField,DefaultButton,IChoiceGroupOption } from '@fluentui/react';

function Register() {

    // const options: IChoiceGroupOption[] = [
    //     { key: 'M', text: 'Male' },
    //     { key: 'F', text: 'Female' },
    // ];


    return (
        <body>
            <div className='container'>
                <div className='title'>Registration</div>
                <form>
                    <div className='user-details'>
                        <div className='input-box'>
                            <Label className='Label'>First Name</Label>
                            <TextField></TextField>
                        </div>
                        <div className='input-box'>
                            <Label className='Label'>Last Name</Label>
                            <TextField></TextField>
                        </div>
                        <div className='input-box'>
                            <Label className='Label'>Mobile No</Label>
                            <TextField></TextField>
                        </div>
                        <div className='input-box'>
                            <Label className='Label'>Email</Label>
                            <TextField></TextField>
                        </div>
                        <div className='input-box'>
                            <Label className='Label'>Password</Label>
                            <TextField></TextField>
                        </div>
                        <div className='input-box'>
                            <Label className='Label'>Confirm Password</Label>
                            <TextField></TextField>
                        </div>
                        {/* <div>
                        <Label className='Label'>Gender</Label>
                        <ChoiceGroup defaultSelectedKey="B" options={options} required={true} />;
                        </div> */}
                        <div className='button'>
                        <DefaultButton className='btn1'>Register</DefaultButton>
                        </div>
                    </div>
                </form>

            </div>

        </body> 
        
    )
}


export default Register;