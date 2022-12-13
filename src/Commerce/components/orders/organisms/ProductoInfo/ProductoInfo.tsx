import {
  Box,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
  ButtonBase,
  Button,
  Stack,
  Grid,
  styled,
  Paper,
  ListItem,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Botones from '../../organisms/Botones';
function ProductoInfo(data: any) {
  // const info = {
  //   status: 'Entregado',
  //   fechaEnt: '28-11-2022',
  //   descripcion: 'Alexa Echo Dot 3'
  // }
  const infoProd = data.infoProd;
  const status = data.status;
  console.log(status);
  const ImgProd = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  });
  let urlImgProd = 'https://cdn-icons-png.flaticon.com/512/3703/3703259.png';
  const theme = useTheme();
  return (
    <>
      <Paper
        sx={{
          p: 2,
          margin: 'auto',
          width: 'auto',
          maxWidth: 900,
          backgroundColor: (theme) => (theme.palette.mode === 'dark' ? '#1A2027' : '#fff'),
        }}
      >
        {infoProd.map((info:any) => (
          <>
            <Grid container mb={5} >
              <Grid item xs={1} mt={3}>
                <ButtonBase sx={{ width: 70, height: 70 }}>
                  <ImgProd alt="Imagen del producto" src={urlImgProd} />
                </ButtonBase>
              </Grid>
              <Grid item xs={6} ml={4} mt={3}>
                <Typography gutterBottom variant="h6" component="div">
                  Producto: {info.DesPresentaPS}
                </Typography>
                <Typography gutterBottom variant="h6" component="div">
                  Cantidad: {info.Cantidad}
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <Botones />
              </Grid>
            </Grid>
          </>
        ))}
      </Paper>
    </>
  );
}
export default ProductoInfo;
