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

document.addEventListener('DOMContentLoaded', () => {
    firebase.auth().onAuthStateChanged(user => {
        const loginLink = document.getElementById('login-link');
        const signupLink = document.getElementById('signup-link');
        const profileLink = document.getElementById('profile-link');
        const logoutLink = document.getElementById('logout-link');

        if (user) {
            // User is signed in
            loginLink.style.display = 'none';
            signupLink.style.display = 'none';
            profileLink.style.display = 'block';
            logoutLink.style.display = 'block';
        } else {
            // No user is signed in
            loginLink.style.display = 'block';
            signupLink.style.display = 'block';
            profileLink.style.display = 'none';
            logoutLink.style.display = 'none';
        }
    });
});
