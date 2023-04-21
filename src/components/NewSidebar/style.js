import { makeStyles } from "tss-react/mui";


export const navStyle = makeStyles()((theme,styles)=>{
    return(
      {
        nav:{
            position:'absolute',
            top: '0',
            bottom:'0',
            height:'100%',
            left:'0',
            background:'blue',
            width:'90px',
            overflow:'hidden',
            transition: 'width 0.2s linear',
            /* box-shadow: , */
        
        },

        a:{
            position:'relative',
            color:'white',
            fontSize: '14px',
            display: 'table',
            width: '300px',
            padding:'10px',
        },

        ham:{
            position:'relative',
            left:'10px',
        },
        
        fas:{
            position:'relative',
            width:'70px',
            height:'40px',
            top:'14px',
            fontSize: '20px',
            textAlign: 'center',
            align:'center'
        },
        
        navItem:{
            position:'relative',
            top:'14px',
            marginLeft: '10px',
            fontSize: '20px',
        },
        
        a: {
            '&:hover': {
                backgroundColor:'rgba(241, 236, 236, 0.176)',
            }
            
        },
        
        nav:{
            '&:hover':{
             width:'180px',
             transition:'all 0.6s ease',
        }
    },
        
        logout:{
            position:'absolute',
            bottom:'0',
        }
    })
})