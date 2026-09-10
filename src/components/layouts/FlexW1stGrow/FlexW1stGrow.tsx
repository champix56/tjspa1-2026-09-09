import { type FC, type ReactNode } from 'react';
import styles from './FlexW1stGrow.module.css';

export interface IFlexW1stGrowProps {
  children:ReactNode|Array<ReactNode>
}

const FlexW1stGrow: FC<IFlexW1stGrowProps> = ({children}) => (
  <div className={styles.FlexW1stGrow} data-testid="FlexW1stGrow">
   {children}
  </div>
);

export default FlexW1stGrow;
