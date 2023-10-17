import { IReactionDisposer, reaction } from 'mobx';
import { API_URLS } from 'config/api';
import ApiStore from './ApiStore';
import ThemeStore from './ThemeStore';

export default class RootStore {
  readonly productApi = new ApiStore(API_URLS.DICTIONARY);
  readonly theme = new ThemeStore();

  private readonly themeSaveReaction: IReactionDisposer = reaction(
    () => this.theme.curTheme,
    () => {
      this.theme.saveCartToLocalStorage();
    },
  );

  destroy(): void {
    this.themeSaveReaction();
  }
}
