import styles from "./Hero.module.css";
import heroImage  from "../../assets/hero_headphones.png"; 

function Hero() {
  return (
    <div className={styles.hero}>
      <div>
        <h1>100 Thousand Songs, ad-free</h1>
        <h1>Over thousands podcast episodes</h1>
      </div>
      <div>
        <img src={heroImage} width={212} alt="headphones" />
      </div>
    </div>
  );
}

export default Hero;
