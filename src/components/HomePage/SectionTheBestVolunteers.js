import { Box, Typography } from "@material-ui/core";

const SectionTheBestVolunteers = () => {
    return(
        <Box id={"section-the-best-volunteers"}
            display={"flex:"}
            height = {"100%"}
            justifyContent={"center"}
            alignItems={"center"}
        >
            <Typography variant="h1">Najbardziej aktywni wolontariusze</Typography>
            <Box display={'flex'} padding={'4rem'} justifyContent={'space-evenly'} mr={'2rem'}>
               
            </Box>
        </Box>
    )
}

export default SectionTheBestVolunteers;