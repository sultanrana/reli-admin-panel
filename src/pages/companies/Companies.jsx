import {
  Box,
  Table,
  TableContainer,
  Typography,
  IconButton,
  Button,
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
import ModeRoundedIcon from "@mui/icons-material/ModeRounded";
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import { useDispatch, useSelector } from "react-redux";
import TableLink from "../../components/TableLink";
import AddCompany from "./AddCompany";
import { TroubleshootOutlined } from "@mui/icons-material";
import { handleAddCompanyModal } from "../../features/login/loginSlice";
import { useEffect } from "react";
import { getCompanies } from "../../features/companies/companySlice";
import { CSVLink, CSVDownload } from "react-csv";
import Loading from '../../components/Loading'
import Alert  from "@mui/material/Alert";
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import { companyResponseClr } from "../../features/companies/companySlice";
import CloseIcon from '@mui/icons-material/Close';
import moment from "moment";


const columns = [
  { id: "companyName", label: "Company", minWidth: 100, fontWeight: "600" },
  {
    id: "representativeName",
    label: "Representative",
    minWidth: 100,
    fontWeight: "600",
  },
  {
    id: "representativeNumber",
    label: "Representative Number",
    minWidth: 100,
    fontWeight: "600",
  },
  {
    id: "representativeEmail",
    label: "Representative Email",
    minWidth: 170,
    fontWeight: "600",
  },
  {
    id: "numberOfUsers",
    label: "Number of Users",
    minWidth: 150,
    fontWeight: "600",
  },
  {
    id: "numberOfOpenProjects",
    label: "Projects Open",
    minWidth: 100,
    fontWeight: "600",
  },
  {
    id: "numberOfCompletedProjects",
    label: "Projects Completed",
    minWidth: 100,
    fontWeight: "600",
  },
  {
    id: "dateLastActive",
    label: "Date Last Active",
    minWidth: 150,
    fontWeight: "600",
  },
  { id: "companyStatus", label: "Status", fontWeight: "600", textTransform: 'capitalize', minWidth: 100 },
  // { id: "actions", label: "Actions", fontWeight: "600", minWidth: 150 },
];

function createData(
  company,
  representative,
  representativeNumber,
  representativeEmail,
  numberOfUsers,
  projectsOpen,
  projectsCompleted,
  dateLastActive,
  status,
  // actions
) {
  return {
    company,
    representative,
    representativeNumber,
    representativeEmail,
    numberOfUsers,
    projectsOpen,
    projectsCompleted,
    dateLastActive,
    status,
    // actions
  };
}

const rows = [
  createData(
    <TableLink text="Construction Company" route="company-detail" />,
    "John Smith",
    <TableLink text="555-555-5555" route="company-detail" />,
    <TableLink text="johnsmith@tepia.co" route="company-detail" />,
    "20",
    "10",
    "15",
    "05/09/22 12:00:00AM PT",
    "Enabled",
  //   <div style={{ 
  //     display: 'flex',
  //     gap: '10px'
  // }}>
  //     <IconButton>
  //         <DeleteRoundedIcon/>
  //     </IconButton>
  //     <IconButton>
  //         <ModeRoundedIcon/>
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
const Companies = () => {
  const { isDrawerOpen, isAddCompanyModal } = useSelector(
    (store) => store.login
  );
  const { list, isLoading, alert, responseStatus, responseMsg } = useSelector((store) => store.company);
  const dispatch = useDispatch();
  const [alertDialog, setAlertDialog] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState('');
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
      Companies
    </Typography>,
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

  useEffect(() => {
    dispatch(getCompanies());
  }, [alert])


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
          width: isDrawerOpen ? `calc(100% - 240px)` : `calc(100% - 57px)`,
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "1rem",
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
            <CSVLink data={list.data ? list.data : 'No data available yet'}>
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
              onClick={() => dispatch(handleAddCompanyModal())}
            >
              Add Company
            </Button>
          </Box>
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
            <input type="text" value={searchValue} placeholder='Search' className='search-input' onChange={(e) =>  handleSearch(e.target.value.toLowerCase())} />
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
                {list.data?.filter((data) => data.companyName.toLowerCase().includes(searchValue) || data.representativeNumber.toLowerCase().includes(searchValue) || data.representativeEmail.toLowerCase().includes(searchValue))
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
                              sx={{textTransform : column.textTransform}}
                            >
                              {column.id === 'companyName'? (
                                <TableLink text={value} route={row.id} />
                              ): column.id === 'representativeNumber'? (<TableLink text={value} route={row.id} />) : column.id === 'representativeEmail'? (<TableLink text={value} route={row.id} />) : column.id === 'dateLastActive'? (moment(new Date()).format('DD/MM/YY hh:mm:ss A')) : ( column.format && typeof value === "number"
                              ? column.format(value)
                              : value) }
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
            count={list.data?.length ? list.data?.length : 0}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </Box>
      {isAddCompanyModal ? <AddCompany /> : null}
    </div>
  );
};

export default Companies;
