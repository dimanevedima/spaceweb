import classNames  from 'classnames';

import styles from './styles.module.scss';

const Body = ({className, children}) => {
  return (
    <main   className = {classNames(className, styles.body)}>
      {children}
    </main>
  );
};

export default Body;
