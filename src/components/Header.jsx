import classes from "./Header.module.css";
import Logo from "../assets/logo.jpg";
import Button from "./UI/Button";
function Header() {
  return (
    <header id={classes["main-header"]}>
      <span id={classes.title} alt="logo-name">
        <img src={Logo} />
        <h1>REACTFOOD</h1>
      </span>
      <Button textOnly className={classes["text-button"]}>
        Cart(0)
      </Button>
    </header>
  );
}

export default Header;
