import React from 'react'

import './sign-in-styles.scss'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import { auth, signInWithGoogle} from '../../firebase/firebase.utils'
// import {auth} from 'firebase'
class SignIn extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email : '',
            password : ''
        }
        this.handleSubmit = this.handleSubmit.bind(<i class="fa fa-th-list" aria-hidden="true"></i>)
    }
    handleSubmit = async event =>{
        event.preventDefault();
        const { email ,password } = this.state;

        try {
            await  auth.signInWithEmailAndPassword(email,password);
            this.setState({email : '',password : ''})
        } catch (error) {
            console.log(error)
        }

        this.setState({email:'',password:''})
    }
    handleChange = event =>{
        const {value,name} = event.target;
        this.setState({[name]: value})
    }
    render() {
        return(
            <div className = 'sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email account</span>
                <form onSubmit= {this.handleSubmit}>
                    <FormInput label= "Email" name='email' type = 'email' handleChange={this.handleChange} value = {this.state.email}  required/>
                    <FormInput label= "Password" name='password' type = 'password' handleChange={this.handleChange} value = {this.state.password}  required/>
                    <div className='buttons'>
                        <CustomButton onClick={this.handleSubmit} type='submit' >SIGN IN</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn >SIGN IN WITH GOOGLE</CustomButton>
                    </div>

                    

                </form> 
            </div> 
        )
    }
}
export default SignIn;