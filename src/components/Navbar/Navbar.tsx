import { useEffect, type FC } from 'react';
import styles from './Navbar.module.css';

interface INavbarProps {}

const Navbar: FC<INavbarProps> = ({}) => {
  //const [state, setstate] = useState({})
  useEffect(() => {
    console.log('mount');
    return () => {
      console.log('unmount')
    }
  }, [])
  
  
  return (
  <div className={styles.Navbar} data-testid="Navbar">
    Navbar Component
  </div>
);}

export default Navbar;
