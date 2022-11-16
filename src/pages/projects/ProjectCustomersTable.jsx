import React from 'react'
import Paper from '@mui/material/Paper';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { tableCellClasses } from '@mui/material/TableCell';
import { styled } from '@mui/material/styles';
import { Box, Button, Card, IconButton, Table, TableContainer, Typography,} from '@mui/material';
import TableLink from '../../components/TableLink';
import TableActions from '../../components/TableActions';


// active project
const activeProjectColumns = [
    { id: 'transactionType', label: 'Transaction Type', minWidth: 100, fontWeight: '600' },
    { id: 'processed', label: 'Processed', minWidth: 100, fontWeight: '600' },
    { id: 'couponCode', label: 'Coupon Code', minWidth: 100, fontWeight: '600' },
    { id: 'couponValue', label: 'Coupon Value', minWidth: 170, fontWeight: '600' },
    { id: 'amount', label: 'Amount', minWidth: 100, fontWeight: '600' },
    { id: 'status', label: 'Amount', minWidth: 100, fontWeight: '600' },
    { id: 'actions', label: 'Actions', minWidth: 160, fontWeight: '600' },
  ];
  // active project
  function createData(transactionType, processed, couponCode, couponValue, amount, status, actions) {
    return { transactionType, processed, couponCode, couponValue, amount, status, actions };
  }
  // active project
  const activeProjectrows = [
    createData( "Initial Payment", "04/30/22", "20percentoff","$220.00", "$1,100.00", "Paid", <Button variant='contained'>refund</Button>),
    createData( "Initial Payment", "04/30/22", "20percentoff","$220.00", "$1,100.00", "Paid", <Button variant='contained'>refund</Button>),
    createData( "Initial Payment", "04/30/22", "20percentoff","$220.00", "$1,100.00", "Paid", <Button variant='contained' disabled>refund</Button>),
    createData( "Initial Payment", "04/30/22", "20percentoff","$220.00", "$1,100.00", "Paid", <Button variant='contained'>refund</Button>),
    createData( "Initial Payment", "04/30/22", "20percentoff","$220.00", "$1,100.00", "Paid", <Button variant='contained'>refund</Button>),
  ];
  

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.gray,
      color: theme.palette.common.black,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
      backgroundColor: '#ddd',
    },
  }));
const ProjectCustomersTable = () => {
const [page, setPage] = React.useState(0);
const [rowsPerPage, setRowsPerPage] = React.useState(10);

const handleChangePage = (event, newPage) => {
    setPage(newPage);
};

const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
};
  return (
    <Paper sx={{ width: '100%', overflow: 'hidden', mb: 3 }}>
          <TableContainer>
              <Table stickyHeader aria-label="sticky table" sx={{}}>
              <TableHead>
                  <StyledTableRow>
                  {activeProjectColumns.map((column) => (
                      <StyledTableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth, fontWeight: column.fontWeight }}
                      >
                      {column.label}
                      </StyledTableCell>
                  ))}
                  </StyledTableRow>
              </TableHead>
              <TableBody>
                  {activeProjectrows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => {
                      return (
                      <StyledTableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                          {activeProjectColumns.map((column) => {
                          const value = row[column.id];
                          return (
                              <StyledTableCell key={column.id} align={column.align}>
                              {column.format && typeof value === 'number'
                                  ? column.format(value)
                                  : value}
                              </StyledTableCell>
                          );
                          })}
                      </StyledTableRow>
                      );
                  })}
              </TableBody>
              </Table>
          </TableContainer>
          {/* <TablePagination
              rowsPerPageOptions={[10, 25, 100]}
              component="div"
              count={activeProjectrows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
          /> */}
      </Paper>
  )
}

export default ProjectCustomersTable