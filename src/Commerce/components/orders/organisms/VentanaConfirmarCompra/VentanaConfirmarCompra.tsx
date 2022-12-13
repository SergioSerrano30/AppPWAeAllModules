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
import VentanaConfirmaCompraDomicilio from '../../molecules/VentanaConfirmarCompraDomicilio';


function VentanaConfirmarCompra(){
  const info = {
    codigoPostal: '69069',
    calle: 'Av. Insurgentes',
    colonia: 'Los Sauces ',
    ciudad: 'Tepic',
    estado: 'Nayarit',
    nombre: 'Carlos Zambrano',
    telefono: '311 137 2332'
  }
  return (
    <>

      <Grid item xs container direction="column" spacing={1}>
        <Grid item xs>
          <Typography gutterBottom variant="subtitle1" component="div">
            <b>C.P. {info.codigoPostal}</b>
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {info.calle} - {info.colonia} - {info.ciudad}, {info.estado}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {info.nombre} - {info.telefono} 
          </Typography>
        </Grid>

      </Grid>


        
    </>
  );
}
export default VentanaConfirmarCompra;
