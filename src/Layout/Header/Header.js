import React from 'react';
import classNames  from 'classnames';

import styles from './styles.module.scss';

import bell from '../../img/Bell.svg';

const Header = ({className}) => {
  return (
    <header
    className = {classNames(className, styles.header)}>
        <div className = {styles.header__item}>
         <a href="/">100.00 ₽</a>
        </div>

        <div className = {styles.header__item}>
          <a href="/">
          <div className = {styles.bell}><img src = {bell} alt = 'bellIcon'/>
          <div className={styles.count}>2</div></div>
          <div>vikavishny</div>
          </a>

        </div>
        <div className = {styles.header__item}>
          <a href="/">Выйти</a>
        </div>
      </header>
  );
};

export default Header;
