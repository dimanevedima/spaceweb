import React from 'react';
import classNames  from 'classnames';
import {Link} from "react-router-dom";

import styles from './styles.module.scss';

import logo from '../../img/Logo.svg';
import user from '../../img/sidebar/User.svg';
import domens from '../../img/sidebar/Domens.svg';
import news from '../../img/sidebar/News.svg';
import vps from '../../img/sidebar/Vps.svg';


const Sidebar = ({className}) => {
  return (
    <nav
      className = {classNames(className, styles.sidebar)}
      >
          <Link className = {styles.logo} to = "/">
              <img src={logo} alt="logo"/>
          </Link>

          <Link className = {styles.item} to = "/user">
              <img src={user} alt="user"/>
              <div>Аккаунт</div>
            </Link>

          <Link className = {styles.item} to = "/vps">
              <img src={vps} alt="vps"/>
              <div>VPS</div>
            </Link>

          <Link className = {styles.item} to = "/domens">
              <img src={domens} alt="domens"/>
              <div>Домены</div>
            </Link>

          <Link className = {styles.item} to = "/journal">
              <img src={news} alt="news"/>
              <div>Бортовой журнал</div>
            </Link>

      </nav>
  );
};

export default Sidebar;

// <nav>
// <Link to = "/">
//   <img src={logo} alt=""/>
// </Link>
//   <Link to = "/user">
//     <img src={user} alt=""/>
//     Аккаунт
//   </Link>
//   <Link to = "/vps">
//     <img src={vps} alt=""/>
//     Vps
//   </Link>
//   <Link to = "/domens">
//     <img src={domens} alt=""/>
//     Домены
//   </Link>
//   <Link to = "/news">
//     <img src={news} alt=""/>
//     Бортовой журнал
//   </Link>
// </nav>

//<img src = {bell} alt = 'bellIcon'/>
