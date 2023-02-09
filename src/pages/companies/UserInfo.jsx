import { Box, Table, TableContainer, Typography, IconButton, Button, ButtonGroup } from '@mui/material';
import React, { useEffect } from 'react'
import Paper from '@mui/material/Paper';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import SearchBox from '../../components/SearchBox';
import { tableCellClasses } from '@mui/material/TableCell';
import { styled } from '@mui/material/styles';
import TableLink from '../../components/TableLink';
import { useState } from 'react';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import AddUserModal from './AddUserModal';
import { useDispatch, useSelector } from 'react-redux';
import { handleAddUserModal } from '../../features/login/loginSlice';
import { getUsers, userInfoResponseClr } from '../../features/userInfo/userInfoSlice';
import { useParams } from 'react-router-dom';
import moment from 'moment';
import Loading from '../../components/Loading';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import Alert  from "@mui/material/Alert";
import CloseIcon from '@mui/icons-material/Close';

// user info
const userInfoColumns = [
  { id: 'name', label: 'Name', minWidth: 150, fontWeight: '600' },
  { id: 'email', label: 'Email', minWidth: 150, fontWeight: '600' },
  { id: 'phone', label: 'Phone', minWidth: 150, fontWeight: '600' },
  { id: 'status', label: 'Status', minWidth: 80, fontWeight: '600' },
  { id: 'approvedByReli', label: 'Approved by Reli', minWidth: 120, fontWeight: '600' },
  { id: 'accountType', label: 'Type', minWidth: 100, fontWeight: '600' },
  { id: 'updatedAt', label: 'Last Active', minWidth: 200, fontWeight: '600' },
  // { id: 'actions', label: 'Actions', minWidth: 130, fontWeight: '600' },
];
// user info
function createDataUserInfo(name, email, phone, status, approvedByReli, type, lastActive, actions) {
  return { name, email, phone, status, approvedByReli, type, lastActive, 
    // actions 
  };
}
// user info
const userInfoRows = [
  createDataUserInfo("John Smith",<TableLink text="johnsmith@gmail.com"/>, <TableLink text="979-4493-2332"/>, "Enabled", "TRUE","Admin", "04/05/22 12:00:00AM PT", 
  // <div style={{ 
  //     display: 'flex',
  //     gap: '10px'
  // }}>
  //     <IconButton>
  //         <DeleteRoundedIcon/>
  //     </IconButton>
  // </div>
  ),
  createDataUserInfo("John Smith",<TableLink text="johnsmith@gmail.com"/>, <TableLink text="979-4493-2332"/>, "Enabled", "TRUE","Admin", "04/05/22 12:00:00AM PT", 
  // <div style={{ 
  //     display: 'flex',
  //     gap: '10px'
  // }}>
  //     <IconButton>
  //         <DeleteRoundedIcon/>
  //     </IconButton>
  // </div>
  ),
  createDataUserInfo("John Smith",<TableLink text="johnsmith@gmail.com"/>, <TableLink text="979-4493-2332"/>, "Enabled", "TRUE","Admin", "04/05/22 12:00:00AM PT", 
  // <div style={{ 
  //     display: 'flex',
  //     gap: '10px'
  // }}>
  //     <IconButton>
  //         <DeleteRoundedIcon/>
  //     </IconButton>
  // </div>
  ),
  createDataUserInfo("John Smith",<TableLink text="johnsmith@gmail.com"/>, <TableLink text="979-4493-2332"/>, "Enabled", "TRUE","Admin", "04/05/22 12:00:00AM PT", 
  // <div style={{ 
  //     display: 'flex',
  //     gap: '10px'
  // }}>
  //     <IconButton>
  //         <DeleteRoundedIcon/>
  //     </IconButton>
  // </div>
  ),
  createDataUserInfo("John Smith",<TableLink text="johnsmith@gmail.com"/>, <TableLink text="979-4493-2332"/>, "Enabled", "TRUE","Admin", "04/05/22 12:00:00AM PT", 
  // <div style={{ 
  //     display: 'flex',
  //     gap: '10px'
  // }}>
  //     <IconButton>
  //         <DeleteRoundedIcon/>
  //     </IconButton>
  // </div>
  ),
  createDataUserInfo("John Smith",<TableLink text="johnsmith@gmail.com"/>, <TableLink text="979-4493-2332"/>, "Enabled", "TRUE","Admin", "04/05/22 12:00:00AM PT", 
  // <div style={{ 
  //     display: 'flex',
  //     gap: '10px'
  // }}>
  //     <IconButton>
  //         <DeleteRoundedIcon/>
  //     </IconButton>
  // </div>
  ),
  createDataUserInfo("John Smith",<TableLink text="johnsmith@gmail.com"/>, <TableLink text="979-4493-2332"/>, "Enabled", "TRUE","Admin", "04/05/22 12:00:00AM PT", 
  // <div style={{ 
  //     display: 'flex',
  //     gap: '10px'
  // }}>
  //     <IconButton>
  //         <DeleteRoundedIcon/>
  //     </IconButton>
  // </div>
  ),
  createDataUserInfo("John Smith",<TableLink text="johnsmith@gmail.com"/>, <TableLink text="979-4493-2332"/>, "Enabled", "TRUE","Admin", "04/05/22 12:00:00AM PT", 
  // <div style={{ 
  //     display: 'flex',
  //     gap: '10px'
  // }}>
  //     <IconButton>
  //         <DeleteRoundedIcon/>
  //     </IconButton>
  // </div>
  ),
  createDataUserInfo("John Smith",<TableLink text="johnsmith@gmail.com"/>, <TableLink text="979-4493-2332"/>, "Enabled", "TRUE","Admin", "04/05/22 12:00:00AM PT", 
  // <div style={{ 
  //     display: 'flex',
  //     gap: '10px'
  // }}>
  //     <IconButton>
  //         <DeleteRoundedIcon/>
  //     </IconButton>
  // </div>
  ),
  createDataUserInfo("John Smith",<TableLink text="johnsmith@gmail.com"/>, <TableLink text="979-4493-2332"/>, "Enabled", "TRUE","Admin", "04/05/22 12:00:00AM PT", 
  // <div style={{ 
  //     display: 'flex',
  //     gap: '10px'
  // }}>
  //     <IconButton>
  //         <DeleteRoundedIcon/>
  //     </IconButton>
  // </div>
  ),
  createDataUserInfo("John Smith",<TableLink text="johnsmith@gmail.com"/>, <TableLink text="979-4493-2332"/>, "Enabled", "TRUE","Admin", "04/05/22 12:00:00AM PT", 
  // <div style={{ 
  //     display: 'flex',
  //     gap: '10px'
  // }}>
  //     <IconButton>
  //         <DeleteRoundedIcon/>
  //     </IconButton>
  // </div>
  ),
  createDataUserInfo("John Smith",<TableLink text="johnsmith@gmail.com"/>, <TableLink text="979-4493-2332"/>, "Enabled", "TRUE","Admin", "04/05/22 12:00:00AM PT", 
  // <div style={{ 
  //     display: 'flex',
  //     gap: '10px'
  // }}>
  //     <IconButton>
  //         <DeleteRoundedIcon/>
  //     </IconButton>
  // </div>
  ),
  createDataUserInfo("John Smith",<TableLink text="johnsmith@gmail.com"/>, <TableLink text="979-4493-2332"/>, "Enabled", "TRUE","Admin", "04/05/22 12:00:00AM PT", 
  // <div style={{ 
  //     display: 'flex',
  //     gap: '10px'
  // }}>
  //     <IconButton>
  //         <DeleteRoundedIcon/>
  //     </IconButton>
  // </div>
  ),
  createDataUserInfo("John Smith",<TableLink text="johnsmith@gmail.com"/>, <TableLink text="979-4493-2332"/>, "Enabled", "TRUE","Admin", "04/05/22 12:00:00AM PT", 
  // <div style={{ 
  //     display: 'flex',
  //     gap: '10px'
  // }}>
  //     <IconButton>
  //         <DeleteRoundedIcon/>
  //     </IconButton>
  // </div>
  ),
  createDataUserInfo("John Smith",<TableLink text="johnsmith@gmail.com"/>, <TableLink text="979-4493-2332"/>, "Enabled", "TRUE","Admin", "04/05/22 12:00:00AM PT", 
  // <div style={{ 
  //     display: 'flex',
  //     gap: '10px'
  // }}>
  //     <IconButton>
  //         <DeleteRoundedIcon/>
  //     </IconButton>
  // </div>
  ),
  createDataUserInfo("John Smith",<TableLink text="johnsmith@gmail.com"/>, <TableLink text="979-4493-2332"/>, "Enabled", "TRUE","Admin", "04/05/22 12:00:00AM PT", 
  // <div style={{ 
  //     display: 'flex',
  //     gap: '10px'
  // }}>
  //     <IconButton>
  //         <DeleteRoundedIcon/>
  //     </IconButton>
  // </div>
  ),
  createDataUserInfo("John Smith",<TableLink text="johnsmith@gmail.com"/>, <TableLink text="979-4493-2332"/>, "Enabled", "TRUE","Admin", "04/05/22 12:00:00AM PT", 
  // <div style={{ 
  //     display: 'flex',
  //     gap: '10px'
  // }}>
  //     <IconButton>
  //         <DeleteRoundedIcon/>
  //     </IconButton>
  // </div>
  ),
  createDataUserInfo("John Smith",<TableLink text="johnsmith@gmail.com"/>, <TableLink text="979-4493-2332"/>, "Enabled", "TRUE","Admin", "04/05/22 12:00:00AM PT", 
  // <div style={{ 
  //     display: 'flex',
  //     gap: '10px'
  // }}>
  //     <IconButton>
  //         <DeleteRoundedIcon/>
  //     </IconButton>
  // </div>
  ),
  createDataUserInfo("John Smith",<TableLink text="johnsmith@gmail.com"/>, <TableLink text="979-4493-2332"/>, "Enabled", "TRUE","Admin", "04/05/22 12:00:00AM PT", 
  // <div style={{ 
  //     display: 'flex',
  //     gap: '10px'
  // }}>
  //     <IconButton>
  //         <DeleteRoundedIcon/>
  //     </IconButton>
  // </div>
  ),
  createDataUserInfo("John Smith",<TableLink text="johnsmith@gmail.com"/>, <TableLink text="979-4493-2332"/>, "Enabled", "TRUE","Admin", "04/05/22 12:00:00AM PT", 
  // <div style={{ 
  //     display: 'flex',
  //     gap: '10px'
  // }}>
  //     <IconButton>
  //         <DeleteRoundedIcon/>
  //     </IconButton>
  // </div>
  ),
  createDataUserInfo("John Smith",<TableLink text="johnsmith@gmail.com"/>, <TableLink text="979-4493-2332"/>, "Enabled", "TRUE","Admin", "04/05/22 12:00:00AM PT", 
  // <div style={{ 
  //     display: 'flex',
  //     gap: '10px'
  // }}>
  //     <IconButton>
  //         <DeleteRoundedIcon/>
  //     </IconButton>
  // </div>
  ),
  createDataUserInfo("John Smith",<TableLink text="johnsmith@gmail.com"/>, <TableLink text="979-4493-2332"/>, "Enabled", "TRUE","Admin", "04/05/22 12:00:00AM PT", 
  // <div style={{ 
  //     display: 'flex',
  //     gap: '10px'
  // }}>
  //     <IconButton>
  //         <DeleteRoundedIcon/>
  //     </IconButton>
  // </div>
  ),
  createDataUserInfo("John Smith",<TableLink text="johnsmith@gmail.com"/>, <TableLink text="979-4493-2332"/>, "Enabled", "TRUE","Admin", "04/05/22 12:00:00AM PT", 
  // <div style={{ 
  //     display: 'flex',
  //     gap: '10px'
  // }}>
  //     <IconButton>
  //         <DeleteRoundedIcon/>
  //     </IconButton>
  // </div>
  ),
  createDataUserInfo("John Smith",<TableLink text="johnsmith@gmail.com"/>, <TableLink text="979-4493-2332"/>, "Enabled", "TRUE","Admin", "04/05/22 12:00:00AM PT", 
  // <div style={{ 
  //     display: 'flex',
  //     gap: '10px'
  // }}>
  //     <IconButton>
  //         <DeleteRoundedIcon/>
  //     </IconButton>
  // </div>
  ),
  createDataUserInfo("John Smith",<TableLink text="johnsmith@gmail.com"/>, <TableLink text="979-4493-2332"/>, "Enabled", "TRUE","Admin", "04/05/22 12:00:00AM PT", 
  // <div style={{ 
  //     display: 'flex',
  //     gap: '10px'
  // }}>
  //     <IconButton>
  //         <DeleteRoundedIcon/>
  //     </IconButton>
  // </div>
  ),
  createDataUserInfo("John Smith",<TableLink text="johnsmith@gmail.com"/>, <TableLink text="979-4493-2332"/>, "Enabled", "TRUE","Admin", "04/05/22 12:00:00AM PT", 
  // <div style={{ 
  //     display: 'flex',
  //     gap: '10px'
  // }}>
  //     <IconButton>
  //         <DeleteRoundedIcon/>
  //     </IconButton>
  // </div>
  ),
  createDataUserInfo("John Smith",<TableLink text="johnsmith@gmail.com"/>, <TableLink text="979-4493-2332"/>, "Enabled", "TRUE","Admin", "04/05/22 12:00:00AM PT", 
  // <div style={{ 
  //     display: 'flex',
  //     gap: '10px'
  // }}>
  //     <IconButton>
  //         <DeleteRoundedIcon/>
  //     </IconButton>
  // </div>
  ),
  createDataUserInfo("John Smith",<TableLink text="johnsmith@gmail.com"/>, <TableLink text="979-4493-2332"/>, "Enabled", "TRUE","Admin", "04/05/22 12:00:00AM PT", 
  // <div style={{ 
  //     display: 'flex',
  //     gap: '10px'
  // }}>
  //     <IconButton>
  //         <DeleteRoundedIcon/>
  //     </IconButton>
  // </div>
  ),
  createDataUserInfo("John Smith",<TableLink text="johnsmith@gmail.com"/>, <TableLink text="979-4493-2332"/>, "Enabled", "TRUE","Admin", "04/05/22 12:00:00AM PT", 
  // <div style={{ 
  //     display: 'flex',
  //     gap: '10px'
  // }}>
  //     <IconButton>
  //         <DeleteRoundedIcon/>
  //     </IconButton>
  // </div>
  ),
  createDataUserInfo("John Smith",<TableLink text="johnsmith@gmail.com"/>, <TableLink text="979-4493-2332"/>, "Enabled", "TRUE","Admin", "04/05/22 12:00:00AM PT", 
  // <div style={{ 
  //     display: 'flex',
  //     gap: '10px'
  // }}>
  //     <IconButton>
  //         <DeleteRoundedIcon/>
  //     </IconButton>
  // </div>
  ),
  createDataUserInfo("John Smith",<TableLink text="johnsmith@gmail.com"/>, <TableLink text="979-4493-2332"/>, "Enabled", "TRUE","Admin", "04/05/22 12:00:00AM PT", 
  // <div style={{ 
  //     display: 'flex',
  //     gap: '10px'
  // }}>
  //     <IconButton>
  //         <DeleteRoundedIcon/>
  //     </IconButton>
  // </div>
  ),
  createDataUserInfo("John Smith",<TableLink text="johnsmith@gmail.com"/>, <TableLink text="979-4493-2332"/>, "Enabled", "TRUE","Admin", "04/05/22 12:00:00AM PT", 
  // <div style={{ 
  //     display: 'flex',
  //     gap: '10px'
  // }}>
  //     <IconButton>
  //         <DeleteRoundedIcon/>
  //     </IconButton>
  // </div>
  ),
  createDataUserInfo("John Smith",<TableLink text="johnsmith@gmail.com"/>, <TableLink text="979-4493-2332"/>, "Enabled", "TRUE","Admin", "04/05/22 12:00:00AM PT", 
  // <div style={{ 
  //     display: 'flex',
  //     gap: '10px'
  // }}>
  //     <IconButton>
  //         <DeleteRoundedIcon/>
  //     </IconButton>
  // </div>
  ),
  createDataUserInfo("John Smith",<TableLink text="johnsmith@gmail.com"/>, <TableLink text="979-4493-2332"/>, "Enabled", "TRUE","Admin", "04/05/22 12:00:00AM PT", 
  // <div style={{ 
  //     display: 'flex',
  //     gap: '10px'
  // }}>
  //     <IconButton>
  //         <DeleteRoundedIcon/>
  //     </IconButton>
  // </div>
  ),
  createDataUserInfo("John Smith",<TableLink text="johnsmith@gmail.com"/>, <TableLink text="979-4493-2332"/>, "Enabled", "TRUE","Admin", "04/05/22 12:00:00AM PT", 
  // <div style={{ 
  //     display: 'flex',
  //     gap: '10px'
  // }}>
  //     <IconButton>
  //         <DeleteRoundedIcon/>
  //     </IconButton>
  // </div>
  ),
  createDataUserInfo("John Smith",<TableLink text="johnsmith@gmail.com"/>, <TableLink text="979-4493-2332"/>, "Enabled", "TRUE","Admin", "04/05/22 12:00:00AM PT", 
  // <div style={{ 
  //     display: 'flex',
  //     gap: '10px'
  // }}>
  //     <IconButton>
  //         <DeleteRoundedIcon/>
  //     </IconButton>
  // </div>
  ),
  createDataUserInfo("John Smith",<TableLink text="johnsmith@gmail.com"/>, <TableLink text="979-4493-2332"/>, "Enabled", "TRUE","Admin", "04/05/22 12:00:00AM PT", 
  // <div style={{ 
  //     display: 'flex',
  //     gap: '10px'
  // }}>
  //     <IconButton>
  //         <DeleteRoundedIcon/>
  //     </IconButton>
  // </div>
  ),
  createDataUserInfo("John Smith",<TableLink text="johnsmith@gmail.com"/>, <TableLink text="979-4493-2332"/>, "Enabled", "TRUE","Admin", "04/05/22 12:00:00AM PT", 
  // <div style={{ 
  //     display: 'flex',
  //     gap: '10px'
  // }}>
  //     <IconButton>
  //         <DeleteRoundedIcon/>
  //     </IconButton>
  // </div>
  ),
  createDataUserInfo("John Smith",<TableLink text="johnsmith@gmail.com"/>, <TableLink text="979-4493-2332"/>, "Enabled", "TRUE","Admin", "04/05/22 12:00:00AM PT", 
  // <div style={{ 
  //     display: 'flex',
  //     gap: '10px'
  // }}>
  //     <IconButton>
  //         <DeleteRoundedIcon/>
  //     </IconButton>
  // </div>
  ),
  createDataUserInfo("John Smith",<TableLink text="johnsmith@gmail.com"/>, <TableLink text="979-4493-2332"/>, "Enabled", "TRUE","Admin", "04/05/22 12:00:00AM PT", 
  // <div style={{ 
  //     display: 'flex',
  //     gap: '10px'
  // }}>
  //     <IconButton>
  //         <DeleteRoundedIcon/>
  //     </IconButton>
  // </div>
  ),
  createDataUserInfo("John Smith",<TableLink text="johnsmith@gmail.com"/>, <TableLink text="979-4493-2332"/>, "Enabled", "TRUE","Admin", "04/05/22 12:00:00AM PT", 
  // <div style={{ 
  //     display: 'flex',
  //     gap: '10px'
  // }}>
  //     <IconButton>
  //         <DeleteRoundedIcon/>
  //     </IconButton>
  // </div>
  ),
  createDataUserInfo("John Smith",<TableLink text="johnsmith@gmail.com"/>, <TableLink text="979-4493-2332"/>, "Enabled", "TRUE","Admin", "04/05/22 12:00:00AM PT", 
  // <div style={{ 
  //     display: 'flex',
  //     gap: '10px'
  // }}>
  //     <IconButton>
  //         <DeleteRoundedIcon/>
  //     </IconButton>
  // </div>
  ),
  createDataUserInfo("John Smith",<TableLink text="johnsmith@gmail.com"/>, <TableLink text="979-4493-2332"/>, "Enabled", "TRUE","Admin", "04/05/22 12:00:00AM PT", 
  // <div style={{ 
  //     display: 'flex',
  //     gap: '10px'
  // }}>
  //     <IconButton>
  //         <DeleteRoundedIcon/>
  //     </IconButton>
  // </div>
  ),
 
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

const UserInfo = () => {
const dispatch = useDispatch();
const param = useParams();
const {isAddUserModal} = useSelector((store) => store.login)
const {alert, users, isLoading, responseStatus, responseMsg} = useSelector((store) => store.userInfo)
const [page, setPage] = useState(0);
const [rowsPerPage, setRowsPerPage] = useState(10);
const [searchValue, setSearchValue] = useState('');
const [alertDialog, setAlertDialog] = React.useState(false);

const handleChangePage = (event, newPage) => {
  setPage(newPage);
};

const handleChangeRowsPerPage = (event) => {
  setRowsPerPage(+event.target.value);
  setPage(0);
};
const handleSearch = (searchedValue) => {
  setSearchValue(searchedValue)
  // const filteredRows = rows?.filter((row) => {
  //   if(row.firstName)
  //     return row.firstName.toLowerCase().includes(searchedValue.toLowerCase());
  //   else if(row.lastName)
  //     return row.lastName.toLowerCase().includes(searchedValue.toLowerCase());
  //   else if(row.email)
  //     return row.email.toLowerCase().includes(searchedValue.toLowerCase());
  //   else if(row.phoneNumber)
  //     return row.phoneNumber.toString().toLowerCase().includes(searchedValue.toLowerCase());
    
  // });
  // // console.log(filteredRows, searchedValue);
  // if(searchedValue != '' && filteredRows.length > 0){
  //   setRows(filteredRows)
  // }else{
  //   setRows(customers.data)
  // }
}


useEffect(() => {
  dispatch(getUsers(param.companyid))
}, [alert])


if(isLoading){
  return (
    <Loading/>
  )
}


  return (
    <>
      <Box component="div" sx={{
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        alignItems: 'center',
        mb: 3,
      }}>
        <Box component="div">
            {/* <SearchBox/> */}
            <Box sx={{
            background: '#FFFFFF',
            boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
            borderRadius: '33px',
            height: 50,
            display: 'flex',
            alignItems: 'center',
            maxWidth: '245px',
            border: '1px solid #ddd',
            overflow: 'hidden'
        }}>
            <SearchRoundedIcon sx={{
              width: '16%',
              marginLeft: '6px'
            }}/>
            <input type="text" value={searchValue} placeholder='Search' className='search-input' onChange={(e) =>  handleSearch(e.target.value.toLowerCase())} />
        </Box>
        </Box>
        {/* <IconButton aria-label="filter-icon" size="large">
          <FilterListRoundedIcon />
        </IconButton> */}
        <Button variant="outlined"  className="bc-btn-outline" color="primary" onClick={() => dispatch(handleAddUserModal())}>add user</Button>
      </Box>

            {
              alert ? (
                <Alert 
                  severity={responseStatus}
                  color={responseStatus} 
                  sx={{mb: 3, width: '100%'}}
                  action={
                    <IconButton
                      aria-label="close"
                      color="inherit"
                      size="small"
                      onClick={() => {
                        dispatch(userInfoResponseClr(false));
                        setAlertDialog(false)
                      }}
                    >
                      <CloseIcon fontSize="inherit" />
                    </IconButton>
                  }
                >{responseMsg}</Alert>
              ) : null
            }

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
                  {users.data?.filter((data) => data.name.toLowerCase().includes(searchValue) || data.email.toLowerCase().includes(searchValue) || data.phone.toLowerCase().includes(searchValue))?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => {
                      return (
                      <StyledTableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                          {userInfoColumns.map((column) => {
                          const value = row[column.id];
                          return (
                              <StyledTableCell key={column.id+'UserInfo'}  align={column.align}>
                              {column.id === 'status'? value === true? 'Enable' : 'Disable' : column.id === 'approvedByReli'? value === true ? 'TRUE' : 'FALSE' : column.id === 'updatedAt' ? moment(value).format('DD/MM/YY hh:mm:ss A') : value}
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
              count={users.data?.length || 0}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
          />
      </Paper>
      {isAddUserModal ? (
        <AddUserModal/>
      ): null}
    </>
  )
}

export default UserInfo