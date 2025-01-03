import {Link}  from "react-router-dom";
import { useState } from "react";
import Button from "../button";
import FeedbackDialog from "../popup_box"
import Logo from "../navbar/logo/Logo";
import Search from "../navbar/searchbar/SearchBar";
import styles from "./Navbar.module.css";

function Navbar() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <nav className={styles.navbar}>
      <Link to="/">
        <Logo />
      </Link>
      <Search/>
      <Button text="Give Feedback" onClick={handleOpen}/>
      <FeedbackDialog open={open} handleClose={handleClose} />

    </nav>
  );
}

export default Navbar;
