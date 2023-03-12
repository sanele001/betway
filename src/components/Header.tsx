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
          <Stack direction="row" spacing={2}>
            <Button
              variant="contained"
              color="success"
              onClick={() => handleModalOpen()}
            >
              Login
            </Button>
            <Button variant="outlined" color="success">
              Sign up
            </Button>
          </Stack>
        </div>
      </div>
    </Container>
  );
};
export default Header;
