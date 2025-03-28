export enum ThemeEnum {
  Light = "light",
  Dark = "dark",
}

export type Theme = ThemeEnum.Light | ThemeEnum.Dark;

export interface NavbarProps {
  toggleTheme: () => void;
}
