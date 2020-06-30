import React,{useState} from 'react'
import {connect} from 'react-redux'
import './sign-in-styles.scss'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import { googleSignInStart ,emailSignInStart} from '../../redux/user/user.action'
// import {auth} from 'firebase'
const SignIn = ({emailSignInStart ,googleSignInStart}) => {
    const [userCredentials, setCredentials] = useState({email: '',password: ''})
    const { email ,password } = userCredentials;

    const handleSubmit = async event =>{
        event.preventDefault();

        emailSignInStart(email,password)
    }
    const handleChange = event =>{
        const {value,name} = event.target;
        setCredentials({...userCredentials,[name]: value})
    }
       
        return(
            <div className = 'sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email account</span>
                <form onSubmit= {handleSubmit}>
                    <FormInput label= "Email" name='email' type = 'email' handleChange={handleChange} value = {email}  required/>
                    <FormInput label= "Password" name='password' type = 'password' handleChange={handleChange} value = {password}  required/>
                    <div className='buttons'>
                        <CustomButton onClick={handleSubmit} type='submit' >SIGN IN</CustomButton>
                        <CustomButton type='button' onClick={googleSignInStart} isGoogleSignIn >SIGN IN WITH GOOGLE</CustomButton>
                    </div>
                </form> 
            </div> 
        )
    
}

const mapDispatchToProps = dispatch =>({
    googleSignInStart : () => dispatch(googleSignInStart()),
    emailSignInStart : (email,password) => dispatch(emailSignInStart({email,password}))
});

export default connect(null,mapDispatchToProps)(SignIn);