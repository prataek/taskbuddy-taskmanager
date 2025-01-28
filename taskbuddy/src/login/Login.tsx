import { auth, googleProvider } from "../authentication/firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

import loginPhoto from '../assets/Task list view 3.png'
import '../styles/login.css'

const Login: React.FC = () => {
   const userNavigate = useNavigate();
   
   const handleGoogleLogin = async () => {
      try {
         const result = await signInWithPopup(auth, googleProvider);
         const user = result.user;
         console.log("User signed in:", user);
         userNavigate("/dashboard");

      } catch (error) {
         console.error("Error signing in with Google:", error);
      }
   };

   return (
      <div className = "login-components">
         <div className = "login-section">
            <h1>TaskBuddy</h1>
            <p>Streamline your workflow and track progress effortlessly with our all-in-one task management app.</p>
            <button onClick={ handleGoogleLogin }>Continue with Google</button>
         </div>
         
         <div className = "login-photo">
            <img src = { loginPhoto } alt = "login_photo"/>
         </div>
      </div>
   )
}

export default Login;