import { type FC, type ReactNode } from 'react';
import styles from './TemplateName.module.css';

export interface ITemplateNameProps {
  children:ReactNode|Array<ReactNode>
}

const TemplateName: FC<ITemplateNameProps> = ({children}) => (
  <div className={styles.TemplateName} data-testid="TemplateName">
   {children}
  </div>
);

export default TemplateName;
