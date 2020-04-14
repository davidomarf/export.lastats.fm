import React from 'react';

import UserInput from './UserInput/UserInput';

import styles from './Header.module.scss';

const Header = () => {
  return (
    <div className={styles['header']}>
      <h1 className={styles['title']}>Last.fm Exporter</h1>
      <h2 className={styles['description']}>
        Download (and clean!) all your Last.fm activity in CSV files
      </h2>
      <UserInput />
    </div>
  );
};

export default Header;
