import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Paper from '@mui/material/Paper';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { tableCellClasses } from '@mui/material/TableCell';
import { styled } from '@mui/material/styles';
import { Box, Card, IconButton, Table, TableContainer, Typography,} from '@mui/material';
import TableLink from '../../components/TableLink';
import TableActions from '../../components/TableActions';
import DonutSmallRoundedIcon from '@mui/icons-material/DonutSmallRounded';
// active project
const activeProjectColumns = [
    { id: 'projectId', label: 'Project ID', minWidth: 100, fontWeight: '600' },
    { id: 'projectStatus', label: 'Project Status', minWidth: 100, fontWeight: '600' },
    { id: 'customer', label: 'Customer', minWidth: 100, fontWeight: '600' },
    { id: 'serviceType', label: 'Service Type', minWidth: 170, fontWeight: '600' },
    { id: 'scheduled', label: 'Scheduled', minWidth: 150, fontWeight: '600' },
    { id: 'amount', label: 'Amount', minWidth: 100, fontWeight: '600' },
    { id: 'actions', label: 'Actions', minWidth: 160, fontWeight: '600' },
  ];
  // active project
  function createData(projectId, projectStatus, customer, serviceType, scheduled, amount, actions) {
    return { projectId, projectStatus, customer, serviceType, scheduled, amount, actions };
  }
  // active project
  const activeProjectrows = [
    createData(<TableLink text="PROJ58549"/>, "Unassigned", <TableLink text="John Smith"/>,"Windows", "N/A", "$250.00", <TableActions/>),
    createData(<TableLink text="PROJ58549"/>, "Unassigned", <TableLink text="John Smith"/>,"Windows", "N/A", "$250.00", <TableActions/>),
    createData(<TableLink text="PROJ58549"/>, "Unassigned", <TableLink text="John Smith"/>,"Windows", "N/A", "$250.00", <TableActions/>),
    createData(<TableLink text="PROJ58549"/>, "Unassigned", <TableLink text="John Smith"/>,"Windows", "N/A", "$250.00", <TableActions/>),
    createData(<TableLink text="PROJ58549"/>, "Unassigned", <TableLink text="John Smith"/>,"Windows", "N/A", "$250.00", <TableActions/>),
    createData(<TableLink text="PROJ58549"/>, "Unassigned", <TableLink text="John Smith"/>,"Windows", "N/A", "$250.00", <TableActions/>),
    createData(<TableLink text="PROJ58549"/>, "Unassigned", <TableLink text="John Smith"/>,"Windows", "N/A", "$250.00", <TableActions/>),
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



const PropertiesTable = () => {
const {isEditCompanyModal,} = useSelector((store) => store.login)
const dispatch = useDispatch()
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
    <>
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
          <TableContainer>
              <Table stickyHeader aria-label="sticky table" sx={{}}>
              <TableHead>
                  <StyledTableRow>
                      <StyledTableCell>
                        Image
                      </StyledTableCell>
                      <StyledTableCell>
                        Name
                      </StyledTableCell>
                      <StyledTableCell>
                        Address 1
                      </StyledTableCell>
                      <StyledTableCell>
                        Address 2
                      </StyledTableCell>
                      <StyledTableCell>
                        City
                      </StyledTableCell>
                      <StyledTableCell>
                        Floors
                      </StyledTableCell>
                      <StyledTableCell>
                        Basement
                      </StyledTableCell>
                      <StyledTableCell>
                        State
                      </StyledTableCell>
                      <StyledTableCell>
                        Zip
                      </StyledTableCell>
                  </StyledTableRow>
              </TableHead>
              <TableBody>
                      <StyledTableRow hover role="checkbox">
                              <StyledTableCell>
                                    <DonutSmallRoundedIcon />
                              </StyledTableCell>
                              <StyledTableCell>
                                    Home
                              </StyledTableCell>
                              <StyledTableCell>
                                    1234 House St
                              </StyledTableCell>
                              <StyledTableCell>
                                    
                              </StyledTableCell>
                              <StyledTableCell>
                                    Costa Mesa
                              </StyledTableCell>
                              <StyledTableCell>
                                    2
                              </StyledTableCell>
                              <StyledTableCell>
                                    Yes
                              </StyledTableCell>
                              <StyledTableCell>
                                    CA
                              </StyledTableCell>
                              <StyledTableCell>
                                    55555
                              </StyledTableCell>
                      </StyledTableRow>
                      <StyledTableRow hover role="checkbox">
                              <StyledTableCell>
                                    <DonutSmallRoundedIcon />
                              </StyledTableCell>
                              <StyledTableCell>
                                    Home
                              </StyledTableCell>
                              <StyledTableCell>
                                    1234 House St
                              </StyledTableCell>
                              <StyledTableCell>
                                    
                              </StyledTableCell>
                              <StyledTableCell>
                                    Costa Mesa
                              </StyledTableCell>
                              <StyledTableCell>
                                    2
                              </StyledTableCell>
                              <StyledTableCell>
                                    Yes
                              </StyledTableCell>
                              <StyledTableCell>
                                    CA
                              </StyledTableCell>
                              <StyledTableCell>
                                    55555
                              </StyledTableCell>
                      </StyledTableRow>
                      <StyledTableRow hover role="checkbox">
                              <StyledTableCell>
                                    <DonutSmallRoundedIcon />
                              </StyledTableCell>
                              <StyledTableCell>
                                    Home
                              </StyledTableCell>
                              <StyledTableCell>
                                    1234 House St
                              </StyledTableCell>
                              <StyledTableCell>
                                    
                              </StyledTableCell>
                              <StyledTableCell>
                                    Costa Mesa
                              </StyledTableCell>
                              <StyledTableCell>
                                    2
                              </StyledTableCell>
                              <StyledTableCell>
                                    Yes
                              </StyledTableCell>
                              <StyledTableCell>
                                    CA
                              </StyledTableCell>
                              <StyledTableCell>
                                    55555
                              </StyledTableCell>
                      </StyledTableRow>
                      <StyledTableRow hover role="checkbox">
                              <StyledTableCell>
                                    <DonutSmallRoundedIcon />
                              </StyledTableCell>
                              <StyledTableCell>
                                    Home
                              </StyledTableCell>
                              <StyledTableCell>
                                    1234 House St
                              </StyledTableCell>
                              <StyledTableCell>
                                    
                              </StyledTableCell>
                              <StyledTableCell>
                                    Costa Mesa
                              </StyledTableCell>
                              <StyledTableCell>
                                    2
                              </StyledTableCell>
                              <StyledTableCell>
                                    Yes
                              </StyledTableCell>
                              <StyledTableCell>
                                    CA
                              </StyledTableCell>
                              <StyledTableCell>
                                    55555
                              </StyledTableCell>
                      </StyledTableRow>
              </TableBody>
              </Table>
          </TableContainer>
          <TablePagination
              rowsPerPageOptions={[10, 25, 100]}
              component="div"
              count={activeProjectrows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
          />
      </Paper>
    </>
  )
}

export default PropertiesTable