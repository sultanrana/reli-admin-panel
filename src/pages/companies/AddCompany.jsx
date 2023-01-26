import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useDispatch, useSelector } from 'react-redux';
import { handleAddCompanyModal } from '../../features/login/loginSlice';
import { Container, FormControl, FormControlLabel, InputLabel, MenuItem, Select, TextField, Typography, Box, Checkbox, IconButton } from '@mui/material';
import ModeEditOutlineRoundedIcon from '@mui/icons-material/ModeEditOutlineRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { useRef } from 'react';
import { Field, Form, Formik } from 'formik';
import { object } from 'yup';
import * as Yup from "yup";
const AddCompany = (props) => {

const{isAddCompanyModal} = useSelector((store) => store.login)
const dispatch = useDispatch();
const [status, setStatus] = React.useState('enable');
const [windowChecked, setWindowChecked] = React.useState(false);
const [slidingGlassDoorChecked, setSlidingGlassDoorChecked] = React.useState(false);
const [interiorDoorChecked, setInteriorDoorChecked] = React.useState(false);

const handleChange = (event) => {
    setStatus(event.target.value);
};
let imgInput = useRef(null)
let imgRef = useRef(null)
const pickFile = () => {
    imgInput.current.click();
}
const handleAddImg = (e) => {
    let file = e.target.files[0];
    let url = URL.createObjectURL(file);
    imgRef.current.src = url;
}
const clearImgRef = () => {
    imgRef.current.src = '/images/circle-gray.png';
}

const initialValues ={
    companyStatus: status,
    companyName: "",
}

  return (
    <Dialog
    open={isAddCompanyModal}
    scroll='body'
    onClose={() => dispatch(handleAddCompanyModal())}
    aria-describedby="scroll-dialog-description"
  >
    <Formik 
        initialValues={initialValues} 
        onSubmit={(values, formikHelpers) => {
          console.log("form values: ", values);
        }}
        validationSchema= {object({
            companyName: Yup.string().required(),
        })}
    >
        {({errors, touched, isValid, dirty}) => (
            <Form>
                <DialogTitle id="scroll-dialog-title" sx={{ 
                    p: 1,
                    fontStyle: 'normal',
                    fontWeight: '400',
                    fontSize: '24px',
                    lineHeight: '24px',
                    letterSpacing: '0.18px',
                    color: '#000000'
                }}>Add Company Details</DialogTitle>
                <Box component="div" sx={{ 
                    display: 'flex',
                    justifyContent: 'center', 
                    flexDirection: 'column',
                    alignItems: 'center'
                }}>
                    <Box component="div" className='addImg'>
                        <img src="/images/circle-gray.png" alt="addCompanyImg" ref={imgRef} style={{width: '100%', height: '100%', objectFit: 'cover'}}/>
                        <input type="file" hidden id="getImg" ref={imgInput} onChange={(e) => handleAddImg(e)}/>
                    </Box>
                    <Box component="div">
                        <IconButton onClick={pickFile}>
                            <ModeEditOutlineRoundedIcon/>
                        </IconButton>
                        <IconButton onClick={clearImgRef}>
                            <CloseRoundedIcon/>
                        </IconButton>
                    </Box>
                </Box>
                <DialogContent
                    sx={{
                        p: 0
                    }}
                >
                <DialogContentText
                    component={'div'}
                    id="scroll-dialog-description"
                    tabIndex={-1}
                >
                    <Container maxWidth='xs'>
                        
                        {/* <FormControl fullWidth sx={{
                            mt: 4, mb: 4
                        }}>
                            <InputLabel id="companyStatus">Company status</InputLabel>
                            <Field as={Select}
                                labelId="companyStatus"
                                id="companyStatus"
                                name="companyStatus"
                                label="Company status"
                                error = {Boolean(errors.companyStatus) && Boolean(touched.companyStatus)}
                                helperText = {Boolean(touched.companyStatus) && errors.companyStatus}
                            >
                                <MenuItem value="enable">Enable</MenuItem>
                                <MenuItem value="disable">Disable</MenuItem>
                            </Field>
                        </FormControl> */}
                        <Field as={TextField} 
                            sx={{width: '100%', mb: 4}}
                            id="companyName"
                            name="companyName"
                            label="Company Name"
                            variant="outlined" 
                            error = {Boolean(errors.companyName) && Boolean(touched.companyName)}
                            helperText = {Boolean(touched.companyName) && errors.companyName}
                        />
                        <TextField 
                            sx={{width: '100%', mb: 4}}
                            id="line-1-basic"
                            label="Address Line 1"
                            variant="outlined" 
                            defaultValue="132, Western Ave"
                        />
                        <TextField 
                            sx={{width: '100%', mb: 4}}
                            id="line-2-basic"
                            label="Address Line 2"
                            variant="outlined" 
                            defaultValue="132, Western Ave"
                        />
                        {/* <FormControl fullWidth sx={{ mb: 4 }}>
                            <InputLabel id="status-select-label">Distance willing to travel (in miles)</InputLabel>
                            <Select
                                labelId="status-select-label"
                                id="status-simple-select"
                                value={status}
                                label="Distance willing to travel (in miles)"
                                onChange={handleChange}
                            >
                                <MenuItem value="pending">100m</MenuItem>
                                <MenuItem value="completed">200m</MenuItem>
                            </Select>
                        </FormControl> */}
                        <TextField 
                            sx={{width: '100%', mb: 4}}
                            id="representative-name-basic"
                            label="Representative Name"
                            variant="outlined" 
                            defaultValue="John Smith"
                        />
                        <TextField 
                            sx={{width: '100%', mb: 4}}
                            id="representative-role-basic"
                            label="Representative Role"
                            variant="outlined" 
                            defaultValue="HR"
                        />
                        <TextField 
                            sx={{width: '100%', mb: 4}}
                            id="number-basic"
                            label="Representative Number"
                            variant="outlined" 
                            defaultValue="555-555-5555"
                        />
                        <TextField 
                            sx={{width: '100%', mb: 4}}
                            id="email-basic"
                            label="Representative Email"
                            variant="outlined" 
                            defaultValue="johnsmith@tepia.co"
                        />
                        <Box sx={{ pl: 5}}>
                            <Typography
                                sx={{
                                    fontSize: '17px',
                                    fontWeight: '600',
                                    textTransform: 'capitalize',
                                    color: '#000000',
                                    textDecoration: 'underline'
                                }}
                            >
                                Services Available
                            </Typography>
                            <Box>
                                <FormControlLabel
                                sx={{
                                    color: '#000000',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    width: '250px'
                                }}
                                    value="Windows"
                                    control={<Checkbox 
                                        color="black"
                                        checked={windowChecked}
                                        onChange={(e) => setWindowChecked(e.target.checked)}
                                    />}
                                    label="Windows:"
                                    labelPlacement="start"
                                />
                                <FormControlLabel
                                sx={{
                                    color: '#000000',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    width: '250px'
                                }}
                                    value="Sliding Glass Doors"
                                    control={<Checkbox 
                                        color="black"
                                        checked={slidingGlassDoorChecked}
                                        onChange={(e) => setSlidingGlassDoorChecked(e.target.checked)}
                                    />}
                                    label="Sliding Glass Doors:"
                                    labelPlacement="start"
                                />
                                <FormControlLabel
                                sx={{
                                    color: '#000000',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    width: '250px'
                                }}
                                    value="Interior Doors"
                                    control={<Checkbox 
                                        color="black"
                                        checked={interiorDoorChecked}
                                        onChange={(e) => setInteriorDoorChecked(e.target.checked)}
                                    />}
                                    label="Interior Doors:"
                                    labelPlacement="start"
                                />
                            </Box>
                        </Box>
                    </Container>
                
                </DialogContentText>
                </DialogContent>
                <DialogActions>
                <Button variant='outlined' onClick={() => dispatch(handleAddCompanyModal())}>Cancel</Button>
                {/* <Button variant='contained' onClick={() => dispatch(handleAddCompanyModal())}>Save</Button> */}
                <Button disabled={!dirty || !isValid} type='button' variant='contained'>Save</Button>
                </DialogActions>
            </Form>
        )}
    </Formik>
  </Dialog>
  );
}


export default AddCompany;