import { Box, Table, TableContainer, Typography, IconButton, Button } from '@mui/material';
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
import TableActions from '../../components/TableActions'
const columns = [
  { id: 'projectId', label: 'Project ID', minWidth: 150, fontWeight: '600' },
  { id: 'customers', label: 'Customers', minWidth: 150, fontWeight: '600' },
  { id: 'serviceType', label: 'ServiceType', minWidth: 140, fontWeight: '600' },
  { id: 'company', label: 'Company', minWidth: 100, fontWeight: '600' },
  { id: 'workersAssigned', label: 'Workers Assigned', minWidth: 100, fontWeight: '600' },
  { id: 'city', label: 'City', minWidth: 100, fontWeight: '600' },
  { id: 'state', label: 'State', minWidth: 100, fontWeight: '600' },  
  { id: 'zip', label: 'Zip', minWidth: 100, fontWeight: '600' },
  { id: 'dateOrdered', label: 'Date Ordered', minWidth: 200, fontWeight: '600' },
  { id: 'dateScheduled', label: 'Date Scheduled', minWidth: 200, fontWeight: '600' },
  { id: 'dateCompleted', label: 'Date Completed', minWidth: 200, fontWeight: '600' },
  { id: 'totalPaidByCustomer', label: 'Total Paid by Customer', minWidth: 200, fontWeight: '600' },
  { id: 'refundToCustomer', label: 'Refund To Customer', minWidth: 200, fontWeight: '600' },
  { id: 'paidToContractor', label: 'Paid to Contractor', minWidth: 200, fontWeight: '600' },
  { id: 'status', label: 'status', minWidth: 200, fontWeight: '600' },
  { id: 'lastStatusUpdate', label: 'Last Status Update', minWidth: 200, fontWeight: '600' },
  { id: 'actions', label: 'Actions', minWidth: 150, fontWeight: '600' },
];

function createData(projectId, customers, serviceType, company, workersAssigned, city, state, zip, dateOrdered, dateScheduled, dateCompleted, totalPaidByCustomer, refundToCustomer, paidToContractor, status, lastStatusUpdate, actions) {
  return { projectId, customers, serviceType, company, workersAssigned, city, state, zip, dateOrdered, dateScheduled, dateCompleted, totalPaidByCustomer, refundToCustomer, paidToContractor, status, lastStatusUpdate, actions};
}

const rows = [
  createData(<TableLink text="PROJ58549" route='project-detail'/>, <TableLink text="John Jenkins"/>, "Windows", <TableLink text="Construction Co"/>, "2", "Costa Mesa", "SA", "55555", "04/15/22", "05/01/22", "05/01/22", "$250.00", "--", "$250.00", "Completed", "05/09/22 12:00:00AM PT", <TableActions/>),
  createData(<TableLink text="PROJ58549"/>, <TableLink text="John Jenkins"/>, "Windows", <TableLink text="Construction Co"/>, "2", "Costa Mesa", "SA", "55555", "04/15/22", "05/01/22", "05/01/22", "$250.00", "--", "$250.00", "Completed", "05/09/22 12:00:00AM PT", <TableActions/>),
  createData(<TableLink text="PROJ58549"/>, <TableLink text="John Jenkins"/>, "Windows", <TableLink text="Construction Co"/>, "2", "Costa Mesa", "SA", "55555", "04/15/22", "05/01/22", "05/01/22", "$250.00", "--", "$250.00", "Completed", "05/09/22 12:00:00AM PT", <TableActions/>),
  createData(<TableLink text="PROJ58549"/>, <TableLink text="John Jenkins"/>, "Windows", <TableLink text="Construction Co"/>, "2", "Costa Mesa", "SA", "55555", "04/15/22", "05/01/22", "05/01/22", "$250.00", "--", "$250.00", "Completed", "05/09/22 12:00:00AM PT", <TableActions/>),
  createData(<TableLink text="PROJ58549"/>, <TableLink text="John Jenkins"/>, "Windows", <TableLink text="Construction Co"/>, "2", "Costa Mesa", "SA", "55555", "04/15/22", "05/01/22", "05/01/22", "$250.00", "--", "$250.00", "Completed", "05/09/22 12:00:00AM PT", <TableActions/>),
  createData(<TableLink text="PROJ58549"/>, <TableLink text="John Jenkins"/>, "Windows", <TableLink text="Construction Co"/>, "2", "Costa Mesa", "SA", "55555", "04/15/22", "05/01/22", "05/01/22", "$250.00", "--", "$250.00", "Completed", "05/09/22 12:00:00AM PT", <TableActions/>),
  createData(<TableLink text="PROJ58549"/>, <TableLink text="John Jenkins"/>, "Windows", <TableLink text="Construction Co"/>, "2", "Costa Mesa", "SA", "55555", "04/15/22", "05/01/22", "05/01/22", "$250.00", "--", "$250.00", "Completed", "05/09/22 12:00:00AM PT", <TableActions/>),
  createData(<TableLink text="PROJ58549"/>, <TableLink text="John Jenkins"/>, "Windows", <TableLink text="Construction Co"/>, "2", "Costa Mesa", "SA", "55555", "04/15/22", "05/01/22", "05/01/22", "$250.00", "--", "$250.00", "Completed", "05/09/22 12:00:00AM PT", <TableActions/>),
  createData(<TableLink text="PROJ58549"/>, <TableLink text="John Jenkins"/>, "Windows", <TableLink text="Construction Co"/>, "2", "Costa Mesa", "SA", "55555", "04/15/22", "05/01/22", "05/01/22", "$250.00", "--", "$250.00", "Completed", "05/09/22 12:00:00AM PT", <TableActions/>),
  createData(<TableLink text="PROJ58549"/>, <TableLink text="John Jenkins"/>, "Windows", <TableLink text="Construction Co"/>, "2", "Costa Mesa", "SA", "55555", "04/15/22", "05/01/22", "05/01/22", "$250.00", "--", "$250.00", "Completed", "05/09/22 12:00:00AM PT", <TableActions/>),
  createData(<TableLink text="PROJ58549"/>, <TableLink text="John Jenkins"/>, "Windows", <TableLink text="Construction Co"/>, "2", "Costa Mesa", "SA", "55555", "04/15/22", "05/01/22", "05/01/22", "$250.00", "--", "$250.00", "Completed", "05/09/22 12:00:00AM PT", <TableActions/>),
  createData(<TableLink text="PROJ58549"/>, <TableLink text="John Jenkins"/>, "Windows", <TableLink text="Construction Co"/>, "2", "Costa Mesa", "SA", "55555", "04/15/22", "05/01/22", "05/01/22", "$250.00", "--", "$250.00", "Completed", "05/09/22 12:00:00AM PT", <TableActions/>),
  createData(<TableLink text="PROJ58549"/>, <TableLink text="John Jenkins"/>, "Windows", <TableLink text="Construction Co"/>, "2", "Costa Mesa", "SA", "55555", "04/15/22", "05/01/22", "05/01/22", "$250.00", "--", "$250.00", "Completed", "05/09/22 12:00:00AM PT", <TableActions/>),
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
const Projects = () => {
  const {isDrawerOpen} = useSelector((store) => store.login)
const breadcrumbs = [
    <Typography key="3" color="text.primary" style={{
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: '34px',
        lineHeight: '36px',
        color: '#000000'
    }}>
        Projects
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
          <Box component="div" sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem'
          }}>
            <Button variant="outlined" className="bc-btn-outline" color="primary">Export csv</Button>
          </Box>
        </Box>
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
            <TableContainer sx={{ maxHeight: 440,}}>
                <Table stickyHeader aria-label="sticky table" sx={{}}>
                <TableHead>
                    <StyledTableRow>
                    {columns.map((column) => (
                        <StyledTableCell
                        key={column.id}
                        align={column.align}
                        style={{ minWidth: column.minWidth }}
                        >
                        {column.label}
                        </StyledTableCell>
                    ))}
                    </StyledTableRow>
                </TableHead>
                <TableBody>
                    {rows
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row) => {
                        return (
                        <StyledTableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                            {columns.map((column) => {
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
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
      </Box>
    </div>
  )
}

export default Projects