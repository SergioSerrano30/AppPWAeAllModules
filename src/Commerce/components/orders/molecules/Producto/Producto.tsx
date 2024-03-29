import {
  IconButton,
  Typography,
  styled,
  Grid,
  Paper,
  TextField,
  Button,
  ButtonBase,
} from '@mui/material';

import { SearchOutlined } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';
import { useState } from 'react';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
function Producto(data: any) {
  const theme = useTheme();
  const ImgProd = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  });
  let urlImgProd = 'https://cdn-icons-png.flaticon.com/512/3703/3703259.png';
  const ordenes = data.info;
  console.log(ordenes);
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

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
        <>
          <Grid
            container
            spacing={2}
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            ml={2}
            maxWidth={800}
          >
            <Grid item xs={3}>
              <Typography variant="h3">Compras</Typography>
            </Grid>
            &nbsp;
            <Grid item xs={9}>
              <TextField
                fullWidth
                id="standard-bare"
                variant="outlined"
                label="Buscar"
                InputProps={{
                  endAdornment: (
                    <IconButton>
                      <SearchOutlined />
                    </IconButton>
                  ),
                }}
              />
            </Grid>
          </Grid>
        </>
        <Grid container spacing={2} direction="row" justifyContent="flex-start" alignItems="center">
          {ordenes.map(
            (orden: any) =>
              orden.cat_ordenes_estatus[0].Estatus === 'Compra' ? (
                <>
                  <Grid item xs={12} ml={4} pt={2}>
                    {/* <Typography variant="h5" gutterBottom>
                ID_OK: {orden.IdOrdenOK} &nbsp; - &nbsp; STATUS: {orden.cat_ordenes_estatus[0].Estatus}
              </Typography> */}
                  </Grid>
                  <Grid item xs>
                    {/* <ProductoInfo
                      infoProd={orden.ordenes_presenta_ps}
                      status={orden.cat_ordenes_estatus}
                    /> */}
                    <Paper
                      sx={{
                        p: 2,
                        margin: 'auto',
                        width: 'auto',
                        maxWidth: 900,
                        backgroundColor: (theme) =>
                          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                      }}
                    >
                      {orden.ordenes_presenta_ps.map((info: any) =>
                        info.cat_ordenes_presenta_ps_estatus[0].Estatus === 'Entregado' ? (
                          <>
                            <Grid container mb={5}>
                              <Grid item xs={1} mt={5} ml={2}>
                                <ButtonBase sx={{ width: 70, height: 70 }}>
                                  <ImgProd alt="Imagen del producto" src={urlImgProd} />
                                </ButtonBase>
                              </Grid>
                              <Grid item xs={6} ml={4} mt={2}>
                                <Typography gutterBottom variant="h6" component="div" color="green">
                                  {info.cat_ordenes_presenta_ps_estatus[0].Estatus}
                                  &nbsp;
                                  <CheckCircleIcon color="success" />
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
                                <Grid
                                  container
                                  spacing={2}
                                  direction="column"
                                  justifyContent="flex-end"
                                  alignItems="flex-end"
                                >
                                  <Grid item xs={6} md={8}>
                                    <Button
                                      variant="contained"
                                      color="primary"
                                      style={{
                                        maxWidth: '200px',
                                        maxHeight: '50px',
                                        minWidth: '200px',
                                        minHeight: '50px',
                                      }}
                                    >
                                      Ver compra
                                    </Button>
                                  </Grid>
                                  <Grid item xs={6} md={8}>
                                    <Button
                                      variant="contained"
                                      color="secondary"
                                      style={{
                                        maxWidth: '200px',
                                        maxHeight: '50px',
                                        minWidth: '200px',
                                        minHeight: '50px',
                                      }}
                                    >
                                      Volver a comprar
                                    </Button>
                                  </Grid>
                                </Grid>
                              </Grid>
                            </Grid>
                          </>
                        ) : (
                          <>
                            <Grid container mb={5}>
                              <Grid item xs={1} mt={5} ml={2}>
                                <ButtonBase sx={{ width: 70, height: 70 }}>
                                  <ImgProd alt="Imagen del producto" src={urlImgProd} />
                                </ButtonBase>
                              </Grid>
                              <Grid item xs={6} ml={4} mt={2}>
                                <Typography
                                  gutterBottom
                                  variant="h6"
                                  component="div"
                                  color="#ffc107"
                                >
                                  {info.cat_ordenes_presenta_ps_estatus[0].Estatus}
                                  &nbsp;
                                  <LocalShippingIcon />
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
                                <Grid
                                  container
                                  spacing={2}
                                  direction="column"
                                  justifyContent="flex-end"
                                  alignItems="flex-end"
                                >
                                  <Grid item xs={6} md={8}>
                                    <Button
                                      variant="contained"
                                      color="primary"
                                      style={{
                                        maxWidth: '200px',
                                        maxHeight: '50px',
                                        minWidth: '200px',
                                        minHeight: '50px',
                                      }}
                                    >
                                      Ver compra
                                    </Button>
                                  </Grid>
                                  <Grid item xs={6} md={8}>
                                    <Button
                                      variant="contained"
                                      color="secondary"
                                      style={{
                                        maxWidth: '200px',
                                        maxHeight: '50px',
                                        minWidth: '200px',
                                        minHeight: '50px',
                                      }}
                                    >
                                      Volver a comprar
                                    </Button>
                                  </Grid>
                                </Grid>
                              </Grid>
                            </Grid>
                          </>
                        ),
                      )}
                    </Paper>
                  </Grid>
                </>
              ) : null, //else
          )}
        </Grid>
      </Paper>
    </>
  );
}

export default Producto;
