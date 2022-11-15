import ModeRoundedIcon from '@mui/icons-material/ModeRounded';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import { IconButton } from '@mui/material';
const TableActions = (props) => {
const handleCustomerDetail = () => {
  console.log(props.editCustomerDetail);  
}
  return (
    <div style={{ 
        display: 'flex',
        gap: '10px'
    }}>
        <IconButton>
            <DeleteRoundedIcon/>
        </IconButton>
        <IconButton onClick={handleCustomerDetail}>
            <ModeRoundedIcon/>
        </IconButton>
    </div>
  )
}

export default TableActions