import { useEffect, type FC } from 'react';
import styles from './MemeForm.module.css';

interface IMemeFormProps {}

const MemeForm: FC<IMemeFormProps> = ({}) => {
  //const [state, setstate] = useState({})
  useEffect(() => {
    console.log('mount');
    return () => {
      console.log('unmount')
    }
  }, [])
  
  
  return (
  <div className={styles.MemeForm} data-testid="MemeForm">
    MemeForm Component
  </div>
);}

export default MemeForm;
