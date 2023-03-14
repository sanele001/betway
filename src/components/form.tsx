import {
  TextField,
  Button,
  Card,
  CardContent,
  CircularProgress,
  Divider,
  InputBase,
  styled,
  FormControl,
  InputLabel,
} from "@mui/material";
import styles from "@/styles/Formstyl.module.css";

import { useState } from "react";

const Signin: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isloading, setIsloading] = useState(false);

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
    const data = {
      username: email,
      password,
    };
    try {
      const response = await fetch("http://localhost:3000/api/mocksign", {
        method: "POST", //
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const user = await response.json();
      console.log(`Wellcome ${user.name}`);
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
        <div className={styles.formIntro}>
          <p style={{ fontWeight: 600 }} data-testid="signinTitle">
            Sign in
          </p>
          <p>
            New customer?
            <span className={styles.textspan}> Register here</span>
          </p>
          <p style={{ color: "red", paddingTop: "1rem" }}>{errorMessage}</p>
        </div>

        <form onSubmit={handleSubmit} data-testid="signInForm">
          <InputLabel shrink htmlFor="standard-username">
            Username
          </InputLabel>
          <TextField
            id="standard-username"
            label="Username"
            variant="outlined"
            onChange={handleEmailChange}
            className={styles.textinp}
          />
          <InputLabel shrink htmlFor="standard-Password">
            Password
          </InputLabel>
          <TextField
            id="standard"
            label="Password"
            variant="outlined"
            type="password"
            onChange={handlePasswordChange}
          />
          <div className={styles.btnSubmitContainer}>
            <Button
              variant="contained"
              color="success"
              type="submit"
              className={styles.btnSubmit}
            >
              login
            </Button>

            <p className={styles.accountRecovery}>forgot username/password?</p>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default Signin;
