import { Box, Card, IconButton, Button, Table, TableContainer, TextField, Typography, InputBase} from '@mui/material';
import React, { useEffect } from 'react'
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
// import services from '../../mock/services';
import { Link, useParams } from 'react-router-dom';
import { handleEditCompanyModal } from '../../features/login/loginSlice';
import EditCompany from './EditCompany';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../../components/Loading';
import { companyResponseClr, singleCompanyDetail } from '../../features/companies/companySlice';
import Alert  from "@mui/material/Alert";
import CloseIcon from '@mui/icons-material/Close';
// active project
const activeProjectColumns = [
  { id: 'projectId', label: 'Project ID', minWidth: 100, fontWeight: '600' },
  { id: 'projectStatus', label: 'Project Status', minWidth: 100, fontWeight: '600' },
  { id: 'customer', label: 'Customer', minWidth: 100, fontWeight: '600' },
  { id: 'serviceType', label: 'Service Type', minWidth: 170, fontWeight: '600' },
  { id: 'scheduled', label: 'Scheduled', minWidth: 150, fontWeight: '600' },
  { id: 'amount', label: 'Amount', minWidth: 100, fontWeight: '600' },
  // { id: 'actions', label: 'Actions', minWidth: 160, fontWeight: '600' },
];
// active project
function createData(projectId, projectStatus, customer, serviceType, scheduled, amount,
  //  actions
   ) {
  return { projectId, projectStatus, customer, serviceType, scheduled, amount,
    //  actions 
    };
}
// active project
const activeProjectrows = [];

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
  const ActivityLogBox = styled(Box)(({theme}) => ({
    background: '#FFFFFF',
    padding: '6px',
    boxShadow: '0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.12), 0px 1px 3px rgba(0, 0, 0, 0.2)',
    [theme.breakpoints.down('md')]: {
      width: '100%',
      marginTop: '0px',
    },
    [theme.breakpoints.up('md')]: {
      width: '300px',
      marginTop: '-30px'
    },
  }))
  const ActivityLogText = styled(Typography)(({theme}) => ({
    fontSize: '14px',
    fontWeight: '600',
    textTransform: 'capitalize',
    letterSpacing: '0.25px'
  }))
  const PostBox = styled(Box)(({theme}) => ({
    padding: '4px 8px',
    display: 'flex',
    flexDirection: 'column',
    background: '#FFFFFF',
    boxShadow: '0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.12), 0px 1px 3px rgba(0, 0, 0, 0.2)'

  }))
  const PostSearch = styled(Box)(({theme}) => ({
    display: 'flex',
  }))
  const PostSearchInput = styled(TextField)(({theme}) => ({
    height: '100%',
    width: 'calc(100% - 60px)',
  }))
  const PostSearchButton = styled(Button)(({theme}) => ({
    background: '#019EB2',
    borderRadius: '4px',
    marginTop: '5.2px',
    marginLeft: '-3px'
  }))
  const AboutCard = styled(Card)(({theme}) => ({
    [theme.breakpoints.down('md')] : {
      width: '100%'
    },
    [theme.breakpoints.up('md')] : {
      width: 'calc(100% - 317px)',
    },
    
  }))
const OverView = ({data}) => {
const {isEditCompanyModal} = useSelector((store) => store.login)
const {isLoading, alert, responseStatus, responseMsg} = useSelector((store) => store.company)
const dispatch = useDispatch();
const param = useParams();
const [page, setPage] = React.useState(0);
const [rowsPerPage, setRowsPerPage] = React.useState(10);
const [alertDialog, setAlertDialog] = React.useState(false);

// console.log(data?.findCompany);
const handleChangePage = (event, newPage) => {
  setPage(newPage);
};

const handleChangeRowsPerPage = (event) => {
  setRowsPerPage(+event.target.value);
  setPage(0);
};

useEffect(() => {
  dispatch(singleCompanyDetail(param.companyid))
},[alert])

if(isLoading){
  return (
    <Loading/>
  )
}
  return (
    <>
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
                        dispatch(companyResponseClr(false));
                        setAlertDialog(false)
                      }}
                    >
                      <CloseIcon fontSize="inherit" />
                    </IconButton>
                  }
                >{responseMsg}</Alert>
              ) : null
            }
      <Box sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'start',
        flexWrap: 'wrap',
        gap: '1rem'
      }}>
        <AboutCard sx={{
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
            <div className="about_img_circle" style={{background: (data?.findCompany.image?`url('http://34.236.149.254/src/uploads/images/couponImage/${data?.findCompany.image}')`: '#C4C4C4')}}>

            </div>
            <div className="about_body_card">
              <div className="company_info">
                <h4>Construction Co</h4>
                <p className="info_para" style={{
                  marginBottom: '8px'
                }}>Travel Distance: {data?.findCompany.distanceWillingTravel? data?.findCompany.distanceWillingTravel : '0'} miles</p>
                <p className="info_para" style={{
                  marginBottom: '8px'
                }}>{data?.findCompany.addressOne? data.findCompany.addressOne: ''}, {data?.findCompany.addressTwo? data.findCompany.addressTwo: ''}</p>

                <p className={data?.findCompany.companyStatus == 'enable' ? 'enabled' : 'disabled'}>{data?.findCompany.companyStatus == 'disable' ? 'Disabled' : 'Enabled'}</p>
              </div>
            </div>
            <div className="about_body_card">
              <div className="company_info">
                <h4 style={{
                  fontSize: '20px',
                }}>Primary Contact:</h4>
                <p className="info_para" style={{
                  marginBottom: '8px'
                }}>{data?.findCompany.representativeName? data?.findCompany.representativeName : ''}</p>
                <p className="info_para" style={{
                  marginBottom: '8px'
                }}>{data?.findCompany.representativeEmail? data?.findCompany.representativeEmail : ''}</p>
                <p className="info_para" style={{
                  marginBottom: '8px'
                }}>{data?.findCompany.representativeNumber? data?.findCompany.representativeNumber : ''}</p>
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
          {data?.findCompany.services?.map((service, index) => {
                return (
                  <Box>
                    <Card
                      key={index+'findcomapny'}
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
                      <img src={service === 'Windows' ? "/images/service1.png": service === 'Interior Doors' ? '/images/service2.png': service === 'Sliding Glass Doors' ? '/images/service3.png' : null} alt="" style={{ width: "" }} />
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
                        {service}
                      </Typography>
                    </Card>
                  </Box>
                );
              })}
          </div>
        </AboutCard>
        <ActivityLogBox>
          <ActivityLogText>
            Activity log
          </ActivityLogText>
          <Box sx={{display: 'flex', flexDirection: 'column', gap: '10px', my: 1}}>
            <PostBox>
              <ActivityLogText sx={{fontWeight: '500', color: 'rgba(0, 0, 0, 0.6)'}}>
                Title
              </ActivityLogText>
              <ActivityLogText>
                Message
              </ActivityLogText>
              <ActivityLogText sx={{ fontSize: '10px', fontWeight: '500', color: 'rgba(0, 0, 0, 0.6)'}} >
                Timestamp
              </ActivityLogText>
            </PostBox>
            <PostBox>
              <ActivityLogText sx={{fontWeight: '500', color: 'rgba(0, 0, 0, 0.6)'}}>
                Title
              </ActivityLogText>
              <ActivityLogText>
                Message
              </ActivityLogText>
              <ActivityLogText sx={{ fontSize: '10px', fontWeight: '500', color: 'rgba(0, 0, 0, 0.6)'}} >
                Timestamp
              </ActivityLogText>
            </PostBox>
            <PostBox>
              <ActivityLogText sx={{fontWeight: '500', color: 'rgba(0, 0, 0, 0.6)'}}>
                Title
              </ActivityLogText>
              <ActivityLogText>
                Message
              </ActivityLogText>
              <ActivityLogText sx={{ fontSize: '10px', fontWeight: '500', color: 'rgba(0, 0, 0, 0.6)'}} >
                Timestamp
              </ActivityLogText>
            </PostBox>
            <PostBox>
              <ActivityLogText sx={{fontWeight: '500', color: 'rgba(0, 0, 0, 0.6)'}}>
                Title
              </ActivityLogText>
              <ActivityLogText>
                Message
              </ActivityLogText>
              <ActivityLogText sx={{ fontSize: '10px', fontWeight: '500', color: 'rgba(0, 0, 0, 0.6)'}} >
                Timestamp
              </ActivityLogText>
            </PostBox>
            <PostSearch>
              <PostSearchInput
                defaultValue="Add note here"
              ></PostSearchInput>
              <PostSearchButton variant='contained'>Post</PostSearchButton>
            </PostSearch>
          </Box>
        </ActivityLogBox>
      </Box>


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
                              <StyledTableCell key={column.id+ 'OverView'} align={column.align}>
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