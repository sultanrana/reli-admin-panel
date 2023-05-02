import {
  Box,
  Table,
  TableContainer,
  Typography,
  IconButton,
  Button,
} from "@mui/material";
import React, { useRef, useState } from "react";
import BeardcrumNavigator from "../../components/BeardcrumNavigator";
import Sidebar from "../../components/Sidebar";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import SearchBox from "../../components/SearchBox";
import { tableCellClasses } from "@mui/material/TableCell";
import { styled } from "@mui/material/styles";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import FilterListRoundedIcon from "@mui/icons-material/FilterListRounded";
import { useDispatch, useSelector } from "react-redux";
import TableActions from "../../components/TableActions";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { CSVLink } from "react-csv";
import {
  serviceProductList,
  serviceResponseClr,
  updatePriceColumn,
  uploadProductServiceCSV,
} from "../../features/services/serviceSlice";
import Loading from "../../components/Loading";
import CloseIcon from "@mui/icons-material/Close";
import Alert from "@mui/material/Alert";
import ModeRoundedIcon from "@mui/icons-material/ModeRounded";
import { useFormik } from "formik";

const columns = [
  {
    id: "product_id",
    label: "Product ID",
    minWidth: 100,
    fontWeight: "600",
    textTransform: "capitalize",
  },
  {
    id: "job_type",
    label: "Job Type",
    minWidth: 100,
    fontWeight: "600",
    textTransform: "capitalize",
  },
  {
    id: "color",
    label: "Color",
    minWidth: 100,
    fontWeight: "600",
    textTransform: "capitalize",
  },
  {
    id: "grid",
    label: "Grid",
    minWidth: 150,
    fontWeight: "600",
    textTransform: "capitalize",
  },
  {
    id: "open_type",
    label: "Open Type",
    minWidth: 150,
    fontWeight: "600",
    textTransform: "capitalize",
  },
  {
    id: "tempered_glass",
    label: "Temered Glass(Fire)",
    minWidth: 100,
    fontWeight: "600",
    textTransform: "capitalize",
  },
  {
    id: "privacy",
    label: "Privacy",
    minWidth: 100,
    fontWeight: "600",
    textTransform: "capitalize",
  },
  {
    id: "safety_glass",
    label: "Safety Glass",
    minWidth: 150,
    fontWeight: "600",
    textTransform: "capitalize",
  },
  {
    id: "dimension_class",
    label: "Dimension Class",
    minWidth: 100,
    fontWeight: "600",
    textTransform: "capitalize",
  },
  {
    id: "price",
    label: "Price Per Square Inch",
    minWidth: 150,
    fontWeight: "600",
  },
  { id: "actions", label: "Actions", minWidth: 100, fontWeight: "600" },
];

function createData(
  productId,
  jobType,
  color,
  grid,
  openType,
  temeredGlass,
  privacy,
  safetyGlass,
  dimensionClass,
  pricePerSqInch,
  actions
) {
  return {
    productId,
    jobType,
    color,
    grid,
    openType,
    temeredGlass,
    privacy,
    safetyGlass,
    dimensionClass,
    pricePerSqInch,
  };
}

const rows = [
  createData(
    "W1",
    "New",
    "White",
    "None (aka 0)",
    "Single Hung",
    "Yes",
    "Yes",
    "Yes",
    "Standard",
    `$125.000`
  ),
  createData(
    "W1",
    "New",
    "White",
    "None (aka 0)",
    "Single Hung",
    "Yes",
    "Yes",
    "Yes",
    "Standard",
    `$125.000`
  ),
  createData(
    "W1",
    "New",
    "White",
    "None (aka 0)",
    "Single Hung",
    "Yes",
    "Yes",
    "Yes",
    "Standard",
    `$125.000`
  ),
  createData(
    "W1",
    "New",
    "White",
    "None (aka 0)",
    "Single Hung",
    "Yes",
    "Yes",
    "Yes",
    "Standard",
    `$125.000`
  ),
  createData(
    "W1",
    "New",
    "White",
    "None (aka 0)",
    "Single Hung",
    "Yes",
    "Yes",
    "Yes",
    "Standard",
    `$125.000`
  ),
  createData(
    "W1",
    "New",
    "White",
    "None (aka 0)",
    "Single Hung",
    "Yes",
    "Yes",
    "Yes",
    "Standard",
    `$125.000`
  ),
  createData(
    "W1",
    "New",
    "White",
    "None (aka 0)",
    "Single Hung",
    "Yes",
    "Yes",
    "Yes",
    "Standard",
    `$125.000`
  ),
  createData(
    "W1",
    "New",
    "White",
    "None (aka 0)",
    "Single Hung",
    "Yes",
    "Yes",
    "Yes",
    "Standard",
    `$125.000`
  ),
  createData(
    "W1",
    "New",
    "White",
    "None (aka 0)",
    "Single Hung",
    "Yes",
    "Yes",
    "Yes",
    "Standard",
    `$125.000`
  ),
  createData(
    "W1",
    "New",
    "White",
    "None (aka 0)",
    "Single Hung",
    "Yes",
    "Yes",
    "Yes",
    "Standard",
    `$125.000`
  ),
  createData(
    "W1",
    "New",
    "White",
    "None (aka 0)",
    "Single Hung",
    "Yes",
    "Yes",
    "Yes",
    "Standard",
    `$125.000`
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
const ServiceProducts = () => {
  const { isDrawerOpen } = useSelector((store) => store.login);

  const { serviceDetail, isLoading, responseStatus, responseMsg, alert } =
    useSelector((store) => store.service);
  const param = useParams();
  const dispatch = useDispatch();
  const serviceName = localStorage.getItem("serviceName");
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
        textTransform: "capitalize",
      }}
    >
      {serviceName}
    </Typography>,
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
      Products
    </Typography>,
  ];
  const importCsv = useRef();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [searchValue, setSearchValue] = useState("");
  const [alertDialog, setAlertDialog] = React.useState(false);
  const [isChange, setIsChange] = React.useState(false);
  const [columnEdit, setColumnEdit] = React.useState("");
  const [price, setPrice] = useState("");

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleSearch = (searchedValue) => {
    setSearchValue(searchedValue.toLowerCase());
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
  };

  const handleImportCsv = () => {
    importCsv.current.click();
  };
  const handleUploadCsv = (e) => {
    let csvFile = {};
    let serviceId = param.serviceid;
    let file = e.target.files[0];
    if (file) {
      csvFile = file;
      dispatch(
        uploadProductServiceCSV({ csvFile: csvFile, service: serviceId })
      );
    }
  };

  const handlePriceEdit = (columnEdit) => {
    setPrice("");
    setColumnEdit(columnEdit);
  };
  const handleSubmit = (e, rowId) => {
    console.log("submit");
    e.preventDefault();
    let values = {};
    values.price = price;
    values.id = rowId;
    if (!isChange) {
      setIsChange(true);
    } else {
      setIsChange(false);
    }
    dispatch(updatePriceColumn(values));
    dispatch(serviceProductList(param.serviceid));

    setColumnEdit("");
  };

  useEffect(() => {
    console.log("asdasas");
    dispatch(serviceProductList(param.serviceid));
  }, [alert, isChange]);

  if (isLoading) {
    return <Loading />;
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
            <CSVLink
              data={
                serviceDetail?.data
                  ? serviceDetail?.data
                  : "No data available yet"
              }
            >
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
              onClick={handleImportCsv}
            >
              Import csv
            </Button>
            <input
              type="file"
              name="importCsv"
              id="importCsv"
              style={{ display: "none" }}
              accept="text/csv"
              ref={importCsv}
              onChange={(e) => handleUploadCsv(e)}
            />
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
            {/* <SearchBox/> */}
            <Box
              sx={{
                background: "#FFFFFF",
                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                borderRadius: "33px",
                height: 50,
                display: "flex",
                alignItems: "center",
                maxWidth: "245px",
                border: "1px solid #ddd",
                overflow: "hidden",
              }}
            >
              <SearchRoundedIcon
                sx={{
                  width: "16%",
                  marginLeft: "6px",
                }}
              />
              <input
                type="text"
                value={searchValue}
                placeholder="Search"
                className="search-input"
                onChange={(e) => handleSearch(e.target.value)}
              />
            </Box>
          </Box>
          {/* <IconButton aria-label="filter-icon" size="large">
            <FilterListRoundedIcon />
          </IconButton> */}
        </Box>
        {alert ? (
          <Alert
            severity={responseStatus}
            color={responseStatus}
            sx={{ mb: 3, width: "100%" }}
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  dispatch(serviceResponseClr(false));
                  setAlertDialog(false);
                }}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
          >
            {responseMsg}
          </Alert>
        ) : null}
        <Paper sx={{ width: "100%", overflow: "hidden" }}>
          <TableContainer>
            <Table stickyHeader aria-label="sticky table">
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
                {serviceDetail.data
                  ?.filter(
                    (data) =>
                      data.product_id.toLowerCase().includes(searchValue) ||
                      data.job_type.toLowerCase().includes(searchValue) ||
                      data.color.toLowerCase().includes(searchValue) ||
                      data.grid.toLowerCase().includes(searchValue) ||
                      data.open_type.toLowerCase().includes(searchValue) ||
                      data.tempered_glass.toLowerCase().includes(searchValue) ||
                      data.privacy.toLowerCase().includes(searchValue) ||
                      data.safety_glass.toLowerCase().includes(searchValue) ||
                      data.dimension_class
                        .toLowerCase()
                        .includes(searchValue) ||
                      data.price.toLowerCase().includes(searchValue)
                  )
                  ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, index) => {
                    return (
                      <StyledTableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={row._id}
                      >
                        {columns.map((column) => {
                          const value = row[column.id];
                          return (
                            <StyledTableCell
                              key={column.id}
                              align={column.align}
                              style={{ textTransform: column.textTransform }}
                            >
                              {column.id === "actions" &&
                              columnEdit === row._id ? (
                                <Button
                                  type="submit"
                                  onClick={(e) => handleSubmit(e, row._id)}
                                  variant="contained"
                                >
                                  Save
                                </Button>
                              ) : column.id === "actions" ? (
                                <IconButton
                                  onClick={() => handlePriceEdit(row._id)}
                                >
                                  <ModeRoundedIcon />
                                </IconButton>
                              ) : column.id === "price" &&
                                columnEdit === row._id ? (
                                <TextField
                                  name="price"
                                  defaultValue={
                                    serviceDetail.data[index]["price"]
                                  }
                                  onChange={(e) => setPrice(e.target.value)}
                                />
                              ) : column.id === "price" ? (
                                value ? (
                                  "$" + parseInt(value).toFixed(2)
                                ) : (
                                  "0"
                                )
                              ) : column.format && typeof value === "number" ? (
                                column.format(value)
                              ) : (
                                value
                              )}
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
            count={rows.length}
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

export default ServiceProducts;
