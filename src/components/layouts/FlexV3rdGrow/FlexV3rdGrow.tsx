import { type FC, type ReactNode } from 'react';
import styles from './FlexV3rdGrow.module.css';

export interface IFlexV3rdGrowProps {
  children:ReactNode|Array<ReactNode>
}

const FlexV3rdGrow: FC<IFlexV3rdGrowProps> = ({children}) => (
  <div className={styles.FlexV3rdGrow} data-testid="FlexV3rdGrow">
   {children}
  </div>
);

export default FlexV3rdGrow;
