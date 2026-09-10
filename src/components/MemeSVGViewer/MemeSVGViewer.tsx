import { useEffect, type FC } from 'react';
import styles from './MemeSvgViewer.module.css';

interface IMemeSvgViewerProps {}

const MemeSvgViewer: FC<IMemeSvgViewerProps> = ({}) => {
  //const [state, setstate] = useState({})
  useEffect(() => {
    console.log('mount');
    return () => {
      console.log('unmount')
    }
  }, [])
  
  
  return (
  <div className={styles.MemeSvgViewer} data-testid="MemeSvgViewer">
    MemeSvgViewer Component
  </div>
);}

export default MemeSvgViewer;
