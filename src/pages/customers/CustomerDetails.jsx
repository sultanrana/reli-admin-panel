import {
  Box,
  Button,
  Card,
  IconButton,
  Table,
  TableContainer,
  Typography,
  TextField
} from "@mui/material";
import React, { useEffect } from "react";
import Paper from "@mui/material/Paper";
import Alert  from "@mui/material/Alert";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { tableCellClasses } from "@mui/material/TableCell";
import { styled } from "@mui/material/styles";
import TableLink from "../../components/TableLink";
import TableActions from "../../components/TableActions";
import ModeRoundedIcon from "@mui/icons-material/ModeRounded";
import { handleEditCustomerModal } from "../../features/login/loginSlice";
// import EditCompany from './EditCompany';
import { useDispatch, useSelector } from "react-redux";
import Sidebar from "../../components/Sidebar";
import PropertiesTable from "./PropertiesTable";
import EditCustomer from "./EditCustomer";
import BeardcrumNavigator from "../../components/BeardcrumNavigator";
import { useNavigate, useParams } from "react-router-dom";
import { customerResponseClr, getCutomerDetail } from "../../features/customer/customerSlice";
import Loading from "../../components/Loading";
import CloseIcon from '@mui/icons-material/Close';
import { updateCustomer } from "../../features/customer/customerSlice";
// active project
const activeProjectColumns = [
  { id: "_id", label: "Project ID", minWidth: 100, fontWeight: "600" },
  {
    id: "serviceType",
    label: "Service Type",
    minWidth: 100,
    fontWeight: "600",
  },
  { id: "company", label: "Company ", minWidth: 100, fontWeight: "600" },
  {
    id: "workerAssigned",
    label: "Worker Assigned",
    minWidth: 170,
    fontWeight: "600",
  },
  { id: "city", label: "City", minWidth: 150, fontWeight: "600" },
  { id: "state", label: "State", minWidth: 150, fontWeight: "600" },
  { id: "zip", label: "Zip", minWidth: 150, fontWeight: "600" },
  { id: "ordered", label: "Ordered", minWidth: 150, fontWeight: "600" },
  { id: "scheduled", label: "Scheduled", minWidth: 150, fontWeight: "600" },
  { id: "completed", label: "Completed", minWidth: 150, fontWeight: "600" },
  { id: "totalPaidByCustomer", label: "Total Paid by Customer", minWidth: 150, fontWeight: "600" },
  { id: "totalAmount", label: "Amount", minWidth: 100, fontWeight: "600" },
  { id: "status", label: "Status", minWidth: 100, fontWeight: "600" },
  // { id: "actions", label: "Actions", minWidth: 160, fontWeight: "600" },
];
// active project
function createData(
  projectId,
  projectStatus,
  customer,
  serviceType,
  scheduled,
  amount,
  // actions
) {
  return {
    projectId,
    projectStatus,
    customer,
    serviceType,
    scheduled,
    amount,
    // actions,
  };
}
// active project
const activeProjectrows = [
  createData(
    <TableLink text="PROJ58549" />,
    "Unassigned",
    <TableLink text="John Smith" />,
    "Windows",
    "N/A",
    "$250.00",
    // <TableActions />
  ),
  createData(
    <TableLink text="PROJ58549" />,
    "Unassigned",
    <TableLink text="John Smith" />,
    "Windows",
    "N/A",
    "$250.00",
    // <TableActions />
  ),
  createData(
    <TableLink text="PROJ58549" />,
    "Unassigned",
    <TableLink text="John Smith" />,
    "Windows",
    "N/A",
    "$250.00",
    // <TableActions />
  ),
  createData(
    <TableLink text="PROJ58549" />,
    "Unassigned",
    <TableLink text="John Smith" />,
    "Windows",
    "N/A",
    "$250.00",
    // <TableActions />
  ),
  createData(
    <TableLink text="PROJ58549" />,
    "Unassigned",
    <TableLink text="John Smith" />,
    "Windows",
    "N/A",
    "$250.00",
    // <TableActions />
  ),
  createData(
    <TableLink text="PROJ58549" />,
    "Unassigned",
    <TableLink text="John Smith" />,
    "Windows",
    "N/A",
    "$250.00",
    // <TableActions />
  ),
  createData(
    <TableLink text="PROJ58549" />,
    "Unassigned",
    <TableLink text="John Smith" />,
    "Windows",
    "N/A",
    "$250.00",
    // <TableActions />
  ),
  createData(
    <TableLink text="PROJ58549" />,
    "Unassigned",
    <TableLink text="John Smith" />,
    "Windows",
    "N/A",
    "$250.00",
    // <TableActions />
  ),
  createData(
    <TableLink text="PROJ58549" />,
    "Unassigned",
    <TableLink text="John Smith" />,
    "Windows",
    "N/A",
    "$250.00",
    // <TableActions />
  ),
  createData(
    <TableLink text="PROJ58549" />,
    "Unassigned",
    <TableLink text="John Smith" />,
    "Windows",
    "N/A",
    "$250.00",
    // <TableActions />
  ),
  createData(
    <TableLink text="PROJ58549" />,
    "Unassigned",
    <TableLink text="John Smith" />,
    "Windows",
    "N/A",
    "$250.00",
    // <TableActions />
  ),
  createData(
    <TableLink text="PROJ58549" />,
    "Unassigned",
    <TableLink text="John Smith" />,
    "Windows",
    "N/A",
    "$250.00",
    // <TableActions />
  ),
  createData(
    <TableLink text="PROJ58549" />,
    "Unassigned",
    <TableLink text="John Smith" />,
    "Windows",
    "N/A",
    "$250.00",
    // <TableActions />
  ),
  createData(
    <TableLink text="PROJ58549" />,
    "Unassigned",
    <TableLink text="John Smith" />,
    "Windows",
    "N/A",
    "$250.00",
    // <TableActions />
  ),
  createData(
    <TableLink text="PROJ58549" />,
    "Unassigned",
    <TableLink text="John Smith" />,
    "Windows",
    "N/A",
    "$250.00",
    // <TableActions />
  ),
  createData(
    <TableLink text="PROJ58549" />,
    "Unassigned",
    <TableLink text="John Smith" />,
    "Windows",
    "N/A",
    "$250.00",
    // <TableActions />
  ),
  createData(
    <TableLink text="PROJ58549" />,
    "Unassigned",
    <TableLink text="John Smith" />,
    "Windows",
    "N/A",
    "$250.00",
    // <TableActions />
  ),
  createData(
    <TableLink text="PROJ58549" />,
    "Unassigned",
    <TableLink text="John Smith" />,
    "Windows",
    "N/A",
    "$250.00",
    // <TableActions />
  ),
  createData(
    <TableLink text="PROJ58549" />,
    "Unassigned",
    <TableLink text="John Smith" />,
    "Windows",
    "N/A",
    "$250.00",
    // <TableActions />
  ),
  createData(
    <TableLink text="PROJ58549" />,
    "Unassigned",
    <TableLink text="John Smith" />,
    "Windows",
    "N/A",
    "$250.00",
    // <TableActions />
  ),
  createData(
    <TableLink text="PROJ58549" />,
    "Unassigned",
    <TableLink text="John Smith" />,
    "Windows",
    "N/A",
    "$250.00",
    // <TableActions />
  ),
  createData(
    <TableLink text="PROJ58549" />,
    "Unassigned",
    <TableLink text="John Smith" />,
    "Windows",
    "N/A",
    "$250.00",
    // <TableActions />
  ),
  createData(
    <TableLink text="PROJ58549" />,
    "Unassigned",
    <TableLink text="John Smith" />,
    "Windows",
    "N/A",
    "$250.00",
    // <TableActions />
  ),
  createData(
    <TableLink text="PROJ58549" />,
    "Unassigned",
    <TableLink text="John Smith" />,
    "Windows",
    "N/A",
    "$250.00",
    // <TableActions />
  ),
  createData(
    <TableLink text="PROJ58549" />,
    "Unassigned",
    <TableLink text="John Smith" />,
    "Windows",
    "N/A",
    "$250.00",
    // <TableActions />
  ),
  createData(
    <TableLink text="PROJ58549" />,
    "Unassigned",
    <TableLink text="John Smith" />,
    "Windows",
    "N/A",
    "$250.00",
    // <TableActions />
  ),
  createData(
    <TableLink text="PROJ58549" />,
    "Unassigned",
    <TableLink text="John Smith" />,
    "Windows",
    "N/A",
    "$250.00",
    // <TableActions />
  ),
  createData(
    <TableLink text="PROJ58549" />,
    "Unassigned",
    <TableLink text="John Smith" />,
    "Windows",
    "N/A",
    "$250.00",
    // <TableActions />
  ),
  createData(
    <TableLink text="PROJ58549" />,
    "Unassigned",
    <TableLink text="John Smith" />,
    "Windows",
    "N/A",
    "$250.00",
    // <TableActions />
  ),
  createData(
    <TableLink text="PROJ58549" />,
    "Unassigned",
    <TableLink text="John Smith" />,
    "Windows",
    "N/A",
    "$250.00",
    // <TableActions />
  ),
  createData(
    <TableLink text="PROJ58549" />,
    "Unassigned",
    <TableLink text="John Smith" />,
    "Windows",
    "N/A",
    "$250.00",
    // <TableActions />
  ),
  createData(
    <TableLink text="PROJ58549" />,
    "Unassigned",
    <TableLink text="John Smith" />,
    "Windows",
    "N/A",
    "$250.00",
    // <TableActions />
  ),
  createData(
    <TableLink text="PROJ58549" />,
    "Unassigned",
    <TableLink text="John Smith" />,
    "Windows",
    "N/A",
    "$250.00",
    // <TableActions />
  ),
  createData(
    <TableLink text="PROJ58549" />,
    "Unassigned",
    <TableLink text="John Smith" />,
    "Windows",
    "N/A",
    "$250.00",
    // <TableActions />
  ),
  createData(
    <TableLink text="PROJ58549" />,
    "Unassigned",
    <TableLink text="John Smith" />,
    "Windows",
    "N/A",
    "$250.00",
    // <TableActions />
  ),
  createData(
    <TableLink text="PROJ58549" />,
    "Unassigned",
    <TableLink text="John Smith" />,
    "Windows",
    "N/A",
    "$250.00",
    // <TableActions />
  ),
  createData(
    <TableLink text="PROJ58549" />,
    "Unassigned",
    <TableLink text="John Smith" />,
    "Windows",
    "N/A",
    "$250.00",
    // <TableActions />
  ),
  createData(
    <TableLink text="PROJ58549" />,
    "Unassigned",
    <TableLink text="John Smith" />,
    "Windows",
    "N/A",
    "$250.00",
    // <TableActions />
  ),
  createData(
    <TableLink text="PROJ58549" />,
    "Unassigned",
    <TableLink text="John Smith" />,
    "Windows",
    "N/A",
    "$250.00",
    // <TableActions />
  ),
  createData(
    <TableLink text="PROJ58549" />,
    "Unassigned",
    <TableLink text="John Smith" />,
    "Windows",
    "N/A",
    "$250.00",
    // <TableActions />
  ),
  createData(
    <TableLink text="PROJ58549" />,
    "Unassigned",
    <TableLink text="John Smith" />,
    "Windows",
    "N/A",
    "$250.00",
    // <TableActions />
  ),
  createData(
    <TableLink text="PROJ58549" />,
    "Unassigned",
    <TableLink text="John Smith" />,
    "Windows",
    "N/A",
    "$250.00",
    // <TableActions />
  ),
  createData(
    <TableLink text="PROJ58549" />,
    "Unassigned",
    <TableLink text="John Smith" />,
    "Windows",
    "N/A",
    "$250.00",
    // <TableActions />
  ),
  createData(
    <TableLink text="PROJ58549" />,
    "Unassigned",
    <TableLink text="John Smith" />,
    "Windows",
    "N/A",
    "$250.00",
    // <TableActions />
  ),
  createData(
    <TableLink text="PROJ58549" />,
    "Unassigned",
    <TableLink text="John Smith" />,
    "Windows",
    "N/A",
    "$250.00",
    // <TableActions />
  ),
  createData(
    <TableLink text="PROJ58549" />,
    "Unassigned",
    <TableLink text="John Smith" />,
    "Windows",
    "N/A",
    "$250.00",
    // <TableActions />
  ),
  createData(
    <TableLink text="PROJ58549" />,
    "Unassigned",
    <TableLink text="John Smith" />,
    "Windows",
    "N/A",
    "$250.00",
    // <TableActions />
  ),
  createData(
    <TableLink text="PROJ58549" />,
    "Unassigned",
    <TableLink text="John Smith" />,
    "Windows",
    "N/A",
    "$250.00",
    // <TableActions />
  ),
  createData(
    <TableLink text="PROJ58549" />,
    "Unassigned",
    <TableLink text="John Smith" />,
    "Windows",
    "N/A",
    "$250.00",
    // <TableActions />
  ),
  createData(
    <TableLink text="PROJ58549" />,
    "Unassigned",
    <TableLink text="John Smith" />,
    "Windows",
    "N/A",
    "$250.00",
    // <TableActions />
  ),
  createData(
    <TableLink text="PROJ58549" />,
    "Unassigned",
    <TableLink text="John Smith" />,
    "Windows",
    "N/A",
    "$250.00",
    // <TableActions />
  ),
  createData(
    <TableLink text="PROJ58549" />,
    "Unassigned",
    <TableLink text="John Smith" />,
    "Windows",
    "N/A",
    "$250.00",
    // <TableActions />
  ),
  createData(
    <TableLink text="PROJ58549" />,
    "Unassigned",
    <TableLink text="John Smith" />,
    "Windows",
    "N/A",
    "$250.00",
    // <TableActions />
  ),
  createData(
    <TableLink text="PROJ58549" />,
    "Unassigned",
    <TableLink text="John Smith" />,
    "Windows",
    "N/A",
    "$250.00",
    // <TableActions />
  ),
  createData(
    <TableLink text="PROJ58549" />,
    "Unassigned",
    <TableLink text="John Smith" />,
    "Windows",
    "N/A",
    "$250.00",
    // <TableActions />
  ),
  createData(
    <TableLink text="PROJ58549" />,
    "Unassigned",
    <TableLink text="John Smith" />,
    "Windows",
    "N/A",
    "$250.00",
    // <TableActions />
  ),
  createData(
    <TableLink text="PROJ58549" />,
    "Unassigned",
    <TableLink text="John Smith" />,
    "Windows",
    "N/A",
    "$250.00",
    // <TableActions />
  ),
  createData(
    <TableLink text="PROJ58549" />,
    "Unassigned",
    <TableLink text="John Smith" />,
    "Windows",
    "N/A",
    "$250.00",
    // <TableActions />
  ),
  createData(
    <TableLink text="PROJ58549" />,
    "Unassigned",
    <TableLink text="John Smith" />,
    "Windows",
    "N/A",
    "$250.00",
    // <TableActions />
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
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
    backgroundColor: "#ddd",
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
  widht: 'calc(100% - 60px)',
}))
const PostSearchButton = styled(Button)(({theme}) => ({
  background: '#019EB2',
  borderRadius: '4px',
  marginTop: '5.2px',
  marginLeft: '-3px'
}))
const AboutCard = styled(Box)(({theme}) => ({
  [theme.breakpoints.down('md')] : {
    width: '100%'
  },
  [theme.breakpoints.up('md')] : {
    width: 'calc(100% - 317px)',
  },
  
}))




const CustomerDetails = () => {
  const param = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isEditCustomerModal, isDrawerOpen } = useSelector(
    (store) => store.login
  );
  const {isLoading, customerDetail, alert, responseStatus, responseMsg} = useSelector((store) => store.customer);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const [alertDialog, setAlertDialog] = React.useState(false);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleCustomerStatus = (status) => {
    let values = {}

    values.firstName = customerDetail.data?.firstName
    values.lastName = customerDetail.data?.lastName
    values.statusBit = !Boolean(status)
    dispatch(updateCustomer(values));
  }



  useEffect(() => {
    dispatch(getCutomerDetail(param.customerid));
    setAlertDialog(alert);
  }, [alert]);


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
      Customer Details
    </Typography>,
  ];

  if(isLoading){
    return (
        <Loading/>
    )
  }

  return (
    <>
      <div className="page-section">
        <Sidebar />
        <Box
          className="page-content"
          sx={{
            width: isDrawerOpen ? `calc(100% - 240px)` : `calc(100% - 57px)`,
            overflow: "hidden",
          }}
        >
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
          <Box>
          </Box>
          <Box sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'start',
            flexWrap: 'wrap',
            gap: '1rem'
          }}>
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
                        dispatch(customerResponseClr(false));
                        setAlertDialog(false)
                      }}
                    >
                      <CloseIcon fontSize="inherit" />
                    </IconButton>
                  }
                >{responseMsg}</Alert>
              ) : null
            }

            <AboutCard>
              <Card
                sx={{
                  background: "#F7F7F7",
                  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                  p: 2,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography variant="h4">About</Typography>
                  <IconButton
                    color="black"
                    size="large"
                    onClick={() => dispatch(handleEditCustomerModal())}
                  >
                    <ModeRoundedIcon />
                  </IconButton>
                </Box>
                <div className="about_body">
                  <div className="about_img_circle" style={{background: (customerDetail.data?.profileImage ?`url('https://images.pexels.com/photos/14932984/pexels-photo-14932984.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load')`: '#C4C4C4')}}></div>
                  <div className="about_body_card">
                    <div className="company_info">
                      <h4>{customerDetail.data?.firstName + ' ' + customerDetail.data?.lastName}</h4>
                      <p
                        className="info_para"
                        style={{
                          marginBottom: "8px",
                        }}
                      >
                        {customerDetail.data?.email}
                      </p>
                      <p
                        className="info_para"
                        style={{
                          marginBottom: "8px",
                        }}
                      >
                        {customerDetail.data?.phoneNumber}
                      </p>
                      <p className={Boolean(customerDetail.data?.statusBit) ? 'enabled' : 'disabled' } onClick={() => handleCustomerStatus(Boolean(customerDetail.data?.statusBit))}>{Boolean(customerDetail.data?.statusBit) ? 'Enabled' : 'Disabled' }</p>
                    </div>
                  </div>
                </div>
              </Card>

              <Typography variant="h5" sx={{ mt: 3 }}>
                Properties
              </Typography>
              <Box component="div">
                <PropertiesTable properties={customerDetail.data?.properties}/>
              </Box>
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

          <Typography variant="h5" sx={{ mt: 3 }}>
            Projects
          </Typography>
          <Paper sx={{ width: "100%", overflow: "hidden" }}>
            <TableContainer>
              <Table stickyHeader aria-label="sticky table" sx={{}}>
                <TableHead>
                  <StyledTableRow>
                    {activeProjectColumns.map((column) => (
                      <StyledTableCell
                        key={column.id}
                        align={column.align}
                        style={{
                          minWidth: column.minWidth,
                          fontWeight: column.fontWeight,
                        }}
                      >
                        {column.label}
                      </StyledTableCell>
                    ))}
                  </StyledTableRow>
                </TableHead>
                <TableBody>
                  {customerDetail.data?.orders
                    ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row,index) => {
                      return (
                        <StyledTableRow
                          hover
                          role="checkbox"
                          tabIndex={-1}
                          key={'key'+ index}
                        >
                          {activeProjectColumns.map((column) => {
                            const value = row[column.id];
                            return (
                              <StyledTableCell
                                key={column.id}
                                align={column.align}
                              >
                                {
                                  column.id === '_id' ? (
                                    <TableLink text={value} route={'/projects/' + row._id} />
                                   ) : value
                                }
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
              count={customerDetail.data?.orders.length || 0}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Paper>
        </Box>
      </div>
      {isEditCustomerModal ? <EditCustomer /> : null}
    </>
  );
};

export default CustomerDetails;
