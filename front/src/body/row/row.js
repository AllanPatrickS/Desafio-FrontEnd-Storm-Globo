import { Checkbox, TableRow, TableCell } from '@material-ui/core';
import React from 'react';
import RowStyle from './row.style';
import CustomMenu from '../menu/customMenu';

function Row(props) {
    const styles = RowStyle();
    return (
        <TableRow className={props.index % 2 === 0 ? styles.evenRow : styles.oddRow}>
            <TableCell key='checkbox'>
                <Checkbox
                    checked={props.check === -1 ? false : true}
                    onChange={(event) => { props.pushCheck(event.target.checked, props.row._id) }}
                    inputProps={{ 'aria-label': 'select all desserts' }}
                />
            </TableCell>
            <TableCell key='username' className={styles.cell} component="th" scope="row">{props.row.username}</TableCell>
            <TableCell key='mail' className={styles.cell}>{props.row.email}</TableCell>
            <TableCell key='created' className={styles.cell}>{props.row.createdAt}</TableCell>
            <TableCell key='updated' className={styles.cell}>{props.row.updatedAt}</TableCell>
            <TableCell key='rules' className={styles.cell}>{props.row.rules}</TableCell>
            <TableCell key='statustext' className={props.row.status ? styles.green : styles.red} >{props.row.status ? "Ativo" : "Inativo"}</TableCell>
            <TableCell key='button'>
                <CustomMenu row={props.row} getUsersAfterUpdate={props.getUsersAfterUpdate} query={props.query}/>
            </TableCell>
        </TableRow>
    );
}

export default Row;