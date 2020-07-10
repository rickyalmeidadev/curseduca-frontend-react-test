import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string;
    boxShadow: string;
    colors: {
      primary: string;
      secondary: string;
      success: string;
      danger: string;
      dark: string;
      light: string;
      grey: string;
      darkGrey: string;
      background: string;
    };
    margins: {
      smaller: string;
      small: string;
      normal: string;
      large: string;
      larger: string;
    };
    maxWidth: string;
    paddings: {
      small: string;
      normal: string;
      large: string;
    };
    transition: string;
  }
}
