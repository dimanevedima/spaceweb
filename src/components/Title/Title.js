

import styles from './styles.module.scss';

const Title = ({tag, text}) => {
      switch (tag) {
        case 'h2':
          return   <h2 className = {styles.h2}>{text}</h2>;
        case 'h3':
          return  <h3 className = {styles.h3}>{text}</h3>;
        default:
        return <>{text}</>;
      };
};

export default Title;
