// # TYPE THAT DEFINE TEXT PROPS
export type inputTextProps = {
    label?: string 
    type: 'text' | 'password' | 'email' | 'date' | 'datetime-local';
    name: string;
    customClass?: string;
    readonly?: boolean;
    placeholder?: string;
    value?: string;
    isRequired?: boolean;
    disabled?: boolean;
    onChange?: func;
    onFocus?: func;
    onBlur?: func;
    bgColor?: string;
    transformText?: 'none' | 'capitalize' | 'uppercase';
    upperCase?: boolean;
    errorMessage?: string 
    invalidData?: boolean;
    iconOnEnd?: any;
    buttonInInput?:boolean
    buttonText?:string;
  };
  