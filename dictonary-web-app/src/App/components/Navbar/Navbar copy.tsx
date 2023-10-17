import cn from 'classnames';
import { AnimatePresence, motion } from 'framer-motion';
import { observer } from 'mobx-react-lite';
import * as React from 'react';
import Book from 'styles/svg/book.svg?react';
import { setTheme } from 'store/RootStore/hooks/setTheme';
import rootStore from 'store/RootStore/instance';
import captureDOM from 'utils/captureDOM';
import styles from './Navbar.module.scss';

const Navbar: React.FC = () => {
  const { curTheme } = rootStore.theme;
  const isDarkTheme = curTheme === 'dark';
  const [capturedCanvas, setCapturedCanvas] = React.useState<string | null>(
    null,
  );

  const [isAnimating, setIsAnimating] = React.useState('');

  const handleThemeToggle = async () => {
    setIsAnimating(isDarkTheme ? 'dark' : 'light');
    // const canvas = await captureDOM('root');
    // setCapturedCanvas(canvas);
    setTimeout(() => {
      setIsAnimating('');
      setTheme(isDarkTheme ? 'light' : 'dark');
    }, 300);
  };

  return (
    <>
      <div className={cn(styles.nav, styles[`theme_${curTheme}`])}>
        <Book className={styles.nav__book} />
        <button
          className={styles['nav__theme-toggler']}
          onClick={handleThemeToggle}
        >
          <div className={styles['nav__theme-toggler__circle']} />
          <AnimatePresence>
            {isAnimating && (
              <motion.div
                key="modal"
                className={
                  styles[`nav__theme-toggler__animation-${isAnimating}`]
                }
                animate={{ scale: 200, opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1, opacity: { duration: 0.5 } }}
              />
            )}
          </AnimatePresence>
        </button>
      </div>
    </>
  );
};

export default observer(Navbar);
