import { Box, Table, TableContainer, Typography, IconButton, Button, ButtonGroup } from '@mui/material';
import React, { useEffect } from 'react'
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
import { useDispatch, useSelector } from 'react-redux';
import TableLink from '../../components/TableLink';
import { useState } from 'react';
import TableActions from '../../components/TableActions';
import OverView from './OverView';
import EditCompany from './EditCompany';
import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded';
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
import UserInfo from './UserInfo';
import Transaction from './Transaction';
import AddUserModal from './AddUserModal';
import { Link, useNavigate, useParams } from 'react-router-dom';
import {  singleCompanyDetail } from '../../features/companies/companySlice';
import Loading from '../../components/Loading';
import Transactions from '../transactions/Transactions';
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
const CompanyInfo = () => {
const navigate = useNavigate();
const dispatch = useDispatch();
const param = useParams();
const {isDrawerOpen, addUserModal} = useSelector((store) => store.login)
const {alert, isLoading, responseStatus, responseMsg, companyDetail} = useSelector((store) => store.company)
const [tab, setTab] = useState('overview');
const breadcrumbs = [
    <Typography key="3" color="text.primary" style={{
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: '34px',
        lineHeight: '36px',
        color: '#000000'
    }}>
        <Link to={'/companies'} style={{'textDecoration': 'none', 'color' : 'black'}}><ArrowBackIosRoundedIcon style={{'marginRight': '1rem', 'cursor' : 'pointer'}} /></Link> Company Name
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

useEffect(() => {
  dispatch(singleCompanyDetail(param.companyid));
}, [])

if(isLoading){
  return (
    <Loading/>
  )
}

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
        </Box>
        <Box component="div" className='tab_btns' sx={{mb: 3}}>
            <Button variant='outlined' size='large' className={tab === 'overview'? 'active': ''}
              onClick={() => setTab('overview')}
            >Overview</Button>
            <Button variant='outlined' size='large' className={tab === 'userInfo'? 'active': ''}
              onClick={() => setTab('userInfo')}
            >User Info</Button>
            <Button variant='outlined' size='large' className={tab === 'transaction'? 'active': ''}
              onClick={() => setTab('transaction')}
            >Transactions</Button>
        </Box>

        {tab === "overview" ? (
         <OverView data={companyDetail.data}/>
        ): null}
        {tab === "userInfo" ? (
          <UserInfo/>
        ): null}
        {tab === "transaction" ? (
          <Transaction/>
        ): null}  
      </Box> 
    </div>
  )
}

export default CompanyInfo