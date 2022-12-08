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

function funCheckOut() {
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
      <Checkout></Checkout>
      <Grid paddingTop="100px">
      <hr />
        <ListItem>
          <CarruselPie />
          <CarruselPie />
          <CarruselPie />
          <CarruselPie />
          <CarruselPie />
        </ListItem>
      </Grid>
    </>
  );
}

export default funCheckOut;
