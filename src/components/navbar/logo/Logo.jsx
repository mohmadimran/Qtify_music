import LogoImage from "../../../assets/logo.png";
import Style from "./Logo.module.css";
export default function Logo() {
  return (
    <div>
      <img src={LogoImage} alt="logo" className={Style.logo} />
      <p className={Style.logoText}>
        Q <span>  tify</span>
      </p>
    </div>
  );
}
