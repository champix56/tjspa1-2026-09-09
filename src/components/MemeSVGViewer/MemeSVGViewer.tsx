import { useEffect, type FC } from 'react';
import styles from './MemeSvgViewer.module.css';
import type { MemeInterface } from 'orsys-tjs-meme';

interface IMemeSvgViewerProps {
  meme: MemeInterface
}

const MemeSvgViewer: FC<IMemeSvgViewerProps> = ({meme}) => {
 
  
  return (
  <div className={styles.MemeSvgViewer} data-testid="MemeSvgViewer">
    {JSON.stringify(meme)}
  </div>
);}

export default MemeSvgViewer;
