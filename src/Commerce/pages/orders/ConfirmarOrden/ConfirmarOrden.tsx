import Meta from '@/Commerce/components/Meta';
import {
  Box,
  Grid,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
  Button,
  Stack,
  Paper,
  ListItem,
} from '@mui/material';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import { useTheme } from '@mui/material/styles';
import { FullSizeCenteredFlexBox } from '@/Commerce/components/styled';
import Imagen1 from '@/General/assets/img/live-from-space.jpg';
import Producto from '@/Commerce/components/orders/molecules/Producto';
import ProductoListaCarrito from '@/Commerce/components/orders/molecules/ProductoListaCarrito/ProductoListaCarrito';
import CarruselPie from '@/Commerce/components/orders/organisms/CarruselPie/';
import VentanaConfirmarCompra from '@/Commerce/components/orders/organisms/VentanaConfirmarCompra/';
//import { Busqueda } from '@/Commerce/components/orders/organisms/Busqueda';
import VentanaConfirmarCompraDomicilio from '../../../components/orders/molecules/VentanaConfirmarCompraDomicilio/VentanaConfirmarCompraDomicilio';

function ConfirmarOrden() {
  const PEDIDOS = [
    {
      test: 'x',
      test2: 'x',
    },
    {
      test: 'y',
      test2: 'y',
    },
  ];

  console.log(PEDIDOS);
  return (
    <>
      <Meta title="listacarrito" />
      <Grid item xs container direction="row" spacing={2}>
        <Grid container direction="column">
          <ListItem>
            <VentanaConfirmarCompraDomicilio></VentanaConfirmarCompraDomicilio>
          </ListItem>
          <ListItem>
            <VentanaConfirmarCompraDomicilio></VentanaConfirmarCompraDomicilio>
          </ListItem>
          <ListItem>
            <VentanaConfirmarCompraDomicilio></VentanaConfirmarCompraDomicilio>
          </ListItem>
        </Grid>
        <Grid>
          sdcsdfsdfsdfs
        </Grid>
      </Grid>

      <br />

      <Grid container>
        <Grid item xs={7}></Grid>
        <Grid item xs={5}>
          <h3>Total con Envío: $9999</h3>
          <Button variant="contained" size="large">
            Continuar Compra
          </Button>
        </Grid>
      </Grid>
    </>
  );
}

export default ConfirmarOrden;