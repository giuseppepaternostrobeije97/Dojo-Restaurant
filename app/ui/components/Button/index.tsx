// -- REACT
import { FC } from "react";
// -- STYLE
import "./button.scss";
// -- TYPE
import { ButtonProps } from "./button";

/**
 * Custom button component.
 *
 * @component
 * @param {Object} props - The props object.
 * @param {string } props.labelBtn - The label text of the button
 * @param {string} [props.primaryColor] - The color of the button background.
 * @param {string} [props.secondaryColor] - The color of the button text.
 * @param {Function} [props.onClick] - The click event handler function.
 * @param {boolean} [props.outlined=false] - invert text and bg color
 * @param {string} [props.customClass] - Additional custom CSS class for the button.
 * @param {boolean} [props.fullWidth=false] - Whether the button should take full width.
 * @param {boolean} [props.fullHeight=false] - Whether the button should take full height.
 * @param {'none' | 'capitalize' | 'uppercase'} [props.transformText='none'] - The text transformation style.
 * @param {boolean} [props.disabledBtn=false] - Whether the button is disabled or not.
 * @param {string} [props.btnName] - The name attribute of the button.
 * @param {'button' | 'submit' | 'reset'} [props.type='button'] - The type attribute of the button.
 * @param {string} [props.ariaLabel] - The ARIA label attribute of the button.
 * @param {string} [props.title] - The title attribute of the button.
 * @param {'normal' | '100' | '200' | '300' | '400' | '600' | '700' | '800'} [props.fontWeight='normal'] - The font weight of the button text.
 * @returns {JSX.Element} 
 */

export const Button: FC<ButtonProps> = (props) => {
  //   # DEFINE STYLE OF THE BUTTON
  const ButtonStyle = {
    border: props.outlined ? `1px solid ${props.primaryColor}` : "none",
    backgroundColor: props.outlined ? props.secondaryColor : props.primaryColor,
    color: props.outlined ? props.primaryColor : props.secondaryColor,
    width: props.fullWidth ? "100%" : undefined,
    textTransform: props.transformText,
  };

  return (
    <>
      <button
        id="customButton"
        className={`customButton ${props.customClass}`}
        onClick={props.onClick}
        style={ButtonStyle}
        disabled={props.disabledBtn}
        name={props.btnName}
        type={props.type}
        aria-label={props.ariaLabel ? props.ariaLabel : ""}
        title={props.title}
      >
        <span
          style={{ fontWeight: props.fontWeight ? props.fontWeight : "normal" }}
        >
          {props.labelBtn ? props.labelBtn : "Click"}
        </span>
      </button>
    </>
  );
};
