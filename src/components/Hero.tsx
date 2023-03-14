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
          <p className={styles.smallText}>{promoText.title}</p>
          <h2 className={styles.bigText}>{promoText.promo}</h2>
          <Button variant="contained" className={styles.callToActionbtn}>
            Join Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
