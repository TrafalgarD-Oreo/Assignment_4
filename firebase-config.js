import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

export const firebaseConfig = {
    apiKey: "AIzaSyB2FC-wF9Nke4JVuvI5MD7XgbsEIVTXNMQ",
    authDomain: "editkaro-fee90.firebaseapp.com",
    projectId: "editkaro-fee90",
    storageBucket: "editkaro-fee90.firebasestorage.app",
    messagingSenderId: "643731309396",
    appId: "1:643731309396:web:5dc8e99863be80f6e63ec1"
  };



// 3. Initialize Firebase using the IMPORTED function, NOT 'firebase.initializeApp'
const app = initializeApp(firebaseConfig);

// 4. Get Services
const auth = getAuth(app);
const db = getFirestore(app);

// 5. Export them
export { auth, db };
// Note: We are using module syntax (import/export), so your HTML script tags 
// will need `type="module"` (see section 4 below).