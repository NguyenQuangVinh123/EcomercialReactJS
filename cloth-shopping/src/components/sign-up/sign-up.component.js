import React from 'react'

 import './sign-up.styles.scss'
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth ,createUserProfileDocument} from '../../firebase/firebase.utils';

 class SignUp extends React.Component {
     constructor(props){
         super(props);
         this.state = {
             displayName : '',
             email : '',
             password : '',
             confirmPassword : ''
         }
     }
     handleSubmit = async event =>{
         event.preventDefault();
         const {displayName,email,password,confirmPassword} = this.state;
        if(password !== confirmPassword){
            alert("Password don't match ")
            return;
        }
        try {
            const {user} = await auth.createUserWithEmailAndPassword(email,password)
            await createUserProfileDocument(user,{displayName})
            this.setState({
                displayName : '',
                email : '',
                password : '',
                confirmPassword : ''
            })
        } catch (error) {
            console.log(error)
        }
     }
     handleChange = event => {
        const { name, value} = event.target ;
        this.setState({[name] : value})    

     }
        
     render(){
         const {displayName,email,password,confirmPassword} = this.state;
         return(
             <div className ='sign-up'>
                <h2 className='title'> I do not have a account</h2>
                <span>Sign up with your email and password</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput type='text' name='displayName' value={displayName} required
                    onChange ={this.handleChange} label='Display Name' />
                    <FormInput type='email' name='email' value={email} required
                    onChange ={this.handleChange} label='Email' />
                     {/* <FormInput type='email' name='Email' value={email} required
                    onChange ={this.handleChange} label='Email' /> */}
                     <FormInput type='password' name='password' value={password} required
                    onChange ={this.handleChange} label='Password' />
                    <FormInput type='password' name='confirmPassword' value={confirmPassword} required
                    onChange ={this.handleChange} label='ConfirmPassword' />
                    <CustomButton type='submit'>SIGN UP</CustomButton>
                </form>
             </div>
         )
     }
 }

 export default SignUp