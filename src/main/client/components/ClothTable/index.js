import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

const columns = [
  {
    id: 'id', label: 'Id', align: 'left', minWidth: 50,
  },
  {
    id: 'name', label: 'Name', align: 'left', minWidth: 200,
  },
  {
    id: 'sautNumber', label: 'Saut Number', align: 'left', minWidth: 100,
  },
  {
    id: 'type',
    label: 'Type',
    minWidth: 100,
    align: 'left',
    format: (value) => value.toLocaleString(),
  },
  {
    id: 'unit',
    label: 'Unit',
    minWidth: 100,
    align: 'left',
    format: (value) => value.toLocaleString(),
  },
  {
    id: 'cost',
    label: 'Cost',
    minWidth: 100,
    align: 'left',
    format: (value) => value,
  },
];

function createData(clothTableData) {
  const array = [];
  clothTableData.forEach((item) => {
    array.push({
      id: item.id,
      name: item.name,
      sautNumber: item.sautNumber,
      type: item.type,
      unit: item.unit,
      cost: item.cost,
    });
  });
  return array;
}

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 600,
  },
});

export default function ClothTable({ clothTableData }) {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const rows = createData(clothTableData);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
              <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                {columns.map((column) => {
                  const value = row[column.id];
                  return (
                    <TableCell key={column.id} align={column.align}>
                      {column.format && typeof value === 'number' ? column.format(value) : value}
                    </TableCell>
                  );
                })}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}

ClothTable.propTypes = {
  clothTableData: PropTypes.arrayOf(PropTypes.object).isRequired,
};
