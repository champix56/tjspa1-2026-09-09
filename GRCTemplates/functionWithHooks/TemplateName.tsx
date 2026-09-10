import { useEffect, type FC } from 'react';
import styles from './TemplateName.module.css';

interface ITemplateNameProps {}

const TemplateName: FC<ITemplateNameProps> = ({}) => {
  //const [state, setstate] = useState({})
  useEffect(() => {
    console.log('mount');
    return () => {
      console.log('unmount')
    }
  }, [])
  
  
  return (
  <div className={styles.TemplateName} data-testid="TemplateName">
    TemplateName Component
  </div>
);}

export default TemplateName;
