import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import '../App.css';

export const Prayer = ({name , time}) => {
  return (
    <>
      <Card className='card-section' >
      <CardActionArea>
      
        <CardContent sx={{display:'flex' , justifyContent:'space-between' , alignItems:'center'}}>
          <Typography sx={{color:'rgba(11, 11, 26, 1)'}} gutterBottom variant="h6" component="div">
            {name}
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary' }}>
            {time}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </>
  )
}
