import { useEffect, useState } from 'react';

import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {}

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

function App() {

    const [user, setUser] = useState()

    const signUpUser = () => {
    createUserWithEmailAndPassword(auth, "alex+testooooo@bigfootds.com", "SomePassword1")
    .then((userCredential) => {
        
        console.log("Signed up and signed in automatically with the userCredential of:\n" + JSON.stringify(userCredential));
        setUser(userCredential);
    })
    .catch((error) => {
        console.log(error)
    });
    }

    const signInUser = () => {
        signInWithEmailAndPassword(auth, "alex+testooooo@bigfootds.com", "SomePassword1")
    .then((userCredential) => {
        console.log("Signed in with the userCredential of:\n" + JSON.stringify(userCredential));
        setUser(userCredential);
    })
    .catch((error) => {
        console.log(error)
    });

    }
    useEffect(() => {
        console.log("User state changed")
        let currentUserCopy = auth.currentUser;
        console.log("Current user obj:\n" + JSON.stringify(currentUserCopy))

        let userClaims = auth.currentUser.getIdTokenResult().then((idTokenResult) => {
        let claimsArray = idTokenResult.claims;
        console.log("User claims:\n" + JSON.stringify(claimsArray))
        });

    }, [user])

    return (
        <div className="App">
          <button onClick={signUpUser}>Sign up a hardcoded user</button>
          <button onClick={signInUser}>Sign in a hardcoded user</button>
    
          {user && <h1>User email: {user.user.email}</h1>}
        </div>
    );
    
}

export default App;