// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth"; //우리는 로그인 기능 (auth)를 위해 쓸 것이기 때문에 가져오기

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjYTFtC2np2dn5LMdFRrqlrAaBPl-__hA",
  authDomain: "react-native-expo-todo-app.firebaseapp.com",
  projectId: "react-native-expo-todo-app",
  storageBucket: "react-native-expo-todo-app.appspot.com",
  messagingSenderId: "271282651959",
  appId: "1:271282651959:web:33e63ca23c58960550d0b2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app; // 이것을 사용하기 위해 export
export const auth = getAuth(app);
