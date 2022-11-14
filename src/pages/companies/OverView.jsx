import { Box, Card, IconButton, Table, TableContainer, Typography,} from '@mui/material';
import React from 'react'
import Paper from '@mui/material/Paper';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { tableCellClasses } from '@mui/material/TableCell';
import { styled } from '@mui/material/styles';
import TableLink from '../../components/TableLink';
import TableActions from '../../components/TableActions';
import ModeRoundedIcon from '@mui/icons-material/ModeRounded';
import services from '../../mock/services';
import { Link } from 'react-router-dom';
import { handleEditCompanyModal } from '../../features/login/loginSlice';
import EditCompany from './EditCompany';
import { useDispatch, useSelector } from 'react-redux';
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
const OverView = () => {
const {isEditCompanyModal} = useSelector((store) => store.login)
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
      <Card sx={{
        background: '#F7F7F7',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        p: 2,
        }}>
        <Box sx={{
          display: 'flex',
          justifyContent: 'space-between',
        }}>
          <Typography variant='h4'>About</Typography>
          <IconButton color='black' size="large" onClick={() => dispatch(handleEditCompanyModal())}>
            <ModeRoundedIcon/>
          </IconButton>
        </Box>
        <div className='about_body'>
          <div className="about_img_circle">

          </div>
          <div className="about_body_card">
            <div className="company_info">
              <h4>Construction Co</h4>
              <p className="info_para" style={{
                marginBottom: '8px'
              }}>Travel Distance: 100 miles</p>
              <p className="info_para" style={{
                marginBottom: '8px'
              }}>1234 Business Dr.
              City, ST 55555</p>

              <p className='enabled'>Enabled</p>
            </div>
          </div>
          <div className="about_body_card">
            <div className="company_info">
              <h4 style={{
                fontSize: '20px',
              }}>Primary Representative:</h4>
              <p className="info_para" style={{
                marginBottom: '8px'
              }}>Joel Masters</p>
              <p className="info_para" style={{
                marginBottom: '8px'
              }}>joel@tepia.co</p>
              <p className="info_para" style={{
                marginBottom: '8px'
              }}>949-333-5000</p>
            </div>
          </div>
        </div>
        <div className="available_service_card">
          <Typography sx={{
            fontSize: '24px',
            textDecoration: 'underline' 
          }}>
              Available Services
          </Typography>
        {services.map((service) => {
              return (
                <Link to={service.route}>
                  <Card
                    key={service.id}
                    {...services}
                    sx={{
                      boxShadow:
                        "0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.12), 0px 1px 3px rgba(0, 0, 0, 0.2)",
                      padding: "16px",
                      borderRadius: 0,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      height: '200px'
                    }}
                  >
                    <img src={service.src} alt="" style={{ width: "" }} />
                    <Typography
                      variant="h3"
                      component="h1"
                      sx={{
                        fontStyle: "normal",
                        fontWeight: "400",
                        fontSize: "24px",
                        lineHeight: "24px",
                        textAlign: "center",
                        letterSpacing: "0.18px",
                        mt: 2,
                        textTransform: "capitalize",
                        width: "172px",
                      }}
                    >
                      {service.title}
                    </Typography>
                  </Card>
                </Link>
              );
            })}
        </div>
      </Card>
      <Typography variant='h5' sx={{my: 3}}>
          Active Projects
      </Typography>
      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
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
      <Typography variant='h5' sx={{my: 3}}>
          Completed Projects
      </Typography>
      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
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
      {isEditCompanyModal? (
        <EditCompany/>
        ):null}
    </>
  )
}

export default OverView