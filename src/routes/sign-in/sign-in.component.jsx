import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';


import './sign-in.styles.scss';


const SignIn = () => {
    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();

        const userDocRed = await createUserDocumentFromAuth(user);
        console.log(userDocRed);
    };

    return (
        <div>
            <h1>Sign in Page</h1>
            <button onClick={logGoogleUser}>SignIn with Google Popup</button>
        </div>
    );
}

export default SignIn;