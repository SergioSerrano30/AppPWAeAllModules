import {
  Typography,
  ButtonBase,
  Grid,
  styled,
  Paper,
} from '@mui/material';
import { useTheme,withStyles } from '@mui/material/styles';
import Botones from '../../organisms/Botones';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

function ProductoInfo(data: any) {
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
          info.cat_ordenes_presenta_ps_estatus[0].Estatus === "Entregado"?(
            <>
            <Grid container mb={5} >
              <Grid item xs={1} mt={5} ml={2}>
                <ButtonBase sx={{ width: 70, height: 70 }}>
                  <ImgProd alt="Imagen del producto" src={urlImgProd} />
                </ButtonBase>
              </Grid>
              <Grid item xs={6} ml={4} mt={2}>

                
                <Typography gutterBottom variant="h6" component="div" color="green">
                  {info.cat_ordenes_presenta_ps_estatus[0].Estatus}
                  &nbsp;
                  <CheckCircleIcon color="success"/>
                </Typography>
                
                <Typography gutterBottom variant="h6" component="div">
                  Producto: {info.DesPresentaPS}
                </Typography>
                <Typography gutterBottom variant="h6" component="div">
                  Cantidad: {info.Cantidad}
                </Typography>
                <Typography gutterBottom variant="h6" component="div">
                  Fecha de entrega: {info.ordenes_presenta_ps_info_ad[0].Valor}
                </Typography>
              </Grid>
              <Grid item xs={4} mr={2} mt={5}>
                <Botones />
              </Grid>
            </Grid>
          </>
            ): <>
            <Grid container mb={5} >
              <Grid item xs={1} mt={5} ml={2}>
                <ButtonBase sx={{ width: 70, height: 70 }}>
                  <ImgProd alt="Imagen del producto" src={urlImgProd} />
                </ButtonBase>
              </Grid>
              <Grid item xs={6} ml={4} mt={2}>
                <Typography gutterBottom variant="h6" component="div" color="#ffc107">
                  {info.cat_ordenes_presenta_ps_estatus[0].Estatus}
                  &nbsp;
                  <LocalShippingIcon/>
                </Typography>
                <Typography gutterBottom variant="h6" component="div">
                  Producto: {info.DesPresentaPS}
                </Typography>
                <Typography gutterBottom variant="h6" component="div">
                  Cantidad: {info.Cantidad}
                </Typography>
                <Typography gutterBottom variant="h6" component="div">
                  Fecha de entrega: {info.ordenes_presenta_ps_info_ad[0].Valor}
                </Typography>
              </Grid>
              <Grid item xs={4} mr={2} mt={5}>
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
