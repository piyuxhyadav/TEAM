import { useState } from "react";
import "./forms.css";
import { auth } from "../firebase/firebase";
import { useNavigate, Link } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { useAuthValue } from "../context/AuthContext";
import { addUserDetails } from "../firebase/firestore";

function Register() {
  async function addUserDataToFirestore(currentUserData) {
    await addUserDetails(currentUserData).then(console.log(currentUserData));
  }
  function picUpload(pic) {
    if (pic.type === "image/jpeg" || pic.type === "image/png") {
      const data = new FormData();
      data.append("file", pic);
      data.append("upload_preset", "chat-app");
      data.append("cloud_name", "dkie4szsu");
      fetch("https://api.cloudinary.com/v1_1/dkie4szsu/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          setPic(data.url.toString());
          console.log(data.url.toString());
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      return;
    }
  }

  // States
  const [name, setName] = useState("");
  const [pic, setPic] = useState("");
  const [age, setAge] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  let currentUserData = {
    name,
    age,
    email,
    pic,
    address,
    phone,
  };

  // Router
  const navigate = useNavigate();

  // AuthContext
  const { setTimeActive } = useAuthValue();

  // Validation
  const validatePassword = () => {
    let isValid = true;
    if (password !== "" && confirmPassword !== "") {
      if (password !== confirmPassword) {
        isValid = false;
        setError("Passwords does not match");
      }
    }
    return isValid;
  };

  const register = (e) => {
    e.preventDefault();
    setError("");
    if (validatePassword()) {
      // Create a new user with email and password using firebase
      createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
          sendEmailVerification(auth.currentUser)
            .then(() => {
              addUserDataToFirestore(currentUserData);
              localStorage.setItem("userData", JSON.stringify(currentUserData));
              setTimeActive(true);
              navigate("/verify-email");
            })
            .catch((err) => alert(err.message));
        })
        .catch((err) => setError(err.message));
    }
  };

  return (
    <div className="center">
      <div className="auth">
        <h1>Register</h1>
        {error && <div className="auth__error">{error}</div>}
        <form onSubmit={register} name="registration_form">
          <input
            type="text"
            value={name}
            placeholder="Enter your name"
            required
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="number"
            value={age}
            placeholder="Enter your age"
            required
            onChange={(e) => setAge(e.target.value)}
          />
          <input
            type="number"
            value={phone}
            placeholder="Enter your Phone Number"
            required
            onChange={(e) => setPhone(e.target.value)}
          />
          <input
            type="email"
            value={email}
            placeholder="Enter your email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            value={address}
            placeholder="Enter your Address"
            required
            onChange={(e) => setAddress(e.target.value)}
          />

          <input
            type="password"
            value={password}
            required
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <input
            type="password"
            value={confirmPassword}
            required
            placeholder="Confirm password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <input
            type="file"
            accept="image/*"
            name="myImage"
            onChange={(e) => {
              picUpload(e.target.files[0]);
            }}
          />

          <button type="submit">Register</button>
        </form>
        <span>
          Already have an account?
          <Link to="/login">login</Link>
        </span>
      </div>
    </div>
  );
}

export default Register;
