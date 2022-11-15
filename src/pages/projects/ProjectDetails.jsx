import { Box, Button, Card, IconButton, Table, TableContainer, Typography,} from '@mui/material';
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
import { handleEditCustomerModal } from '../../features/login/loginSlice';
// import EditCompany from './EditCompany';
import { useDispatch, useSelector } from 'react-redux';
import Sidebar from '../../components/Sidebar';
import BeardcrumNavigator from '../../components/BeardcrumNavigator';
import OpenInNewRoundedIcon from '@mui/icons-material/OpenInNewRounded';
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
const ProjectDetails = () => {
const {isEditCustomerModal, isDrawerOpen} = useSelector((store) => store.login)
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
const breadcrumbs = [
  <Typography
    key="3"
    color="text.primary"
    style={{
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: "34px",
      lineHeight: "36px",
      color: "#000000",
    }}
  >
    Windows PROJ94382
  </Typography>,
];
  return (
    <>
    <div className="page-section">
      <Sidebar/>
      <Box className="page-content" sx={{width: isDrawerOpen ? `calc(100% - 240px)` : `calc(100% - 57px)`, overflow: "hidden"}}>
      <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 3,
          }}
        >
          <BeardcrumNavigator
            breadcrumbs={breadcrumbs ? breadcrumbs : "Beardcrums"}
          />
      </Box>
      <Card sx={{
        background: '#F7F7F7',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        p: 2,
        mb: 4
        }}>
        <Typography variant='h4'>Project Status: Scheduled</Typography>
        <Box component="div" sx={{
          display: 'flex',
          alignItems: 'flex-start',
          flexWrap: 'wrap',
          gap: '10px',
          my: 2
        }}>
            <Box component="div" sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              background: '#FFFFFF',
              gap: '4px',
              py: '8px',
              boxShadow: '0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.12), 0px 1px 3px rgba(0, 0, 0, 0.2)',
              minWidth: '160px'
            }}>
                <Typography sx={{
                  display: 'block',
                   fontWeight: '400',
                  fontSize: '14px',
                  lineHeight: '20px',
                  letterSpacing: '0.25px',
                  color: 'rgba(0, 0, 0, 0.87)'
                }}>04/06/22</Typography>
                <Typography sx={{
                  display: 'block',
                   fontWeight: '400',
                  fontSize: '10px',
                  lineHeight: '20px',
                  letterSpacing: '0.25px',
                  color: 'rgba(0, 0, 0, 0.87)'
                }}>1:02 pm PT</Typography>
                <Typography sx={{
                  display: 'block',
                   fontWeight: '400',
                  fontSize: '16px',
                  lineHeight: '20px',
                  letterSpacing: '0.25px',
                  color: 'rgba(0, 0, 0, 0.87)'
                }}>Posted</Typography>
            </Box>
            <Box component="div" sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              background: '#FFFFFF',
              gap: '4px',
              py: '8px',
              boxShadow: '0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.12), 0px 1px 3px rgba(0, 0, 0, 0.2)',
              minWidth: '160px'
            }}>
                <Typography sx={{
                  display: 'block',
                   fontWeight: '400',
                  fontSize: '14px',
                  lineHeight: '20px',
                  letterSpacing: '0.25px',
                  color: 'rgba(0, 0, 0, 0.87)'
                }}>04/06/22</Typography>
                <Typography sx={{
                  display: 'block',
                   fontWeight: '400',
                  fontSize: '10px',
                  lineHeight: '20px',
                  letterSpacing: '0.25px',
                  color: 'rgba(0, 0, 0, 0.87)'
                }}>1:02 pm PT</Typography>
                <Typography sx={{
                  display: 'block',
                   fontWeight: '400',
                  fontSize: '16px',
                  lineHeight: '20px',
                  letterSpacing: '0.25px',
                  color: 'rgba(0, 0, 0, 0.87)'
                }}>Claimed</Typography>
            </Box>
            <Box component="div" sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              background: '#FFFFFF',
              gap: '4px',
              py: '8px',
              boxShadow: '0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.12), 0px 1px 3px rgba(0, 0, 0, 0.2)',
              minWidth: '160px'
            }}>
                <Typography sx={{
                  display: 'block',
                   fontWeight: '400',
                  fontSize: '14px',
                  lineHeight: '20px',
                  letterSpacing: '0.25px',
                  color: 'rgba(0, 0, 0, 0.87)'
                }}>04/06/22</Typography>
                <Typography sx={{
                  display: 'block',
                   fontWeight: '400',
                  fontSize: '10px',
                  lineHeight: '20px',
                  letterSpacing: '0.25px',
                  color: 'rgba(0, 0, 0, 0.87)'
                }}>1:02 pm PT</Typography>
                <Typography sx={{
                  display: 'block',
                   fontWeight: '400',
                  fontSize: '16px',
                  lineHeight: '20px',
                  letterSpacing: '0.25px',
                  color: 'rgba(0, 0, 0, 0.87)'
                }}>Scheduled</Typography>
                <Button variant='outlined'>Reschedule</Button>
            </Box>
            <Box component="div" sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              background: '#FFFFFF',
              gap: '4px',
              py: '8px',
              boxShadow: '0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.12), 0px 1px 3px rgba(0, 0, 0, 0.2)',
              minWidth: '160px'
            }}>
                <Typography sx={{
                  display: 'block',
                   fontWeight: '400',
                  fontSize: '14px',
                  lineHeight: '20px',
                  letterSpacing: '0.25px',
                  color: 'rgba(0, 0, 0, 0.87)'
                }}>--</Typography>
                <Typography sx={{
                  display: 'block',
                   fontWeight: '400',
                  fontSize: '10px',
                  lineHeight: '20px',
                  letterSpacing: '0.25px',
                  color: 'rgba(0, 0, 0, 0.87)'
                }}>--</Typography>
                <Typography sx={{
                  display: 'block',
                   fontWeight: '400',
                  fontSize: '16px',
                  lineHeight: '20px',
                  letterSpacing: '0.25px',
                  color: 'rgba(0, 0, 0, 0.87)'
                }}>Materials Ordered</Typography>
            </Box>
            <Box component="div" sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              background: '#FFFFFF',
              gap: '4px',
              py: '8px',
              boxShadow: '0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.12), 0px 1px 3px rgba(0, 0, 0, 0.2)',
              minWidth: '160px'
            }}>
                <Typography sx={{
                  display: 'block',
                   fontWeight: '400',
                  fontSize: '14px',
                  lineHeight: '20px',
                  letterSpacing: '0.25px',
                  color: 'rgba(0, 0, 0, 0.87)'
                }}>--</Typography>
                <Typography sx={{
                  display: 'block',
                   fontWeight: '400',
                  fontSize: '10px',
                  lineHeight: '20px',
                  letterSpacing: '0.25px',
                  color: 'rgba(0, 0, 0, 0.87)'
                }}>--</Typography>
                <Typography sx={{
                  display: 'block',
                   fontWeight: '400',
                  fontSize: '16px',
                  lineHeight: '20px',
                  letterSpacing: '0.25px',
                  color: 'rgba(0, 0, 0, 0.87)'
                }}>Completed</Typography>
            </Box>
        </Box>
        <Box sx={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          padding: '16px',
          gap: '11px',
          background: '#E8E8E8',
          boxShadow: '0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.12), 0px 1px 3px rgba(0, 0, 0, 0.2)'
        }}>
          <Typography sx={{
            fontStyle: 'normal',
            fontWeight: '500',
            fontSize: '20px',
            lineHeight: '24px',            
            letterSpacing: '0.15px',
            textDecoration: 'underline',
            color: '#000000',
          }}>
            Project Cancelation:
          </Typography>
          <Button variant='outlined'>Cancel Project</Button>
        </Box>


        {/* <Box sx={{
          display: 'flex',
          justifyContent: 'space-between',
        }}>
          <Typography variant='h4'>About</Typography>
          <IconButton color='black' size="large" onClick={() => dispatch(handleEditCustomerModal())}>
            <ModeRoundedIcon/>
          </IconButton>
        </Box> */}
        {/* <div className='about_body'>
          <div className="about_img_circle">

          </div>
          <div className="about_body_card">
            <div className="company_info">
              <h4>Josh Johnson</h4>
              <p className="info_para" style={{
                marginBottom: '8px'
              }}>joshj@tepia.co</p>
              <p className="info_para" style={{
                marginBottom: '8px'
              }}>949-234-4432</p>
              <p className='enabled'>Enabled</p>
            </div>
          </div>
        </div> */}
      </Card>
      <Card sx={{
        background: '#F7F7F7',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        p: 2,
        mb: 4,
        }}>
        <Typography variant='h4' sx={{mb: 2}}>Customer Data</Typography>
        <Box sx={{
          display: 'flex',
          gap: '8px',
          flexWrap: 'wrap',
        }}>
          <Box component="div" sx={{
            background: '#E8E8E8',
            boxShadow: '0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.12), 0px 1px 3px rgba(0, 0, 0, 0.2)',
            display: 'flex',
            flexWrap: 'wrap',
            flexDirection: 'column',
            padding: '0 16px 16px 16px',
            gap: '8px',
            flex: '1',
          }}>
            <Box sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'end',
            }}>
              <Typography sx={{
                fontWeight: '500',
                fontSize: '20px',
                lineHeight: '24px',
                letterSpacing: '0.15px',
                textDecoration: 'underline'
              }}>
                Customer:
              </Typography>
              <IconButton>
                <OpenInNewRoundedIcon/>
              </IconButton>
            </Box>
            <Typography sx={{
              fontWeight: '500',
              fontSize: '20px',
              lineHeight: '24px',
              letterSpacing: '0.15px',
            }}>
              Josh Johnson
            </Typography>
            <Typography sx={{
              fontWeight: '500',
              fontSize: '20px',
              lineHeight: '24px',
              letterSpacing: '0.15px',
            }}>
              joshj@tepia.co
            </Typography>
            <Typography sx={{
              fontWeight: '500',
              fontSize: '20px',
              lineHeight: '24px',
              letterSpacing: '0.15px',
            }}>
              949-343-5434
            </Typography>
          </Box>
          <Box component="div" sx={{
            background: '#E8E8E8',
            boxShadow: '0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.12), 0px 1px 3px rgba(0, 0, 0, 0.2)',
            display: 'flex',
            flexWrap: 'wrap',
            flexDirection: 'column',
            padding: '16px 16px 16px 16px',
            gap: '8px',
            flex: '1',
          }}>
            <Box sx={{
              display: 'flex',
              justifyContent: 'space-between',
            }}>
              <Typography sx={{
                fontWeight: '500',
                fontSize: '20px',
                lineHeight: '24px',
                letterSpacing: '0.15px',
                textDecoration: 'underline'
              }}>
                Property:
              </Typography>
            </Box>
            <Typography sx={{
              fontWeight: '500',
              fontSize: '20px',
              lineHeight: '24px',
              letterSpacing: '0.15px',
            }}>
              Josh Johnson
            </Typography>
            <Typography sx={{
              fontWeight: '500',
              fontSize: '20px',
              lineHeight: '24px',
              letterSpacing: '0.15px',
            }}>
              joshj@tepia.co
            </Typography>
            <Typography sx={{
              fontWeight: '500',
              fontSize: '20px',
              lineHeight: '24px',
              letterSpacing: '0.15px',
            }}>
              949-343-5434
            </Typography>
          </Box>
        </Box>
      </Card>

      <Typography variant='h5' sx={{mt: 3}}>
            Projects
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
      </Box>
    </div>
    </>
  )
}

export default ProjectDetails