

import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import "./authentication.styles.scss"

const Authentication = () => {

    // const logGoogleUser = async () => {
    //     const {user} = await signInWithGooglePopup();
    //     // console.log(response);
    //     const userDocRef = await cerateUserDocumentFromAuth(user)
    // }

    // const logGoogleRedirctUser = async () => {
    //     const {user} = await signInWithGoogleRedirect();
    //     console.log({user});
    // }
    return(
        <div className="authentication-container">
            {/* <button onClick={logGoogleUser}>Sign in with Google Popup</button> */}
           <SignUpForm/>
           <SignInForm/>
        </div>
    );
};
 
export default Authentication