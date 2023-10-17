import cn from 'classnames';
import { observer } from 'mobx-react-lite';
import * as React from 'react';
import rootStore from 'store/RootStore';
import styles from './Input.module.scss';

export type InputProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'onChange' | 'value'
> & {
  value: string;
  onChange: (value: string) => void;
  afterSlot?: React.ReactNode;
};

const Input = React.forwardRef<HTMLInputElement, InputProps>(function Input(
  { value, onChange, afterSlot, ...props },
  ref,
) {
  const { curTheme } = rootStore.theme;
  const handleChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      onChange(event.target.value);
    },
    [onChange],
  );

  return (
    <label
      className={cn(
        styles['input-container'],
        styles[`theme_${curTheme}`],
        props.className,
      )}
    >
      <input
        type="text"
        {...props}
        ref={ref}
        value={value}
        onChange={handleChange}
        className={styles['input-field']}
      />
      {!!afterSlot && afterSlot}
    </label>
  );
});

export default observer(Input);
