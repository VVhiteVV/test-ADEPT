import { FC} from 'react';
import {TableRowProps} from "./types";
import styles from './styles.module.scss'
import cl from 'classnames'

export const TableRow: FC<TableRowProps> = (props) => {
   const { selected = false, ...other} = props

   return <>
      <tr className={cl(
          styles.row,
          {
             [styles.selected]: selected
          }
      )} {...props}>

      </tr>
   </>
};