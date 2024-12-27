// import {Link}  from "react-router-dom";
import Button from "../navbar/button/Button";
import Logo from "../navbar/logo/Logo";
import Search from "../navbar/searchbar/SearchBar";
import styles from "./Navbar.module.css";

function Navbar() {
  const handleFeedbackClick = () => {
    alert("Feedback button clicked!");
  };

  return (
    <nav className={styles.navbar}>
      {/* <Link to="/"> */}
        <Logo />
      {/* </Link> */}
      <Search/>
      <Button text="Give Feedback" onClick={handleFeedbackClick} />
    </nav>
  );
}

export default Navbar;
