import { Button, Typography, Container, Box, Avatar } from '@material-ui/core'
import { useNavigate } from 'react-router';
import CustomButton from '../../theme/CustomButton';
import { selectAllVolunteers, selectVolunteerId } from '../../store/volunteerSlice';
import { useSelector } from "react-redux";
import { ListItemButton } from '@mui/material';
import CustomTypography from '../../theme/CustomTypography';

const UserProfile = () => { 
    let navigate = useNavigate();
    const volunteersList = useSelector(selectAllVolunteers);
    const volunteer = selectVolunteerId(volunteersList,5);
    
    return (

      <Container style={{display: 'flex',justifyContent: 'center',paddingTop: '4rem',width: '100%'}}>
        <Box style={{width: '20%',margin: '0',padding: '0',}}>
            <Avatar
                    src={require(`../../assets/img/volunteers/${volunteer.image}.jpg`)}
                    alt={`${volunteer.name}`}
                    style = {{borderRadius:"50%", width:"200px", height: "200px", marginBottom: "2rem"}}
                    />
          <Button variant="outlined" disabled style={{marginLeft:'1.6rem'}}>Edytuj zdjęcie</Button>
        </Box>
        <Box style={{ width: '70%'}}>
          <Box style={{  display: 'flex', borderBottom: '1px solid #AFAFAF', marginBottom: '2rem'}} >
              <Box style={{  display: 'flex', justifyContent: "flex-start"}}>
                  <Typography gutterBottom variant="h1" style={{margin: "0 2rem 0 0"}}>{volunteer.name} {volunteer.surname}</Typography>
              </Box>
              <Box style={{  display: 'flex', justifyContent: "flex-end", gap: "3rem"}}>
                  <CustomButton style={{marginBottom:'1rem'}} variant="contained" color='tertiary'>Jesteś wolontariuszem</CustomButton>
                  <Button style={{marginBottom:'1rem'}} variant="outlined" disabled >Edytuj profil</Button>
              </Box>
            
            
          </Box>
          <Box style={{borderBottom: '1px solid #AFAFAF', marginBottom: '2rem'}}>
            <CustomTypography variantcolor={"typographycolor"} variant='h2' style={{margin: "2rem 0"}} color="tertiary">Uczestniczyłeś w tych akcjach:</CustomTypography>
            <Typography variant='h3' style={{color: '#868686'}}>
              {volunteer.actions?.map((act,id)=>(
                <ListItemButton key={`action-${id}`} style={{border: "1px #eee solid"}}>{act}</ListItemButton>
              ))}
            </Typography>
            <Button variant="outlined" style={{ margin: '2rem 0',}} disabled>Załaduj więcej</Button>
            <Typography variant='h3' style={{color: '#868686', marginBottom: '2rem',}}>Aby dołączyć do jakieś akcji musisz założyć profil wolontariusza</Typography>
             <Button style={{marginBottom:'1rem'}} variant="contained" color="secondary" onClick={()=>{navigate("/VolunteerForm")}}>Zakładam sobie profil wolonratiusza</Button>
        
          </Box>
          <Box>
            <Typography variant='h3'>Organizacje, do których należę:</Typography>
            <Typography variant='h3' style={{color: '#868686', marginBottom: '2rem',}}>[liczba organizacji]</Typography>
            <Button style={{marginBottom:'2rem'}}variant="contained" color="primary" onClick={()=>{navigate("/OrganizationForm")}}>Tworzę stronę organizacji</Button>
          </Box>
        </Box>
    </Container>
    );
}

export default UserProfile;