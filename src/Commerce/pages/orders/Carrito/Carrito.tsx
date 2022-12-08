import Meta from '@/Commerce/components/Meta';
import {
  Box,
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
//import { Busqueda } from '@/Commerce/components/orders/organisms/Busqueda';
import Usuarios from '@/Commerce/components/orders/molecules/Usuarios/Usuarios';
import Producto from '@/Commerce/components/orders/molecules/Producto/Producto';
function Carrito() {
  return (
    <>
      <Meta title="carrito" />
      {/* <Usuarios/> */}
      <ListItem>
      <hr /><h2> COMPRAS:</h2><hr />
      </ListItem>
      <ListItem>
        <Producto />
      </ListItem>
      <ListItem>
        <Producto />
      </ListItem>
      <ListItem>
        <Producto />
      </ListItem>
      
      <hr /><h3>Prueba Obtener Datos</h3><hr />
        <Usuarios />
    </>
  );
}

export default Carrito;
