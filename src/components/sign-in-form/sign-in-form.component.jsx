import { useState } from "react"
import { createAuthUserWithEmailAndPassword, cerateUserDocumentFromAuth, signInWithGooglePopup, signInAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils"
import FormInput from "../form-input/form-input.component"
import "./sign-in-form.styles.scss"
import Button from "../button/button.component"


const defaultFormFields = {
    email: '',
    passowrd: '',
}



const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields)
    const { email, passowrd, } = formFields


    const resetFormFileds = () => {
        setFormFields(defaultFormFields)
    }

    const signInWithGoogle = async () => {
     await signInWithGooglePopup();
    }

    const handleSubmit = async(event) => {
        event.preventDefault();


        try{
            const {user} = await signInAuthUserWithEmailAndPassword(email, passowrd)
            // console.log(response)
            // setCurrentUser(user)
            resetFormFileds();
        }catch(error){
            
            switch(error.code){
                case 'auth/wrong-password':
                    alert('incorrect password for email');
                    break;

                case 'auth/user-not-found':
                    alert('no user assocaited with this email');
                    break;

                default:
                    console.log(error);
            }



        //    if(error.code == 'auth/wrong-password'){
        //     alert('incorrect password for email')
        //    } 
        }
    }

    const handelChange = (event) => {
        const {name, value} = event.target;

        setFormFields({...formFields,[name]: value})
    }

    return(
        <div className="sign-up-container">
            <h2>Already have an account?</h2>
            <span>Sign in with email and password</span>
            <form onSubmit={handleSubmit}>
                {/* <FormInput label="Display Name" type="text" required onChange={handelChange} name="displayName" value={displayName}/> */}

                <FormInput label="Email"type="email" required onChange={handelChange} name="email" value={email}/>

                <FormInput label="Password" type="password" required onChange={handelChange} name="passowrd" value={passowrd}/>

                {/* <FormInput label="Confirm Password" type="password" required onChange={handelChange} name="confirmPassword" value={confirmPassword}/> */}
                <div className="buttons-container">
                    <Button type="submit">Sign In</Button>
                    <Button type="button" onClick={signInWithGoogle} buttonType="google">Google sign In</Button>
                </div>
            </form>
        </div>
    )
}

export default SignInForm