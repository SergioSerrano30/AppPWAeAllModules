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
  Toolbar,
  AppBar,
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
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
//import { Busqueda } from '@/Commerce/components/orders/organisms/Busqueda';
import VentanaConfirmarCompraDomicilio from '../../../components/orders/molecules/VentanaConfirmarCompraDomicilio/VentanaConfirmarCompraDomicilio';
import Checkout from '@/Commerce/components/orders/Checkout/Checkout';

function ConfirmarOrden() {
  return (
    <>
      <AppBar
        position="absolute"
        color="default"
        elevation={0}
        sx={{
          position: 'relative',
          borderBottom: (t) => `1px solid ${t.palette.divider}`,
        }}
      >
        <Toolbar>
          <ShoppingCartIcon></ShoppingCartIcon>
          <Typography variant="h6" color="inherit" noWrap>
            Carrito de Compras
          </Typography>
          <Button variant="contained" sx={{ mt: 0, ml: 150 }}>
            Ver Compras
          </Button>
        </Toolbar>
      </AppBar>

      <Checkout></Checkout>
    </>
  );
}

export default ConfirmarOrden;
