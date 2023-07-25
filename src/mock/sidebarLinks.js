import BuildRoundedIcon from '@mui/icons-material/BuildRounded';
import StoreMallDirectoryRoundedIcon from '@mui/icons-material/StoreMallDirectoryRounded';
import PeopleRoundedIcon from '@mui/icons-material/PeopleRounded';
import WorkRoundedIcon from '@mui/icons-material/WorkRounded';
import MonetizationOnRoundedIcon from '@mui/icons-material/MonetizationOnRounded';
import VerifiedUserRoundedIcon from '@mui/icons-material/VerifiedUserRounded';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import ScreenShareRoundedIcon from '@mui/icons-material/ScreenShareRounded';
const links = [
    {
        id: 1,
        text: 'Services',
        route: '/services',
        icon: <BuildRoundedIcon />
    },
    {
        id: 2,
        text: 'Companies',
        route: '/companies',
        icon: <StoreMallDirectoryRoundedIcon/>
    },
    {
        id: 3,
        text: 'Customers',
        route: '/customers',
        icon: <PeopleRoundedIcon/>
    },
    {
        id: 4,
        text: 'Projects',
        route: '/projects',
        icon: <WorkRoundedIcon/>
    },
    {
        id: 5,
        text: 'Transactions',
        route: '/transactions',
        icon: <MonetizationOnRoundedIcon/>
    },
    {
        id: 6,
        text: 'Admin Portal Users',
        route: '/admin-portal-user',
        icon: <VerifiedUserRoundedIcon/>
    },
    {
        id: 7,
        text: 'Coupons',
        route: '/coupons',
        icon: <ShoppingCartRoundedIcon/>
    },
    {
        id: 8,
        text: 'System Variables',
        route: '/system-variables',
        icon: <ScreenShareRoundedIcon/>
    },
]
export default links