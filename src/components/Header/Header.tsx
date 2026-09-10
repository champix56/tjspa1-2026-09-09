import { useEffect, type FC } from 'react';
import styles from './Header.module.css';

interface IHeaderProps {}

const Header: FC<IHeaderProps> = ({}) => {
  //const [state, setstate] = useState({})
  useEffect(() => {
    console.log('mount');
    return () => {
      console.log('unmount')
    }
  }, [])
  
  
  return (
  <div className={styles.Header} data-testid="Header">
    Header Component
  </div>
);}

export default Header;
