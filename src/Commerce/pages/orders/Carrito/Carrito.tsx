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
import Producto from '@/Commerce/components/orders/molecules/Producto';
//import { Busqueda } from '@/Commerce/components/orders/organisms/Busqueda';
function Carrito() {
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
      <Meta title="carrito" />
      <ListItem>
        <Producto />
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
      <ListItem>
        <Producto />
      </ListItem>
      <ListItem>
        <Producto />
      </ListItem>
    </>
  );
}

export default Carrito;
