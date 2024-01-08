import classes from "./Button.module.css";
function Button({ children, textOnly, className, ...props }) {
  let cssClass = textOnly ? "text-button" : "button";
  return (
    <button className={`${classes[className]} ${classes[cssClass]}`} {...props}>
      {children}
    </button>
  );
}
export default Button;
