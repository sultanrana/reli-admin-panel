import React, { useState } from 'react'
import Paper from '@mui/material/Paper';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { tableCellClasses } from '@mui/material/TableCell';
import { styled } from '@mui/material/styles';
import { Box, Button, Card, IconButton, TextField, Table, TableContainer, Typography, DialogContentText, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
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

const RefundContainer = styled(TableContainer)(({theme}) => ({
  padding: '1rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  [theme.breakpoints.down('md')] : {
    width: '100%',
  }, 
  [theme.breakpoints.up('md')] : {
    width: '475px',
  }, 
}))
const StyledTextField = styled(TextField)(({theme}) => ({
  height: '54px',
  marginBottom: '7rem',
  [theme.breakpoints.down('md')]: {
    width: '100%'
  },
  [theme.breakpoints.up('md')]: {
    width: '304px'
  },
}))


const ProjectCustomersTable = () => {
const [page, setPage] = React.useState(0);
const [rowsPerPage, setRowsPerPage] = React.useState(10);
const [isRefund, setIsRefund] = useState(false);
const handleChangePage = (event, newPage) => {
    setPage(newPage);
};

const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
};
const handleRefundModal = () => {
  if(isRefund){
    setIsRefund(false)
  }else{
    setIsRefund(true)
  }
}

const activeProjectrows = [
  createData( "Initial Payment", "04/30/22", "20percentoff","$220.00", "$1,100.00", "Paid", <Button variant='contained' onClick={handleRefundModal}>refund</Button>),
];

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

            {isRefund ? (
            <Dialog
                open={isRefund}
                scroll='body'
                onClose={handleRefundModal}
                aria-describedby="scroll-dialog-description"
              >
                <DialogTitle id="scroll-dialog-title" sx={{ 
                    p: 1,
                    fontStyle: 'normal',
                    fontWeight: '400',
                    fontSize: '24px',
                    lineHeight: '24px',
                    letterSpacing: '0.18px',
                    color: '#000000'
                }}>Refund</DialogTitle>
                <DialogContent
                    sx={{
                        p: 0
                    }}
                >
                  <DialogContentText
                    id="scroll-dialog-description"
                    tabIndex={-1}
                  >
                  <RefundContainer>
                    <Typography sx={{
                      fontWeight: '600',
                      fontSize: '14px',
                      color: '#000000',
                    }}>
                      Window PROJ94382
                    </Typography>
                    <Paper sx={{ width: '100%', overflow: 'hidden'}}>
                      <TableContainer>
                          <Table stickyHeader aria-label="sticky table" sx={{}}>
                          <TableHead>
                              <StyledTableRow>
                                  <StyledTableCell sx={{fontSize: '12px', fontWeight: '600'}}>
                                    Transaction Type
                                  </StyledTableCell>
                                  <StyledTableCell sx={{fontSize: '12px', fontWeight: '600'}}>
                                    Date
                                  </StyledTableCell>
                                  <StyledTableCell sx={{fontSize: '12px', fontWeight: '600'}}>
                                    Amount
                                  </StyledTableCell>
                                  <StyledTableCell sx={{fontSize: '12px', fontWeight: '600'}}>
                                    Status
                                  </StyledTableCell>
                              </StyledTableRow>
                          </TableHead>
                          <TableBody>
                                  <TableRow>
                                      <StyledTableCell>
                                        Initial Payment
                                      </StyledTableCell>
                                      <StyledTableCell>
                                        04/30/22
                                      </StyledTableCell>
                                      <StyledTableCell>
                                        $1,100.00
                                      </StyledTableCell>
                                      <StyledTableCell>
                                        Paid
                                      </StyledTableCell>
                                  </TableRow>
                          </TableBody>
                          </Table>
                      </TableContainer>
                    </Paper>
                    <StyledTextField 
                        sx={{width: '100%',}}
                        id="amount"
                        label="Amount"
                        variant="outlined" 
                        defaultValue="$1,100.00"
                        helperText="Max available for refund"
                    />
                  </RefundContainer>
                    
                  
                  
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button variant='outlined' onClick={handleRefundModal}>Cancel</Button>
                  <Button variant='contained' onClick={handleRefundModal}>Save Changes</Button>
                </DialogActions>
            </Dialog>
              
            ) : null}
      </Paper>
  )
}

export default ProjectCustomersTable