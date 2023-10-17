import { computed, makeObservable, observable } from 'mobx';

export type DefaultThemes = 'dark' | 'light';

type PrivateFields = '_theme';

class ThemeStore {
  static readonly lsKey = 'theme';
  private _theme = 'dark';
  constructor() {
    makeObservable<ThemeStore, PrivateFields>(this, {
      _theme: observable,
      curTheme: computed,
    });
    this.loadCartFromLocalStorage();
  }

  get curTheme(): string {
    return this._theme;
  }

  set curTheme(theme: DefaultThemes) {
    this._theme = theme;
  }

  private loadCartFromLocalStorage(): void {
    this._theme =
      localStorage.getItem(ThemeStore.lsKey) ?? (matchMedia('(prefers-color-scheme: dark)') ? 'dark' : 'light');
  }

  saveCartToLocalStorage(): void {
    localStorage.setItem(ThemeStore.lsKey, this._theme);
  }
}

export default ThemeStore;
