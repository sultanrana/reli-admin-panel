import { Box, Table, TableContainer, Typography, IconButton, Button, ButtonGroup } from '@mui/material';
import React from 'react'
import BeardcrumNavigator from '../../components/BeardcrumNavigator'
import Sidebar from '../../components/Sidebar'
import Paper from '@mui/material/Paper';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import SearchBox from '../../components/SearchBox';
import { tableCellClasses } from '@mui/material/TableCell';
import { styled } from '@mui/material/styles';
import ModeRoundedIcon from '@mui/icons-material/ModeRounded';
import FilterListRoundedIcon from '@mui/icons-material/FilterListRounded';
import { useSelector } from 'react-redux';
import TableLink from '../../components/TableLink';
import { useState } from 'react';
import TableActions from '../../components/TableActions';
import OverView from './OverView';
import EditCompany from './EditCompany';
// user info
const userInfoColumns = [
  { id: 'name', label: 'Name', minWidth: 150, fontWeight: '600' },
  { id: 'email', label: 'Email', minWidth: 150, fontWeight: '600' },
  { id: 'phone', label: 'Phone', minWidth: 150, fontWeight: '600' },
  { id: 'status', label: 'Status', minWidth: 80, fontWeight: '600' },
  { id: 'approvedByReli', label: 'Approved by Reli', minWidth: 120, fontWeight: '600' },
  { id: 'type', label: 'Type', minWidth: 100, fontWeight: '600' },
  { id: 'lastActive', label: 'Last Active', minWidth: 200, fontWeight: '600' },
  { id: 'actions', label: 'Actions', minWidth: 130, fontWeight: '600' },
];
// user info
function createDataUserInfo(name, email, phone, status, approvedByReli, type, lastActive, actions) {
  return { name, email, phone, status, approvedByReli, type, lastActive, actions };
}
// user info
const userInfoRows = [
  createDataUserInfo("John Smith",<TableLink text="johnsmith@gmail.com"/>, <TableLink text="979-4493-2332"/>, "Enabled", "TRUE","Admin", "04/05/22 12:00:00AM PT", <TableActions/>),
  createDataUserInfo("John Smith",<TableLink text="johnsmith@gmail.com"/>, <TableLink text="979-4493-2332"/>, "Enabled", "TRUE","Admin", "04/05/22 12:00:00AM PT", <TableActions/>),
  createDataUserInfo("John Smith",<TableLink text="johnsmith@gmail.com"/>, <TableLink text="979-4493-2332"/>, "Enabled", "TRUE","Admin", "04/05/22 12:00:00AM PT", <TableActions/>),
  createDataUserInfo("John Smith",<TableLink text="johnsmith@gmail.com"/>, <TableLink text="979-4493-2332"/>, "Enabled", "TRUE","Admin", "04/05/22 12:00:00AM PT", <TableActions/>),
  createDataUserInfo("John Smith",<TableLink text="johnsmith@gmail.com"/>, <TableLink text="979-4493-2332"/>, "Enabled", "TRUE","Admin", "04/05/22 12:00:00AM PT", <TableActions/>),
  createDataUserInfo("John Smith",<TableLink text="johnsmith@gmail.com"/>, <TableLink text="979-4493-2332"/>, "Enabled", "TRUE","Admin", "04/05/22 12:00:00AM PT", <TableActions/>),
  createDataUserInfo("John Smith",<TableLink text="johnsmith@gmail.com"/>, <TableLink text="979-4493-2332"/>, "Enabled", "TRUE","Admin", "04/05/22 12:00:00AM PT", <TableActions/>),
  createDataUserInfo("John Smith",<TableLink text="johnsmith@gmail.com"/>, <TableLink text="979-4493-2332"/>, "Enabled", "TRUE","Admin", "04/05/22 12:00:00AM PT", <TableActions/>),
  createDataUserInfo("John Smith",<TableLink text="johnsmith@gmail.com"/>, <TableLink text="979-4493-2332"/>, "Enabled", "TRUE","Admin", "04/05/22 12:00:00AM PT", <TableActions/>),
];
// transaction
const transactionColumns = [
  { id: 'projectId', label: 'Project ID', minWidth: 150, fontWeight: '600' },
  { id: 'customer', label: 'Customer', minWidth: 150, fontWeight: '600' },
  { id: 'serviceType', label: 'Service Type', minWidth: 150, fontWeight: '600' },
  { id: 'paymentType', label: 'PaymentType', minWidth: 80, fontWeight: '600' },
  { id: 'scheduled', label: 'Scheduled', minWidth: 120, fontWeight: '600' },
  { id: 'completed', label: 'Completed', minWidth: 100, fontWeight: '600' },
  { id: 'projectStatus', label: 'Project Status', minWidth: 200, fontWeight: '600' },
  { id: 'paidByCustomer', label: 'Paid by Customer', minWidth: 200, fontWeight: '600' },
  { id: 'paidToCustomer', label: 'Paid to Customer', minWidth: 200, fontWeight: '600' },
  { id: 'dueToContractor', label: 'Due to Contractor', minWidth: 200, fontWeight: '600' },
  { id: 'actions', label: 'Actions', minWidth: 130, fontWeight: '600' },
];
// transaction
function createDataTransaction(projectId, customer, serviceType, paymentType, scheduled, completed, projectStatus, paidByCustomer, paidToCustomer, dueToContractor, actions) {
  return { projectId, customer, serviceType, paymentType, scheduled, completed, projectStatus, paidByCustomer, paidToCustomer, dueToContractor, actions };
}
// transaction
const transactionRows = [
  createDataTransaction(<TableLink text="PROJ0238C033"/>, <TableLink text="John Smith" />, "Windows", "Labor", "04/27/22", "04/27/22", "Completed", "$750.00", "--", "$250.00", <TableActions/>),
  createDataTransaction(<TableLink text="PROJ0238C033"/>, <TableLink text="John Smith" />, "Windows", "Labor", "04/27/22", "04/27/22", "Completed", "$750.00", "--", "$250.00", <TableActions/>),
  createDataTransaction(<TableLink text="PROJ0238C033"/>, <TableLink text="John Smith" />, "Windows", "Labor", "04/27/22", "04/27/22", "Completed", "$750.00", "--", "$250.00", <TableActions/>),
  createDataTransaction(<TableLink text="PROJ0238C033"/>, <TableLink text="John Smith" />, "Windows", "Labor", "04/27/22", "04/27/22", "Completed", "$750.00", "--", "$250.00", <TableActions/>),
  createDataTransaction(<TableLink text="PROJ0238C033"/>, <TableLink text="John Smith" />, "Windows", "Labor", "04/27/22", "04/27/22", "Completed", "$750.00", "--", "$250.00", <TableActions/>),
  createDataTransaction(<TableLink text="PROJ0238C033"/>, <TableLink text="John Smith" />, "Windows", "Labor", "04/27/22", "04/27/22", "Completed", "$750.00", "--", "$250.00", <TableActions/>),
  createDataTransaction(<TableLink text="PROJ0238C033"/>, <TableLink text="John Smith" />, "Windows", "Labor", "04/27/22", "04/27/22", "Completed", "$750.00", "--", "$250.00", <TableActions/>),
  createDataTransaction(<TableLink text="PROJ0238C033"/>, <TableLink text="John Smith" />, "Windows", "Labor", "04/27/22", "04/27/22", "Completed", "$750.00", "--", "$250.00", <TableActions/>),
  createDataTransaction(<TableLink text="PROJ0238C033"/>, <TableLink text="John Smith" />, "Windows", "Labor", "04/27/22", "04/27/22", "Completed", "$750.00", "--", "$250.00", <TableActions/>),
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
const CompanyInfo = () => {
const {isDrawerOpen, isEditCompanyModal} = useSelector((store) => store.login)
const [tab, setTab] = useState('overview');
const breadcrumbs = [
    <Typography key="3" color="text.primary" style={{
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: '34px',
        lineHeight: '36px',
        color: '#000000'
    }}>
        Company Info Page
    </Typography>
];
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
    <div className="page-section">
      <Sidebar/>
      <Box className="page-content" sx={{width: isDrawerOpen ? `calc(100% - 240px)` : `calc(100% - 57px)`, overflow: "hidden"}}>
      <Box sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          mb: 3
        }}>
          <BeardcrumNavigator breadcrumbs={breadcrumbs ? breadcrumbs : "Beardcrums"}/>
        </Box>
        <Box component="div" className='tab_btns' sx={{mb: 3}}>
            <Button variant='outlined' size='large' className={tab === 'overview'? 'active': ''}
              onClick={() => setTab('overview')}
            >Overview</Button>
            <Button variant='outlined' size='large' className={tab === 'userInfo'? 'active': ''}
              onClick={() => setTab('userInfo')}
            >User Info</Button>
            <Button variant='outlined' size='large' className={tab === 'transaction'? 'active': ''}
              onClick={() => setTab('transaction')}
            >Transactions</Button>
        </Box>
        {tab === "overview" ? (
         <OverView/>
        ): null}
        {tab === "userInfo" ? (
          <>
            <Box component="div" sx={{
              display: 'flex',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              alignItems: 'center',
              mb: 3,
            }}>
              <Box component="div">
                  <SearchBox/>
              </Box>
              {/* <IconButton aria-label="filter-icon" size="large">
                <FilterListRoundedIcon />
              </IconButton> */}
            </Box>
            <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                <TableContainer>
                    <Table stickyHeader aria-label="sticky table" sx={{}}>
                    <TableHead>
                        <StyledTableRow>
                        {userInfoColumns.map((column) => (
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
                        {userInfoRows
                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        .map((row) => {
                            return (
                            <StyledTableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                {userInfoColumns.map((column) => {
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
                <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={userInfoRows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
          </>
        ): null}
        {tab === "transaction" ? (
          <>
            <Box component="div" sx={{
              display: 'flex',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              alignItems: 'center',
              mb: 3,
            }}>
              <Box component="div">
                  <SearchBox/>
              </Box>
              {/* <IconButton aria-label="filter-icon" size="large">
                <FilterListRoundedIcon />
              </IconButton> */}
            </Box>
            <Paper sx={{ width: '100%', overflow: 'hidden' }}>
              <TableContainer>
                  <Table stickyHeader aria-label="sticky table" sx={{}}>
                  <TableHead>
                      <StyledTableRow>
                      {transactionColumns.map((column) => (
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
                      {transactionRows
                      .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                      .map((row) => {
                          return (
                          <StyledTableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                              {transactionColumns.map((column) => {
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
              <TablePagination
                  rowsPerPageOptions={[10, 25, 100]}
                  component="div"
                  count={transactionRows.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </Paper>
          </>
          
        ): null}
        
        
      </Box>
      
    </div>
  )
}

export default CompanyInfo