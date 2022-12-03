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
  } from '@mui/material';

  import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
  import PlayArrowIcon from '@mui/icons-material/PlayArrow';
  import SkipNextIcon from '@mui/icons-material/SkipNext';
  import { useTheme } from '@mui/material/styles';
  import { FullSizeCenteredFlexBox } from '@/Commerce/components/styled';
  import Imagen1 from '@/General/assets/img/live-from-space.jpg';
  import ProductoInfo from '../../organisms/ProductoInfo';
  import Botones from '../../organisms/Botones';
  import ProductoListaCarritoItem from '../../organisms/ProductoListaCarritoItem/ProductoListaCarritoItem';
import VentanaConfirmarCompra from '@/Commerce/components/orders/organisms/VentanaConfirmarCompra/';

  

  function VentanaConfirmarCompraDomicilio() {
    const theme = useTheme();
    const ImgProd = styled('img')({
      margin: 'auto',
      display: 'block',
      maxWidth: '100%',
      maxHeight: '100%',
    });
    let urlImgProd = 'https://http2.mlstatic.com/D_NQ_NP_2X_701798-MLA43059089824_082020-V.webp';
    
    return (
      <>
        <Paper
          sx={{
            p: 2,
            margin: 'auto',
            maxWidth: 800,
            flexGrow: 1,
            backgroundColor: (theme) => (theme.palette.mode === 'dark' ? '#1A2027' : '#fff'),
          }}
        >

          <Grid container spacing={1} direction="row" justifyContent="flex-start" alignItems="center">
            <Grid item>

              <ButtonBase sx={{ width:75, height: 75 }}>
                <ImgProd alt="Imagen del producto" src={urlImgProd} />
              </ButtonBase>
            </Grid>

            <Grid item xs={10} sm container>
              <VentanaConfirmarCompra />
            </Grid>
  
          </Grid>
        </Paper>
      </>
    );
  }
  export default VentanaConfirmarCompraDomicilio;
  