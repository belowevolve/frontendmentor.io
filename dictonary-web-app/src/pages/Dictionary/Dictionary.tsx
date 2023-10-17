import cn from 'classnames';
import * as React from 'react';
import MagnifyingGlass from 'styles/svg/magnifying-glass.svg?react';
import Input from './components/Input/Input';
import styles from './Dictionary.module.scss';

const Dictionary: React.FC = () => {
  const [value, setValue] = React.useState('');

  return (
    <div className={cn(styles.dictionary)}>
      <Input
        value={value}
        onChange={(e) => setValue(e)}
        afterSlot={<MagnifyingGlass className={styles.input__slot} />}
      />
      <p style={{ marginTop: '20px' }}>Some dummy text</p>
      <p>Some dummy text</p>
      <p>Some dummy text</p>
      <p>Some dummy text</p>
      <p>Some dummy text</p>
      <p>Some dummy text</p>
      <p>Some dummy text</p>
      <p>Some dummy text</p>
      <p>Some dummy text</p>
      <p>Some dummy text</p>
      <p>Some dummy text</p>
      <p>Some dummy text</p>
      <p>Some dummy text</p>
      <p>Some dummy text</p>
      <p>Some dummy text</p>
      <p>Some dummy text</p>
      <p>Some dummy text</p>
      <p>Some dummy text</p>
      <p>Some dummy text</p>
      <p>Some dummy text</p>
      <p>Some dummy text</p>
      <p>Some dummy text</p>
      <p>Some dummy text</p>
      <p>Some dummy text</p>
      <p>Some dummy text</p>
      <p>Some dummy text</p>
      <p>Some dummy text</p>
      <p>Some dummy text</p>
      <p>Some dummy text</p>
      <p>Some dummy text</p>
    </div>
  );
};

export default Dictionary;
