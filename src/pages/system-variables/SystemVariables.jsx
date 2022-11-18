import {
    Box,
    Button,
    TextField,
    FormControl,
    InputLabel,
    OutlinedInput,
    Typography,
  } from "@mui/material";
import { useSelector } from "react-redux";
import Sidebar from "../../components/Sidebar";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import BeardcrumNavigator from "../../components/BeardcrumNavigator";
const SystemVariables = () => {
const theme = useTheme()
const {isDrawerOpen} = useSelector((store) => store.login)
const matches = useMediaQuery('(max-width:600px)')
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
      System Variables
    </Typography>,
  ];
  return (
    <div className="page-section">
      <Sidebar/>
        <Box className="page-content" sx={{width: isDrawerOpen ? `calc(100% - 240px)` : `calc(100% - 57px)`, overflow: "hidden"}}>
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
            <Button
              variant="outlined"
              className="bc-btn-outline"
              color="primary"
            >
              Export csv
            </Button>
          </Box>
        </Box>

            <Box component="div" sx={{ py: 4, px: matches? 2: 8, backgroundColor: '#F7F7F7'}}>
                <form>
                    <Box component="div" sx={{display: 'flex', gap: '4rem', flexWrap: 'wrap', width: '100%', mb: 7}}>
                        <div style={{width : matches? '100%' : 'auto'}}>
                            <TextField
                                required
                                id="outlined-reli-portion"
                                label="Reli Portion"
                                defaultValue="20.00%"
                                sx={{
                                    width: matches? '100%': '400px',
                                }}
                            />
                            <div className="variable-input-require">This is applied to each Product</div>
                        </div>
                        <div style={{width : matches? '100%' : 'auto'}}>
                            <TextField
                                required
                                id="outlined-materials-surcharge"
                                label="Materials Surcharge"
                                defaultValue="12.00%"
                                name="materials-surcharge"
                                sx={{
                                    width: matches? '100%': '400px',
                                }}
                            />
                            <div className="variable-input-require">This is applied to each Product</div>
                        </div>
                    </Box>
                    <Typography sx={{
                        fontWeight: '600',
                        fontSize: '14px',
                        lineHeight: '16px',
                        letterSpacing: '1.25px',
                        textTransform: 'uppercase',
                        color: '#000000',
                        mb: 3
                    }}>
                        Windows Fees
                    </Typography>
                    <Box component="div" sx={{display: 'flex', gap: '4rem', flexWrap: 'wrap', width: '100%', mb: 5}}>
                        <div style={{width : matches? '100%' : 'auto'}}>
                            <TextField
                                required
                                id="outlined-permit-fee"
                                label="Permit Fee"
                                defaultValue="$50.00"
                                name="permit-fee"
                                sx={{
                                    width: matches? '100%': '400px',
                                }}
                            />
                            <div className="variable-input-require">This is applied to each Windows</div>
                        </div>
                        <div style={{width : matches? '100%' : 'auto'}}>
                            <TextField
                                required
                                id="outlined-delivery-fee"
                                label="Delivery Fee"
                                defaultValue="$150.00"
                                name="delivery-fee"
                                sx={{
                                    width: matches? '100%': '400px',
                                }}
                            />
                            <div className="variable-input-require">This is applied to each Windows</div>
                        </div>
                    </Box>
                    <Typography sx={{
                        fontWeight: '600',
                        fontSize: '14px',
                        lineHeight: '16px',
                        letterSpacing: '1.25px',
                        textTransform: 'uppercase',
                        color: '#000000',
                        mb: 3
                    }}>
                        Sliding Glass Door Fees
                    </Typography>
                    <Box component="div" sx={{display: 'flex', gap: '4rem', flexWrap: 'wrap', width: '100%', mb: 5}}>
                        <div style={{width : matches? '100%' : 'auto'}}>
                            <TextField
                                required
                                id="outlined-permit-fee"
                                label="Permit Fee"
                                defaultValue="$50.00"
                                name="permit-fee"
                                sx={{
                                    width: matches? '100%': '400px',
                                }}
                            />
                            <div className="variable-input-require">This is applied to each Sliding Glass Door</div>
                        </div>
                        <div style={{width : matches? '100%' : 'auto'}}>
                            <TextField
                                required
                                id="outlined-delivery-fee"
                                label="Delivery Fee"
                                defaultValue="$150.00"
                                name="delivery-fee"
                                sx={{
                                    width: matches? '100%': '400px',
                                }}
                            />
                            <div className="variable-input-require">This is applied to each Sliding Glass Door</div>
                        </div>
                    </Box>
                    <Typography sx={{
                        fontWeight: '600',
                        fontSize: '14px',
                        lineHeight: '16px',
                        letterSpacing: '1.25px',
                        textTransform: 'uppercase',
                        color: '#000000',
                        mb: 3
                    }}>
                        Interior Doors Fees
                    </Typography>
                    <Box component="div" sx={{display: 'flex', gap: '4rem', flexWrap: 'wrap', justifyContent: matches?'end': 'start', width: '100%', mb: 5}}>
                        <div style={{width : matches? '100%' : 'auto'}}>
                            <TextField
                                required
                                id="outlined-permit-fee"
                                label="Permit Fee"
                                defaultValue="$50.00"
                                name="permit-fee"
                                sx={{
                                    width: matches? '100%': '400px',
                                }}
                            />
                            <div className="variable-input-require">This is applied to each Interior Door</div>
                        </div>
                        
                    </Box>
                    <Box sx={{display: 'flex', justifyContent: 'end'}}>
                        <Button variant="contained">save</Button>
                    </Box>
                </form>
            </Box>
        </Box>
    </div>
  )
}

export default SystemVariables