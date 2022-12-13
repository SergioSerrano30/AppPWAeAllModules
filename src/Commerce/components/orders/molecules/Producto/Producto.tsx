import {
  Box,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
  Button,
  Stack,
  ButtonBase,
  styled,
  Grid,
  Paper,
  ListItem,
  TextField
} from '@mui/material';

import SearchIcon from '@mui/icons-material/Search';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import { useTheme } from '@mui/material/styles';
import { FullSizeCenteredFlexBox } from '@/Commerce/components/styled';
import Imagen1 from '@/General/assets/img/live-from-space.jpg';
import ProductoInfo from '../../organisms/ProductoInfo';
import Botones from '../../organisms/Botones';
function Producto(data: any) {
  // console.log(props.test)

  const theme = useTheme();
  const ImgProd = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  });
  let urlImgProd = 'https://http2.mlstatic.com/D_NQ_NP_2X_701798-MLA43059089824_082020-V.webp';

  const ordenes = data.info;
  console.log(ordenes);
  return (
    <>
      <Paper
        sx={{
          p: 2,
          margin: 'auto',
          maxWidth: 1000,
          mt: 5,
          flexGrow: 1,
          backgroundColor: (theme) => (theme.palette.mode === 'dark' ? '#1A2027' : '#eee'),
        }}
      >
        <Typography variant="h3" gutterBottom>
          Compras
        </Typography>
        <TextField 
        label="Label" 
        placeholder="Type in here…" 
        helperText="This is a helper text"
        
        />
        <Grid container spacing={2} direction="row" justifyContent="flex-start" alignItems="center">
          {ordenes.map((orden:any) => (
            <>
              <Grid item xs={12} ml={4} pt={2}>
                <Typography variant="h5" gutterBottom>
                  ID_OK: {orden.IdOrdenOK}
                </Typography>
              </Grid>
              <Grid item xs>
                <ProductoInfo
                  infoProd={orden.ordenes_presenta_ps}
                  status={orden.cat_ordenes_estatus}
                />
              </Grid>
            </>
          ))}
        </Grid>
      </Paper>
    </>
  );
}

// {ordenes.map((orden) => (
//   <h2>ID OK: {orden.IdOrdenOK}</h2>
// ))}
export default Producto;
