import {
  TextField,
  Button,
  Card,
  CardContent,
  CircularProgress,
  Divider,
} from "@mui/material";
import style from "@/styles/Formstyl.module.css";
import { FaBullseye, FaGoogle } from "react-icons/fa";
import { useState } from "react";
import handler from "@/pages/api";

function Prograss() {
  return (
    <>
      <CircularProgress size={20} color="warning" />
    </>
  );
}

const Signin: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isloading, setIsloading] = useState(false);
  const [btnDisable, setBtnDesable] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  // submit handler
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validateEmail(email)) {
      setErrorMessage("Please enter a valid email address.");
      return;
    } else if (!validatePassword(password)) {
      setErrorMessage("Weak password detected");
      mockSign();
    } else {
      mockSign();
    }
  };
  //

  const mockSign = async () => {
    try {
      setIsloading(true);
      const res = await fetch("https://jsonplaceholder.typicode.com/users/1");
      const resPromise = await res.json();
      console.log("welcome, ", resPromise.name);
      setIsloading(false);
    } catch (error) {
      console.log(error);
    }
  };

  // email handler
  const handleEmailChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setEmail(e.target.value);
  };

  // password handler
  const handlePasswordChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setPassword(e.target.value);
    if (password.length > 2) {
      setBtnDesable(false);
    } else {
      setBtnDesable(true);
    }
  };

  // email validation
  const validateEmail = (email: string) => {
    // Basic email validation
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  // password validation
  const validatePassword = (password: string) => {
    const re =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return re.test(password);
  };

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <div className={style.formIntro}>
          <h2 style={{ color: "green" }} data-testid="signinTitle">
            Sign in
          </h2>
          <p>
            New customer?
            <span>
              <strong style={{ color: "green", marginBottom: "10px" }}>
                Register here
              </strong>
            </span>
          </p>
          <p style={{ color: "red" }}>{errorMessage}</p>
        </div>
        <Divider />
        <form onSubmit={handleSubmit} data-testid="signInForm">
          <TextField
            id="standard-basic"
            label="Email"
            variant="standard"
            onChange={handleEmailChange}
          />
          <TextField
            id="standard-basic"
            label="Password"
            variant="standard"
            type="password"
            onChange={handlePasswordChange}
          />
          <div className={style.accountRecovery}>
            <p>forgot username/password?</p>
          </div>
          <Button
            variant="contained"
            startIcon={isloading ? <Prograss /> : ""}
            color="success"
            type="submit"
            disabled={btnDisable}
          >
            Sign in
          </Button>
        </form>
        <Divider>Or continue with</Divider>
        <div>
          <Button variant="contained" startIcon={<FaGoogle />} color="success">
            Google
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default Signin;
