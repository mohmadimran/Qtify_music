// Implementation Requirements for Button:
// Create a separate component for the Button. 
// The button must have the following text "Give Feedback". Make use of the Poppins font.

// It must be a **re-usable component **i.e. you must be able to use this component to make other similar buttons as well in QTify, but with different text.

// Make use of Module-scoped CSS for styling the Button component.

// Upon hovering the mouse over the button, the cursor must turn into a pointer.

// It must have a border radius.

// The background color must be black and the text color must be green just as the color code mentioned in the 1st page of the Figma file. Make use of CSS variables for defining the colors.




import styles from "./Button.module.css";

function Button({ text, onClick }) {
  return (
    <button className={styles.button} onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;
