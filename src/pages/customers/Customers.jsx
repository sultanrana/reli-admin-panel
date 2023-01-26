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
import { tableCellClasses } from "@mui/material/TableCell";
import { styled } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RowingSharp } from "@mui/icons-material";
import Loading from "../../components/Loading";
import { getCutomers } from "../../features/customer/customerSlice";
import moment from "moment/moment";






const columns = [
  { id: "name", label: "Name", minWidth: 150, fontWeight: "600" },
  { id: "email", label: "Email", minWidth: 150, fontWeight: "600" },
  { id: "phone", label: "Phone", minWidth: 140, fontWeight: "600" },
  {
    id: "numberOfProperties",
    label: "Number of Properties",
    minWidth: 100,
    fontWeight: "600",
  },
  {
    id: "openProjects",
    label: "Open Projects",
    minWidth: 100,
    fontWeight: "600",
  },
  {
    id: "completedProjects",
    label: "Completed Projects",
    minWidth: 100,
    fontWeight: "600",
  },
  {
    id: "totalPurchases",
    label: "Total Purchases",
    minWidth: 100,
    fontWeight: "600",
  },
  { id: "status", label: "Status", minWidth: 100, fontWeight: "600" },
  { id: "lastActive", label: "Last Active", minWidth: 200, fontWeight: "600" },
  { id: "actions", label: "Actions", minWidth: 150, fontWeight: "600" },
];

function createData(
  name,
  email,
  phone,
  numberOfProperties,
  openProjects,
  completedProjects,
  totalPurchases,
  status,
  lastActive,
  actions
) {
  return {
    name,
    email,
    phone,
    numberOfProperties,
    openProjects,
    completedProjects,
    totalPurchases,
    status,
    lastActive,
    actions
  };
}

// var rows = [
//   createData(
//     "malik",
//     <TableLink text="johnsmith@tepia.co" route="customer-detail"  />,
//     <TableLink text="051-555-5555" route="customer-detail" />,
//     "2",
//     "5",
//     "5",
//     "$1,250.00",
//     "Active",
//     "05/09/22 12:00:00AM PT",
//     <div style={{ 
//       display: 'flex',
//       gap: '10px'
//   }}>
//       <IconButton>
//           <DeleteRoundedIcon/>
//       </IconButton>
//   </div>
//   ),
//   createData(
//     "bieee",
//     <TableLink text="johnsmith@tepia.co" route="customer-detail"  />,
//     <TableLink text="051-555-5555" route="customer-detail" />,
//     "2",
//     "5",
//     "5",
//     "$1,250.00",
//     "Active",
//     "05/09/22 12:00:00AM PT",
//     <div style={{ 
//       display: 'flex',
//       gap: '10px'
//   }}>
//       <IconButton>
//           <DeleteRoundedIcon/>
//       </IconButton>
//   </div>
//   ),
//   createData(
//     "hi",
//     <TableLink text="johnsmith@tepia.co" route="customer-detail"  />,
//     <TableLink text="051-555-5555" route="customer-detail" />,
//     "2",
//     "5",
//     "5",
//     "$1,250.00",
//     "Active",
//     "05/09/22 12:00:00AM PT",
//     <div style={{ 
//       display: 'flex',
//       gap: '10px'
//   }}>
//       <IconButton>
//           <DeleteRoundedIcon/>
//       </IconButton>
//   </div>
//   ),
// ];
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

const TableLink = styled('span')(({theme}) => ({
  color: '#2196f3',
  fontWeight: '500',
  textDecoration: 'underline',
  cursor: 'pointer'
}))

const Customers = () => {
  const { isDrawerOpen } = useSelector((store) => store.login);
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
      Customers
    </Typography>,
  ];
const navigate = useNavigate()
const [page, setPage] = React.useState(0);
const {isLoading, customers} = useSelector((store) => store.customer)
const [rowsPerPage, setRowsPerPage] = React.useState(10);
const [searchValue, setSearchValue] = useState('');
const dispatch = useDispatch();
const customersData = JSON.parse(localStorage.getItem('customers'));
const [rows, setRows] = useState(customersData?.data? customersData?.data: customers?.data);
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
      if(row.firstName)
        return row.firstName.toLowerCase().includes(searchedValue.toLowerCase());
      else if(row.lastName)
        return row.lastName.toLowerCase().includes(searchedValue.toLowerCase());
      else if(row.email)
        return row.email.toLowerCase().includes(searchedValue.toLowerCase());
      else if(row.phoneNumber)
        return row.phoneNumber.toString().toLowerCase().includes(searchedValue.toLowerCase());
      
    });
    // console.log(filteredRows, searchedValue);
    if(searchedValue != '' && filteredRows.length > 0){
      setRows(filteredRows)
    }else{
      setRows(customers.data)
    }
  }

  useEffect(() => {
    dispatch(getCutomers());
  }, [])

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
            <Button
              variant="outlined"
              className="bc-btn-outline"
              color="primary"
            >
              Export csv
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
        <Paper sx={{ width: "100%", overflow: "hidden" }}>
          <TableContainer>
            <Table stickyHeader aria-label="sticky table" sx={{}}>
              <TableHead>
                <StyledTableRow>
                    <StyledTableCell sx={{minWidth: 150, fontWeight: '600'}}>
                      Name
                    </StyledTableCell>
                    <StyledTableCell sx={{minWidth: 150, fontWeight: '600'}}>
                      Email
                    </StyledTableCell>
                    <StyledTableCell sx={{minWidth: 150, fontWeight: '600'}}>
                      Phone
                    </StyledTableCell>
                    <StyledTableCell sx={{minWidth: 150, fontWeight: '600'}}>
                      Number of Properties
                    </StyledTableCell>
                    <StyledTableCell sx={{minWidth: 150, fontWeight: '600'}}>
                      Open Projects
                    </StyledTableCell>
                    <StyledTableCell sx={{minWidth: 150, fontWeight: '600'}}>
                      Completed Projects
                    </StyledTableCell>
                    <StyledTableCell sx={{minWidth: 150, fontWeight: '600'}}>
                      Total Purchases
                    </StyledTableCell>
                    <StyledTableCell sx={{minWidth: 150, fontWeight: '600'}}>
                      Status
                    </StyledTableCell>
                    <StyledTableCell sx={{minWidth: 200, fontWeight: '600'}}>
                      Last Active
                    </StyledTableCell>
                </StyledTableRow>
              </TableHead>
              <TableBody>
                {rows?.map((row) => (
                  <StyledTableRow key={row.id}>
                    <StyledTableCell sx={{minWidth: 150}}>
                      <TableLink onClick={() => navigate(row.id)}>
                        {row.firstName +' ' + row.lastName}
                      </TableLink>
                    </StyledTableCell>
                    <StyledTableCell sx={{minWidth: 150}}>
                      {row.email}
                    </StyledTableCell>
                    <StyledTableCell sx={{minWidth: 150}}>
                      {row.phoneNumber}
                    </StyledTableCell>
                    <StyledTableCell sx={{minWidth: 150}}>
                      {row.numberOfProperties}
                    </StyledTableCell>
                    <StyledTableCell sx={{minWidth: 150}}>
                      {row.numberOfOpenProjects}
                    </StyledTableCell>
                    <StyledTableCell sx={{minWidth: 150}}>
                      {row.numberOfCompletedProjects}
                    </StyledTableCell>
                    <StyledTableCell sx={{minWidth: 150}}>
                      {'$'+row.totalPurchases.toFixed(2)}
                    </StyledTableCell>
                    <StyledTableCell sx={{minWidth: 150}}>
                      {(Boolean(row.statusBit) === true ) ? 'Enabled' : 'Disabled' }
                    </StyledTableCell>
                    <StyledTableCell sx={{minWidth: 200}}>
                      {moment(row.lastLoginAt).format('DD/MM/YY hh:mm:ss A')}
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={rows?.length || 0}
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

export default Customers;
