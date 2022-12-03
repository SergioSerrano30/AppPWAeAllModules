import {
  Input,
  TextField,
  Box,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  IconButton,
  Typography,
  Button,
  ButtonGroup,
  CardActions,
  Stack,
  Grid,
  ListItem,
} from '@mui/material';

function CarruselPie(){
  const info = {
    status: 'Entregado',
    fechaEnt: '28-11-2022',
    descripcion: 'Alexa Echo Dot Gen 3 con asistente virtual ',
    color: 'Negro Mate',
    envio: 'Gratis',
    precio: '699'
  }

  return (
    <>
    <Grid container  >
    <Card sx={{ maxWidth: 350 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="150"
          image="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Producto"
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            Cámara Cannon
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            $2900
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Envío Gratis
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Agregar al Carrito
        </Button>
      </CardActions>
    </Card>
    </Grid>
      

    
    </>
  );
}
export default CarruselPie;
