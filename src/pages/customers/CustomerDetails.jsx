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
import React from "react";
import Paper from "@mui/material/Paper";
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
// active project
const activeProjectColumns = [
  { id: "projectId", label: "Project ID", minWidth: 100, fontWeight: "600" },
  {
    id: "projectStatus",
    label: "Project Status",
    minWidth: 100,
    fontWeight: "600",
  },
  { id: "customer", label: "Customer", minWidth: 100, fontWeight: "600" },
  {
    id: "serviceType",
    label: "Service Type",
    minWidth: 170,
    fontWeight: "600",
  },
  { id: "scheduled", label: "Scheduled", minWidth: 150, fontWeight: "600" },
  { id: "amount", label: "Amount", minWidth: 100, fontWeight: "600" },
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
  const { isEditCustomerModal, isDrawerOpen } = useSelector(
    (store) => store.login
  );
  const dispatch = useDispatch();
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
      Customer Details
    </Typography>,
  ];
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
          <Box sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'start',
            flexWrap: 'wrap',
            gap: '1rem'
          }}>

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
                  <div className="about_img_circle"></div>
                  <div className="about_body_card">
                    <div className="company_info">
                      <h4>Josh Johnson</h4>
                      <p
                        className="info_para"
                        style={{
                          marginBottom: "8px",
                        }}
                      >
                        joshj@tepia.co
                      </p>
                      <p
                        className="info_para"
                        style={{
                          marginBottom: "8px",
                        }}
                      >
                        949-234-4432
                      </p>
                      <p className="enabled">Enabled</p>
                    </div>
                  </div>
                </div>
              </Card>

              <Typography variant="h5" sx={{ mt: 3 }}>
                Properties
              </Typography>
              <Box component="div">
                <PropertiesTable />
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
                  {activeProjectrows
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row) => {
                      return (
                        <StyledTableRow
                          hover
                          role="checkbox"
                          tabIndex={-1}
                          key={row.code}
                        >
                          {activeProjectColumns.map((column) => {
                            const value = row[column.id];
                            return (
                              <StyledTableCell
                                key={column.id}
                                align={column.align}
                              >
                                {column.format && typeof value === "number"
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
      {isEditCustomerModal ? <EditCustomer /> : null}
    </>
  );
};

export default CustomerDetails;
