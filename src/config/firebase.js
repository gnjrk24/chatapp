import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCJblqAQ-YK5-qBo1bXFCbxthLejkdbwYU",
  authDomain: "chatapp-8b894.firebaseapp.com",
  projectId: "chatapp-8b894",
  storageBucket: "chatapp-8b894.firebasestorage.app",
  messagingSenderId: "938813775424",
  appId: "1:938813775424:web:0b2e0ecd93d6d61b7c09a5",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth };
