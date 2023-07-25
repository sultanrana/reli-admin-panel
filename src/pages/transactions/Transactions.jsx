import {
  Box,
  Table,
  TableContainer,
  Typography,
  IconButton,
  Button,
} from "@mui/material";
import React, { useEffect } from "react";
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
import ModeRoundedIcon from "@mui/icons-material/ModeRounded";
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import FilterListRoundedIcon from "@mui/icons-material/FilterListRounded";
import { useDispatch, useSelector } from "react-redux";
import TableLink from "../../components/TableLink";
import TableActions from "../../components/TableActions";
import { getTransactions } from "../../features/transactions/transactionSlice";
import Loading from "../../components/Loading";
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import { CSVLink, CSVDownload } from "react-csv";
import moment from "moment/moment";

const columns = [
  {
    id: "stripePaymentId",
    label: "Transaction ID",
    minWidth: 100,
    fontWeight: "600",
  },
  { id: "_id", label: "Product ID", minWidth: 100, fontWeight: "600" },
  { id: "name", label: "Name", minWidth: 100, fontWeight: "600" },
  { id: "payeeType", label: "Payee Type", minWidth: 100, fontWeight: "600" },
  { id: "serviceType", label: "ServiceType", minWidth: 150, fontWeight: "600" },
  {
    id: "transactionType",
    label: "Transaction Type",
    minWidth: 150,
    fontWeight: "600",
  },
  { id: "city", label: "City", minWidth: 100, fontWeight: "600" },
  { id: "state", label: "State", minWidth: 100, fontWeight: "600" },
  { id: "zip", label: "Zip", minWidth: 100, fontWeight: "600" },
  { id: "ordered", label: "Ordered", minWidth: 160, fontWeight: "600" },
  // { id: "scheduled", label: "Scheduled", minWidth: 100, fontWeight: "600" },
  // { id: "completed", label: "Completed", minWidth: 100, fontWeight: "600" },
  { id: "totalAmount", label: "Amount", minWidth: 100, fontWeight: "600" },
  // { id: "couponCode", label: "CouponCode", minWidth: 100, fontWeight: "600" },
  // { id: "couponValue", label: "CouponValue", minWidth: 100, fontWeight: "600" },  
  // { id: "actions", label: "Actions", minWidth: 150, fontWeight: '600' },
];

function createData(
  transactionId,
  productId,
  name,
  payeeType,
  serviceType,
  transactionType,
  city,
  state,
  zip,
  ordered,
  scheduled,
  completed,
  amount,
  couponCode,
  couponValue,
  // actions
) {
  return {
    transactionId,
    productId,
    name,
    payeeType,
    serviceType,
    transactionType,
    city,
    state,
    zip,
    ordered,
    scheduled,
    completed,
    amount,
    couponCode,
    couponValue,
    // actions,
  };
}

const rows = [
  createData(
    "TRO859454",
    <TableLink text="PROJ58549" />,
    <TableLink text="John Jenkins" />,
    "Cutomers",
    "Door",
    "Customer Payment",
    "Costa Mesa",
    "SA",
    "55555",
    "04/15/22",
    "05/01/22",
    "05/01/22",
    "$250.00",
    "05/01/22",
    "$250.00",
  //   <div style={{ 
  //     display: 'flex',
  //     gap: '10px'
  // }}>
  //     <IconButton>
  //         <DeleteRoundedIcon/>
  //     </IconButton>
  // </div>
  ),
  createData(
    "TRO859454",
    <TableLink text="PROJ58549" />,
    <TableLink text="John Jenkins" />,
    "Cutomers",
    "Door",
    "Customer Payment",
    "Costa Mesa",
    "SA",
    "55555",
    "04/15/22",
    "05/01/22",
    "05/01/22",
    "$250.00",
    "05/01/22",
    "$250.00",
  //   <div style={{ 
  //     display: 'flex',
  //     gap: '10px'
  // }}>
  //     <IconButton>
  //         <DeleteRoundedIcon/>
  //     </IconButton>
  // </div>
  ),
  createData(
    "TRO859454",
    <TableLink text="PROJ58549" />,
    <TableLink text="John Jenkins" />,
    "Cutomers",
    "Door",
    "Customer Payment",
    "Costa Mesa",
    "SA",
    "55555",
    "04/15/22",
    "05/01/22",
    "05/01/22",
    "$250.00",
    "05/01/22",
    "$250.00",
  //   <div style={{ 
  //     display: 'flex',
  //     gap: '10px'
  // }}>
  //     <IconButton>
  //         <DeleteRoundedIcon/>
  //     </IconButton>
  // </div>
  ),
  createData(
    "TRO859454",
    <TableLink text="PROJ58549" />,
    <TableLink text="John Jenkins" />,
    "Cutomers",
    "Door",
    "Customer Payment",
    "Costa Mesa",
    "SA",
    "55555",
    "04/15/22",
    "05/01/22",
    "05/01/22",
    "$250.00",
    "05/01/22",
    "$250.00",
  //   <div style={{ 
  //     display: 'flex',
  //     gap: '10px'
  // }}>
  //     <IconButton>
  //         <DeleteRoundedIcon/>
  //     </IconButton>
  // </div>
  ),
  createData(
    "TRO859454",
    <TableLink text="PROJ58549" />,
    <TableLink text="John Jenkins" />,
    "Cutomers",
    "Door",
    "Customer Payment",
    "Costa Mesa",
    "SA",
    "55555",
    "04/15/22",
    "05/01/22",
    "05/01/22",
    "$250.00",
    "05/01/22",
    "$250.00",
  //   <div style={{ 
  //     display: 'flex',
  //     gap: '10px'
  // }}>
  //     <IconButton>
  //         <DeleteRoundedIcon/>
  //     </IconButton>
  // </div>
  ),
  createData(
    "TRO859454",
    <TableLink text="PROJ58549" />,
    <TableLink text="John Jenkins" />,
    "Cutomers",
    "Door",
    "Customer Payment",
    "Costa Mesa",
    "SA",
    "55555",
    "04/15/22",
    "05/01/22",
    "05/01/22",
    "$250.00",
    "05/01/22",
    "$250.00",
  //   <div style={{ 
  //     display: 'flex',
  //     gap: '10px'
  // }}>
  //     <IconButton>
  //         <DeleteRoundedIcon/>
  //     </IconButton>
  // </div>
  ),
  createData(
    "TRO859454",
    <TableLink text="PROJ58549" />,
    <TableLink text="John Jenkins" />,
    "Cutomers",
    "Door",
    "Customer Payment",
    "Costa Mesa",
    "SA",
    "55555",
    "04/15/22",
    "05/01/22",
    "05/01/22",
    "$250.00",
    "05/01/22",
    "$250.00",
  //   <div style={{ 
  //     display: 'flex',
  //     gap: '10px'
  // }}>
  //     <IconButton>
  //         <DeleteRoundedIcon/>
  //     </IconButton>
  // </div>
  ),
  createData(
    "TRO859454",
    <TableLink text="PROJ58549" />,
    <TableLink text="John Jenkins" />,
    "Cutomers",
    "Door",
    "Customer Payment",
    "Costa Mesa",
    "SA",
    "55555",
    "04/15/22",
    "05/01/22",
    "05/01/22",
    "$250.00",
    "05/01/22",
    "$250.00",
  //   <div style={{ 
  //     display: 'flex',
  //     gap: '10px'
  // }}>
  //     <IconButton>
  //         <DeleteRoundedIcon/>
  //     </IconButton>
  // </div>
  ),
  createData(
    "TRO859454",
    <TableLink text="PROJ58549" />,
    <TableLink text="John Jenkins" />,
    "Cutomers",
    "Door",
    "Customer Payment",
    "Costa Mesa",
    "SA",
    "55555",
    "04/15/22",
    "05/01/22",
    "05/01/22",
    "$250.00",
    "05/01/22",
    "$250.00",
  //   <div style={{ 
  //     display: 'flex',
  //     gap: '10px'
  // }}>
  //     <IconButton>
  //         <DeleteRoundedIcon/>
  //     </IconButton>
  // </div>
  ),
  createData(
    "TRO859454",
    <TableLink text="PROJ58549" />,
    <TableLink text="John Jenkins" />,
    "Cutomers",
    "Door",
    "Customer Payment",
    "Costa Mesa",
    "SA",
    "55555",
    "04/15/22",
    "05/01/22",
    "05/01/22",
    "$250.00",
    "05/01/22",
    "$250.00",
  //   <div style={{ 
  //     display: 'flex',
  //     gap: '10px'
  // }}>
  //     <IconButton>
  //         <DeleteRoundedIcon/>
  //     </IconButton>
  // </div>
  ),
  createData(
    "TRO859454",
    <TableLink text="PROJ58549" />,
    <TableLink text="John Jenkins" />,
    "Cutomers",
    "Door",
    "Customer Payment",
    "Costa Mesa",
    "SA",
    "55555",
    "04/15/22",
    "05/01/22",
    "05/01/22",
    "$250.00",
    "05/01/22",
    "$250.00",
  //   <div style={{ 
  //     display: 'flex',
  //     gap: '10px'
  // }}>
  //     <IconButton>
  //         <DeleteRoundedIcon/>
  //     </IconButton>
  // </div>
  ),
  createData(
    "TRO859454",
    <TableLink text="PROJ58549" />,
    <TableLink text="John Jenkins" />,
    "Cutomers",
    "Door",
    "Customer Payment",
    "Costa Mesa",
    "SA",
    "55555",
    "04/15/22",
    "05/01/22",
    "05/01/22",
    "$250.00",
    "05/01/22",
    "$250.00",
  //   <div style={{ 
  //     display: 'flex',
  //     gap: '10px'
  // }}>
  //     <IconButton>
  //         <DeleteRoundedIcon/>
  //     </IconButton>
  // </div>
  ),
  createData(
    "TRO859454",
    <TableLink text="PROJ58549" />,
    <TableLink text="John Jenkins" />,
    "Cutomers",
    "Door",
    "Customer Payment",
    "Costa Mesa",
    "SA",
    "55555",
    "04/15/22",
    "05/01/22",
    "05/01/22",
    "$250.00",
    "05/01/22",
    "$250.00",
  //   <div style={{ 
  //     display: 'flex',
  //     gap: '10px'
  // }}>
  //     <IconButton>
  //         <DeleteRoundedIcon/>
  //     </IconButton>
  // </div>
  ),
  createData(
    "TRO859454",
    <TableLink text="PROJ58549" />,
    <TableLink text="John Jenkins" />,
    "Cutomers",
    "Door",
    "Customer Payment",
    "Costa Mesa",
    "SA",
    "55555",
    "04/15/22",
    "05/01/22",
    "05/01/22",
    "$250.00",
    "05/01/22",
    "$250.00",
  //   <div style={{ 
  //     display: 'flex',
  //     gap: '10px'
  // }}>
  //     <IconButton>
  //         <DeleteRoundedIcon/>
  //     </IconButton>
  // </div>
  ),
  createData(
    "TRO859454",
    <TableLink text="PROJ58549" />,
    <TableLink text="John Jenkins" />,
    "Cutomers",
    "Door",
    "Customer Payment",
    "Costa Mesa",
    "SA",
    "55555",
    "04/15/22",
    "05/01/22",
    "05/01/22",
    "$250.00",
    "05/01/22",
    "$250.00",
  //   <div style={{ 
  //     display: 'flex',
  //     gap: '10px'
  // }}>
  //     <IconButton>
  //         <DeleteRoundedIcon/>
  //     </IconButton>
  // </div>
  ),
  createData(
    "TRO859454",
    <TableLink text="PROJ58549" />,
    <TableLink text="John Jenkins" />,
    "Cutomers",
    "Door",
    "Customer Payment",
    "Costa Mesa",
    "SA",
    "55555",
    "04/15/22",
    "05/01/22",
    "05/01/22",
    "$250.00",
    "05/01/22",
    "$250.00",
  //   <div style={{ 
  //     display: 'flex',
  //     gap: '10px'
  // }}>
  //     <IconButton>
  //         <DeleteRoundedIcon/>
  //     </IconButton>
  // </div>
  ),
  createData(
    "TRO859454",
    <TableLink text="PROJ58549" />,
    <TableLink text="John Jenkins" />,
    "Cutomers",
    "Door",
    "Customer Payment",
    "Costa Mesa",
    "SA",
    "55555",
    "04/15/22",
    "05/01/22",
    "05/01/22",
    "$250.00",
    "05/01/22",
    "$250.00",
  //   <div style={{ 
  //     display: 'flex',
  //     gap: '10px'
  // }}>
  //     <IconButton>
  //         <DeleteRoundedIcon/>
  //     </IconButton>
  // </div>
  ),
  createData(
    "TRO859454",
    <TableLink text="PROJ58549" />,
    <TableLink text="John Jenkins" />,
    "Cutomers",
    "Door",
    "Customer Payment",
    "Costa Mesa",
    "SA",
    "55555",
    "04/15/22",
    "05/01/22",
    "05/01/22",
    "$250.00",
    "05/01/22",
    "$250.00",
  //   <div style={{ 
  //     display: 'flex',
  //     gap: '10px'
  // }}>
  //     <IconButton>
  //         <DeleteRoundedIcon/>
  //     </IconButton>
  // </div>
  ),
  createData(
    "TRO859454",
    <TableLink text="PROJ58549" />,
    <TableLink text="John Jenkins" />,
    "Cutomers",
    "Door",
    "Customer Payment",
    "Costa Mesa",
    "SA",
    "55555",
    "04/15/22",
    "05/01/22",
    "05/01/22",
    "$250.00",
    "05/01/22",
    "$250.00",
  //   <div style={{ 
  //     display: 'flex',
  //     gap: '10px'
  // }}>
  //     <IconButton>
  //         <DeleteRoundedIcon/>
  //     </IconButton>
  // </div>
  ),
  createData(
    "TRO859454",
    <TableLink text="PROJ58549" />,
    <TableLink text="John Jenkins" />,
    "Cutomers",
    "Door",
    "Customer Payment",
    "Costa Mesa",
    "SA",
    "55555",
    "04/15/22",
    "05/01/22",
    "05/01/22",
    "$250.00",
    "05/01/22",
    "$250.00",
  //   <div style={{ 
  //     display: 'flex',
  //     gap: '10px'
  // }}>
  //     <IconButton>
  //         <DeleteRoundedIcon/>
  //     </IconButton>
  // </div>
  ),
  createData(
    "TRO859454",
    <TableLink text="PROJ58549" />,
    <TableLink text="John Jenkins" />,
    "Cutomers",
    "Door",
    "Customer Payment",
    "Costa Mesa",
    "SA",
    "55555",
    "04/15/22",
    "05/01/22",
    "05/01/22",
    "$250.00",
    "05/01/22",
    "$250.00",
  //   <div style={{ 
  //     display: 'flex',
  //     gap: '10px'
  // }}>
  //     <IconButton>
  //         <DeleteRoundedIcon/>
  //     </IconButton>
  // </div>
  ),
  createData(
    "TRO859454",
    <TableLink text="PROJ58549" />,
    <TableLink text="John Jenkins" />,
    "Cutomers",
    "Door",
    "Customer Payment",
    "Costa Mesa",
    "SA",
    "55555",
    "04/15/22",
    "05/01/22",
    "05/01/22",
    "$250.00",
    "05/01/22",
    "$250.00",
  //   <div style={{ 
  //     display: 'flex',
  //     gap: '10px'
  // }}>
  //     <IconButton>
  //         <DeleteRoundedIcon/>
  //     </IconButton>
  // </div>
  ),
  createData(
    "TRO859454",
    <TableLink text="PROJ58549" />,
    <TableLink text="John Jenkins" />,
    "Cutomers",
    "Door",
    "Customer Payment",
    "Costa Mesa",
    "SA",
    "55555",
    "04/15/22",
    "05/01/22",
    "05/01/22",
    "$250.00",
    "05/01/22",
    "$250.00",
  //   <div style={{ 
  //     display: 'flex',
  //     gap: '10px'
  // }}>
  //     <IconButton>
  //         <DeleteRoundedIcon/>
  //     </IconButton>
  // </div>
  ),
  createData(
    "TRO859454",
    <TableLink text="PROJ58549" />,
    <TableLink text="John Jenkins" />,
    "Cutomers",
    "Door",
    "Customer Payment",
    "Costa Mesa",
    "SA",
    "55555",
    "04/15/22",
    "05/01/22",
    "05/01/22",
    "$250.00",
    "05/01/22",
    "$250.00",
  //   <div style={{ 
  //     display: 'flex',
  //     gap: '10px'
  // }}>
  //     <IconButton>
  //         <DeleteRoundedIcon/>
  //     </IconButton>
  // </div>
  ),
  createData(
    "TRO859454",
    <TableLink text="PROJ58549" />,
    <TableLink text="John Jenkins" />,
    "Cutomers",
    "Door",
    "Customer Payment",
    "Costa Mesa",
    "SA",
    "55555",
    "04/15/22",
    "05/01/22",
    "05/01/22",
    "$250.00",
    "05/01/22",
    "$250.00",
  //   <div style={{ 
  //     display: 'flex',
  //     gap: '10px'
  // }}>
  //     <IconButton>
  //         <DeleteRoundedIcon/>
  //     </IconButton>
  // </div>
  ),
  createData(
    "TRO859454",
    <TableLink text="PROJ58549" />,
    <TableLink text="John Jenkins" />,
    "Cutomers",
    "Door",
    "Customer Payment",
    "Costa Mesa",
    "SA",
    "55555",
    "04/15/22",
    "05/01/22",
    "05/01/22",
    "$250.00",
    "05/01/22",
    "$250.00",
  //   <div style={{ 
  //     display: 'flex',
  //     gap: '10px'
  // }}>
  //     <IconButton>
  //         <DeleteRoundedIcon/>
  //     </IconButton>
  // </div>
  ),
  createData(
    "TRO859454",
    <TableLink text="PROJ58549" />,
    <TableLink text="John Jenkins" />,
    "Cutomers",
    "Door",
    "Customer Payment",
    "Costa Mesa",
    "SA",
    "55555",
    "04/15/22",
    "05/01/22",
    "05/01/22",
    "$250.00",
    "05/01/22",
    "$250.00",
  //   <div style={{ 
  //     display: 'flex',
  //     gap: '10px'
  // }}>
  //     <IconButton>
  //         <DeleteRoundedIcon/>
  //     </IconButton>
  // </div>
  ),
  createData(
    "TRO859454",
    <TableLink text="PROJ58549" />,
    <TableLink text="John Jenkins" />,
    "Cutomers",
    "Door",
    "Customer Payment",
    "Costa Mesa",
    "SA",
    "55555",
    "04/15/22",
    "05/01/22",
    "05/01/22",
    "$250.00",
    "05/01/22",
    "$250.00",
  //   <div style={{ 
  //     display: 'flex',
  //     gap: '10px'
  // }}>
  //     <IconButton>
  //         <DeleteRoundedIcon/>
  //     </IconButton>
  // </div>
  ),
  createData(
    "TRO859454",
    <TableLink text="PROJ58549" />,
    <TableLink text="John Jenkins" />,
    "Cutomers",
    "Door",
    "Customer Payment",
    "Costa Mesa",
    "SA",
    "55555",
    "04/15/22",
    "05/01/22",
    "05/01/22",
    "$250.00",
    "05/01/22",
    "$250.00",
  //   <div style={{ 
  //     display: 'flex',
  //     gap: '10px'
  // }}>
  //     <IconButton>
  //         <DeleteRoundedIcon/>
  //     </IconButton>
  // </div>
  ),
  createData(
    "TRO859454",
    <TableLink text="PROJ58549" />,
    <TableLink text="John Jenkins" />,
    "Cutomers",
    "Door",
    "Customer Payment",
    "Costa Mesa",
    "SA",
    "55555",
    "04/15/22",
    "05/01/22",
    "05/01/22",
    "$250.00",
    "05/01/22",
    "$250.00",
  //   <div style={{ 
  //     display: 'flex',
  //     gap: '10px'
  // }}>
  //     <IconButton>
  //         <DeleteRoundedIcon/>
  //     </IconButton>
  // </div>
  ),
  createData(
    "TRO859454",
    <TableLink text="PROJ58549" />,
    <TableLink text="John Jenkins" />,
    "Cutomers",
    "Door",
    "Customer Payment",
    "Costa Mesa",
    "SA",
    "55555",
    "04/15/22",
    "05/01/22",
    "05/01/22",
    "$250.00",
    "05/01/22",
    "$250.00",
  //   <div style={{ 
  //     display: 'flex',
  //     gap: '10px'
  // }}>
  //     <IconButton>
  //         <DeleteRoundedIcon/>
  //     </IconButton>
  // </div>
  ),
  createData(
    "TRO859454",
    <TableLink text="PROJ58549" />,
    <TableLink text="John Jenkins" />,
    "Cutomers",
    "Door",
    "Customer Payment",
    "Costa Mesa",
    "SA",
    "55555",
    "04/15/22",
    "05/01/22",
    "05/01/22",
    "$250.00",
    "05/01/22",
    "$250.00",
  //   <div style={{ 
  //     display: 'flex',
  //     gap: '10px'
  // }}>
  //     <IconButton>
  //         <DeleteRoundedIcon/>
  //     </IconButton>
  // </div>
  ),
  createData(
    "TRO859454",
    <TableLink text="PROJ58549" />,
    <TableLink text="John Jenkins" />,
    "Cutomers",
    "Door",
    "Customer Payment",
    "Costa Mesa",
    "SA",
    "55555",
    "04/15/22",
    "05/01/22",
    "05/01/22",
    "$250.00",
    "05/01/22",
    "$250.00",
  //   <div style={{ 
  //     display: 'flex',
  //     gap: '10px'
  // }}>
  //     <IconButton>
  //         <DeleteRoundedIcon/>
  //     </IconButton>
  // </div>
  ),
  createData(
    "TRO859454",
    <TableLink text="PROJ58549" />,
    <TableLink text="John Jenkins" />,
    "Cutomers",
    "Door",
    "Customer Payment",
    "Costa Mesa",
    "SA",
    "55555",
    "04/15/22",
    "05/01/22",
    "05/01/22",
    "$250.00",
    "05/01/22",
    "$250.00",
  //   <div style={{ 
  //     display: 'flex',
  //     gap: '10px'
  // }}>
  //     <IconButton>
  //         <DeleteRoundedIcon/>
  //     </IconButton>
  // </div>
  ),
  createData(
    "TRO859454",
    <TableLink text="PROJ58549" />,
    <TableLink text="John Jenkins" />,
    "Cutomers",
    "Door",
    "Customer Payment",
    "Costa Mesa",
    "SA",
    "55555",
    "04/15/22",
    "05/01/22",
    "05/01/22",
    "$250.00",
    "05/01/22",
    "$250.00",
  //   <div style={{ 
  //     display: 'flex',
  //     gap: '10px'
  // }}>
  //     <IconButton>
  //         <DeleteRoundedIcon/>
  //     </IconButton>
  // </div>
  ),
  createData(
    "TRO859454",
    <TableLink text="PROJ58549" />,
    <TableLink text="John Jenkins" />,
    "Cutomers",
    "Door",
    "Customer Payment",
    "Costa Mesa",
    "SA",
    "55555",
    "04/15/22",
    "05/01/22",
    "05/01/22",
    "$250.00",
    "05/01/22",
    "$250.00",
  //   <div style={{ 
  //     display: 'flex',
  //     gap: '10px'
  // }}>
  //     <IconButton>
  //         <DeleteRoundedIcon/>
  //     </IconButton>
  // </div>
  ),
  createData(
    "TRO859454",
    <TableLink text="PROJ58549" />,
    <TableLink text="John Jenkins" />,
    "Cutomers",
    "Door",
    "Customer Payment",
    "Costa Mesa",
    "SA",
    "55555",
    "04/15/22",
    "05/01/22",
    "05/01/22",
    "$250.00",
    "05/01/22",
    "$250.00",
  //   <div style={{ 
  //     display: 'flex',
  //     gap: '10px'
  // }}>
  //     <IconButton>
  //         <DeleteRoundedIcon/>
  //     </IconButton>
  // </div>
  ),
  createData(
    "TRO859454",
    <TableLink text="PROJ58549" />,
    <TableLink text="John Jenkins" />,
    "Cutomers",
    "Door",
    "Customer Payment",
    "Costa Mesa",
    "SA",
    "55555",
    "04/15/22",
    "05/01/22",
    "05/01/22",
    "$250.00",
    "05/01/22",
    "$250.00",
  //   <div style={{ 
  //     display: 'flex',
  //     gap: '10px'
  // }}>
  //     <IconButton>
  //         <DeleteRoundedIcon/>
  //     </IconButton>
  // </div>
  ),
  createData(
    "TRO859454",
    <TableLink text="PROJ58549" />,
    <TableLink text="John Jenkins" />,
    "Cutomers",
    "Door",
    "Customer Payment",
    "Costa Mesa",
    "SA",
    "55555",
    "04/15/22",
    "05/01/22",
    "05/01/22",
    "$250.00",
    "05/01/22",
    "$250.00",
  //   <div style={{ 
  //     display: 'flex',
  //     gap: '10px'
  // }}>
  //     <IconButton>
  //         <DeleteRoundedIcon/>
  //     </IconButton>
  // </div>
  ),
  createData(
    "TRO859454",
    <TableLink text="PROJ58549" />,
    <TableLink text="John Jenkins" />,
    "Cutomers",
    "Door",
    "Customer Payment",
    "Costa Mesa",
    "SA",
    "55555",
    "04/15/22",
    "05/01/22",
    "05/01/22",
    "$250.00",
    "05/01/22",
    "$250.00",
  //   <div style={{ 
  //     display: 'flex',
  //     gap: '10px'
  // }}>
  //     <IconButton>
  //         <DeleteRoundedIcon/>
  //     </IconButton>
  // </div>
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
const Transactions = () => {
  const { isDrawerOpen } = useSelector((store) => store.login);
  const { isLoading, transactions } = useSelector((store) => store.transaction);
  const dispatch = useDispatch();

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
      Transactions
    </Typography>,
  ];
  const [searchValue, setSearchValue] = React.useState('');
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  useEffect(() => {
    dispatch(getTransactions());
  }, []);

  const handleSearch = (searchedValue) => {
    setSearchValue(searchedValue)
    // const filteredRows = rows?.filter((row) => {
    //   if(row.firstName)
    //     return row.firstName.toLowerCase().includes(searchedValue.toLowerCase());
    //   else if(row.lastName)
    //     return row.lastName.toLowerCase().includes(searchedValue.toLowerCase());
    //   else if(row.email)
    //     return row.email.toLowerCase().includes(searchedValue.toLowerCase());
    //   else if(row.phoneNumber)
    //     return row.phoneNumber.toString().toLowerCase().includes(searchedValue.toLowerCase());
      
    // });
    // // console.log(filteredRows, searchedValue);
    // if(searchedValue != '' && filteredRows.length > 0){
    //   setRows(filteredRows)
    // }else{
    //   setRows(customers.data)
    // }
  }

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
            <CSVLink data={transactions.data ? transactions.data : 'No data available yet'}>
              <Button
                variant="outlined"
                className="bc-btn-outline"
                color="primary"
                >
                Export csv
              </Button>
            </CSVLink>
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
            <input type="text" value={searchValue} placeholder='Search Transactions' className='search-input' onChange={(e) =>  handleSearch(e.target.value.toLowerCase())} />
        </Box>
          </Box>
          {/* <IconButton aria-label="filter-icon" size="large">
            <FilterListRoundedIcon />
          </IconButton> */}
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
                {transactions.data?.filter((data) => data.name?.toLowerCase().includes(searchValue))
                  ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => {
                    return (
                      <StyledTableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={parseInt(Date.now() * Math.random())}
                      >
                        {columns.map((column) => {
                          const value = row[column.id];
                          return (
                            <StyledTableCell
                              key={column.id}
                              align={column.align}
                            >
                              {column.id === '_id'?(
                                <TableLink text={value} route={`/projects/` + row._id} />
                              ) : (column.id === 'name') ? (
                                <TableLink text={value} route={`/customers/` + row.user} />
                              ) : (column.id === 'serviceType') ?(
                                row.orderdetails?.map((service, index) => {
                                  return (
                                    service.serviceName + (row.orderdetails.length - 1 === index ? '' : ', ')
                                  )
                                })
                              ) : (column.id === 'city') ?(
                                row.orderdetails?.map((service, index) => {
                                  return (
                                    service.property? service.property.city : ''
                                  )
                                })
                              ) : (column.id === 'state') ?(
                                row.orderdetails?.map((service, index) => {
                                  return (
                                    service.property? service.property.state : ''
                                  )
                                })
                              ) : (column.id === 'zip') ?(
                                row.orderdetails?.map((service, index) => {
                                  return (
                                    service.property? service.property.zipCode : ''
                                  )
                                })
                              ) : (column.id === 'ordered') ?(
                                row.dateSelection?.map((date, index) => {
                                 return (
                                    moment(date).format('DD/MM/YY hh:mm:ss A') + (row.dateSelection.length - 1 === index ? '' : ', ')
                                 )
                                })
                               ) : (column.id === 'payeeType') ?(
                                'Customer'
                              ) : (column.id === 'transactionType') ?(
                                  row.stripeRefundId ? 'Refund' : 'Customer'
                              ) : (column.id === 'totalAmount') ?(
                                row.totalAmount ? '$' + row.totalAmount.toFixed(2) : '$0.00'
                            ) : (column.format && typeof value === "number"
                                ? column.format(value)
                                : value)}
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
            count={transactions.data?.length ? transactions.data?.length : 0}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </Box>
    </div>
  );
};

export default Transactions;
