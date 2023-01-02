import { styled } from '@mui/material/styles';
import { Box, Card, IconButton, Button, Table, TableContainer, TextField, Typography, InputBase} from '@mui/material';


export const ActivityLogBox = styled(Box)(({theme}) => ({
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
export const ActivityLogText = styled(Typography)(({theme}) => ({
    fontSize: '14px',
    fontWeight: '600',
    textTransform: 'capitalize',
    letterSpacing: '0.25px'
}))
export const PostBox = styled(Box)(({theme}) => ({
    padding: '4px 8px',
    display: 'flex',
    flexDirection: 'column',
    background: '#FFFFFF',
    boxShadow: '0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.12), 0px 1px 3px rgba(0, 0, 0, 0.2)'
}))
export const PostSearch = styled(Box)(({theme}) => ({
    display: 'flex',
}))
export const PostSearchInput = styled(TextField)(({theme}) => ({
    height: '100%',
    width: 'calc(100% - 60px)',
}))
export const PostSearchButton = styled(Button)(({theme}) => ({
    background: '#019EB2',
    borderRadius: '4px',
    marginTop: '5.2px',
    marginLeft: '-3px'
}))
export const AboutCard = styled(Box)(({theme}) => ({
    [theme.breakpoints.down('md')] : {
        width: '100%'
    },
    [theme.breakpoints.up('md')] : {
        width: 'calc(100% - 317px)',
    },
}))
