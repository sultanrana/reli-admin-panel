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
import { useEffect } from 'react';
import Loading from '../../components/Loading';
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



const PropertiesTable = (props) => {
const {isEditCompanyModal,} = useSelector((store) => store.login);
const {customerDetail,} = useSelector((store) => store.customer);
const dispatch = useDispatch();
const [page, setPage] = React.useState(0);
const [rowsPerPage, setRowsPerPage] = React.useState(10);

const handleChangePage = (event, newPage) => {
    setPage(newPage);
};

const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
};




if(customerDetail === undefined || customerDetail == {}){
      return (
            <Loading/>
      )
}


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
                  {props.properties?.map((property) => {
                        return (
                              <StyledTableRow hover role="checkbox" key={property._id}>
                                    <StyledTableCell>
                                          <DonutSmallRoundedIcon />
                                    </StyledTableCell>
                                    
                                    <StyledTableCell>
                                          {property.name}
                                    </StyledTableCell>
                                    <StyledTableCell>
                                          {property.addressOne}
                                    </StyledTableCell>
                                    <StyledTableCell>
                                          {property.addressTwo}    
                                    </StyledTableCell>
                                    <StyledTableCell>
                                          {property.city}
                                    </StyledTableCell>
                                    <StyledTableCell>
                                          {property.floors}
                                    </StyledTableCell>
                                    <StyledTableCell>
                                          {Boolean(property.basement) ? 'Yes' : 'No'}
                                    </StyledTableCell>
                                    <StyledTableCell>
                                          {property.state}
                                    </StyledTableCell>
                                    <StyledTableCell>
                                          {property.zipCode}
                                    </StyledTableCell>
                              </StyledTableRow>
                        )
                  })}
              </TableBody>
              </Table>
          </TableContainer>
          <TablePagination
              rowsPerPageOptions={[10, 25, 100]}
              component="div"
              count={props.properties?.length || 0}
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