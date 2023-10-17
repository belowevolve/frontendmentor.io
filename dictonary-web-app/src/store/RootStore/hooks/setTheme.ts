import { DefaultThemes } from '../ThemeStore';
import rootStore from '../instance';

export const setTheme = (theme: DefaultThemes): void => {
  rootStore.theme.curTheme = theme;
};
