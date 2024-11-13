import { useState } from "react"
import { createAuthUserWithEmailAndPassword, cerateUserDocumentFromAuth } from "../../utils/firebase/firebase.utils"
import FormInput from "../form-input/form-input.component"
import "./sign-up-form.styles.scss"
import Button from "../button/button.component"



const defaultFormFields = {
    displayName: '',
    email: '',
    passowrd: '',
    confirmPassword: '',
}



const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields)
    const { displayName, email, passowrd, confirmPassword } = formFields


    const resetFormFileds = () => {
        setFormFields(defaultFormFields)
    }

    const handleSubmit = async(event) => {
        event.preventDefault();

        if (passowrd !== confirmPassword){
            alert("passwords do not match");
            return;
        }

        try{
            const {user} = await createAuthUserWithEmailAndPassword(email, passowrd);
            // console.log(response);
           
            await cerateUserDocumentFromAuth(user, { displayName });
            resetFormFileds();
        }catch(error){
            if(error.code == 'auth/email-already-in-use'){
                alert('Cannot create user, email already in use');
            } else {
                console.log('user creation encountered an error', error)
            }
        }
    }

    const handelChange = (event) => {
        const {name, value} = event.target;

        setFormFields({...formFields,[name]: value})
    }

    return(
        <div className="sign-up-container">
            <h2>Don't have an account?</h2>
            <span>Sign up with email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput label="Display Name" type="text" required onChange={handelChange} name="displayName" value={displayName}/>

                <FormInput label="Email"type="email" required onChange={handelChange} name="email" value={email}/>

                <FormInput label="Password" type="password" required onChange={handelChange} name="passowrd" value={passowrd}/>

                <FormInput label="Confirm Password" type="password" required onChange={handelChange} name="confirmPassword" value={confirmPassword}/>

                <Button type="submit">Sign Up</Button>
            </form>
        </div>
    )
}

export default SignUpForm