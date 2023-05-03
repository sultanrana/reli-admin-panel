import {
  Box,
  Button,
  Card,
  Grid,
  IconButton,
  Table,
  TableContainer,
  Typography,
  Item,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  Container,
  DialogActions,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import React, { useRef, useState } from "react";
import Paper from "@mui/material/Paper";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { tableCellClasses } from "@mui/material/TableCell";
import { styled } from "@mui/material/styles";
import ErrorOutlineRoundedIcon from "@mui/icons-material/ErrorOutlineRounded";
// import EditCompany from './EditCompany';
import { useDispatch, useSelector } from "react-redux";
import Sidebar from "../../components/Sidebar";
import BeardcrumNavigator from "../../components/BeardcrumNavigator";
import OpenInNewRoundedIcon from "@mui/icons-material/OpenInNewRounded";
import ProjectContractsTable from "./ProjectContractsTable";
import ProjectCustomersTable from "./ProjectCustomersTable";
import ProjectAccountingBreakdown from "./ProjectAccountingBreakdown";
import {
  ActivityLogBox,
  ActivityLogText,
  PostSearch,
  PostBox,
  PostSearchInput,
  PostSearchButton,
  AboutCard,
} from "../../components/styles/ActivityBox.styles";
import { useEffect } from "react";
import { assignProjectToUser, cancelProject, deleteAssignStaff, getAssignedProject, getStaffForAssign, projectResponseClr, reassignProject, reassignProjectStaff, rescheduleProject, singleProjectDetail } from "../../features/projects/projectSlice";
import { Link, useParams } from "react-router-dom";
import Loading from "../../components/Loading";
import moment from 'moment';
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
import Alert  from "@mui/material/Alert";
import CloseIcon from '@mui/icons-material/Close';
import { Field, Form, Formik  } from "formik";
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { object } from "yup";
import * as Yup from "yup";
import dayjs from 'dayjs';
import { current } from "@reduxjs/toolkit";
import ActivityLog from "../../components/ActivityLog";

const OuterGrid = styled(Grid)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  gap: "1rem",
}));
const WhiteCard = styled(Paper)(({ theme }) => ({
  background: "#F8F8F8",
  border: "1px solid #C4C4C4",
  borderRadius: "10px",
  padding: "20px",
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
  [theme.breakpoints.up("md")]: {
    flex: "1",
  },
}));
const WhiteCardHeading = styled("h3")(({ theme }) => ({
  fontStyle: "normal",
  fontWeight: "500",
  fontSize: "20px",
  lineHeight: "30px",
  color: "#000000",
  textTransform: 'capitalize',
}));
const WarrantyCard = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  padding: "4px",
  gap: "8px",
  background: "#D9D9D9",
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
  [theme.breakpoints.up("md")]: {
    width: "360px",
  },
}));

const RescheduleContainer = styled(Box)(({ theme }) => ({
  padding: "3rem 4rem",
  [theme.breakpoints.down("lg")]: {
    width: "100%",
  },
  [theme.breakpoints.up("md")]: {
    width: "600px",
  },
}));
const ModalHeading = styled(Typography)(({ theme }) => ({
  fontWeight: "400",
  fontSize: "34px",
  lineHeight: "36px",
  color: "#000000",
  marginBottom: ".7rem",
  width: '100%'
}));
const ReAssignBox = styled(Box)(({ theme }) => ({
  background: "#D9D9D9",
  height: "50px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "0 10px",
  border: ".6px solid black",
}));
const ReAssignRemove = styled(Button)(({ theme }) => ({
  background: "#BA1A1A",
  borderRadius: "4px",
  height: "24px",
  width: "102px",
  color: "#FFFFFF",
  textTransform: "uppercase",
}));
const StyledTableCell = styled(TableCell)(({ theme }) => ({}));
const StatusBoxes = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  flexWrap: "wrap",
  alignItems: "center",
  background: "#FFFFFF",
  gap: "4px",
  padding: "8px 0",
  boxShadow:
    "0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.12), 0px 1px 3px rgba(0, 0, 0, 0.2)",
  flex: "146px 1",
}));

const ProjectDetails = () => {
  const { isDrawerOpen } = useSelector((store) => store.login);
  const { projectDetail, isLoading, responseStatus, alert, responseMsg, staffReassignedList, listofAssignStaff } = useSelector((store) => store.project);
  const dispatch = useDispatch();
  const param = useParams();
  const today = dayjs();
  const currentTime = dayjs().format('HH:mm:ss');

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
      <Link to={'/projects'} style={{'textDecoration': 'none', 'color' : 'black'}}><ArrowBackIosRoundedIcon style={{'marginRight': '1rem', 'cursor' : 'pointer'}} /></Link> {(projectDetail.data?.order_detail.length > 0 && projectDetail.data?.order_detail[0].service)? projectDetail.data?.order_detail[0].service.name : ''} {param.projectid}
    </Typography>,
  ];
  const [isReschedule, setIsReschedule] = useState(false);
  const [isReassign, setIsReassign] = useState(false);
  const [alertDialog, setAlertDialog] = React.useState(false);
  const selectRef = useRef();
  const handleRescheduleModal = () => {
    if (isReschedule) {
      setIsReschedule(false);
    } else {
      setIsReschedule(true);
    }
  };
  const handleReassignModal = () => {
    if (isReassign) {
      setIsReassign(false);
    } else {
      dispatch(getAssignedProject(param.projectid));
      dispatch(getStaffForAssign());
      setIsReassign(true);
    }
  };

  const rescheduleInitialValues = {
    orderStatusDate: today,
    orderStatusTime: currentTime,
  }
  const reassginInitialValues = {
    userTo: '',
  }

const handleCancelProject = (e) => {
  let values = {};
  values.orderStatusDate = new Date();
  values.orderStatus = 'Cancelled';
  dispatch(cancelProject(values));
}

const handleDeleteAssignStaff = (id) => {
  dispatch(deleteAssignStaff(id)).then(() => {
    handleReassignModal();
  });
}


  useEffect(() => {
    dispatch(singleProjectDetail(param.projectid));
  }, [param.projectid, dispatch]);
  

  if (isLoading) {
    return <Loading />;
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
                        dispatch(projectResponseClr(false));
                        setAlertDialog(false)
                      }}
                    >
                      <CloseIcon fontSize="inherit" />
                    </IconButton>
                  }
                >{responseMsg}</Alert>
              ) : null
            }
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "start",
              flexWrap: "wrap",
              gap: "1rem",
            }}
          >
            <AboutCard>
              <Card
                sx={{
                  background: "#F7F7F7",
                  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                  p: 2,
                  mb: 4,
                }}
              >
                <Typography variant="h4">Project Status: {projectDetail?.data?.order_info.orderStatus}</Typography>
                <Box
                  component="div"
                  sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    flexWrap: "wrap",
                    gap: "10px",
                    my: 2,
                  }}
                >
                  <StatusBoxes>
                    <Typography
                      sx={{
                        display: "block",
                        fontWeight: "400",
                        fontSize: "14px",
                        lineHeight: "20px",
                        letterSpacing: "0.25px",
                        color: "rgba(0, 0, 0, 0.87)",
                      }}
                    >
                      {moment(projectDetail.data?.order_info.createdAt).format('DD/MM/YY')}
                    </Typography>
                    <Typography
                      sx={{
                        display: "block",
                        fontWeight: "400",
                        fontSize: "10px",
                        lineHeight: "20px",
                        letterSpacing: "0.25px",
                        color: "rgba(0, 0, 0, 0.87)",
                      }}
                    >
                      {moment(projectDetail.data?.order_info.createdAt).format('hh:mm A')}
                    </Typography>
                    <Typography
                      sx={{
                        display: "block",
                        fontWeight: "400",
                        fontSize: "16px",
                        lineHeight: "20px",
                        letterSpacing: "0.25px",
                        color: "rgba(0, 0, 0, 0.87)",
                      }}
                    >
                      Posted
                    </Typography>
                  </StatusBoxes>
                  <StatusBoxes>
                    <Typography
                      sx={{
                        display: "block",
                        fontWeight: "400",
                        fontSize: "14px",
                        lineHeight: "20px",
                        letterSpacing: "0.25px",
                        color: "rgba(0, 0, 0, 0.87)",
                      }}
                    >
                       {moment(projectDetail.data?.order_info.createdAt).format('DD/MM/YY')}
                    </Typography>
                    <Typography
                      sx={{
                        display: "block",
                        fontWeight: "400",
                        fontSize: "10px",
                        lineHeight: "20px",
                        letterSpacing: "0.25px",
                        color: "rgba(0, 0, 0, 0.87)",
                      }}
                    >
                      {moment(projectDetail.data?.order_info.createdAt).format('hh:mm A')}
                    </Typography>
                    <Typography
                      sx={{
                        display: "block",
                        fontWeight: "400",
                        fontSize: "16px",
                        lineHeight: "20px",
                        letterSpacing: "0.25px",
                        color: "rgba(0, 0, 0, 0.87)",
                      }}
                    >
                      Claimed
                    </Typography>
                  </StatusBoxes>
                  <StatusBoxes>
                    <Typography
                      sx={{
                        display: "block",
                        fontWeight: "400",
                        fontSize: "14px",
                        lineHeight: "20px",
                        letterSpacing: "0.25px",
                        color: "rgba(0, 0, 0, 0.87)",
                      }}
                    >
                       {moment(projectDetail.data?.order_info.orderStatusDate).format('DD/MM/YY')}
                    </Typography>
                    <Typography
                      sx={{
                        display: "block",
                        fontWeight: "400",
                        fontSize: "10px",
                        lineHeight: "20px",
                        letterSpacing: "0.25px",
                        color: "rgba(0, 0, 0, 0.87)",
                      }}
                    >
                      {moment(projectDetail.data?.order_info.orderStatusDate).format('hh:mm A')}
                    </Typography>
                    <Typography
                      sx={{
                        display: "block",
                        fontWeight: "400",
                        fontSize: "16px",
                        lineHeight: "20px",
                        letterSpacing: "0.25px",
                        color: "rgba(0, 0, 0, 0.87)",
                      }}
                    >
                      Scheduled
                    </Typography>
                    {
                        projectDetail?.data?.order_info.orderStatus === 'Completed' || projectDetail?.data?.order_info.orderStatus === 'completed' ? 
                        '' : (
                    <Button variant="outlined" onClick={handleRescheduleModal}>
                      Reschedule
                    </Button>
                     )}
                  </StatusBoxes>
                  {/* <StatusBoxes>
                    <Typography
                      sx={{
                        display: "block",
                        fontWeight: "400",
                        fontSize: "14px",
                        lineHeight: "20px",
                        letterSpacing: "0.25px",
                        color: "rgba(0, 0, 0, 0.87)",
                      }}
                    >
                      --
                    </Typography>
                    <Typography
                      sx={{
                        display: "block",
                        fontWeight: "400",
                        fontSize: "10px",
                        lineHeight: "20px",
                        letterSpacing: "0.25px",
                        color: "rgba(0, 0, 0, 0.87)",
                      }}
                    >
                      --
                    </Typography>
                    <Typography
                      sx={{
                        display: "block",
                        fontWeight: "400",
                        fontSize: "16px",
                        lineHeight: "20px",
                        letterSpacing: "0.25px",
                        color: "rgba(0, 0, 0, 0.87)",
                      }}
                    >
                      Materials Ordered
                    </Typography>
                  </StatusBoxes> */}
                  <StatusBoxes>
                    <Typography
                      sx={{
                        display: "block",
                        fontWeight: "400",
                        fontSize: "14px",
                        lineHeight: "20px",
                        letterSpacing: "0.25px",
                        color: "rgba(0, 0, 0, 0.87)",
                      }}
                    >
                      {
                        projectDetail?.data?.order_info.orderStatus === 'Completed' || projectDetail?.data?.order_info.orderStatus === 'completed' ?  (moment(projectDetail.data?.order_info.orderStatusDate).format('DD/MM/YY')) : '--'
                      }
                    </Typography>
                    <Typography
                      sx={{
                        display: "block",
                        fontWeight: "400",
                        fontSize: "10px",
                        lineHeight: "20px",
                        letterSpacing: "0.25px",
                        color: "rgba(0, 0, 0, 0.87)",
                      }}
                    >
                       {
                        projectDetail?.data?.order_info.orderStatus === 'Completed' || projectDetail?.data?.order_info.orderStatus === 'completed' ?  (moment(projectDetail.data?.order_info.orderStatusDate).format('hh:mm A')) : '--'
                      }
                    </Typography>
                    <Typography
                      sx={{
                        display: "block",
                        fontWeight: "400",
                        fontSize: "16px",
                        lineHeight: "20px",
                        letterSpacing: "0.25px",
                        color: "rgba(0, 0, 0, 0.87)",
                      }}
                    >
                      Completed
                    </Typography>
                  </StatusBoxes>
                </Box>
                {
                  projectDetail?.data?.order_info.orderStatus === 'Completed' || projectDetail?.data?.order_info.orderStatus === 'completed' ? ''
                  : (projectDetail?.data?.order_info.orderStatus !== 'Cancelled')? (
                    <Box
                      sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        alignItems: "center",
                        padding: "16px",
                        gap: "11px",
                        background: "#E8E8E8",
                        boxShadow:
                          "0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.12), 0px 1px 3px rgba(0, 0, 0, 0.2)",
                      }}
                    >
                      <Typography
                        sx={{
                          fontStyle: "normal",
                          fontWeight: "500",
                          fontSize: "20px",
                          lineHeight: "24px",
                          letterSpacing: "0.15px",
                          textDecoration: "underline",
                          color: "#000000",
                        }}
                      >
                        Project Cancelation:
                      </Typography>
                      <Button variant="outlined" onClick={handleCancelProject}>Cancel Project</Button>
                    </Box>
                  ) : null
                }
                
              </Card>
              <Card
                sx={{
                  background: "#F7F7F7",
                  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                  p: 2,
                  mb: 4,
                }}
              >
                <Typography variant="h4" sx={{ mb: 2 }}>
                  Customer Data
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    gap: "8px",
                    flexWrap: "wrap",
                  }}
                >
                  <Box
                    component="div"
                    sx={{
                      background: "#E8E8E8",
                      boxShadow:
                        "0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.12), 0px 1px 3px rgba(0, 0, 0, 0.2)",
                      display: "flex",
                      flexWrap: "wrap",
                      flexDirection: "column",
                      padding: "0 16px 16px 16px",
                      gap: "8px",
                      flex: "1",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "end",
                      }}
                    >
                      <Typography
                        sx={{
                          fontWeight: "500",
                          fontSize: "20px",
                          lineHeight: "24px",
                          letterSpacing: "0.15px",
                          textDecoration: "underline",
                        }}
                      >
                        Customer:
                      </Typography>
                      <IconButton>
                        <OpenInNewRoundedIcon />
                      </IconButton>
                    </Box>
                    <Typography
                      sx={{
                        fontWeight: "500",
                        fontSize: "20px",
                        lineHeight: "24px",
                        letterSpacing: "0.15px",
                      }}
                    >
                      {projectDetail.data?.order_info.user?.firstName + ' ' + projectDetail.data?.order_info.user?.lastName}
                    </Typography>
                    <Typography
                      sx={{
                        fontWeight: "500",
                        fontSize: "20px",
                        lineHeight: "24px",
                        letterSpacing: "0.15px",
                      }}
                    >
                      {projectDetail.data?.order_info.user?.email}
                    </Typography>
                    <Typography
                      sx={{
                        fontWeight: "500",
                        fontSize: "20px",
                        lineHeight: "24px",
                        letterSpacing: "0.15px",
                      }}
                    >
                      {projectDetail.data?.order_info.user?.phoneNumber}
                    </Typography>
                  </Box>
                  <Box
                    component="div"
                    sx={{
                      background: "#E8E8E8",
                      boxShadow:
                        "0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.12), 0px 1px 3px rgba(0, 0, 0, 0.2)",
                      display: "flex",
                      flexWrap: "wrap",
                      flexDirection: "column",
                      padding: "16px 16px 16px 16px",
                      gap: "8px",
                      flex: "1",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <Typography
                        sx={{
                          fontWeight: "500",
                          fontSize: "20px",
                          lineHeight: "24px",
                          letterSpacing: "0.15px",
                          textDecoration: "underline",
                        }}
                      >
                        Property:
                      </Typography>
                    </Box>
                    <Typography
                      sx={{
                        fontWeight: "500",
                        fontSize: "20px",
                        lineHeight: "24px",
                        letterSpacing: "0.15px",
                      }}
                    >
                        {projectDetail.data?.order_detail[0].property?.name}
                    </Typography>
                    <Typography
                      sx={{
                        fontWeight: "500",
                        fontSize: "20px",
                        lineHeight: "24px",
                        letterSpacing: "0.15px",
                      }}
                    >
                      {projectDetail.data?.order_detail[0].property?.addressOne}
                    </Typography>
                    {/* <Typography
                      sx={{
                        fontWeight: "500",
                        fontSize: "20px",
                        lineHeight: "24px",
                        letterSpacing: "0.15px",
                      }}
                    >
                      949-343-5434
                    </Typography> */}
                  </Box>
                </Box>
              </Card>
              <Card
                sx={{
                  background: "#F7F7F7",
                  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                  p: 2,
                  mb: 4,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography variant="h4" sx={{ mb: 2 }}>
                    Acme Inc.
                  </Typography>
                  <Box>
                    <IconButton sx={{ mr: 2 }}>
                      <OpenInNewRoundedIcon />
                    </IconButton>
                    {
                        projectDetail?.data?.order_info?.orderStatus === 'Completed' || projectDetail?.data?.order_info?.orderStatus === 'completed' ?  ''
                         : 
                        (
                          <Button variant="contained" onClick={handleReassignModal}>
                            Reassign
                          </Button>
                        )
                      }
                  </Box>
                </Box>
                {projectDetail.data?.assigned_order.length > 0 ? (
                  <Box
                    sx={{
                      display: "flex",
                      gap: "8px",
                      flexWrap: "wrap",
                    }}
                  >
                    <Box
                      component="div"
                      sx={{
                        background: "#E8E8E8",
                        boxShadow:
                          "0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.12), 0px 1px 3px rgba(0, 0, 0, 0.2)",
                        display: "flex",
                        flexWrap: "wrap",
                        flexDirection: "column",
                        padding: "16px 16px 16px 16px",
                        gap: "8px",
                        flex: "1",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <Typography
                          sx={{
                            fontWeight: "500",
                            fontSize: "20px",
                            lineHeight: "24px",
                            letterSpacing: "0.15px",
                            textDecoration: "underline",
                          }}
                        >
                          Primary Contract:
                        </Typography>
                      </Box>
                      <Typography
                        sx={{
                          fontWeight: "500",
                          fontSize: "20px",
                          lineHeight: "24px",
                          letterSpacing: "0.15px",
                        }}
                      >
                        {projectDetail.data?.assigned_order[0].userBy?.firstName + ' ' + projectDetail.data?.assigned_order[0].userBy?.lastName}
                      </Typography>
                      <Typography
                        sx={{
                          fontWeight: "500",
                          fontSize: "20px",
                          lineHeight: "24px",
                          letterSpacing: "0.15px",
                        }}
                      >
                      {projectDetail.data?.assigned_order[0].userBy?.email}
                      </Typography>
                      <Typography
                        sx={{
                          fontWeight: "500",
                          fontSize: "20px",
                          lineHeight: "24px",
                          letterSpacing: "0.15px",
                        }}
                      >
                        {projectDetail.data?.assigned_order[0].userBy?.phoneNumber}
                      </Typography>
                    </Box>
                    <Box
                      component="div"
                      sx={{
                        background: "#E8E8E8",
                        boxShadow:
                          "0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.12), 0px 1px 3px rgba(0, 0, 0, 0.2)",
                        display: "flex",
                        flexWrap: "wrap",
                        flexDirection: "column",
                        padding: "16px 16px 16px 16px",
                        gap: "8px",
                        flex: "1",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <Typography
                          sx={{
                            fontWeight: "500",
                            fontSize: "20px",
                            lineHeight: "24px",
                            letterSpacing: "0.15px",
                            textDecoration: "underline",
                          }}
                        >
                          Staff Assigned:
                        </Typography>
                      </Box>
                      <Typography
                        sx={{
                          fontWeight: "500",
                          fontSize: "20px",
                          lineHeight: "24px",
                          letterSpacing: "0.15px",
                        }}
                      >
                        {projectDetail.data?.assigned_order[0].userTo?.firstName + ' ' + projectDetail.data?.assigned_order[0].userTo?.lastName}
                      </Typography>
                      <Typography
                        sx={{
                          fontWeight: "500",
                          fontSize: "20px",
                          lineHeight: "24px",
                          letterSpacing: "0.15px",
                        }}
                      >
                        {projectDetail.data?.assigned_order[0].userTo?.email}
                      </Typography>
                      <Typography
                        sx={{
                          fontWeight: "500",
                          fontSize: "20px",
                          lineHeight: "24px",
                          letterSpacing: "0.15px",
                        }}
                      >
                      {projectDetail.data?.assigned_order[0].userTo?.phoneNumber}
                      </Typography>
                    </Box>
                  </Box>
                ) : null}
              </Card>
            </AboutCard>
            <ActivityLog />
          </Box>

          <Card
            sx={{
              background: "#F7F7F7",
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              p: 2,
              mb: 4,
              display: "flex",
              flexDirection: "column",
              gap: "1.7rem",
            }}
          >
            <Typography variant="h4">Financials</Typography>
            <Box
              component="div"
              sx={{
                background: "#E8E8E8",
                boxShadow:
                  "0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.12), 0px 1px 3px rgba(0, 0, 0, 0.2)",
                display: "flex",
                flexWrap: "wrap",
                flexDirection: "column",
                padding: "16px 16px 16px 16px",
                gap: "8px",
                flex: "1",
              }}
            >
              <Typography
                sx={{
                  fontWeight: "500",
                  fontSize: "20px",
                  lineHeight: "24px",
                  letterSpacing: "0.15px",
                  textDecoration: "underline",
                }}
              >
                Customer:
              </Typography>
              <ProjectCustomersTable />
            </Box>
            <Box
              component="div"
              sx={{
                background: "#E8E8E8",
                boxShadow:
                  "0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.12), 0px 1px 3px rgba(0, 0, 0, 0.2)",
                display: "flex",
                flexWrap: "wrap",
                flexDirection: "column",
                padding: "16px 16px 16px 16px",
                gap: "8px",
                flex: "1",
              }}
            >
              <Typography
                sx={{
                  fontWeight: "500",
                  fontSize: "20px",
                  lineHeight: "24px",
                  letterSpacing: "0.15px",
                  textDecoration: "underline",
                }}
              >
                Contracts:
              </Typography>
              <ProjectContractsTable data={projectDetail.data?.order_info} />  
            </Box>
            <Box
              component="div"
              sx={{
                background: "#E8E8E8",
                boxShadow:
                  "0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.12), 0px 1px 3px rgba(0, 0, 0, 0.2)",
                display: "flex",
                flexWrap: "wrap",
                flexDirection: "column",
                padding: "16px 16px 16px 16px",
                gap: "8px",
                flex: "1",
              }}
            >
              <Typography
                sx={{
                  fontWeight: "500",
                  fontSize: "20px",
                  lineHeight: "24px",
                  letterSpacing: "0.15px",
                  textDecoration: "underline",
                }}
              >
                Accounting Breakdown:
              </Typography>
              <ProjectAccountingBreakdown />
            </Box>
          </Card>

          <Card
            sx={{
              background: "#F7F7F7",
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              p: 2,
              mb: 4,
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            <Typography variant="h4">Conversation</Typography>
            <Box
              component="div"
              sx={{
                background: "#E8E8E8",
                boxShadow:
                  "0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.12), 0px 1px 3px rgba(0, 0, 0, 0.2)",
                display: "flex",
                flexDirection: "column",
                gap: "4px",
                width: "fit-content",
                p: "8px",
                borderRadius: "4px",
              }}
            >
              <Typography sx={{ fontSize: "18px", fontWeight: "600" }}>
                Joel (contractor):
              </Typography>
              <Typography sx={{ fontSize: "14px" }}>
                Hi Josh, when can we stop by to confirm the measurements?
              </Typography>
              <Typography sx={{ fontSize: "10px" }}>2 hours ago</Typography>
            </Box>
            <Box
              component="div"
              sx={{
                background: "#E8E8E8",
                boxShadow:
                  "0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.12), 0px 1px 3px rgba(0, 0, 0, 0.2)",
                display: "flex",
                flexDirection: "column",
                gap: "4px",
                width: "fit-content",
                p: "8px",
                borderRadius: "4px",
              }}
            >
              <Typography sx={{ fontSize: "18px", fontWeight: "600" }}>
                Josh (customer):
              </Typography>
              <Typography sx={{ fontSize: "14px" }}>
                Will 2pm today work for you?
              </Typography>
              <Typography sx={{ fontSize: "10px" }}>1 hour ago</Typography>
            </Box>
            <Box
              component="div"
              sx={{
                background: "#E8E8E8",
                boxShadow:
                  "0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.12), 0px 1px 3px rgba(0, 0, 0, 0.2)",
                display: "flex",
                flexDirection: "column",
                gap: "4px",
                width: "fit-content",
                p: "8px",
                borderRadius: "4px",
              }}
            >
              <Typography sx={{ fontSize: "18px", fontWeight: "600" }}>
                Joel (contractor):
              </Typography>
              <Typography sx={{ fontSize: "14px" }}>
                Perfect, see you at 2. If you have any dogs please ensure they
                are leashed when we enter the premeses.
              </Typography>
              <Typography sx={{ fontSize: "10px" }}>30 min ago</Typography>
            </Box>
          </Card>

          <Card
            sx={{
              background: "#F7F7F7",
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              p: 2,
              mb: 4,
              display: "flex",
              flexDirection: "column",
              gap: "1.5rem",
            }}
          >
            <Typography variant="h4">Service</Typography>
            <OuterGrid sx={{ width: "100%", ml: 0 }}>
              {projectDetail.data?.order_detail.map((service) => {
                return (
                  <WhiteCard key={service?._id}>
                    <WhiteCardHeading>{service?.serviceName}</WhiteCardHeading>
                      <Box
                        sx={{
                          display: "flex",
                          flexWrap: "wrap",
                          alignItems: "self-start",
                          gap: "1.4rem",
                          mt: 2,
                        }}
                      >
                        <Box
                          sx={{
                            background: "#FFFFFF",
                            borderRadius: "10px",
                            p: 2,
                          }}
                        >
                          <img src="/images/service1.png" alt="service" />
                        </Box>
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            flex: "1",
                          }}
                        >
                          {
                            service?.roomType ? (
                              <Box
                                sx={{
                                  display: "flex",
                                  justifyContent: "start",
                                  alignItems: "center",
                                  gap: "10px",
                                  borderTop: "0.8px solid #ddd",
                                  borderBottom: "0.8px solid #ddd",
                                  py: 1,
                                }}
                              >
                                <Typography
                                  sx={{ fontSize: "15px", fontWeight: "bolder" }}
                                >
                                  Room Type:
                                </Typography>
                                <Typography sx={{ fontSize: "15px" }}>{service?.roomType}</Typography>
                              </Box>
                            ) : null
                          }
                          {
                            service?.distanceFromGround ? (
                              <Box
                                sx={{
                                  display: "flex",
                                  justifyContent: "start",
                                  alignItems: "center",
                                  gap: "10px",
                                  borderTop: "0.8px solid #ddd",
                                  borderBottom: "0.8px solid #ddd",
                                  py: 1,
                                }}
                              >
                                <Typography
                                  sx={{ fontSize: "15px", fontWeight: "bolder" }}
                                >
                                  Distance From Ground:
                                </Typography>
                                <Typography sx={{ fontSize: "15px" }}>{service?.distanceFromGround}</Typography>
                              </Box>
                            ) : null
                          }
                          {
                            service?.floorType ? (
                              <Box
                                sx={{
                                  display: "flex",
                                  justifyContent: "start",
                                  alignItems: "center",
                                  gap: "10px",
                                  borderTop: "0.8px solid #ddd",
                                  borderBottom: "0.8px solid #ddd",
                                  py: 1,
                                }}
                              >
                                <Typography
                                  sx={{ fontSize: "15px", fontWeight: "bolder" }}
                                >
                                  Floor Type:
                                </Typography>
                                <Typography sx={{ fontSize: "15px" }}>{service?.floorType}</Typography>
                              </Box>
                            ) : null
                          }
                          {
                            service?.temperedGlassType ? (
                              <Box
                                sx={{
                                  display: "flex",
                                  justifyContent: "start",
                                  alignItems: "center",
                                  gap: "10px",
                                  borderTop: "0.8px solid #ddd",
                                  borderBottom: "0.8px solid #ddd",
                                  py: 1,
                                }}
                              >
                                <Typography
                                  sx={{ fontSize: "15px", fontWeight: "bolder" }}
                                >
                                  Tempered Glass Type:
                                </Typography>
                                <Typography sx={{ fontSize: "15px" }}>{service?.temperedGlassType}</Typography>
                              </Box>
                            ) : null
                          }
                          {
                            service?.glassType ? (
                              <Box
                                sx={{
                                  display: "flex",
                                  justifyContent: "start",
                                  alignItems: "center",
                                  gap: "10px",
                                  borderTop: "0.8px solid #ddd",
                                  borderBottom: "0.8px solid #ddd",
                                  py: 1,
                                }}
                              >
                                <Typography
                                  sx={{ fontSize: "15px", fontWeight: "bolder" }}
                                >
                                  Glass Type:
                                </Typography>
                                <Typography sx={{ fontSize: "15px" }}>{service?.glassType}</Typography>
                              </Box>
                            ) : null
                          }
                          {
                            service?.designType ? (
                              <Box
                                sx={{
                                  display: "flex",
                                  justifyContent: "start",
                                  alignItems: "center",
                                  gap: "10px",
                                  borderTop: "0.8px solid #ddd",
                                  borderBottom: "0.8px solid #ddd",
                                  py: 1,
                                }}
                              >
                                <Typography
                                  sx={{ fontSize: "15px", fontWeight: "bolder" }}
                                >
                                  Design Type:
                                </Typography>
                                <Typography sx={{ fontSize: "15px" }}>{service?.designType}</Typography>
                              </Box>
                            ) : null
                          }
                          {
                            service?.colorSelection ? (
                              <Box
                                sx={{
                                  display: "flex",
                                  justifyContent: "start",
                                  alignItems: "center",
                                  gap: "10px",
                                  borderTop: "0.8px solid #ddd",
                                  borderBottom: "0.8px solid #ddd",
                                  py: 1,
                                }}
                              >
                                <Typography
                                  sx={{ fontSize: "15px", fontWeight: "bolder" }}
                                >
                                  Color Selection:
                                </Typography>
                                <Typography sx={{ fontSize: "15px" }}>{service?.colorSelection}</Typography>
                              </Box>
                            ) : null
                          }
                          {
                            service?.styleSelection ? (
                              <Box
                                sx={{
                                  display: "flex",
                                  justifyContent: "start",
                                  alignItems: "center",
                                  gap: "10px",
                                  borderTop: "0.8px solid #ddd",
                                  borderBottom: "0.8px solid #ddd",
                                  py: 1,
                                }}
                              >
                                <Typography
                                  sx={{ fontSize: "15px", fontWeight: "bolder" }}
                                >
                                  Style Selection:
                                </Typography>
                                <Typography sx={{ fontSize: "15px" }}>{service?.styleSelection}</Typography>
                              </Box>
                            ) : null
                          }
                         
                        </Box>
                      </Box>
                  </WhiteCard>
                )
              })}
              
              {/* <WhiteCard>
                <WhiteCardHeading>Premium Window</WhiteCardHeading>
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    alignItems: "self-start",
                    gap: "1.4rem",
                    mt: 2,
                  }}
                >
                  <Box
                    sx={{
                      background: "#FFFFFF",
                      borderRadius: "10px",
                      p: 2,
                    }}
                  >
                    <img src="/images/service1.png" alt="service" />
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      flex: "1",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "start",
                        alignItems: "center",
                        gap: "10px",
                        borderTop: "0.8px solid #ddd",
                        borderBottom: "0.8px solid #ddd",
                        py: 1,
                      }}
                    >
                      <Typography
                        sx={{ fontSize: "15px", fontWeight: "bolder" }}
                      >
                        Stacked:{" "}
                      </Typography>
                      <Typography sx={{ fontSize: "15px" }}>Yes</Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "start",
                        alignItems: "center",
                        gap: "10px",
                        borderTop: "0.8px solid #ddd",
                        borderBottom: "0.8px solid #ddd",
                        py: 1,
                      }}
                    >
                      <Typography
                        sx={{ fontSize: "15px", fontWeight: "bolder" }}
                      >
                        Stacked:{" "}
                      </Typography>
                      <Typography sx={{ fontSize: "15px" }}>Yes</Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "start",
                        alignItems: "center",
                        gap: "10px",
                        borderTop: "0.8px solid #ddd",
                        borderBottom: "0.8px solid #ddd",
                        py: 1,
                      }}
                    >
                      <Typography
                        sx={{ fontSize: "15px", fontWeight: "bolder" }}
                      >
                        Stacked:{" "}
                      </Typography>
                      <Typography sx={{ fontSize: "15px" }}>Yes</Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "start",
                        alignItems: "center",
                        gap: "10px",
                        borderTop: "0.8px solid #ddd",
                        borderBottom: "0.8px solid #ddd",
                        py: 1,
                      }}
                    >
                      <Typography
                        sx={{ fontSize: "15px", fontWeight: "bolder" }}
                      >
                        Stacked:{" "}
                      </Typography>
                      <Typography sx={{ fontSize: "15px" }}>Yes</Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "start",
                        alignItems: "center",
                        gap: "10px",
                        borderTop: "0.8px solid #ddd",
                        borderBottom: "0.8px solid #ddd",
                        py: 1,
                      }}
                    >
                      <Typography
                        sx={{ fontSize: "15px", fontWeight: "bolder" }}
                      >
                        Stacked:{" "}
                      </Typography>
                      <Typography sx={{ fontSize: "15px" }}>Yes</Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "start",
                        alignItems: "center",
                        gap: "10px",
                        borderTop: "0.8px solid #ddd",
                        borderBottom: "0.8px solid #ddd",
                        py: 1,
                      }}
                    >
                      <Typography
                        sx={{ fontSize: "15px", fontWeight: "bolder" }}
                      >
                        Stacked:{" "}
                      </Typography>
                      <Typography sx={{ fontSize: "15px" }}>Yes</Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "start",
                        alignItems: "center",
                        gap: "10px",
                        borderTop: "0.8px solid #ddd",
                        borderBottom: "0.8px solid #ddd",
                        py: 1,
                      }}
                    >
                      <Typography
                        sx={{ fontSize: "15px", fontWeight: "bolder" }}
                      >
                        Stacked:{" "}
                      </Typography>
                      <Typography sx={{ fontSize: "15px" }}>Yes</Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "start",
                        alignItems: "center",
                        gap: "10px",
                        borderTop: "0.8px solid #ddd",
                        borderBottom: "0.8px solid #ddd",
                        py: 1,
                      }}
                    >
                      <Typography
                        sx={{ fontSize: "15px", fontWeight: "bolder" }}
                      >
                        Stacked:{" "}
                      </Typography>
                      <Typography sx={{ fontSize: "15px" }}>Yes</Typography>
                    </Box>
                  </Box>
                </Box>
              </WhiteCard>
              <WhiteCard>
                <WhiteCardHeading>Premium Window</WhiteCardHeading>
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    alignItems: "self-start",
                    gap: "1.4rem",
                    mt: 2,
                  }}
                >
                  <Box
                    sx={{
                      background: "#FFFFFF",
                      borderRadius: "10px",
                      p: 2,
                    }}
                  >
                    <img src="/images/service1.png" alt="service" />
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      flex: "1",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "start",
                        alignItems: "center",
                        gap: "10px",
                        borderTop: "0.8px solid #ddd",
                        borderBottom: "0.8px solid #ddd",
                        py: 1,
                      }}
                    >
                      <Typography
                        sx={{ fontSize: "15px", fontWeight: "bolder" }}
                      >
                        Stacked:{" "}
                      </Typography>
                      <Typography sx={{ fontSize: "15px" }}>Yes</Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "start",
                        alignItems: "center",
                        gap: "10px",
                        borderTop: "0.8px solid #ddd",
                        borderBottom: "0.8px solid #ddd",
                        py: 1,
                      }}
                    >
                      <Typography
                        sx={{ fontSize: "15px", fontWeight: "bolder" }}
                      >
                        Stacked:{" "}
                      </Typography>
                      <Typography sx={{ fontSize: "15px" }}>Yes</Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "start",
                        alignItems: "center",
                        gap: "10px",
                        borderTop: "0.8px solid #ddd",
                        borderBottom: "0.8px solid #ddd",
                        py: 1,
                      }}
                    >
                      <Typography
                        sx={{ fontSize: "15px", fontWeight: "bolder" }}
                      >
                        Stacked:{" "}
                      </Typography>
                      <Typography sx={{ fontSize: "15px" }}>Yes</Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "start",
                        alignItems: "center",
                        gap: "10px",
                        borderTop: "0.8px solid #ddd",
                        borderBottom: "0.8px solid #ddd",
                        py: 1,
                      }}
                    >
                      <Typography
                        sx={{ fontSize: "15px", fontWeight: "bolder" }}
                      >
                        Stacked:{" "}
                      </Typography>
                      <Typography sx={{ fontSize: "15px" }}>Yes</Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "start",
                        alignItems: "center",
                        gap: "10px",
                        borderTop: "0.8px solid #ddd",
                        borderBottom: "0.8px solid #ddd",
                        py: 1,
                      }}
                    >
                      <Typography
                        sx={{ fontSize: "15px", fontWeight: "bolder" }}
                      >
                        Stacked:{" "}
                      </Typography>
                      <Typography sx={{ fontSize: "15px" }}>Yes</Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "start",
                        alignItems: "center",
                        gap: "10px",
                        borderTop: "0.8px solid #ddd",
                        borderBottom: "0.8px solid #ddd",
                        py: 1,
                      }}
                    >
                      <Typography
                        sx={{ fontSize: "15px", fontWeight: "bolder" }}
                      >
                        Stacked:{" "}
                      </Typography>
                      <Typography sx={{ fontSize: "15px" }}>Yes</Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "start",
                        alignItems: "center",
                        gap: "10px",
                        borderTop: "0.8px solid #ddd",
                        borderBottom: "0.8px solid #ddd",
                        py: 1,
                      }}
                    >
                      <Typography
                        sx={{ fontSize: "15px", fontWeight: "bolder" }}
                      >
                        Stacked:{" "}
                      </Typography>
                      <Typography sx={{ fontSize: "15px" }}>Yes</Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "start",
                        alignItems: "center",
                        gap: "10px",
                        borderTop: "0.8px solid #ddd",
                        borderBottom: "0.8px solid #ddd",
                        py: 1,
                      }}
                    >
                      <Typography
                        sx={{ fontSize: "15px", fontWeight: "bolder" }}
                      >
                        Stacked:{" "}
                      </Typography>
                      <Typography sx={{ fontSize: "15px" }}>Yes</Typography>
                    </Box>
                  </Box>
                </Box>
              </WhiteCard> */}
            </OuterGrid>
          </Card>
          <Card
            sx={{
              background: "#F7F7F7",
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              p: 2,
              mb: 4,
              display: "flex",
              flexDirection: "column",
              gap: "1.5rem",
            }}
          >
            <Typography variant="h4">Warranty</Typography>
            <WarrantyCard>
              <ErrorOutlineRoundedIcon sx={{ fontSize: "50px" }} />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: "500",
                    letterSpacing: "0.1px",
                  }}
                >
                  Labor warranty expries: 03/31/2023
                </Typography>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: "500",
                    letterSpacing: "0.1px",
                  }}
                >
                  Product warranty expries: 03/31/2024
                </Typography>
              </Box>
            </WarrantyCard>
          </Card>
        </Box>

        {/* modals  */}
        {isReschedule ? (
          <Dialog
            open={isReschedule}
            scroll="body"
            onClose={handleRescheduleModal}
            aria-describedby="scroll-dialog-description"
          >
            <DialogTitle
              id="scroll-dialog-title"
              sx={{
                p: 1,
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "24px",
                lineHeight: "24px",
                letterSpacing: "0.18px",
                color: "#000000",
              }}
            >
              Reschedule
            </DialogTitle>
            <Formik
                initialValues={rescheduleInitialValues}
                onSubmit={(values, formikHelpers) => {
                  values.orderStatusDate = dayjs(values.orderStatusDate).format('YYYY-MM-DD');
                  values.orderStatus  = 'Scheduled';
                  dispatch(rescheduleProject(values));
                  handleRescheduleModal();
                  console.log('values: ', values);
                }}
                validationSchema={object({
                  orderStatusDate: Yup.date().required(),
                  orderStatusTime: Yup.date().required()
                })}
              >
                {({ errors, touched, isValid, dirty, values, setFieldValue }) => (
                  <Form>
                    <RescheduleContainer>
                      <ModalHeading>{(projectDetail.data?.order_detail.length > 0 && projectDetail.data?.order_detail[0].service)? projectDetail.data?.order_detail[0].service.name : ''} {param.projectid}</ModalHeading>
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoContainer components={['DateTimePicker']} sx={{ width: "100%", mb: 4 }}>
                          <DatePicker
                            disablePast
                            value={values.orderStatusDate}
                            onChange={(newValue) => setFieldValue("orderStatusDate", newValue)}
                            renderInput={(params) => (
                              <TextField
                                error={Boolean(touched.orderStatusDate && errors.orderStatusDate)}
                                helperText={touched.orderStatusDate && errors.orderStatusDate}
                                label="Select Date"
                                name="orderStatusDate"
                                variant="outlined"
                                fullWidth
                                {...params}
                              />
                            )}
                          />
                        </DemoContainer>
                      </LocalizationProvider>
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoContainer components={['DateTimePicker']}>
                          <TimePicker 
                            value={values.orderStatusTime}
                            onChange={(newValue) => setFieldValue("orderStatusTime", newValue)}
                            renderInput={(params) => (
                              <TextField
                                error={Boolean(touched.orderStatusTime && errors.orderStatusTime)}
                                helperText={touched.orderStatusTime && errors.orderStatusTime}
                                label="Enter Time"
                                name="orderStatusTime"
                                variant="outlined"
                                fullWidth
                                {...params}
                              />
                            )}
                          />
                        </DemoContainer>
                      </LocalizationProvider>
                    </RescheduleContainer>
                    <DialogActions>
                      <Button variant="outlined" onClick={handleRescheduleModal}>
                        Cancel
                      </Button>
                      <Button disabled={!dirty || !isValid} type='submit' variant="contained">
                        Reschedule
                      </Button>
                    </DialogActions>
                  </Form>
                )}
              </Formik>
          </Dialog>
        ) : null}
        {isReassign ? (
          <Dialog
            open={isReassign}
            scroll="body"
            onClose={handleReassignModal}
            aria-describedby="scroll-dialog-description"
          >
            <DialogTitle
              id="scroll-dialog-title"
              sx={{
                p: 1,
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "24px",
                lineHeight: "24px",
                letterSpacing: "0.18px",
                color: "#000000",
              }}
            >
              Reassign
            </DialogTitle>
            <Formik
                initialValues={reassginInitialValues}
                onSubmit={(values, formikHelpers) => {
                  values.userTo =  selectRef.current.value;
                  values.order =  param.projectid;
                  values.assignedDate =  dayjs().format('YYYY-MM-DD');
                  dispatch(assignProjectToUser(values));
                  handleReassignModal();
                  console.log('values: ', values);
                }}
                validationSchema={object({
                })}
              >
                {({ errors, touched, isValid, dirty, values, setFieldValue }) => (
                  <Form>
                    <RescheduleContainer sx={{ mb: 14 }}>
                      <ModalHeading>{(projectDetail.data?.order_detail.length > 0 && projectDetail.data?.order_detail[0].service)? projectDetail.data?.order_detail[0].service.name : ''} {param.projectid}</ModalHeading>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                        }}
                      >
                        {
                          staffReassignedList.data?.map((assignedStaff) => {
                            const { firstName, lastName, _id} = assignedStaff.userTo
                            return (
                              <ReAssignBox key={_id + 'assignedStaff'}>
                                <Typography sx={{ fontWeight: "600", color: "#000000" }}>
                                  { firstName + ' ' + lastName}
                                </Typography>
                                <ReAssignRemove type="button" onClick={() => handleDeleteAssignStaff(assignedStaff?._id)}>Remove</ReAssignRemove>
                              </ReAssignBox>
                            )
                          })
                        }
                        <ReAssignBox>
                          <select
                            name="userTo"
                            id="userTo"
                            style={{
                              background: "#FFFFFF",
                              height: "30px",
                              width: "184px",
                              outline: "none",
                              border: 'none',
                            }}
                            ref={selectRef}
                          >
                            {listofAssignStaff.data?.map((assignStaff, index) => {
                              const { firstName, lastName, _id} = assignStaff
                              return (
                                <option value={_id} key={_id + 'assignStaff'}>{firstName + ' ' + lastName}</option>
                              )
                            })}
                          </select>
                          <ReAssignRemove type="submit" sx={{ background: "#019EB2" }}>
                            assign
                          </ReAssignRemove>
                        </ReAssignBox>
                      </Box>
                    </RescheduleContainer>
                    <DialogActions>
                      <Button variant="outlined" onClick={handleReassignModal}>
                        Cancel
                      </Button>
                      <Button type="submit" variant="contained">
                        Save Changes
                      </Button>
                    </DialogActions>
                  </Form>
                )}
            </Formik>
          </Dialog>
        ) : null}
      </div>
    </>
  );
};

export default ProjectDetails;
