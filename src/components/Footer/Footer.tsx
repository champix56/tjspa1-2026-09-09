import { useEffect, type FC } from 'react';
import styles from './Footer.module.css';

interface IFooterProps {}

const Footer: FC<IFooterProps> = ({}) => {
  //const [state, setstate] = useState({})
  useEffect(() => {
    console.log('mount');
    return () => {
      console.log('unmount')
    }
  }, [])
  
  
  return (
  <div className={styles.Footer} data-testid="Footer">
    Footer Component
  </div>
);}

export default Footer;
