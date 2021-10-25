import classNames  from 'classnames';

import styles from './styles.module.scss';

const Footer = ({className}) => {
  return (
    <footer
      className = {classNames(className, styles.footer)}>
      
        <div className="left">
          <div>&copy; 2001– {new Date(Date.now()).getFullYear()} ООО «СпейсВэб»</div>
          <div>Все права защищены.</div>
          <div> Лицензия <a href = "/" target = "_blank" rel="noreferrer">№163230</a></div>
        </div>

        <div className="right">
          <div><a href="tel:+78123341222"> +7 (812) 334-12-22 </ a>(в Санкт-Петербурге)</div>
          <div><a href="tel:+74956631612"> +7 (495) 663-16-12  </ a>(в Москве)</div>
          <div><a href="tel:+8001001615"> (800) 100-16-15 </ a>(бесплатно по России)</div>
        </div>

    </footer>

  );
};

export default Footer;
