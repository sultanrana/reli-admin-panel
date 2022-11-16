import { Box, Table, TableContainer, Typography, IconButton, Button, ButtonGroup } from '@mui/material';
import React from 'react'
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
  createDataUserInfo("John Smith",<TableLink text="johnsmith@gmail.com"/>, <TableLink text="979-4493-2332"/>, "Enabled", "TRUE","Admin", "04/05/22 12:00:00AM PT", <div style={{ 
    display: 'flex',
    gap: '10px'
}}>
    <IconButton>
        <DeleteRoundedIcon/>
    </IconButton>
</div>),
  createDataUserInfo("John Smith",<TableLink text="johnsmith@gmail.com"/>, <TableLink text="979-4493-2332"/>, "Enabled", "TRUE","Admin", "04/05/22 12:00:00AM PT", <div style={{ 
    display: 'flex',
    gap: '10px'
}}>
    <IconButton>
        <DeleteRoundedIcon/>
    </IconButton>
</div>),
  createDataUserInfo("John Smith",<TableLink text="johnsmith@gmail.com"/>, <TableLink text="979-4493-2332"/>, "Enabled", "TRUE","Admin", "04/05/22 12:00:00AM PT", <div style={{ 
    display: 'flex',
    gap: '10px'
}}>
    <IconButton>
        <DeleteRoundedIcon/>
    </IconButton>
</div>),
  createDataUserInfo("John Smith",<TableLink text="johnsmith@gmail.com"/>, <TableLink text="979-4493-2332"/>, "Enabled", "TRUE","Admin", "04/05/22 12:00:00AM PT", <div style={{ 
    display: 'flex',
    gap: '10px'
}}>
    <IconButton>
        <DeleteRoundedIcon/>
    </IconButton>
</div>),
  createDataUserInfo("John Smith",<TableLink text="johnsmith@gmail.com"/>, <TableLink text="979-4493-2332"/>, "Enabled", "TRUE","Admin", "04/05/22 12:00:00AM PT", <div style={{ 
    display: 'flex',
    gap: '10px'
}}>
    <IconButton>
        <DeleteRoundedIcon/>
    </IconButton>
</div>),
  createDataUserInfo("John Smith",<TableLink text="johnsmith@gmail.com"/>, <TableLink text="979-4493-2332"/>, "Enabled", "TRUE","Admin", "04/05/22 12:00:00AM PT", <div style={{ 
    display: 'flex',
    gap: '10px'
}}>
    <IconButton>
        <DeleteRoundedIcon/>
    </IconButton>
</div>),
  createDataUserInfo("John Smith",<TableLink text="johnsmith@gmail.com"/>, <TableLink text="979-4493-2332"/>, "Enabled", "TRUE","Admin", "04/05/22 12:00:00AM PT", <div style={{ 
    display: 'flex',
    gap: '10px'
}}>
    <IconButton>
        <DeleteRoundedIcon/>
    </IconButton>
</div>),
  createDataUserInfo("John Smith",<TableLink text="johnsmith@gmail.com"/>, <TableLink text="979-4493-2332"/>, "Enabled", "TRUE","Admin", "04/05/22 12:00:00AM PT", <div style={{ 
    display: 'flex',
    gap: '10px'
}}>
    <IconButton>
        <DeleteRoundedIcon/>
    </IconButton>
</div>),
  createDataUserInfo("John Smith",<TableLink text="johnsmith@gmail.com"/>, <TableLink text="979-4493-2332"/>, "Enabled", "TRUE","Admin", "04/05/22 12:00:00AM PT", <div style={{ 
    display: 'flex',
    gap: '10px'
}}>
    <IconButton>
        <DeleteRoundedIcon/>
    </IconButton>
</div>),
  createDataUserInfo("John Smith",<TableLink text="johnsmith@gmail.com"/>, <TableLink text="979-4493-2332"/>, "Enabled", "TRUE","Admin", "04/05/22 12:00:00AM PT", <div style={{ 
    display: 'flex',
    gap: '10px'
}}>
    <IconButton>
        <DeleteRoundedIcon/>
    </IconButton>
</div>),
  createDataUserInfo("John Smith",<TableLink text="johnsmith@gmail.com"/>, <TableLink text="979-4493-2332"/>, "Enabled", "TRUE","Admin", "04/05/22 12:00:00AM PT", <div style={{ 
    display: 'flex',
    gap: '10px'
}}>
    <IconButton>
        <DeleteRoundedIcon/>
    </IconButton>
</div>),
  createDataUserInfo("John Smith",<TableLink text="johnsmith@gmail.com"/>, <TableLink text="979-4493-2332"/>, "Enabled", "TRUE","Admin", "04/05/22 12:00:00AM PT", <div style={{ 
    display: 'flex',
    gap: '10px'
}}>
    <IconButton>
        <DeleteRoundedIcon/>
    </IconButton>
</div>),
  createDataUserInfo("John Smith",<TableLink text="johnsmith@gmail.com"/>, <TableLink text="979-4493-2332"/>, "Enabled", "TRUE","Admin", "04/05/22 12:00:00AM PT", <div style={{ 
    display: 'flex',
    gap: '10px'
}}>
    <IconButton>
        <DeleteRoundedIcon/>
    </IconButton>
</div>),
  createDataUserInfo("John Smith",<TableLink text="johnsmith@gmail.com"/>, <TableLink text="979-4493-2332"/>, "Enabled", "TRUE","Admin", "04/05/22 12:00:00AM PT", <div style={{ 
    display: 'flex',
    gap: '10px'
}}>
    <IconButton>
        <DeleteRoundedIcon/>
    </IconButton>
</div>),
  createDataUserInfo("John Smith",<TableLink text="johnsmith@gmail.com"/>, <TableLink text="979-4493-2332"/>, "Enabled", "TRUE","Admin", "04/05/22 12:00:00AM PT", <div style={{ 
    display: 'flex',
    gap: '10px'
}}>
    <IconButton>
        <DeleteRoundedIcon/>
    </IconButton>
</div>),
  createDataUserInfo("John Smith",<TableLink text="johnsmith@gmail.com"/>, <TableLink text="979-4493-2332"/>, "Enabled", "TRUE","Admin", "04/05/22 12:00:00AM PT", <div style={{ 
    display: 'flex',
    gap: '10px'
}}>
    <IconButton>
        <DeleteRoundedIcon/>
    </IconButton>
</div>),
  createDataUserInfo("John Smith",<TableLink text="johnsmith@gmail.com"/>, <TableLink text="979-4493-2332"/>, "Enabled", "TRUE","Admin", "04/05/22 12:00:00AM PT", <div style={{ 
    display: 'flex',
    gap: '10px'
}}>
    <IconButton>
        <DeleteRoundedIcon/>
    </IconButton>
</div>),
  createDataUserInfo("John Smith",<TableLink text="johnsmith@gmail.com"/>, <TableLink text="979-4493-2332"/>, "Enabled", "TRUE","Admin", "04/05/22 12:00:00AM PT", <div style={{ 
    display: 'flex',
    gap: '10px'
}}>
    <IconButton>
        <DeleteRoundedIcon/>
    </IconButton>
</div>),
  createDataUserInfo("John Smith",<TableLink text="johnsmith@gmail.com"/>, <TableLink text="979-4493-2332"/>, "Enabled", "TRUE","Admin", "04/05/22 12:00:00AM PT", <div style={{ 
    display: 'flex',
    gap: '10px'
}}>
    <IconButton>
        <DeleteRoundedIcon/>
    </IconButton>
</div>),
  createDataUserInfo("John Smith",<TableLink text="johnsmith@gmail.com"/>, <TableLink text="979-4493-2332"/>, "Enabled", "TRUE","Admin", "04/05/22 12:00:00AM PT", <div style={{ 
    display: 'flex',
    gap: '10px'
}}>
    <IconButton>
        <DeleteRoundedIcon/>
    </IconButton>
</div>),
  createDataUserInfo("John Smith",<TableLink text="johnsmith@gmail.com"/>, <TableLink text="979-4493-2332"/>, "Enabled", "TRUE","Admin", "04/05/22 12:00:00AM PT", <div style={{ 
    display: 'flex',
    gap: '10px'
}}>
    <IconButton>
        <DeleteRoundedIcon/>
    </IconButton>
</div>),
  createDataUserInfo("John Smith",<TableLink text="johnsmith@gmail.com"/>, <TableLink text="979-4493-2332"/>, "Enabled", "TRUE","Admin", "04/05/22 12:00:00AM PT", <div style={{ 
    display: 'flex',
    gap: '10px'
}}>
    <IconButton>
        <DeleteRoundedIcon/>
    </IconButton>
</div>),
  createDataUserInfo("John Smith",<TableLink text="johnsmith@gmail.com"/>, <TableLink text="979-4493-2332"/>, "Enabled", "TRUE","Admin", "04/05/22 12:00:00AM PT", <div style={{ 
    display: 'flex',
    gap: '10px'
}}>
    <IconButton>
        <DeleteRoundedIcon/>
    </IconButton>
</div>),
  createDataUserInfo("John Smith",<TableLink text="johnsmith@gmail.com"/>, <TableLink text="979-4493-2332"/>, "Enabled", "TRUE","Admin", "04/05/22 12:00:00AM PT", <div style={{ 
    display: 'flex',
    gap: '10px'
}}>
    <IconButton>
        <DeleteRoundedIcon/>
    </IconButton>
</div>),
  createDataUserInfo("John Smith",<TableLink text="johnsmith@gmail.com"/>, <TableLink text="979-4493-2332"/>, "Enabled", "TRUE","Admin", "04/05/22 12:00:00AM PT", <div style={{ 
    display: 'flex',
    gap: '10px'
}}>
    <IconButton>
        <DeleteRoundedIcon/>
    </IconButton>
</div>),
  createDataUserInfo("John Smith",<TableLink text="johnsmith@gmail.com"/>, <TableLink text="979-4493-2332"/>, "Enabled", "TRUE","Admin", "04/05/22 12:00:00AM PT", <div style={{ 
    display: 'flex',
    gap: '10px'
}}>
    <IconButton>
        <DeleteRoundedIcon/>
    </IconButton>
</div>),
  createDataUserInfo("John Smith",<TableLink text="johnsmith@gmail.com"/>, <TableLink text="979-4493-2332"/>, "Enabled", "TRUE","Admin", "04/05/22 12:00:00AM PT", <div style={{ 
    display: 'flex',
    gap: '10px'
}}>
    <IconButton>
        <DeleteRoundedIcon/>
    </IconButton>
</div>),
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
const {isAddUserModal} = useSelector((store) => store.login)
const [page, setPage] = useState(0);
const [rowsPerPage, setRowsPerPage] = useState(10);

const handleChangePage = (event, newPage) => {
  setPage(newPage);
};

const handleChangeRowsPerPage = (event) => {
  setRowsPerPage(+event.target.value);
  setPage(0);
};


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
            <SearchBox/>
        </Box>
        {/* <IconButton aria-label="filter-icon" size="large">
          <FilterListRoundedIcon />
        </IconButton> */}
        <Button variant="outlined"  className="bc-btn-outline" color="primary" onClick={() => dispatch(handleAddUserModal())}>add user</Button>
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
      {isAddUserModal ? (
        <AddUserModal/>
      ): null}
    </>
  )
}

export default UserInfo