import { makeStyles } from "tss-react/mui";

export const getProfilePageStyles = makeStyles()((theme)=>{
    return({
        profilePageContStyles:{
            display:'flex',
            flexDirection:'column',
            alignItems:'center',
            backgroundColor:'transparent',
            height:'100vh',
        }
    });
});