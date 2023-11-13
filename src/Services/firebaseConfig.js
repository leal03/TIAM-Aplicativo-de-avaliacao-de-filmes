import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCKnitjvCj5XXZeqTRIukRdcjwUyKKvQa4",
  authDomain: "moviereview-94dfc.firebaseapp.com",
  projectId: "moviereview-94dfc",
  storageBucket: "moviereview-94dfc.appspot.com",
  messagingSenderId: "665927302393",
  appId: "1:665927302393:web:4b124e09568ccbafa03628",
  measurementId: "G-LDB5KTFKHJ"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);  