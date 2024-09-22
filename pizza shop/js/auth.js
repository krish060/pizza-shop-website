// Import Firebase
import firebase from 'firebase/app';
import 'firebase/auth';

// Initialize Firebase (replace with your own Firebase config)
const firebaseConfig = {
    apiKey: 'YOUR_API_KEY',
    authDomain: 'YOUR_AUTH_DOMAIN',
    projectId: 'YOUR_PROJECT_ID',
    storageBucket: 'YOUR_STORAGE_BUCKET',
    messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
    appId: 'YOUR_APP_ID'
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app();
}

// Function to sign up a user
async function signUp(email, password) {
    try {
        const userCredential = await firebase.auth().createUserWithEmailAndPassword(email, password);
        return userCredential.user;
    } catch (error) {
        console.error('Error signing up:', error.message);
        throw error;
    }
}

// Function to log in a user
async function logIn(email, password) {
    try {
        const userCredential = await firebase.auth().signInWithEmailAndPassword(email, password);
        return userCredential.user;
    } catch (error) {
        console.error('Error logging in:', error.message);
        throw error;
    }
}

// Function to log out a user
async function logOut() {
    try {
        await firebase.auth().signOut();
        console.log('User logged out successfully');
    } catch (error) {
        console.error('Error logging out:', error.message);
        throw error;
    }
}

// Example usage
document.addEventListener('DOMContentLoaded', () => {
    // Sign-up form handling
    const signUpForm = document.getElementById('sign-up-form');
    if (signUpForm) {
        signUpForm.addEventListener('submit', async event => {
            event.preventDefault();
            const email = signUpForm.querySelector('#sign-up-email').value;
            const password = signUpForm.querySelector('#sign-up-password').value;
            try {
                const user = await signUp(email, password);
                console.log('Sign up successful:', user);
                // Redirect or update UI as needed
            } catch (error) {
                console.error('Sign up failed:', error);
                // Show error message to the user
            }
        });
    }

    // Login form handling
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', async event => {
            event.preventDefault();
            const email = loginForm.querySelector('#login-email').value;
            const password = loginForm.querySelector('#login-password').value;
            try {
                const user = await logIn(email, password);
                console.log('Login successful:', user);
                // Redirect or update UI as needed
            } catch (error) {
                console.error('Login failed:', error);
                // Show error message to the user
            }
        });
    }

    // Logout handling
    const logoutButton = document.getElementById('logout-button');
    if (logoutButton) {
        logoutButton.addEventListener('click', async () => {
            try {
                await logOut();
                console.log('Logged out successfully');
                // Redirect or update UI as needed
            } catch (error) {
                console.error('Logout failed:', error);
                // Show error message to the user
            }
        });
    }
});

