import { Button } from "@mui/material";
import styles from "@/styles/Hero.module.css";

type Data = {
  title: string;
  promo: string;
};

interface Props {
  promoText: Data;
}

const Hero: React.FC<Props> = ({ promoText }) => {
  return (
    <div className={styles.hero}>
      <div className={styles.callToaction}>
        <div className={styles.content}>
          <h3>{promoText.title}</h3>
          <h2>{promoText.promo}</h2>
          <Button variant="contained" color="success">
            Join Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
