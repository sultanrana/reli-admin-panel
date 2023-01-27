import {
  Box,
  Table,
  TableContainer,
  Typography,
  IconButton,
  Button,
  Alert,
} from "@mui/material";
import React from "react";
import BeardcrumNavigator from "../../components/BeardcrumNavigator";
import Sidebar from "../../components/Sidebar";
import Paper from "@mui/material/Paper";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import SearchBox from "../../components/SearchBox";
import { tableCellClasses } from "@mui/material/TableCell";
import { styled } from "@mui/material/styles";
import FilterListRoundedIcon from "@mui/icons-material/FilterListRounded";
import { useDispatch, useSelector } from "react-redux";
import TableLink from "../../components/TableLink";
import ModeRoundedIcon from '@mui/icons-material/ModeRounded';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import { handleAddAdminPortalUserModal, handleEditAdminPortalUserModal } from "../../features/login/loginSlice";
import AddAdminPortalUser from "./AddAdminPortalUser";
import EditAdminPortalUser from "./EditAdminPortalUser";
import { useEffect } from "react";
import { adminPortalUserResponseClr, getPortalUser } from "../../features/admin-portal-user/adminPortalUserSlice";
import Loading from "../../components/Loading";
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import CloseIcon from '@mui/icons-material/Close';
import { CSVLink, CSVDownload } from "react-csv";

const columns = [
  { id: "firstName", label: "Name", minWidth: 100, fontWeight: '600' },
  { id: "email", label: "Email", minWidth: 100, fontWeight: '600' },
  { id: "userType", label: "Role", minWidth: 100, fontWeight: '600' },
  { id: "statusBit", label: "Status", minWidth: 150, fontWeight: '600' },
  { id: "lastActive", label: "Last Active", minWidth: 150, fontWeight: '600' },
  // { id: "actions", label: "Actions", minWidth: 150, fontWeight: '600' },
];

function createData(name, email, role, status, lastActive, 
  // actions
  ) {
  return { name, email, role, status, lastActive,
    //  actions 
    };
}


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
const AdminPortalUser = () => {
  const { isDrawerOpen, isAddAdminPortalUserModal, isEditAdminPortalUserModal } = useSelector((store) => store.login);
  const {portalUsers, isLoading, responseStatus, responseMsg, alert} = useSelector((store) => store.adminPortalUser);
  const dispatch = useDispatch()
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
      Admin Portal User
    </Typography>,
  ];
  // const rows = [
  //   createData(
  //     <TableLink text="John Jenkins" />,
  //     <TableLink text="johnsmith@.co" />,
  //     "Admin",
  //     "Active",
  //     "05/09/22 12:00:00AM PT",
  //   //   <div style={{ 
  //   //     display: 'flex',
  //   //     gap: '10px'
  //   // }}>
  //   //     <IconButton>
  //   //         <DeleteRoundedIcon/>
  //   //     </IconButton>
  //   //     <IconButton onClick={() => dispatch(handleEditAdminPortalUserModal())}>
  //   //         <ModeRoundedIcon/>
  //   //     </IconButton>
  //   // </div>
  //   ),
  //   createData(
  //     <TableLink text="John Jenkins" />,
  //     <TableLink text="johnsmith@.co" />,
  //     "Admin",
  //     "Active",
  //     "05/09/22 12:00:00AM PT",
  //   //   <div style={{ 
  //   //     display: 'flex',
  //   //     gap: '10px'
  //   // }}>
  //   //     <IconButton>
  //   //         <DeleteRoundedIcon/>
  //   //     </IconButton>
  //   //     <IconButton onClick={() => dispatch(handleEditAdminPortalUserModal())}>
  //   //         <ModeRoundedIcon/>
  //   //     </IconButton>
  //   // </div>
  //   ),
  //   createData(
  //     <TableLink text="John Jenkins" />,
  //     <TableLink text="johnsmith@.co" />,
  //     "Admin",
  //     "Active",
  //     "05/09/22 12:00:00AM PT",
  //   //   <div style={{ 
  //   //     display: 'flex',
  //   //     gap: '10px'
  //   // }}>
  //   //     <IconButton>
  //   //         <DeleteRoundedIcon/>
  //   //     </IconButton>
  //   //     <IconButton onClick={() => dispatch(handleEditAdminPortalUserModal())}>
  //   //         <ModeRoundedIcon/>
  //   //     </IconButton>
  //   // </div>
  //   ),
  //   createData(
  //     <TableLink text="John Jenkins" />,
  //     <TableLink text="johnsmith@.co" />,
  //     "Admin",
  //     "Active",
  //     "05/09/22 12:00:00AM PT",
  //   //   <div style={{ 
  //   //     display: 'flex',
  //   //     gap: '10px'
  //   // }}>
  //   //     <IconButton>
  //   //         <DeleteRoundedIcon/>
  //   //     </IconButton>
  //   //     <IconButton onClick={() => dispatch(handleEditAdminPortalUserModal())}>
  //   //         <ModeRoundedIcon/>
  //   //     </IconButton>
  //   // </div>
  //   ),
  //   createData(
  //     <TableLink text="John Jenkins" />,
  //     <TableLink text="johnsmith@.co" />,
  //     "Admin",
  //     "Active",
  //     "05/09/22 12:00:00AM PT",
  //   //   <div style={{ 
  //   //     display: 'flex',
  //   //     gap: '10px'
  //   // }}>
  //   //     <IconButton>
  //   //         <DeleteRoundedIcon/>
  //   //     </IconButton>
  //   //     <IconButton onClick={() => dispatch(handleEditAdminPortalUserModal())}>
  //   //         <ModeRoundedIcon/>
  //   //     </IconButton>
  //   // </div>
  //   ),
  //   createData(
  //     <TableLink text="John Jenkins" />,
  //     <TableLink text="johnsmith@.co" />,
  //     "Admin",
  //     "Active",
  //     "05/09/22 12:00:00AM PT",
  //   //   <div style={{ 
  //   //     display: 'flex',
  //   //     gap: '10px'
  //   // }}>
  //   //     <IconButton>
  //   //         <DeleteRoundedIcon/>
  //   //     </IconButton>
  //   //     <IconButton onClick={() => dispatch(handleEditAdminPortalUserModal())}>
  //   //         <ModeRoundedIcon/>
  //   //     </IconButton>
  //   // </div>
  //   ),
  //   createData(
  //     <TableLink text="John Jenkins" />,
  //     <TableLink text="johnsmith@.co" />,
  //     "Admin",
  //     "Active",
  //     "05/09/22 12:00:00AM PT",
  //   //   <div style={{ 
  //   //     display: 'flex',
  //   //     gap: '10px'
  //   // }}>
  //   //     <IconButton>
  //   //         <DeleteRoundedIcon/>
  //   //     </IconButton>
  //   //     <IconButton onClick={() => dispatch(handleEditAdminPortalUserModal())}>
  //   //         <ModeRoundedIcon/>
  //   //     </IconButton>
  //   // </div>
  //   ),
  //   createData(
  //     <TableLink text="John Jenkins" />,
  //     <TableLink text="johnsmith@.co" />,
  //     "Admin",
  //     "Active",
  //     "05/09/22 12:00:00AM PT",
  //   //   <div style={{ 
  //   //     display: 'flex',
  //   //     gap: '10px'
  //   // }}>
  //   //     <IconButton>
  //   //         <DeleteRoundedIcon/>
  //   //     </IconButton>
  //   //     <IconButton onClick={() => dispatch(handleEditAdminPortalUserModal())}>
  //   //         <ModeRoundedIcon/>
  //   //     </IconButton>
  //   // </div>
  //   ),
  //   createData(
  //     <TableLink text="John Jenkins" />,
  //     <TableLink text="johnsmith@.co" />,
  //     "Admin",
  //     "Active",
  //     "05/09/22 12:00:00AM PT",
  //   //   <div style={{ 
  //   //     display: 'flex',
  //   //     gap: '10px'
  //   // }}>
  //   //     <IconButton>
  //   //         <DeleteRoundedIcon/>
  //   //     </IconButton>
  //   //     <IconButton onClick={() => dispatch(handleEditAdminPortalUserModal())}>
  //   //         <ModeRoundedIcon/>
  //   //     </IconButton>
  //   // </div>
  //   ),
  //   createData(
  //     <TableLink text="John Jenkins" />,
  //     <TableLink text="johnsmith@.co" />,
  //     "Admin",
  //     "Active",
  //     "05/09/22 12:00:00AM PT",
  //   //   <div style={{ 
  //   //     display: 'flex',
  //   //     gap: '10px'
  //   // }}>
  //   //     <IconButton>
  //   //         <DeleteRoundedIcon/>
  //   //     </IconButton>
  //   //     <IconButton onClick={() => dispatch(handleEditAdminPortalUserModal())}>
  //   //         <ModeRoundedIcon/>
  //   //     </IconButton>
  //   // </div>
  //   ),
  //   createData(
  //     <TableLink text="John Jenkins" />,
  //     <TableLink text="johnsmith@.co" />,
  //     "Admin",
  //     "Active",
  //     "05/09/22 12:00:00AM PT",
  //   //   <div style={{ 
  //   //     display: 'flex',
  //   //     gap: '10px'
  //   // }}>
  //   //     <IconButton>
  //   //         <DeleteRoundedIcon/>
  //   //     </IconButton>
  //   //     <IconButton onClick={() => dispatch(handleEditAdminPortalUserModal())}>
  //   //         <ModeRoundedIcon/>
  //   //     </IconButton>
  //   // </div>
  //   ),
  //   createData(
  //     <TableLink text="John Jenkins" />,
  //     <TableLink text="johnsmith@.co" />,
  //     "Admin",
  //     "Active",
  //     "05/09/22 12:00:00AM PT",
  //   //   <div style={{ 
  //   //     display: 'flex',
  //   //     gap: '10px'
  //   // }}>
  //   //     <IconButton>
  //   //         <DeleteRoundedIcon/>
  //   //     </IconButton>
  //   //     <IconButton onClick={() => dispatch(handleEditAdminPortalUserModal())}>
  //   //         <ModeRoundedIcon/>
  //   //     </IconButton>
  //   // </div>
  //   ),
  //   createData(
  //     <TableLink text="John Jenkins" />,
  //     <TableLink text="johnsmith@.co" />,
  //     "Admin",
  //     "Active",
  //     "05/09/22 12:00:00AM PT",
  //   //   <div style={{ 
  //   //     display: 'flex',
  //   //     gap: '10px'
  //   // }}>
  //   //     <IconButton>
  //   //         <DeleteRoundedIcon/>
  //   //     </IconButton>
  //   //     <IconButton onClick={() => dispatch(handleEditAdminPortalUserModal())}>
  //   //         <ModeRoundedIcon/>
  //   //     </IconButton>
  //   // </div>
  //   ),
  //   createData(
  //     <TableLink text="John Jenkins" />,
  //     <TableLink text="johnsmith@.co" />,
  //     "Admin",
  //     "Active",
  //     "05/09/22 12:00:00AM PT",
  //   //   <div style={{ 
  //   //     display: 'flex',
  //   //     gap: '10px'
  //   // }}>
  //   //     <IconButton>
  //   //         <DeleteRoundedIcon/>
  //   //     </IconButton>
  //   //     <IconButton onClick={() => dispatch(handleEditAdminPortalUserModal())}>
  //   //         <ModeRoundedIcon/>
  //   //     </IconButton>
  //   // </div>
  //   ),
  //   createData(
  //     <TableLink text="John Jenkins" />,
  //     <TableLink text="johnsmith@.co" />,
  //     "Admin",
  //     "Active",
  //     "05/09/22 12:00:00AM PT",
  //   //   <div style={{ 
  //   //     display: 'flex',
  //   //     gap: '10px'
  //   // }}>
  //   //     <IconButton>
  //   //         <DeleteRoundedIcon/>
  //   //     </IconButton>
  //   //     <IconButton onClick={() => dispatch(handleEditAdminPortalUserModal())}>
  //   //         <ModeRoundedIcon/>
  //   //     </IconButton>
  //   // </div>
  //   ),
  //   createData(
  //     <TableLink text="John Jenkins" />,
  //     <TableLink text="johnsmith@.co" />,
  //     "Admin",
  //     "Active",
  //     "05/09/22 12:00:00AM PT",
  //   //   <div style={{ 
  //   //     display: 'flex',
  //   //     gap: '10px'
  //   // }}>
  //   //     <IconButton>
  //   //         <DeleteRoundedIcon/>
  //   //     </IconButton>
  //   //     <IconButton onClick={() => dispatch(handleEditAdminPortalUserModal())}>
  //   //         <ModeRoundedIcon/>
  //   //     </IconButton>
  //   // </div>
  //   ),
  //   createData(
  //     <TableLink text="John Jenkins" />,
  //     <TableLink text="johnsmith@.co" />,
  //     "Admin",
  //     "Active",
  //     "05/09/22 12:00:00AM PT",
  //   //   <div style={{ 
  //   //     display: 'flex',
  //   //     gap: '10px'
  //   // }}>
  //   //     <IconButton>
  //   //         <DeleteRoundedIcon/>
  //   //     </IconButton>
  //   //     <IconButton onClick={() => dispatch(handleEditAdminPortalUserModal())}>
  //   //         <ModeRoundedIcon/>
  //   //     </IconButton>
  //   // </div>
  //   ),
  //   createData(
  //     <TableLink text="John Jenkins" />,
  //     <TableLink text="johnsmith@.co" />,
  //     "Admin",
  //     "Active",
  //     "05/09/22 12:00:00AM PT",
  //   //   <div style={{ 
  //   //     display: 'flex',
  //   //     gap: '10px'
  //   // }}>
  //   //     <IconButton>
  //   //         <DeleteRoundedIcon/>
  //   //     </IconButton>
  //   //     <IconButton onClick={() => dispatch(handleEditAdminPortalUserModal())}>
  //   //         <ModeRoundedIcon/>
  //   //     </IconButton>
  //   // </div>
  //   ),
  //   createData(
  //     <TableLink text="John Jenkins" />,
  //     <TableLink text="johnsmith@.co" />,
  //     "Admin",
  //     "Active",
  //     "05/09/22 12:00:00AM PT",
  //   //   <div style={{ 
  //   //     display: 'flex',
  //   //     gap: '10px'
  //   // }}>
  //   //     <IconButton>
  //   //         <DeleteRoundedIcon/>
  //   //     </IconButton>
  //   //     <IconButton onClick={() => dispatch(handleEditAdminPortalUserModal())}>
  //   //         <ModeRoundedIcon/>
  //   //     </IconButton>
  //   // </div>
  //   ),
  //   createData(
  //     <TableLink text="John Jenkins" />,
  //     <TableLink text="johnsmith@.co" />,
  //     "Admin",
  //     "Active",
  //     "05/09/22 12:00:00AM PT",
  //   //   <div style={{ 
  //   //     display: 'flex',
  //   //     gap: '10px'
  //   // }}>
  //   //     <IconButton>
  //   //         <DeleteRoundedIcon/>
  //   //     </IconButton>
  //   //     <IconButton onClick={() => dispatch(handleEditAdminPortalUserModal())}>
  //   //         <ModeRoundedIcon/>
  //   //     </IconButton>
  //   // </div>
  //   ),
  //   createData(
  //     <TableLink text="John Jenkins" />,
  //     <TableLink text="johnsmith@.co" />,
  //     "Admin",
  //     "Active",
  //     "05/09/22 12:00:00AM PT",
  //   //   <div style={{ 
  //   //     display: 'flex',
  //   //     gap: '10px'
  //   // }}>
  //   //     <IconButton>
  //   //         <DeleteRoundedIcon/>
  //   //     </IconButton>
  //   //     <IconButton onClick={() => dispatch(handleEditAdminPortalUserModal())}>
  //   //         <ModeRoundedIcon/>
  //   //     </IconButton>
  //   // </div>
  //   ),
  //   createData(
  //     <TableLink text="John Jenkins" />,
  //     <TableLink text="johnsmith@.co" />,
  //     "Admin",
  //     "Active",
  //     "05/09/22 12:00:00AM PT",
  //   //   <div style={{ 
  //   //     display: 'flex',
  //   //     gap: '10px'
  //   // }}>
  //   //     <IconButton>
  //   //         <DeleteRoundedIcon/>
  //   //     </IconButton>
  //   //     <IconButton onClick={() => dispatch(handleEditAdminPortalUserModal())}>
  //   //         <ModeRoundedIcon/>
  //   //     </IconButton>
  //   // </div>
  //   ),
  //   createData(
  //     <TableLink text="John Jenkins" />,
  //     <TableLink text="johnsmith@.co" />,
  //     "Admin",
  //     "Active",
  //     "05/09/22 12:00:00AM PT",
  //   //   <div style={{ 
  //   //     display: 'flex',
  //   //     gap: '10px'
  //   // }}>
  //   //     <IconButton>
  //   //         <DeleteRoundedIcon/>
  //   //     </IconButton>
  //   //     <IconButton onClick={() => dispatch(handleEditAdminPortalUserModal())}>
  //   //         <ModeRoundedIcon/>
  //   //     </IconButton>
  //   // </div>
  //   ),
  //   createData(
  //     <TableLink text="John Jenkins" />,
  //     <TableLink text="johnsmith@.co" />,
  //     "Admin",
  //     "Active",
  //     "05/09/22 12:00:00AM PT",
  //   //   <div style={{ 
  //   //     display: 'flex',
  //   //     gap: '10px'
  //   // }}>
  //   //     <IconButton>
  //   //         <DeleteRoundedIcon/>
  //   //     </IconButton>
  //   //     <IconButton onClick={() => dispatch(handleEditAdminPortalUserModal())}>
  //   //         <ModeRoundedIcon/>
  //   //     </IconButton>
  //   // </div>
  //   ),
  //   createData(
  //     <TableLink text="John Jenkins" />,
  //     <TableLink text="johnsmith@.co" />,
  //     "Admin",
  //     "Active",
  //     "05/09/22 12:00:00AM PT",
  //   //   <div style={{ 
  //   //     display: 'flex',
  //   //     gap: '10px'
  //   // }}>
  //   //     <IconButton>
  //   //         <DeleteRoundedIcon/>
  //   //     </IconButton>
  //   //     <IconButton onClick={() => dispatch(handleEditAdminPortalUserModal())}>
  //   //         <ModeRoundedIcon/>
  //   //     </IconButton>
  //   // </div>
  //   ),
  //   createData(
  //     <TableLink text="John Jenkins" />,
  //     <TableLink text="johnsmith@.co" />,
  //     "Admin",
  //     "Active",
  //     "05/09/22 12:00:00AM PT",
  //   //   <div style={{ 
  //   //     display: 'flex',
  //   //     gap: '10px'
  //   // }}>
  //   //     <IconButton>
  //   //         <DeleteRoundedIcon/>
  //   //     </IconButton>
  //   //     <IconButton onClick={() => dispatch(handleEditAdminPortalUserModal())}>
  //   //         <ModeRoundedIcon/>
  //   //     </IconButton>
  //   // </div>
  //   ),
  //   createData(
  //     <TableLink text="John Jenkins" />,
  //     <TableLink text="johnsmith@.co" />,
  //     "Admin",
  //     "Active",
  //     "05/09/22 12:00:00AM PT",
  //   //   <div style={{ 
  //   //     display: 'flex',
  //   //     gap: '10px'
  //   // }}>
  //   //     <IconButton>
  //   //         <DeleteRoundedIcon/>
  //   //     </IconButton>
  //   //     <IconButton onClick={() => dispatch(handleEditAdminPortalUserModal())}>
  //   //         <ModeRoundedIcon/>
  //   //     </IconButton>
  //   // </div>
  //   ),
  //   createData(
  //     <TableLink text="John Jenkins" />,
  //     <TableLink text="johnsmith@.co" />,
  //     "Admin",
  //     "Active",
  //     "05/09/22 12:00:00AM PT",
  //   //   <div style={{ 
  //   //     display: 'flex',
  //   //     gap: '10px'
  //   // }}>
  //   //     <IconButton>
  //   //         <DeleteRoundedIcon/>
  //   //     </IconButton>
  //   //     <IconButton onClick={() => dispatch(handleEditAdminPortalUserModal())}>
  //   //         <ModeRoundedIcon/>
  //   //     </IconButton>
  //   // </div>
  //   ),
  //   createData(
  //     <TableLink text="John Jenkins" />,
  //     <TableLink text="johnsmith@.co" />,
  //     "Admin",
  //     "Active",
  //     "05/09/22 12:00:00AM PT",
  //   //   <div style={{ 
  //   //     display: 'flex',
  //   //     gap: '10px'
  //   // }}>
  //   //     <IconButton>
  //   //         <DeleteRoundedIcon/>
  //   //     </IconButton>
  //   //     <IconButton onClick={() => dispatch(handleEditAdminPortalUserModal())}>
  //   //         <ModeRoundedIcon/>
  //   //     </IconButton>
  //   // </div>
  //   ),
  //   createData(
  //     <TableLink text="John Jenkins" />,
  //     <TableLink text="johnsmith@.co" />,
  //     "Admin",
  //     "Active",
  //     "05/09/22 12:00:00AM PT",
  //   //   <div style={{ 
  //   //     display: 'flex',
  //   //     gap: '10px'
  //   // }}>
  //   //     <IconButton>
  //   //         <DeleteRoundedIcon/>
  //   //     </IconButton>
  //   //     <IconButton onClick={() => dispatch(handleEditAdminPortalUserModal())}>
  //   //         <ModeRoundedIcon/>
  //   //     </IconButton>
  //   // </div>
  //   ),
  //   createData(
  //     <TableLink text="John Jenkins" />,
  //     <TableLink text="johnsmith@.co" />,
  //     "Admin",
  //     "Active",
  //     "05/09/22 12:00:00AM PT",
  //   //   <div style={{ 
  //   //     display: 'flex',
  //   //     gap: '10px'
  //   // }}>
  //   //     <IconButton>
  //   //         <DeleteRoundedIcon/>
  //   //     </IconButton>
  //   //     <IconButton onClick={() => dispatch(handleEditAdminPortalUserModal())}>
  //   //         <ModeRoundedIcon/>
  //   //     </IconButton>
  //   // </div>
  //   ),
  //   createData(
  //     <TableLink text="John Jenkins" />,
  //     <TableLink text="johnsmith@.co" />,
  //     "Admin",
  //     "Active",
  //     "05/09/22 12:00:00AM PT",
  //   //   <div style={{ 
  //   //     display: 'flex',
  //   //     gap: '10px'
  //   // }}>
  //   //     <IconButton>
  //   //         <DeleteRoundedIcon/>
  //   //     </IconButton>
  //   //     <IconButton onClick={() => dispatch(handleEditAdminPortalUserModal())}>
  //   //         <ModeRoundedIcon/>
  //   //     </IconButton>
  //   // </div>
  //   ),
  //   createData(
  //     <TableLink text="John Jenkins" />,
  //     <TableLink text="johnsmith@.co" />,
  //     "Admin",
  //     "Active",
  //     "05/09/22 12:00:00AM PT",
  //   //   <div style={{ 
  //   //     display: 'flex',
  //   //     gap: '10px'
  //   // }}>
  //   //     <IconButton>
  //   //         <DeleteRoundedIcon/>
  //   //     </IconButton>
  //   //     <IconButton onClick={() => dispatch(handleEditAdminPortalUserModal())}>
  //   //         <ModeRoundedIcon/>
  //   //     </IconButton>
  //   // </div>
  //   ),
  //   createData(
  //     <TableLink text="John Jenkins" />,
  //     <TableLink text="johnsmith@.co" />,
  //     "Admin",
  //     "Active",
  //     "05/09/22 12:00:00AM PT",
  //   //   <div style={{ 
  //   //     display: 'flex',
  //   //     gap: '10px'
  //   // }}>
  //   //     <IconButton>
  //   //         <DeleteRoundedIcon/>
  //   //     </IconButton>
  //   //     <IconButton onClick={() => dispatch(handleEditAdminPortalUserModal())}>
  //   //         <ModeRoundedIcon/>
  //   //     </IconButton>
  //   // </div>
  //   ),
  //   createData(
  //     <TableLink text="John Jenkins" />,
  //     <TableLink text="johnsmith@.co" />,
  //     "Admin",
  //     "Active",
  //     "05/09/22 12:00:00AM PT",
  //   //   <div style={{ 
  //   //     display: 'flex',
  //   //     gap: '10px'
  //   // }}>
  //   //     <IconButton>
  //   //         <DeleteRoundedIcon/>
  //   //     </IconButton>
  //   //     <IconButton onClick={() => dispatch(handleEditAdminPortalUserModal())}>
  //   //         <ModeRoundedIcon/>
  //   //     </IconButton>
  //   // </div>
  //   ),
  //   createData(
  //     <TableLink text="John Jenkins" />,
  //     <TableLink text="johnsmith@.co" />,
  //     "Admin",
  //     "Active",
  //     "05/09/22 12:00:00AM PT",
  //   //   <div style={{ 
  //   //     display: 'flex',
  //   //     gap: '10px'
  //   // }}>
  //   //     <IconButton>
  //   //         <DeleteRoundedIcon/>
  //   //     </IconButton>
  //   //     <IconButton onClick={() => dispatch(handleEditAdminPortalUserModal())}>
  //   //         <ModeRoundedIcon/>
  //   //     </IconButton>
  //   // </div>
  //   ),
  //   createData(
  //     <TableLink text="John Jenkins" />,
  //     <TableLink text="johnsmith@.co" />,
  //     "Admin",
  //     "Active",
  //     "05/09/22 12:00:00AM PT",
  //   //   <div style={{ 
  //   //     display: 'flex',
  //   //     gap: '10px'
  //   // }}>
  //   //     <IconButton>
  //   //         <DeleteRoundedIcon/>
  //   //     </IconButton>
  //   //     <IconButton onClick={() => dispatch(handleEditAdminPortalUserModal())}>
  //   //         <ModeRoundedIcon/>
  //   //     </IconButton>
  //   // </div>
  //   ),
  //   createData(
  //     <TableLink text="John Jenkins" />,
  //     <TableLink text="johnsmith@.co" />,
  //     "Admin",
  //     "Active",
  //     "05/09/22 12:00:00AM PT",
  //   //   <div style={{ 
  //   //     display: 'flex',
  //   //     gap: '10px'
  //   // }}>
  //   //     <IconButton>
  //   //         <DeleteRoundedIcon/>
  //   //     </IconButton>
  //   //     <IconButton onClick={() => dispatch(handleEditAdminPortalUserModal())}>
  //   //         <ModeRoundedIcon/>
  //   //     </IconButton>
  //   // </div>
  //   ),
  //   createData(
  //     <TableLink text="John Jenkins" />,
  //     <TableLink text="johnsmith@.co" />,
  //     "Admin",
  //     "Active",
  //     "05/09/22 12:00:00AM PT",
  //   //   <div style={{ 
  //   //     display: 'flex',
  //   //     gap: '10px'
  //   // }}>
  //   //     <IconButton>
  //   //         <DeleteRoundedIcon/>
  //   //     </IconButton>
  //   //     <IconButton onClick={() => dispatch(handleEditAdminPortalUserModal())}>
  //   //         <ModeRoundedIcon/>
  //   //     </IconButton>
  //   // </div>
  //   ),
  //   createData(
  //     <TableLink text="John Jenkins" />,
  //     <TableLink text="johnsmith@.co" />,
  //     "Admin",
  //     "Active",
  //     "05/09/22 12:00:00AM PT",
  //   //   <div style={{ 
  //   //     display: 'flex',
  //   //     gap: '10px'
  //   // }}>
  //   //     <IconButton>
  //   //         <DeleteRoundedIcon/>
  //   //     </IconButton>
  //   //     <IconButton onClick={() => dispatch(handleEditAdminPortalUserModal())}>
  //   //         <ModeRoundedIcon/>
  //   //     </IconButton>
  //   // </div>
  //   ),
  //   createData(
  //     <TableLink text="John Jenkins" />,
  //     <TableLink text="johnsmith@.co" />,
  //     "Admin",
  //     "Active",
  //     "05/09/22 12:00:00AM PT",
  //   //   <div style={{ 
  //   //     display: 'flex',
  //   //     gap: '10px'
  //   // }}>
  //   //     <IconButton>
  //   //         <DeleteRoundedIcon/>
  //   //     </IconButton>
  //   //     <IconButton onClick={() => dispatch(handleEditAdminPortalUserModal())}>
  //   //         <ModeRoundedIcon/>
  //   //     </IconButton>
  //   // </div>
  //   ),
  //   createData(
  //     <TableLink text="John Jenkins" />,
  //     <TableLink text="johnsmith@.co" />,
  //     "Admin",
  //     "Active",
  //     "05/09/22 12:00:00AM PT",
  //   //   <div style={{ 
  //   //     display: 'flex',
  //   //     gap: '10px'
  //   // }}>
  //   //     <IconButton>
  //   //         <DeleteRoundedIcon/>
  //   //     </IconButton>
  //   //     <IconButton onClick={() => dispatch(handleEditAdminPortalUserModal())}>
  //   //         <ModeRoundedIcon/>
  //   //     </IconButton>
  //   // </div>
  //   ),
  //   createData(
  //     <TableLink text="John Jenkins" />,
  //     <TableLink text="johnsmith@.co" />,
  //     "Admin",
  //     "Active",
  //     "05/09/22 12:00:00AM PT",
  //   //   <div style={{ 
  //   //     display: 'flex',
  //   //     gap: '10px'
  //   // }}>
  //   //     <IconButton>
  //   //         <DeleteRoundedIcon/>
  //   //     </IconButton>
  //   //     <IconButton onClick={() => dispatch(handleEditAdminPortalUserModal())}>
  //   //         <ModeRoundedIcon/>
  //   //     </IconButton>
  //   // </div>
  //   ),
  //   createData(
  //     <TableLink text="John Jenkins" />,
  //     <TableLink text="johnsmith@.co" />,
  //     "Admin",
  //     "Active",
  //     "05/09/22 12:00:00AM PT",
  //   //   <div style={{ 
  //   //     display: 'flex',
  //   //     gap: '10px'
  //   // }}>
  //   //     <IconButton>
  //   //         <DeleteRoundedIcon/>
  //   //     </IconButton>
  //   //     <IconButton onClick={() => dispatch(handleEditAdminPortalUserModal())}>
  //   //         <ModeRoundedIcon/>
  //   //     </IconButton>
  //   // </div>
  //   ),
  //   createData(
  //     <TableLink text="John Jenkins" />,
  //     <TableLink text="johnsmith@.co" />,
  //     "Admin",
  //     "Active",
  //     "05/09/22 12:00:00AM PT",
  //   //   <div style={{ 
  //   //     display: 'flex',
  //   //     gap: '10px'
  //   // }}>
  //   //     <IconButton>
  //   //         <DeleteRoundedIcon/>
  //   //     </IconButton>
  //   //     <IconButton onClick={() => dispatch(handleEditAdminPortalUserModal())}>
  //   //         <ModeRoundedIcon/>
  //   //     </IconButton>
  //   // </div>
  //   ),
  //   createData(
  //     <TableLink text="John Jenkins" />,
  //     <TableLink text="johnsmith@.co" />,
  //     "Admin",
  //     "Active",
  //     "05/09/22 12:00:00AM PT",
  //   //   <div style={{ 
  //   //     display: 'flex',
  //   //     gap: '10px'
  //   // }}>
  //   //     <IconButton>
  //   //         <DeleteRoundedIcon/>
  //   //     </IconButton>
  //   //     <IconButton onClick={() => dispatch(handleEditAdminPortalUserModal())}>
  //   //         <ModeRoundedIcon/>
  //   //     </IconButton>
  //   // </div>
  //   ),
  //   createData(
  //     <TableLink text="John Jenkins" />,
  //     <TableLink text="johnsmith@.co" />,
  //     "Admin",
  //     "Active",
  //     "05/09/22 12:00:00AM PT",
  //   //   <div style={{ 
  //   //     display: 'flex',
  //   //     gap: '10px'
  //   // }}>
  //   //     <IconButton>
  //   //         <DeleteRoundedIcon/>
  //   //     </IconButton>
  //   //     <IconButton onClick={() => dispatch(handleEditAdminPortalUserModal())}>
  //   //         <ModeRoundedIcon/>
  //   //     </IconButton>
  //   // </div>
  //   ),
  //   createData(
  //     <TableLink text="John Jenkins" />,
  //     <TableLink text="johnsmith@.co" />,
  //     "Admin",
  //     "Active",
  //     "05/09/22 12:00:00AM PT",
  //   //   <div style={{ 
  //   //     display: 'flex',
  //   //     gap: '10px'
  //   // }}>
  //   //     <IconButton>
  //   //         <DeleteRoundedIcon/>
  //   //     </IconButton>
  //   //     <IconButton onClick={() => dispatch(handleEditAdminPortalUserModal())}>
  //   //         <ModeRoundedIcon/>
  //   //     </IconButton>
  //   // </div>
  //   ),
  //   createData(
  //     <TableLink text="John Jenkins" />,
  //     <TableLink text="johnsmith@.co" />,
  //     "Admin",
  //     "Active",
  //     "05/09/22 12:00:00AM PT",
  //   //   <div style={{ 
  //   //     display: 'flex',
  //   //     gap: '10px'
  //   // }}>
  //   //     <IconButton>
  //   //         <DeleteRoundedIcon/>
  //   //     </IconButton>
  //   //     <IconButton onClick={() => dispatch(handleEditAdminPortalUserModal())}>
  //   //         <ModeRoundedIcon/>
  //   //     </IconButton>
  //   // </div>
  //   ),
  //   createData(
  //     <TableLink text="John Jenkins" />,
  //     <TableLink text="johnsmith@.co" />,
  //     "Admin",
  //     "Active",
  //     "05/09/22 12:00:00AM PT",
  //   //   <div style={{ 
  //   //     display: 'flex',
  //   //     gap: '10px'
  //   // }}>
  //   //     <IconButton>
  //   //         <DeleteRoundedIcon/>
  //   //     </IconButton>
  //   //     <IconButton onClick={() => dispatch(handleEditAdminPortalUserModal())}>
  //   //         <ModeRoundedIcon/>
  //   //     </IconButton>
  //   // </div>
  //   ),
  //   createData(
  //     <TableLink text="John Jenkins" />,
  //     <TableLink text="johnsmith@.co" />,
  //     "Admin",
  //     "Active",
  //     "05/09/22 12:00:00AM PT",
  //   //   <div style={{ 
  //   //     display: 'flex',
  //   //     gap: '10px'
  //   // }}>
  //   //     <IconButton>
  //   //         <DeleteRoundedIcon/>
  //   //     </IconButton>
  //   //     <IconButton onClick={() => dispatch(handleEditAdminPortalUserModal())}>
  //   //         <ModeRoundedIcon/>
  //   //     </IconButton>
  //   // </div>
  //   ),
  //   createData(
  //     <TableLink text="John Jenkins" />,
  //     <TableLink text="johnsmith@.co" />,
  //     "Admin",
  //     "Active",
  //     "05/09/22 12:00:00AM PT",
  //   //   <div style={{ 
  //   //     display: 'flex',
  //   //     gap: '10px'
  //   // }}>
  //   //     <IconButton>
  //   //         <DeleteRoundedIcon/>
  //   //     </IconButton>
  //   //     <IconButton onClick={() => dispatch(handleEditAdminPortalUserModal())}>
  //   //         <ModeRoundedIcon/>
  //   //     </IconButton>
  //   // </div>
  //   ),
  //   createData(
  //     <TableLink text="John Jenkins" />,
  //     <TableLink text="johnsmith@.co" />,
  //     "Admin",
  //     "Active",
  //     "05/09/22 12:00:00AM PT",
  //   //   <div style={{ 
  //   //     display: 'flex',
  //   //     gap: '10px'
  //   // }}>
  //   //     <IconButton>
  //   //         <DeleteRoundedIcon/>
  //   //     </IconButton>
  //   //     <IconButton onClick={() => dispatch(handleEditAdminPortalUserModal())}>
  //   //         <ModeRoundedIcon/>
  //   //     </IconButton>
  //   // </div>
  //   ),
  //   createData(
  //     <TableLink text="John Jenkins" />,
  //     <TableLink text="johnsmith@.co" />,
  //     "Admin",
  //     "Active",
  //     "05/09/22 12:00:00AM PT",
  //   //   <div style={{ 
  //   //     display: 'flex',
  //   //     gap: '10px'
  //   // }}>
  //   //     <IconButton>
  //   //         <DeleteRoundedIcon/>
  //   //     </IconButton>
  //   //     <IconButton onClick={() => dispatch(handleEditAdminPortalUserModal())}>
  //   //         <ModeRoundedIcon/>
  //   //     </IconButton>
  //   // </div>
  //   ),
  //   createData(
  //     <TableLink text="John Jenkins" />,
  //     <TableLink text="johnsmith@.co" />,
  //     "Admin",
  //     "Active",
  //     "05/09/22 12:00:00AM PT",
  //   //   <div style={{ 
  //   //     display: 'flex',
  //   //     gap: '10px'
  //   // }}>
  //   //     <IconButton>
  //   //         <DeleteRoundedIcon/>
  //   //     </IconButton>
  //   //     <IconButton onClick={() => dispatch(handleEditAdminPortalUserModal())}>
  //   //         <ModeRoundedIcon/>
  //   //     </IconButton>
  //   // </div>
  //   ),
  // ];
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [searchValue, setSearchValue] = React.useState('');
  const [alertDialog, setAlertDialog] = React.useState(false);
  const portalUserData = JSON.parse(localStorage.getItem('portalUsers'));
  const [rows, setRows] = React.useState();
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };


  const handleSearch = (searchedValue) => {
    setSearchValue(searchedValue)
    const filteredRows = rows?.filter((row) => {
        return row.firstName.toLowerCase().includes(searchedValue.toLowerCase());
      
    });
    console.log(filteredRows, searchedValue);
    if(searchedValue !='' && filteredRows.length > 0){
      setRows(filteredRows);
      setPage(0);
    }else{
      setRows(portalUsers.data)
    }
  }

  useEffect(() => {
    dispatch(getPortalUser());
    setAlertDialog(alert);
  }, [alert]);

  if(isLoading){
    return (
        <Loading/>
    )
  }

  return (
    <div className="page-section">
      <Sidebar />
      <Box
        className="page-content"
        sx={{
          width: isDrawerOpen ? `calc(100% - 240px)` : `calc(100% - 57px)`, overflow: "hidden"
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
          <Box
            component="div"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            <CSVLink data={portalUsers.data ? portalUsers.data : "No data available yet."}>
              <Button
                variant="outlined"
                className="bc-btn-outline"
                color="primary"
              >
                Export csv
              </Button>
            </CSVLink>
            <Button
              variant="outlined"
              className="bc-btn-outline"
              color="primary"
              onClick={() => dispatch(handleAddAdminPortalUserModal())}
            >
              Add User
            </Button>
          </Box>
        </Box>
        <Box
          component="div"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            alignItems: "center",
            mb: 3,
          }}
        >
          <Box component="div">
            {/* <SearchBox /> */}
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
            <input type="text" value={searchValue} placeholder='Search' className='search-input' onChange={(e) =>  handleSearch(e.target.value)} />
        </Box>
          </Box>
          {/* <IconButton aria-label="filter-icon" size="large">
            <FilterListRoundedIcon />
          </IconButton> */}
        </Box>
        <Box sx={{width: '100%'}}>
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
                        dispatch(adminPortalUserResponseClr(false));
                        setAlertDialog(false)
                      }}
                    >
                      <CloseIcon fontSize="inherit" />
                    </IconButton>
                  }
                >{responseMsg}</Alert>
              ) : null
            }
        </Box>
        <Paper sx={{ width: "100%", overflow: "hidden" }}>
          <TableContainer>
            <Table stickyHeader aria-label="sticky table" sx={{}}>
              <TableHead>
                <StyledTableRow>
                  {columns.map((column) => (
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
                {portalUsers.data?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => {
                    return (
                      <StyledTableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={row.id}
                      >
                        {columns.map((column) => {
                          const value = row[column.id];
                          return (
                            <StyledTableCell
                              key={column.id}
                              align={column.align}
                            >
                              {/* {column.format && typeof value === "number"
                                ? column.format(value)
                                : value} */}
                                {typeof value === 'boolean' ? (value === true ? 'Enaled' : 'Disabled') : value}
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
            count={portalUsers.data ? portalUsers.data.length : 0}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </Box>
      {isAddAdminPortalUserModal ? (
        <AddAdminPortalUser/>
      ) : null}
      {isEditAdminPortalUserModal ? (
        <EditAdminPortalUser/>
      ) : null}
    </div>
  );
};

export default AdminPortalUser;
