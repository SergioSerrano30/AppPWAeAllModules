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
  List,
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
import Ordenes from '@/Commerce/components/orders/molecules/Ordenes/Ordenes';
import { baseURL } from '@/Commerce/api/reqRes';
import { useEffect, useState } from 'react';
import axios from 'axios';
const api = baseURL + '/commerce/ordenes';

const Carrito = () => {
  const [ordenes, setOrdenes] = useState({
    usuario:'Sergio',
    OrdenesData:[]
  });

  useEffect( () => {
    axios.get(api).then((response) => {
      //console.log(response.data);
      setOrdenes({...ordenes,OrdenesData:response.data});
    });
  }, []);

  const usuario = ordenes.usuario;
  const OrdenesData = ordenes.OrdenesData
  return (
    <>
      {/* <Meta title="carrito" />
      <List>
        
      </List> */}
      <Producto info={OrdenesData} user={usuario}/>
    </>
  );
};

export default Carrito;
