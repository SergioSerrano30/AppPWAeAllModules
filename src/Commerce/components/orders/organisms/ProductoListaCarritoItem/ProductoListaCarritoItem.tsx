import {
  Input,
  TextField,
  Box,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
  Button,
  ButtonGroup,
  Stack,
  Grid,
  ListItem,
} from '@mui/material';

function ProductoListaCarritoItem(){
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
      <Grid item xs container direction="column" spacing={1}>
        <Grid item xs>
          <Typography gutterBottom variant="subtitle1" component="div">
            <b>{info.descripcion}{info.color}</b>
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Envio: {info.envio}
          </Typography>
        </Grid>

        <Grid item xs  textAlign="center">
          <Button size="small" color="error" >Eliminar</Button>
          <Button size="small">Más Productos </Button>
        </Grid>
      </Grid>

        <Grid marginRight="25px" alignItems="center" marginTop="15px">
          <TextField id="outlined-basic" label="pz" variant="outlined" type="number" sx={{ width:60, height: 60 }} />
        </Grid>
        
        <Grid >  
          <Typography gutterBottom variant="subtitle1" component="div">
           <h2>${info.precio}</h2>
          </Typography>
        </Grid>

        
    </>
  );
}
export default ProductoListaCarritoItem;
