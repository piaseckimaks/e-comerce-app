import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
});

export default function StickyHeadTable() {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
                <TableCell>
                  Card Provider
                </TableCell>
                <TableCell>
                  Card Holder
                </TableCell>
                <TableCell>
                  Card Number
                </TableCell>
                <TableCell>
                  Expired Date
                </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
                <TableRow hover role="checkbox" tabIndex={-1} onClick={console.log('click row')}>
                      <TableCell >
                        VISA
                      </TableCell>
                      <TableCell >
                        EJ JAMES
                      </TableCell>
                      <TableCell >
                        **** **** **** 4856
                      </TableCell>
                      <TableCell >
                        02/26
                      </TableCell>
                </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
