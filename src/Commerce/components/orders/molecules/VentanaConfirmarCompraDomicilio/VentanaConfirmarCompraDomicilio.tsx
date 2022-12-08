import {
    Box,
    Card,
    Radio,
    FormControl,
    RadioGroup,
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
    FormControlLabel,
    FormLabel,
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
    let urlImgProd = 'https://media.istockphoto.com/id/870605472/es/foto/indicador-del-mapa-de-red-marca-pin-render-3d-y-marcador.jpg?s=612x612&w=0&k=20&c=BYLVfiZgNdF1GL8aUJwT675c9CZ0Gb5ms9AU-aKN2xg=';
    
    return (
      <>
        <Paper
          sx={{
            p: 2,
            margin: 'auto',
            maxWidth: 600,
            flexGrow: 1,
            backgroundColor: (theme) => (theme.palette.mode === 'dark' ? '#1A2027' : '#fff'),
          }}
        >

<FormControl>
      <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
      </RadioGroup>
    </FormControl>

          <Grid container spacing={1} direction="row" justifyContent="flex-start" alignItems="center">
            <Grid item>
              <ButtonBase sx={{ width:70, height: 70 }}>
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
  