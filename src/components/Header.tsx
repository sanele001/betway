import { Button, Container, Stack } from "@mui/material";
import styles from "../styles/Header.module.css";
import Image from "next/image";

interface props {
  handleModalOpen: () => void;
}

const Header: React.FC<props> = ({ handleModalOpen }) => {
  return (
    <Container>
      <div className={styles.logoSection}>
        <div className={styles.logo}>
          <Image src="/betway_logo.png" alt="betway logo" fill={true} />
        </div>
        <div className={styles.btnHolder}>
          <Stack direction="row" spacing={1}>
            <Button
              variant="contained"
              onClick={() => handleModalOpen()}
              className={styles.signin}
            >
              Login
            </Button>
            <Button
              className={styles.btnSignup}
              onClick={() => handleModalOpen()}
            >
              Sign up
            </Button>
          </Stack>
        </div>
      </div>
    </Container>
  );
};
export default Header;
