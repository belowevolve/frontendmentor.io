import { observer } from 'mobx-react-lite';
import * as React from 'react';
import './App.scss';
import Dictionary from 'pages/Dictionary/Dictionary';
import rootStore from 'store/RootStore';
import Navbar from './components/Navbar';

const App: React.FC = () => {
  const { curTheme } = rootStore.theme;
  return (
    <div id="app" className={`app theme_${curTheme}`}>
      <Navbar key="nav" />
      <Dictionary key="dic" />
    </div>
  );
};

export default observer(App);
