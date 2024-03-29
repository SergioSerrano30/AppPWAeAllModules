import Meta from '@/Commerce/components/Meta';
import {
  Box,
  Grid,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  styled,
  Typography,
  ButtonBase,
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
import AddressForm from '@/Commerce/components/orders/Checkout/AddressForm';
//import { Busqueda } from '@/Commerce/components/orders/organisms/Busqueda';
import VentanaConfirmarCompraDomicilio from '../../../components/orders/molecules/VentanaConfirmarCompraDomicilio/VentanaConfirmarCompraDomicilio';
import Checkout from '../../../components/orders/Checkout/Checkout';

function ConfirmarOrden() {

  return (
    <>
      <Meta title="listacarrito" />
      <h2>¿Donde recibir tu compra?</h2>
      <Grid container spacing={0}>
        <Grid item xs={8}>
          <ListItem>
            <VentanaConfirmarCompraDomicilio></VentanaConfirmarCompraDomicilio>
          </ListItem>
          <ListItem>
            <VentanaConfirmarCompraDomicilio></VentanaConfirmarCompraDomicilio>
          </ListItem>
          <br />
          <h2>Ingresa los datos de tu Tarjeta</h2>
       <Checkout></Checkout>
        </Grid>

        <Grid item xs={2}>
          <Grid>
            <h3>Resumen de la Compra:</h3>
          </Grid>
          <hr />
          <Grid container spacing={0}>
            <h4> Productos (5): $2500</h4>
          </Grid>
          <hr />
          <Grid container spacing={0}>
            <h4> Total: $2500</h4>
          </Grid>
          <hr />
          <Grid container>
            <Grid item xs={3}></Grid>

            <Grid item xs={0}>
              <br /> <br />
              <Button variant="contained" size="large">
                Comprar
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <br />
    </>
  );
}

export default ConfirmarOrden;
