import { useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from '../../../firebase';

const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            console.log('current user ', currentUser);
            setLoading(false);
        });

        return () => {
            unsubscribe();
        }
    })


    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)


    }

    const signOutUser = () => {
        setLoading(true);
        return signOut(auth)
    }


    const signInWithGoogle = () => {
        setLoading(true)
        signInWithPopup(auth, googleProvider)
            .then((result) => {



            }).catch((error) => {

            });
    }


    const authInfo = {
        user, loading, createUser, signInUser, signOutUser, signInWithGoogle
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;