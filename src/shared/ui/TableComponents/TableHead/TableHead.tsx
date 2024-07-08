import { FC} from 'react';
import {TableHeadProps} from "./types";
import styles from './styles.module.scss'

export const TableHead: FC<TableHeadProps> = (props) => {

   return <>
      <th className={styles.th} {...props}>

      </th>
   </>
};