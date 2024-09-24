// # TYPE TO DEFINE CUSTOM BUTTON PROPS
export type ButtonProps = {
    labelBtn?: string;
    primaryColor?: string;
    secondaryColor?: string;
    onClick?: func;
    outlined?: boolean;
    customClass?: string;
    fullWidth?: boolean;
    fullHeight?:string;
    transformText?: 'none' | 'capitalize' | 'uppercase';
    disabledBtn?: boolean;
    btnName?: string;
    type?: 'button' | 'submit' | 'reset';
    ariaLabel?: string ;
    title?: string;
    fontWeight?: 'normal' | '100' | '200' | '300' | '400' | '600' | '700' | '800';
  };
  