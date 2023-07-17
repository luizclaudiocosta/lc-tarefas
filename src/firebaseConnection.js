import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBm28MB7uDNeud8RH48rDU6fnqv9ZRWkMg",
  authDomain: "tarefas223.firebaseapp.com",
  projectId: "tarefas223",
  storageBucket: "tarefas223.appspot.com",
  messagingSenderId: "849965343962",
  appId: "1:849965343962:web:6a34bdab6f083bf998b1e3"
};


  const firebaseApp = initializeApp(firebaseConfig);
  const db = getFirestore(firebaseApp);
  const auth = getAuth(firebaseApp);

  export { db, auth };