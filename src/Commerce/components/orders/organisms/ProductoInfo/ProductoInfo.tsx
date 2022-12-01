import {
  Box,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
  Button,
  Stack,
  Grid,
  ListItem,
} from '@mui/material';
function ProductoInfo(){
  const info = {
    status: 'Entregado',
    fechaEnt: '28-11-2022',
    descripcion: 'Alexa Echo Dot 3'
  }
  return (
    <>
      <Grid item xs container direction="column" spacing={2}>
        <Grid item xs>
          <Typography gutterBottom variant="subtitle1" component="div">
            {info.status}
          </Typography>
          <Typography variant="body2" gutterBottom>
            {info.fechaEnt}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {info.descripcion}
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}
export default ProductoInfo;
