import { useState } from "react";
import { Link } from "react-router-dom";
import "./forms.css";
import logo from "../images/logo.png"
import {
  signInWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { auth } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";
import { useAuthValue } from "../context/AuthContext";
import { userQuery } from "../firebase/firestore";
import { Card, Typography, Button, TextField } from "@mui/material";

function Login() {
  const [email, setEmail] = useState("firebaseinnerve@gmail.com");
  const [password, setPassword] = useState("user20");
  const [error, setError] = useState("");
  const { setTimeActive } = useAuthValue();
  const navigate = useNavigate();

  const userQueryfromFirestore = async () => {
    const userInfo = await userQuery(email);
    localStorage.setItem("userData", JSON.stringify(userInfo));
  };

  const login = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        if (!auth.currentUser.emailVerified) {
          sendEmailVerification(auth.currentUser)
            .then(() => {
              setTimeActive(true);
              navigate("/verify-email");
            })
            .catch((err) => alert(err.message));
        } else {
          userQueryfromFirestore();
          navigate("/");
        }
      })
      .catch((err) => setError(err.message));
  };

  return (
    <div className="center" style={{display:"flex", flexDirection:"column" ,alignItems:"center" }} >
      <div style={{display:"flex", flexDirection:"column", justifyContent:"space-between", alignItems:"center"}}>
      <img src={logo} height="140px" width="140px" style={{shadow:"none", borderRadius:"50%"}}/>
      <Typography gutterBottom variant="h3">mentAPP</Typography>
      </div>
      <Card className="auth">
        
        
        <Typography variant="h4" align="center" gutterBottom>Log in</Typography>
       
        {error && <div className="auth__error">{error}</div>}
        <form onSubmit={login} name="login_form">
          <TextField
            type="email"
            value={email}
            id="outlined-basic"
            required label="Email" variant="outlined"
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <TextField
            type="password"
            value={password}
            required
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button variant="outlined" type="submit">Login</Button>
        </form>
        <p>
          Don't have and account?
          <Link to="/register">Create one here</Link>
        </p>
      </Card>
    </div>
  );
}

export default Login;
