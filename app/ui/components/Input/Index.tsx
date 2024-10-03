import { FC } from "react";
// -- TYPE
import { inputTextProps } from "./input";
// -- STYLE
import "./input.scss";

/**
 * InputText component for rendering a text input field with customizable styles and error handling.
 *
 * @component
 * @param {Object} props - The props object.
 * @param {string} props.name - The name of the input field.
 * @param {string} [props.type] - The type of input field (e.g., 'text', 'email', 'password').
 * @param {string} [props.placeholder] - The placeholder text for the input field.
 * @param {string} [props.value] - The value of the input field.
 * @param {function} [props.onChange] - The function to handle the onChange event of the input field.
 * @param {function} [props.onFocus] - The function to handle the onFocus event of the input field.
 * @param {function} [props.onBlur] - The function to handle the onBlur event of the input field.
 * @param {boolean} [props.readonly] - Indicates whether the input field is read-only.
 * @param {boolean} [props.disabled] - Indicates whether the input field is disabled.
 * @param {string} [props.transformText] - The text transform style for the input field.
 * @param {string} [props.bgColor] - The background color of the input field.
 * @param {string} [props.customClass] - Additional custom CSS class for the component.
 * @param {boolean} [props.isRequired] - Indicates whether the input field is required.
 * @param {Object} [props.invalidData] - If true display error message.
 * @param {boolean} [props.iconOnEnd] - if true display the icon check on end.
 * @param {Object} [props.label] - The label for the input field that can be ,withvariables {{key:'hello',variables:{name:'test name'}}} ,without variables {'HELLO'}
 * @param {Object} [props.errorMessage] - The error message for the input field that can be ,withvariables {{key:'hello',variables:{name:'test name'}}} ,without variables {'HELLO'}
 * @returns {JSX.Element} Checkbox component with selection functionality.
 */

export const InputText: FC<inputTextProps> = (props) => {
  //   # DEFINE STYLE OF THE INPUT
  const inputTextStyle = {
    textTransform: props.transformText,
    backgroundColor: props.bgColor,
  };

  return (
    <div id="genericInputText" className={`${props.customClass}`}>
      <label htmlFor={props.name}>
        {props.label}
        {props.isRequired ? "*" : ""}
      </label>
      <div className="wrapInput">
        <input
          className={`inputText`}
          type={props.type}
          id={props.name}
          name={props.name}
          style={inputTextStyle}
          placeholder={props.placeholder}
          value={props.value}
          onChange={props.onChange}
          onFocus={props.onFocus}
          onBlur={props.onBlur}
          readOnly={props.readonly}
          disabled={props.disabled}
        />
        {props.iconOnEnd && <span className="iconOnEnd">✓</span>}
        {props.buttonInInput && (
          <button className="buttonInputStyle">{props.buttonText || ""}</button>
        )}
      </div>
      {props.invalidData && (
        <span className="errorMessage">
          {" "}
          {props.errorMessage ? props.errorMessage : ""}
        </span>
      )}
    </div>
  );
};
