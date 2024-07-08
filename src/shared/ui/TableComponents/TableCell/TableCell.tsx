import { FC} from 'react';
import styles from "./styles.module.scss"
import {TableCellProps} from "./types";

export const TableCell: FC<TableCellProps> = (props) => {
   const { children, ...other} = props


   return <>
      <td className={styles.Cell} {...props}>

      </td>
   </>
};