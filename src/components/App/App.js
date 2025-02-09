import { Box } from "@material-ui/core";
import { Navigate, Route, Routes } from 'react-router-dom';
import { theme } from '../../theme/theme.js';
import { ThemeProvider } from '@material-ui/core/styles';
import HomePage from '../HomePage/HomePage';
import OrganizationForm from '../OrganizationForm/OrganizationForm';
import OrganizationPage from '../OrganizationPage/OrganizationPage';
import TaskForm from '../TaskForm/TaskForm';
import TasksPage from '../TasksPage/TasksPage';
import UserProfile from '../UserProfile/UserProfile';
import VolunteerForm from '../VolunteerForm/VolunteerForm';
import VolunteerPage from '../VolunteerPage/VolunteerPage';
import VolunteersPage from '../VolunteersPage/VolunteersPage';
import TaskPage from '../TaskPage/TaskPage';
import AppHeader from './AppHeader';
import AppFooter from './AppFooter';
import { createBrowserHistory } from "history";
import { withStyles } from "@material-ui/core/styles";

const styles = {
    boxTransparent: {
      height: "100%",
      background: "none",
      display:"flex",
    }
  };

function App({ classes }) {
    return (
        <ThemeProvider theme={theme}>
        <Box className={classes.boxTransparent} >
             <Box sx={{ flexGrow: 1 }}> 
                <AppHeader/>
                <Box padding={"0 2"} flex={1} overflow={"auto"}>
                <Routes history={createBrowserHistory}>
                    <Route exact path="/*" element={<HomePage/>} />
                    <Route path="/OrganizationForm/*" element={<OrganizationForm/>} />
                    <Route path="/OrganizationPage" element={<OrganizationPage/>} />
                    <Route path="/TaskForm/*" element={<TaskForm/>} />
                    <Route path="/TaskPage/:taskId" element={<TaskPage/>} />
                    <Route path="/TasksPage" element={<TasksPage/>} />
                    <Route path="/UserProfile" element={<UserProfile/>} />
                    <Route path="/VolunteerForm" element={<VolunteerForm/>} />
                    <Route path="/VolunteerPage/:volunteerId/:volunteerNick" element={<VolunteerPage/>} />
                    <Route path="/VolunteersPage" element={<VolunteersPage/>} />
                    <Route path="*" element={<Navigate to="/"/>}/>
                    </Routes>
                </Box>
                <AppFooter />
             </Box>
        </Box>
        </ThemeProvider>
    )
};

export default withStyles(styles)(App);
