import { Box, Button, Card, Grid, IconButton, Table, TableContainer, Typography, Item, Dialog, DialogTitle, DialogContent, DialogContentText, Container, DialogActions, TextField, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import React, { useState } from 'react'
import Paper from '@mui/material/Paper';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { tableCellClasses } from '@mui/material/TableCell';
import { styled } from '@mui/material/styles';
import ErrorOutlineRoundedIcon from '@mui/icons-material/ErrorOutlineRounded';
// import EditCompany from './EditCompany';
import { useDispatch, useSelector } from 'react-redux';
import Sidebar from '../../components/Sidebar';
import BeardcrumNavigator from '../../components/BeardcrumNavigator';
import OpenInNewRoundedIcon from '@mui/icons-material/OpenInNewRounded';
import ProjectContractsTable from './ProjectContractsTable';
import ProjectCustomersTable from './ProjectCustomersTable';
import ProjectAccountingBreakdown from './ProjectAccountingBreakdown';


const OuterGrid = styled(Grid)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '1rem',
}));
const WhiteCard = styled(Paper)(({ theme }) => ({
  background: '#F8F8F8',
  border: '1px solid #C4C4C4',
  borderRadius: '10px',
  padding: '20px',
  [theme.breakpoints.down('md')]: {
    width: '100%'
  },
  [theme.breakpoints.up('md')]: {
    flex: '1'
  }, 
}));
const WhiteCardHeading = styled('h3')(({ theme }) => ({
  fontStyle: 'normal',
  fontWeight: '500',
  fontSize: '20px',
  lineHeight: '30px',
  color: '#000000'
}));
const WarrantyCard = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  padding: '4px',
  gap: '8px',
  background: '#D9D9D9',
  [theme.breakpoints.down('md')]: {
    width: '100%'
  },
  [theme.breakpoints.up('md')]: {
    width: '360px'
  }
}));

const RescheduleContainer = styled(Box)(({theme}) => ({
  padding: '3rem 4rem',
  [theme.breakpoints.down('md')] : {
      width: '100%',
  },
  [theme.breakpoints.up('md')] : {
      width: '475px'
  }
}))
const ModalHeading = styled(Typography)(({theme}) => ({
  fontWeight: '400',
  fontSize: '34px',
  lineHeight: '36px',
  color: '#000000',
  marginBottom: '.7rem'
}))
const ReAssignBox = styled(Box)(({theme}) => ({
  background: '#D9D9D9',
  height: '50px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0 10px',
  border: '.6px solid black'
}))
const ReAssignRemove = styled(Button)(({theme}) => ({
  background: '#BA1A1A',
  borderRadius: '4px',
  height: '24px',
  width: '102px',
  color: '#FFFFFF',
  textTransform: 'uppercase'
}))
const StyledTableCell = styled(TableCell)(({theme}) => ({

}))


const ProjectDetails = () => {
const {isDrawerOpen} = useSelector((store) => store.login)
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
    Windows PROJ94382
  </Typography>,
];
const [isReschedule, setIsReschedule] = useState(false);
const [isReassign, setIsReassign] = useState(false);
const handleRescheduleModal = () => {
  if(isReschedule){
    setIsReschedule(false)
  }else{
    setIsReschedule(true)
  }
}
const handleReassignModal = () => {
  if(isReassign){
    setIsReassign(false)
  }else{
    setIsReassign(true)
  }
}
  return (
    <>
    <div className="page-section">
      <Sidebar/>
      <Box className="page-content" sx={{width: isDrawerOpen ? `calc(100% - 240px)` : `calc(100% - 57px)`, overflow: "hidden"}}>
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
        <Card sx={{
            background: '#F7F7F7',
            boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
            p: 2,
            mb: 4
            }}>
            <Typography variant='h4'>Project Status: Scheduled</Typography>
            <Box component="div" sx={{
              display: 'flex',
              alignItems: 'flex-start',
              flexWrap: 'wrap',
              gap: '10px',
              my: 2
            }}>
                <Box component="div" sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  background: '#FFFFFF',
                  gap: '4px',
                  py: '8px',
                  boxShadow: '0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.12), 0px 1px 3px rgba(0, 0, 0, 0.2)',
                  minWidth: '160px'
                }}>
                    <Typography sx={{
                      display: 'block',
                      fontWeight: '400',
                      fontSize: '14px',
                      lineHeight: '20px',
                      letterSpacing: '0.25px',
                      color: 'rgba(0, 0, 0, 0.87)'
                    }}>04/06/22</Typography>
                    <Typography sx={{
                      display: 'block',
                      fontWeight: '400',
                      fontSize: '10px',
                      lineHeight: '20px',
                      letterSpacing: '0.25px',
                      color: 'rgba(0, 0, 0, 0.87)'
                    }}>1:02 pm PT</Typography>
                    <Typography sx={{
                      display: 'block',
                      fontWeight: '400',
                      fontSize: '16px',
                      lineHeight: '20px',
                      letterSpacing: '0.25px',
                      color: 'rgba(0, 0, 0, 0.87)'
                    }}>Posted</Typography>
                </Box>
                <Box component="div" sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  background: '#FFFFFF',
                  gap: '4px',
                  py: '8px',
                  boxShadow: '0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.12), 0px 1px 3px rgba(0, 0, 0, 0.2)',
                  minWidth: '160px'
                }}>
                    <Typography sx={{
                      display: 'block',
                      fontWeight: '400',
                      fontSize: '14px',
                      lineHeight: '20px',
                      letterSpacing: '0.25px',
                      color: 'rgba(0, 0, 0, 0.87)'
                    }}>04/06/22</Typography>
                    <Typography sx={{
                      display: 'block',
                      fontWeight: '400',
                      fontSize: '10px',
                      lineHeight: '20px',
                      letterSpacing: '0.25px',
                      color: 'rgba(0, 0, 0, 0.87)'
                    }}>1:02 pm PT</Typography>
                    <Typography sx={{
                      display: 'block',
                      fontWeight: '400',
                      fontSize: '16px',
                      lineHeight: '20px',
                      letterSpacing: '0.25px',
                      color: 'rgba(0, 0, 0, 0.87)'
                    }}>Claimed</Typography>
                </Box>
                <Box component="div" sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  background: '#FFFFFF',
                  gap: '4px',
                  py: '8px',
                  boxShadow: '0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.12), 0px 1px 3px rgba(0, 0, 0, 0.2)',
                  minWidth: '160px'
                }}>
                    <Typography sx={{
                      display: 'block',
                      fontWeight: '400',
                      fontSize: '14px',
                      lineHeight: '20px',
                      letterSpacing: '0.25px',
                      color: 'rgba(0, 0, 0, 0.87)'
                    }}>04/06/22</Typography>
                    <Typography sx={{
                      display: 'block',
                      fontWeight: '400',
                      fontSize: '10px',
                      lineHeight: '20px',
                      letterSpacing: '0.25px',
                      color: 'rgba(0, 0, 0, 0.87)'
                    }}>1:02 pm PT</Typography>
                    <Typography sx={{
                      display: 'block',
                      fontWeight: '400',
                      fontSize: '16px',
                      lineHeight: '20px',
                      letterSpacing: '0.25px',
                      color: 'rgba(0, 0, 0, 0.87)'
                    }}>Scheduled</Typography>
                    <Button variant='outlined' onClick={handleRescheduleModal}>Reschedule</Button>
                </Box>
                <Box component="div" sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  background: '#FFFFFF',
                  gap: '4px',
                  py: '8px',
                  boxShadow: '0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.12), 0px 1px 3px rgba(0, 0, 0, 0.2)',
                  minWidth: '160px'
                }}>
                    <Typography sx={{
                      display: 'block',
                      fontWeight: '400',
                      fontSize: '14px',
                      lineHeight: '20px',
                      letterSpacing: '0.25px',
                      color: 'rgba(0, 0, 0, 0.87)'
                    }}>--</Typography>
                    <Typography sx={{
                      display: 'block',
                      fontWeight: '400',
                      fontSize: '10px',
                      lineHeight: '20px',
                      letterSpacing: '0.25px',
                      color: 'rgba(0, 0, 0, 0.87)'
                    }}>--</Typography>
                    <Typography sx={{
                      display: 'block',
                      fontWeight: '400',
                      fontSize: '16px',
                      lineHeight: '20px',
                      letterSpacing: '0.25px',
                      color: 'rgba(0, 0, 0, 0.87)'
                    }}>Materials Ordered</Typography>
                </Box>
                <Box component="div" sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  background: '#FFFFFF',
                  gap: '4px',
                  py: '8px',
                  boxShadow: '0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.12), 0px 1px 3px rgba(0, 0, 0, 0.2)',
                  minWidth: '160px'
                }}>
                    <Typography sx={{
                      display: 'block',
                      fontWeight: '400',
                      fontSize: '14px',
                      lineHeight: '20px',
                      letterSpacing: '0.25px',
                      color: 'rgba(0, 0, 0, 0.87)'
                    }}>--</Typography>
                    <Typography sx={{
                      display: 'block',
                      fontWeight: '400',
                      fontSize: '10px',
                      lineHeight: '20px',
                      letterSpacing: '0.25px',
                      color: 'rgba(0, 0, 0, 0.87)'
                    }}>--</Typography>
                    <Typography sx={{
                      display: 'block',
                      fontWeight: '400',
                      fontSize: '16px',
                      lineHeight: '20px',
                      letterSpacing: '0.25px',
                      color: 'rgba(0, 0, 0, 0.87)'
                    }}>Completed</Typography>
                </Box>

            </Box>
            <Box sx={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              padding: '16px',
              gap: '11px',
              background: '#E8E8E8',
              boxShadow: '0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.12), 0px 1px 3px rgba(0, 0, 0, 0.2)'
            }}>
              <Typography sx={{
                fontStyle: 'normal',
                fontWeight: '500',
                fontSize: '20px',
                lineHeight: '24px',            
                letterSpacing: '0.15px',
                textDecoration: 'underline',
                color: '#000000',
              }}>
                Project Cancelation:
              </Typography>
              <Button variant='outlined'>Cancel Project</Button>
            </Box>
        </Card>
        <Card sx={{
          background: '#F7F7F7',
          boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
          p: 2,
          mb: 4,
          }}>
          <Typography variant='h4' sx={{mb: 2}}>Customer Data</Typography>
          <Box sx={{
            display: 'flex',
            gap: '8px',
            flexWrap: 'wrap',
          }}>
            <Box component="div" sx={{
              background: '#E8E8E8',
              boxShadow: '0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.12), 0px 1px 3px rgba(0, 0, 0, 0.2)',
              display: 'flex',
              flexWrap: 'wrap',
              flexDirection: 'column',
              padding: '0 16px 16px 16px',
              gap: '8px',
              flex: '1',
            }}>
              <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'end',
              }}>
                <Typography sx={{
                  fontWeight: '500',
                  fontSize: '20px',
                  lineHeight: '24px',
                  letterSpacing: '0.15px',
                  textDecoration: 'underline'
                }}>
                  Customer:
                </Typography>
                <IconButton>
                  <OpenInNewRoundedIcon/>
                </IconButton>
              </Box>
              <Typography sx={{
                fontWeight: '500',
                fontSize: '20px',
                lineHeight: '24px',
                letterSpacing: '0.15px',
              }}>
                Josh Johnson
              </Typography>
              <Typography sx={{
                fontWeight: '500',
                fontSize: '20px',
                lineHeight: '24px',
                letterSpacing: '0.15px',
              }}>
                joshj@tepia.co
              </Typography>
              <Typography sx={{
                fontWeight: '500',
                fontSize: '20px',
                lineHeight: '24px',
                letterSpacing: '0.15px',
              }}>
                949-343-5434
              </Typography>
            </Box>
            <Box component="div" sx={{
              background: '#E8E8E8',
              boxShadow: '0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.12), 0px 1px 3px rgba(0, 0, 0, 0.2)',
              display: 'flex',
              flexWrap: 'wrap',
              flexDirection: 'column',
              padding: '16px 16px 16px 16px',
              gap: '8px',
              flex: '1',
            }}>
              <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
              }}>
                <Typography sx={{
                  fontWeight: '500',
                  fontSize: '20px',
                  lineHeight: '24px',
                  letterSpacing: '0.15px',
                  textDecoration: 'underline'
                }}>
                  Property:
                </Typography>
              </Box>
              <Typography sx={{
                fontWeight: '500',
                fontSize: '20px',
                lineHeight: '24px',
                letterSpacing: '0.15px',
              }}>
                Josh Johnson
              </Typography>
              <Typography sx={{
                fontWeight: '500',
                fontSize: '20px',
                lineHeight: '24px',
                letterSpacing: '0.15px',
              }}>
                joshj@tepia.co
              </Typography>
              <Typography sx={{
                fontWeight: '500',
                fontSize: '20px',
                lineHeight: '24px',
                letterSpacing: '0.15px',
              }}>
                949-343-5434
              </Typography>
            </Box>
          </Box>
        </Card>
        <Card sx={{
          background: '#F7F7F7',
          boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
          p: 2,
          mb: 4,
          }}>
            <Box sx={{
              display: 'flex',
              justifyContent: 'space-between',

            }}>
              <Typography variant='h4' sx={{mb: 2}}>Acme Inc.</Typography>
              <Box>
                <IconButton sx={{mr: 2}}>
                  <OpenInNewRoundedIcon/>
                </IconButton>
                <Button variant='contained' onClick={handleReassignModal}>Reassign</Button>
              </Box>
            </Box>
          <Box sx={{
            display: 'flex',
            gap: '8px',
            flexWrap: 'wrap',
          }}>
            <Box component="div" sx={{
              background: '#E8E8E8',
              boxShadow: '0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.12), 0px 1px 3px rgba(0, 0, 0, 0.2)',
              display: 'flex',
              flexWrap: 'wrap',
              flexDirection: 'column',
              padding: '16px 16px 16px 16px',
              gap: '8px',
              flex: '1',
            }}>
              <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
              }}>
                <Typography sx={{
                  fontWeight: '500',
                  fontSize: '20px',
                  lineHeight: '24px',
                  letterSpacing: '0.15px',
                  textDecoration: 'underline'
                }}>
                  Primary Contract:
                </Typography>
              </Box>
              <Typography sx={{
                fontWeight: '500',
                fontSize: '20px',
                lineHeight: '24px',
                letterSpacing: '0.15px',
              }}>
                Josh Johnson
              </Typography>
              <Typography sx={{
                fontWeight: '500',
                fontSize: '20px',
                lineHeight: '24px',
                letterSpacing: '0.15px',
              }}>
                joshj@tepia.co
              </Typography>
              <Typography sx={{
                fontWeight: '500',
                fontSize: '20px',
                lineHeight: '24px',
                letterSpacing: '0.15px',
              }}>
                949-343-5434
              </Typography>
            </Box>
            <Box component="div" sx={{
              background: '#E8E8E8',
              boxShadow: '0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.12), 0px 1px 3px rgba(0, 0, 0, 0.2)',
              display: 'flex',
              flexWrap: 'wrap',
              flexDirection: 'column',
              padding: '16px 16px 16px 16px',
              gap: '8px',
              flex: '1',
            }}>
              <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
              }}>
                <Typography sx={{
                  fontWeight: '500',
                  fontSize: '20px',
                  lineHeight: '24px',
                  letterSpacing: '0.15px',
                  textDecoration: 'underline'
                }}>
                  Staff Assigned:
                </Typography>
              </Box>
              <Typography sx={{
                fontWeight: '500',
                fontSize: '20px',
                lineHeight: '24px',
                letterSpacing: '0.15px',
              }}>
                Josh Johnson
              </Typography>
              <Typography sx={{
                fontWeight: '500',
                fontSize: '20px',
                lineHeight: '24px',
                letterSpacing: '0.15px',
              }}>
                joshj@tepia.co
              </Typography>
              <Typography sx={{
                fontWeight: '500',
                fontSize: '20px',
                lineHeight: '24px',
                letterSpacing: '0.15px',
              }}>
                949-343-5434
              </Typography>
            </Box>
          </Box>
        </Card>
        <Card sx={{
          background: '#F7F7F7',
          boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
          p: 2,
          mb: 4,
          display: 'flex',
          flexDirection: 'column',
          gap: '1.7rem',
          }}>
            <Typography variant='h4'>Financials</Typography>
            <Box component="div" sx={{
              background: '#E8E8E8',
              boxShadow: '0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.12), 0px 1px 3px rgba(0, 0, 0, 0.2)',
              display: 'flex',
              flexWrap: 'wrap',
              flexDirection: 'column',
              padding: '16px 16px 16px 16px',
              gap: '8px',
              flex: '1',
            }}>
              <Typography sx={{
                  fontWeight: '500',
                  fontSize: '20px',
                  lineHeight: '24px',
                  letterSpacing: '0.15px',
                  textDecoration: 'underline'
                }}>
                  Customer:
                </Typography>
                <ProjectCustomersTable/>
            </Box>
            <Box component="div" sx={{
              background: '#E8E8E8',
              boxShadow: '0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.12), 0px 1px 3px rgba(0, 0, 0, 0.2)',
              display: 'flex',
              flexWrap: 'wrap',
              flexDirection: 'column',
              padding: '16px 16px 16px 16px',
              gap: '8px',
              flex: '1',
            }}>
                <Typography sx={{
                  fontWeight: '500',
                  fontSize: '20px',
                  lineHeight: '24px',
                  letterSpacing: '0.15px',
                  textDecoration: 'underline'
                }}>
                  Contracts:
                </Typography>
                <ProjectContractsTable/>  
            </Box>
            <Box component="div" sx={{
              background: '#E8E8E8',
              boxShadow: '0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.12), 0px 1px 3px rgba(0, 0, 0, 0.2)',
              display: 'flex',
              flexWrap: 'wrap',
              flexDirection: 'column',
              padding: '16px 16px 16px 16px',
              gap: '8px',
              flex: '1',
            }}> 
                <Typography sx={{
                  fontWeight: '500',
                  fontSize: '20px',
                  lineHeight: '24px',
                  letterSpacing: '0.15px',
                  textDecoration: 'underline'
                }}>
                  Accounting Breakdown:
                </Typography>
                <ProjectAccountingBreakdown/>  
            </Box>
        </Card>

        <Card sx={{
          background: '#F7F7F7',
          boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
          p: 2,
          mb: 4,
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          }}>
            <Typography variant='h4'>Conversation</Typography>
            <Box component="div" sx={{
              background: '#E8E8E8',
              boxShadow: '0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.12), 0px 1px 3px rgba(0, 0, 0, 0.2)',
              display: 'flex',
              flexDirection: 'column',
              gap: '4px',
              width: 'fit-content',
              p: '8px',
              borderRadius: '4px'
            }}>
              <Typography sx={{fontSize: '18px', fontWeight: '600'}}>
                Joel (contractor): 
              </Typography>
              <Typography sx={{fontSize: '14px',}}>
                Hi Josh, when can we stop by to confirm the measurements?
              </Typography>
              <Typography sx={{fontSize: '10px',}}>
                2 hours ago
              </Typography>
            </Box>
            <Box component="div" sx={{
              background: '#E8E8E8',
              boxShadow: '0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.12), 0px 1px 3px rgba(0, 0, 0, 0.2)',
              display: 'flex',
              flexDirection: 'column',
              gap: '4px',
              width: 'fit-content',
              p: '8px',
              borderRadius: '4px'
            }}>
              <Typography sx={{fontSize: '18px', fontWeight: '600'}}>
                Josh (customer):  
              </Typography>
              <Typography sx={{fontSize: '14px',}}>
                Will 2pm today work for you?
              </Typography>
              <Typography sx={{fontSize: '10px',}}>
                1 hour ago
              </Typography>
            </Box>
            <Box component="div" sx={{
              background: '#E8E8E8',
              boxShadow: '0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.12), 0px 1px 3px rgba(0, 0, 0, 0.2)',
              display: 'flex',
              flexDirection: 'column',
              gap: '4px',
              width: 'fit-content',
              p: '8px',
              borderRadius: '4px'
            }}>
              <Typography sx={{fontSize: '18px', fontWeight: '600'}}>
                Joel (contractor): 
              </Typography>
              <Typography sx={{fontSize: '14px',}}>
                Perfect, see you at 2. If you have any dogs please ensure they are leashed when we enter the premeses.
              </Typography>
              <Typography sx={{fontSize: '10px',}}>
                30 min ago
              </Typography>
            </Box>
        </Card>

        <Card sx={{
          background: '#F7F7F7',
          boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
          p: 2,
          mb: 4,
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',
          }}>
            <Typography variant='h4'>Service</Typography>
            <OuterGrid sx={{width: '100%', ml: 0}}>
              <WhiteCard>
                <WhiteCardHeading>
                  Premium Window
                </WhiteCardHeading>
                <Box sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'self-start',
                  gap: '1.4rem',
                  mt: 2
                }}>
                  <Box sx={{
                    background: '#FFFFFF',
                    borderRadius: '10px',
                    p: 2
                  }}>
                    <img src="/images/service1.png" alt="service"/>
                  </Box>
                  <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    flex: '1'
                  }}>
                    <Box sx={{
                      display: 'flex',
                      justifyContent: 'start',
                      alignItems: 'center',
                      gap: '10px',
                      borderTop: '0.8px solid #ddd',
                      borderBottom: '0.8px solid #ddd',
                      py: 1,
                    }}>
                      <Typography sx={{fontSize: '15px', fontWeight: 'bolder'}}>Stacked: </Typography>
                      <Typography sx={{fontSize:'15px'}}>Yes</Typography>
                    </Box>
                    <Box sx={{
                      display: 'flex',
                      justifyContent: 'start',
                      alignItems: 'center',
                      gap: '10px',
                      borderTop: '0.8px solid #ddd',
                      borderBottom: '0.8px solid #ddd',
                      py: 1,
                    }}>
                      <Typography sx={{fontSize: '15px', fontWeight: 'bolder'}}>Stacked: </Typography>
                      <Typography sx={{fontSize:'15px'}}>Yes</Typography>
                    </Box>
                    <Box sx={{
                      display: 'flex',
                      justifyContent: 'start',
                      alignItems: 'center',
                      gap: '10px',
                      borderTop: '0.8px solid #ddd',
                      borderBottom: '0.8px solid #ddd',
                      py: 1,
                    }}>
                      <Typography sx={{fontSize: '15px', fontWeight: 'bolder'}}>Stacked: </Typography>
                      <Typography sx={{fontSize:'15px'}}>Yes</Typography>
                    </Box>
                    <Box sx={{
                      display: 'flex',
                      justifyContent: 'start',
                      alignItems: 'center',
                      gap: '10px',
                      borderTop: '0.8px solid #ddd',
                      borderBottom: '0.8px solid #ddd',
                      py: 1,
                    }}>
                      <Typography sx={{fontSize: '15px', fontWeight: 'bolder'}}>Stacked: </Typography>
                      <Typography sx={{fontSize:'15px'}}>Yes</Typography>
                    </Box>
                    <Box sx={{
                      display: 'flex',
                      justifyContent: 'start',
                      alignItems: 'center',
                      gap: '10px',
                      borderTop: '0.8px solid #ddd',
                      borderBottom: '0.8px solid #ddd',
                      py: 1,
                    }}>
                      <Typography sx={{fontSize: '15px', fontWeight: 'bolder'}}>Stacked: </Typography>
                      <Typography sx={{fontSize:'15px'}}>Yes</Typography>
                    </Box>
                    <Box sx={{
                      display: 'flex',
                      justifyContent: 'start',
                      alignItems: 'center',
                      gap: '10px',
                      borderTop: '0.8px solid #ddd',
                      borderBottom: '0.8px solid #ddd',
                      py: 1,
                    }}>
                      <Typography sx={{fontSize: '15px', fontWeight: 'bolder'}}>Stacked: </Typography>
                      <Typography sx={{fontSize:'15px'}}>Yes</Typography>
                    </Box>
                    <Box sx={{
                      display: 'flex',
                      justifyContent: 'start',
                      alignItems: 'center',
                      gap: '10px',
                      borderTop: '0.8px solid #ddd',
                      borderBottom: '0.8px solid #ddd',
                      py: 1,
                    }}>
                      <Typography sx={{fontSize: '15px', fontWeight: 'bolder'}}>Stacked: </Typography>
                      <Typography sx={{fontSize:'15px'}}>Yes</Typography>
                    </Box>
                    <Box sx={{
                      display: 'flex',
                      justifyContent: 'start',
                      alignItems: 'center',
                      gap: '10px',
                      borderTop: '0.8px solid #ddd',
                      borderBottom: '0.8px solid #ddd',
                      py: 1,
                    }}>
                      <Typography sx={{fontSize: '15px', fontWeight: 'bolder'}}>Stacked: </Typography>
                      <Typography sx={{fontSize:'15px'}}>Yes</Typography>
                    </Box>
                  </Box>
                  
                </Box>
              </WhiteCard>
              <WhiteCard>
                <WhiteCardHeading>
                  Premium Window
                </WhiteCardHeading>
                <Box sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'self-start',
                  gap: '1.4rem',
                  mt: 2
                }}>
                  <Box sx={{
                    background: '#FFFFFF',
                    borderRadius: '10px',
                    p: 2
                  }}>
                    <img src="/images/service1.png" alt="service"/>
                  </Box>
                  <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    flex: '1'
                  }}>
                    <Box sx={{
                      display: 'flex',
                      justifyContent: 'start',
                      alignItems: 'center',
                      gap: '10px',
                      borderTop: '0.8px solid #ddd',
                      borderBottom: '0.8px solid #ddd',
                      py: 1,
                    }}>
                      <Typography sx={{fontSize: '15px', fontWeight: 'bolder'}}>Stacked: </Typography>
                      <Typography sx={{fontSize:'15px'}}>Yes</Typography>
                    </Box>
                    <Box sx={{
                      display: 'flex',
                      justifyContent: 'start',
                      alignItems: 'center',
                      gap: '10px',
                      borderTop: '0.8px solid #ddd',
                      borderBottom: '0.8px solid #ddd',
                      py: 1,
                    }}>
                      <Typography sx={{fontSize: '15px', fontWeight: 'bolder'}}>Stacked: </Typography>
                      <Typography sx={{fontSize:'15px'}}>Yes</Typography>
                    </Box>
                    <Box sx={{
                      display: 'flex',
                      justifyContent: 'start',
                      alignItems: 'center',
                      gap: '10px',
                      borderTop: '0.8px solid #ddd',
                      borderBottom: '0.8px solid #ddd',
                      py: 1,
                    }}>
                      <Typography sx={{fontSize: '15px', fontWeight: 'bolder'}}>Stacked: </Typography>
                      <Typography sx={{fontSize:'15px'}}>Yes</Typography>
                    </Box>
                    <Box sx={{
                      display: 'flex',
                      justifyContent: 'start',
                      alignItems: 'center',
                      gap: '10px',
                      borderTop: '0.8px solid #ddd',
                      borderBottom: '0.8px solid #ddd',
                      py: 1,
                    }}>
                      <Typography sx={{fontSize: '15px', fontWeight: 'bolder'}}>Stacked: </Typography>
                      <Typography sx={{fontSize:'15px'}}>Yes</Typography>
                    </Box>
                    <Box sx={{
                      display: 'flex',
                      justifyContent: 'start',
                      alignItems: 'center',
                      gap: '10px',
                      borderTop: '0.8px solid #ddd',
                      borderBottom: '0.8px solid #ddd',
                      py: 1,
                    }}>
                      <Typography sx={{fontSize: '15px', fontWeight: 'bolder'}}>Stacked: </Typography>
                      <Typography sx={{fontSize:'15px'}}>Yes</Typography>
                    </Box>
                    <Box sx={{
                      display: 'flex',
                      justifyContent: 'start',
                      alignItems: 'center',
                      gap: '10px',
                      borderTop: '0.8px solid #ddd',
                      borderBottom: '0.8px solid #ddd',
                      py: 1,
                    }}>
                      <Typography sx={{fontSize: '15px', fontWeight: 'bolder'}}>Stacked: </Typography>
                      <Typography sx={{fontSize:'15px'}}>Yes</Typography>
                    </Box>
                    <Box sx={{
                      display: 'flex',
                      justifyContent: 'start',
                      alignItems: 'center',
                      gap: '10px',
                      borderTop: '0.8px solid #ddd',
                      borderBottom: '0.8px solid #ddd',
                      py: 1,
                    }}>
                      <Typography sx={{fontSize: '15px', fontWeight: 'bolder'}}>Stacked: </Typography>
                      <Typography sx={{fontSize:'15px'}}>Yes</Typography>
                    </Box>
                    <Box sx={{
                      display: 'flex',
                      justifyContent: 'start',
                      alignItems: 'center',
                      gap: '10px',
                      borderTop: '0.8px solid #ddd',
                      borderBottom: '0.8px solid #ddd',
                      py: 1,
                    }}>
                      <Typography sx={{fontSize: '15px', fontWeight: 'bolder'}}>Stacked: </Typography>
                      <Typography sx={{fontSize:'15px'}}>Yes</Typography>
                    </Box>
                  </Box>
                  
                </Box>
              </WhiteCard>
              <WhiteCard>
                <WhiteCardHeading>
                  Premium Window
                </WhiteCardHeading>
                <Box sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'self-start',
                  gap: '1.4rem',
                  mt: 2
                }}>
                  <Box sx={{
                    background: '#FFFFFF',
                    borderRadius: '10px',
                    p: 2
                  }}>
                    <img src="/images/service1.png" alt="service"/>
                  </Box>
                  <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    flex: '1'
                  }}>
                    <Box sx={{
                      display: 'flex',
                      justifyContent: 'start',
                      alignItems: 'center',
                      gap: '10px',
                      borderTop: '0.8px solid #ddd',
                      borderBottom: '0.8px solid #ddd',
                      py: 1,
                    }}>
                      <Typography sx={{fontSize: '15px', fontWeight: 'bolder'}}>Stacked: </Typography>
                      <Typography sx={{fontSize:'15px'}}>Yes</Typography>
                    </Box>
                    <Box sx={{
                      display: 'flex',
                      justifyContent: 'start',
                      alignItems: 'center',
                      gap: '10px',
                      borderTop: '0.8px solid #ddd',
                      borderBottom: '0.8px solid #ddd',
                      py: 1,
                    }}>
                      <Typography sx={{fontSize: '15px', fontWeight: 'bolder'}}>Stacked: </Typography>
                      <Typography sx={{fontSize:'15px'}}>Yes</Typography>
                    </Box>
                    <Box sx={{
                      display: 'flex',
                      justifyContent: 'start',
                      alignItems: 'center',
                      gap: '10px',
                      borderTop: '0.8px solid #ddd',
                      borderBottom: '0.8px solid #ddd',
                      py: 1,
                    }}>
                      <Typography sx={{fontSize: '15px', fontWeight: 'bolder'}}>Stacked: </Typography>
                      <Typography sx={{fontSize:'15px'}}>Yes</Typography>
                    </Box>
                    <Box sx={{
                      display: 'flex',
                      justifyContent: 'start',
                      alignItems: 'center',
                      gap: '10px',
                      borderTop: '0.8px solid #ddd',
                      borderBottom: '0.8px solid #ddd',
                      py: 1,
                    }}>
                      <Typography sx={{fontSize: '15px', fontWeight: 'bolder'}}>Stacked: </Typography>
                      <Typography sx={{fontSize:'15px'}}>Yes</Typography>
                    </Box>
                    <Box sx={{
                      display: 'flex',
                      justifyContent: 'start',
                      alignItems: 'center',
                      gap: '10px',
                      borderTop: '0.8px solid #ddd',
                      borderBottom: '0.8px solid #ddd',
                      py: 1,
                    }}>
                      <Typography sx={{fontSize: '15px', fontWeight: 'bolder'}}>Stacked: </Typography>
                      <Typography sx={{fontSize:'15px'}}>Yes</Typography>
                    </Box>
                    <Box sx={{
                      display: 'flex',
                      justifyContent: 'start',
                      alignItems: 'center',
                      gap: '10px',
                      borderTop: '0.8px solid #ddd',
                      borderBottom: '0.8px solid #ddd',
                      py: 1,
                    }}>
                      <Typography sx={{fontSize: '15px', fontWeight: 'bolder'}}>Stacked: </Typography>
                      <Typography sx={{fontSize:'15px'}}>Yes</Typography>
                    </Box>
                    <Box sx={{
                      display: 'flex',
                      justifyContent: 'start',
                      alignItems: 'center',
                      gap: '10px',
                      borderTop: '0.8px solid #ddd',
                      borderBottom: '0.8px solid #ddd',
                      py: 1,
                    }}>
                      <Typography sx={{fontSize: '15px', fontWeight: 'bolder'}}>Stacked: </Typography>
                      <Typography sx={{fontSize:'15px'}}>Yes</Typography>
                    </Box>
                    <Box sx={{
                      display: 'flex',
                      justifyContent: 'start',
                      alignItems: 'center',
                      gap: '10px',
                      borderTop: '0.8px solid #ddd',
                      borderBottom: '0.8px solid #ddd',
                      py: 1,
                    }}>
                      <Typography sx={{fontSize: '15px', fontWeight: 'bolder'}}>Stacked: </Typography>
                      <Typography sx={{fontSize:'15px'}}>Yes</Typography>
                    </Box>
                  </Box>
                  
                </Box>
              </WhiteCard>
            </OuterGrid>
        </Card>
        <Card sx={{
            background: '#F7F7F7',
            boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
            p: 2,
            mb: 4,
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
            }}>
              <Typography variant='h4'>Warranty</Typography>
              <WarrantyCard>
                <ErrorOutlineRoundedIcon sx={{fontSize: '50px'}}/>
                <Box sx={{
                  display: 'flex',
                  flexDirection: 'column',

                }}>
                  <Typography sx={{
                    fontSize: '14px',
                    fontWeight: '500',
                    letterSpacing: '0.1px',
                  }}>
                    Labor warranty expries: 03/31/2023
                  </Typography>
                  <Typography sx={{
                    fontSize: '14px',
                    fontWeight: '500',
                    letterSpacing: '0.1px',
                  }}>
                    Product warranty expries: 03/31/2024
                  </Typography>
                </Box>
              </WarrantyCard>
        </Card>
      </Box>

{/* modals  */}
{isReschedule? (
  <Dialog
    open={isReschedule}
    scroll='body'
    onClose={handleRescheduleModal}
    aria-describedby="scroll-dialog-description"
  >
    <DialogTitle id="scroll-dialog-title" sx={{ 
        p: 1,
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: '24px',
        lineHeight: '24px',
        letterSpacing: '0.18px',
        color: '#000000'
     }}>Reschedule</DialogTitle>
    <DialogContent
        sx={{
            p: 0
        }}
    >
      <DialogContentText
        id="scroll-dialog-description"
        tabIndex={-1}
      >
        <RescheduleContainer>
            <ModalHeading>
              Window PROJ94382
            </ModalHeading>
            <TextField 
                sx={{width: '100%', mb: 4}}
                id="date"
                label="Date"
                variant="outlined" 
                defaultValue="Input text"
            />
            <FormControl fullWidth>
                  <InputLabel id="time">Time</InputLabel>
                  <Select
                    labelId="time"
                    id="time"
                    label="Time"
                    value="t1"
                  >
                    <MenuItem value='t1'>time 1</MenuItem>
                    <MenuItem value="t2">time 2</MenuItem>
                    <MenuItem value="t3">time 3</MenuItem>
                  </Select>
                </FormControl>
        </RescheduleContainer>
       
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button variant='outlined' onClick={handleRescheduleModal}>Cancel</Button>
      <Button variant='contained' onClick={handleRescheduleModal}>Reschedule</Button>
    </DialogActions>
  </Dialog>
): null}
{isReassign? (
  <Dialog
    open={isReassign}
    scroll='body'
    onClose={handleReassignModal}
    aria-describedby="scroll-dialog-description"
  >
    <DialogTitle id="scroll-dialog-title" sx={{ 
        p: 1,
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: '24px',
        lineHeight: '24px',
        letterSpacing: '0.18px',
        color: '#000000'
     }}>Reassign</DialogTitle>
    <DialogContent
        sx={{
            p: 0
        }}
    >
      <DialogContentText
        id="scroll-dialog-description"
        tabIndex={-1}
      >
        <RescheduleContainer sx={{mb: 14}}>
            <ModalHeading>
              Window PROJ94382
            </ModalHeading>
            <Box sx={{
              display: 'flex',
              flexDirection: 'column',
            }}>
              <ReAssignBox>
                <Typography sx={{fontWeight: '600', color: '#000000'}}>Bob Smith</Typography>
                <ReAssignRemove>Remove</ReAssignRemove>
              </ReAssignBox>
              <ReAssignBox>
                <Typography sx={{fontWeight: '600', color: '#000000'}}>Ford Prefect</Typography>
                <ReAssignRemove>Remove</ReAssignRemove>
              </ReAssignBox>
              <ReAssignBox>
                <Typography sx={{fontWeight: '600', color: '#000000'}}>Arthur Dent</Typography>
                <ReAssignRemove>Remove</ReAssignRemove>
              </ReAssignBox>
              <ReAssignBox>
                <select name="options" id="options" style={{
                  background: '#FFFFFF',
                  height: '30px',
                  width: '184px',
                  border: 'none',
                  outline: 'none'
                }}>
                  <option value="opt1">Staff</option>
                  <option value="opt1">Staff</option>
                  <option value="opt1">Staff</option>
                  <option value="opt1">Staff</option>
                </select>
                <ReAssignRemove sx={{ background: '#019EB2'}}>assign</ReAssignRemove>
              </ReAssignBox>
            </Box>
        </RescheduleContainer>
       
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button variant='outlined' onClick={handleReassignModal}>Cancel</Button>
      <Button variant='contained' onClick={handleReassignModal}>Save Changes</Button>
    </DialogActions>
  </Dialog>
): null}



    </div>
    </>
  )
}

export default ProjectDetails