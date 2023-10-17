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

  const handleThemeToggle = async () => {
    const canvas = await captureDOM('app');
    setCapturedCanvas(canvas);
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {capturedCanvas && (
          <motion.img
            className={styles.canvas}
            src={capturedCanvas}
            alt="Captured DOM"
            initial={{
              WebkitMask:
                'radial-gradient(at 0 100%, #000 70%, #0000 0%) content-box 0 100% / 150% 150% no-repeat',
            }}
            animate={{
              WebkitMask:
                'radial-gradient(at 0 100%, #000 70%, #0000 0%) content-box 0 100% / 0% 0% no-repeat',
            }}
            transition={{ duration: 1, delay: 0.2 }}
            onAnimationComplete={() => setCapturedCanvas(null)}
            onLoad={() =>
              setTimeout(() => setTheme(isDarkTheme ? 'light' : 'dark'), 100)
            }
          />
        )}
      </AnimatePresence>

      <div className={cn(styles.nav, styles[`theme_${curTheme}`])}>
        <Book className={styles.nav__book} />
        <button
          className={styles['nav__theme-toggler']}
          onClick={handleThemeToggle}
        >
          <div className={styles['nav__theme-toggler__circle']} />
        </button>
      </div>
    </>
  );
};

export default observer(Navbar);
