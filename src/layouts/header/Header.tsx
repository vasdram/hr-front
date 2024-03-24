import type { FC } from 'react';

import type { HeaderProps } from './Header.types';

import styles from './Header.module.scss';

export const Header: FC<HeaderProps> = ({ vacancy }) => {
  return (
    <header className={styles.root}>
      <div className={styles.side}>HR-test</div>
      <div className={styles.main}>{vacancy}</div>
    </header>
  );
};
