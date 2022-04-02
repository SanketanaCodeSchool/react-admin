import './sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import NotificationsIcon from '@mui/icons-material/Notifications';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import DataObjectIcon from '@mui/icons-material/DataObject';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LogoutIcon from '@mui/icons-material/Logout';



const Sidebar = () => {
    return(
        <div className = 'sidebar'>
            <div className="top">
                <span className="logo">
                    Sanketana
                </span>
            </div>
            <hr />
            <div className="center" >
                <ul>
                    <p className='title'>MAIN</p>
                    <li>
                        <DashboardIcon classname = "icon" />
                        <span>Dashboard</span>
                    </li>
                    <p className='title'>LISTS</p>
                    <li>
                        <PersonIcon classname = "icon" /> 
                        <span>Users</span>
                    </li>
                    <li>
                        <LocalMallIcon classname = "icon" />
                        <span>Products</span>
                    </li>
                    <li>
                        <ShoppingCartIcon classname = "icon" /> 
                        <span>Orders</span>
                    </li>
                    <li>
                        <DashboardIcon classname = "icon" /> 
                        <span>Delivery</span>
                    </li>
                    <p className='title'>USEFUL</p>
                    <li>
                        <DashboardIcon classname = "icon" /> 
                        <span>Stats</span>
                    </li>
                    <li>
                        <DashboardIcon classname = "icon" /> 
                        <span>Notifications</span>
                    </li>
                    <p className='title'>SERVICE</p>
                    <li>
                        <DashboardIcon classname = "icon" /> 
                        <span>System Health</span>
                    </li>
                    <li>
                        <DashboardIcon classname = "icon" /> 
                        <span>Logs</span>
                    </li>
                    <li>
                        <DashboardIcon classname = "icon" /> 
                        <span>Settings</span>
                    </li>
                    <p className='title'>USER</p>
                    <li>
                        <DashboardIcon classname = "icon" /> 
                        <span>Profile</span>
                    </li>
                    <li>
                        <DashboardIcon classname = "icon" /> 
                        <span>Logout</span>
                    </li>

                </ul>
            </div>
            <div className="bottom">
                <div className="colorOption"></div>
                <div className="colorOption"></div>
                <div className="colorOption"></div>
            </div>
        </div>
    )
}

export default Sidebar;