import {
  IconButton,
  Typography,
  styled,
  Grid,
  Paper,
  TextField,
  Button,
  ButtonBase,
  Backdrop,
  Fade,
  Box,
  Modal,
} from '@mui/material';

import { SearchOutlined } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { baseURL } from '@/Commerce/api/reqRes';
import { useEffect, useState } from 'react';
import axios from 'axios';

import { ReqRespOrdenesListado, OrdenesPresentaP } from '@/Commerce/interfaces/ORDENES/reqResp';

const api = baseURL + '/commerce/ordenes/';

const Carrito = () => {
  const theme = useTheme();
  const ImgProd = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  });
  let urlImgProd = 'https://cdn-icons-png.flaticon.com/512/3703/3703259.png';
  const [ordenes, setOrdenes] = useState({
    usuario: 'Sergio',
    OrdenesData: [],
  });
  const [ordenItem, setOrdenItem] = useState({
    OrdenesData: [],
  });

  const peticionGet = () => {
    axios.get(api).then((response) => {
      console.log(response.data);
      setOrdenes({ ...ordenes, OrdenesData: response.data });
    });
  };
  useEffect(() => {
    peticionGet();
  }, []);

  const peticionGetItem = (desc: any) => {
    if (desc.length > 0) {
      console.log('URL ------> ' + api + 'Des/' + desc);
      axios.get(api + 'Des/' + desc).then((response) => {
        console.log(response.data);
        setOrdenes({ OrdenesData: response.data });
      });
    } else {
      peticionGet();
    }
  };

  const [busqueda, setbusqueda] = useState({
    buscar: '',
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setbusqueda((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const keyPress = (e: any) => {
    if (e.keyCode == 13) {
      console.log('value', e.target.value);
      peticionGetItem(busqueda.buscar);
      // put the login here
    }
  };

  function fechaBien(fecha: string) {
    let fe = fecha.split('T');
    //Fecha: {orden.detail_row.detail_row_reg[0].FechaReg}
    return fe[0];
  }

  const test = (id: any) => {
    console.log('---------->  ' + id);
  };

  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 1000,
    bgcolor: '#e3dfde',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  const [open, setOpen] = useState(false);
  const abrirCerrar = () => setOpen(!open);
  const [ordenSeleccionada, setOrdenSeleccionada] = useState({
    OrdenItemData: [],
  });
  const seleccionarOrden = (ord: [], caso: string) => {
    setOrdenSeleccionada({ OrdenItemData: ord });
    caso === 'Ver' ? abrirCerrar() : null;
    // console.log(ordenSeleccionada.OrdenItemData.length);
    //console.log(caso);
  };
  // console.log(ordenSeleccionada.OrdenItemData.length);
  const bodyVerCompra = (
    <>
      <Fade in={open}>
        <Box sx={style}>
          <Paper
            sx={{
              p: 2,
              margin: 'auto',
              width: 'auto',
              maxWidth: 900,
              backgroundColor: (theme) => (theme.palette.mode === 'dark' ? '#1A2027' : '#fff'),
            }}
          >
            <Grid container mb={5}>
              <Grid item xs={1} mt={12} ml={2}>
                <ButtonBase sx={{ width: 70, height: 70 }}>
                  <ImgProd alt="Imagen del producto" src={urlImgProd} />
                </ButtonBase>
              </Grid>

              <Grid item xs={4} ml={5} mt={10}>
                {ordenSeleccionada.OrdenItemData.length != 0 ? (
                  <>
                    {ordenSeleccionada.OrdenItemData.cat_ordenes_presenta_ps_estatus[0].Estatus ===
                    'Entregado' ? (
                      <>
                        <Typography gutterBottom variant="h6" component="div" color="green">
                          {
                            ordenSeleccionada.OrdenItemData.cat_ordenes_presenta_ps_estatus[0]
                              .Estatus
                          }
                          &nbsp;
                          <CheckCircleIcon />
                        </Typography>
                      </>
                    ) : (
                      <Typography gutterBottom variant="h6" component="div" color="yellow">
                        {ordenSeleccionada.OrdenItemData.cat_ordenes_presenta_ps_estatus[0].Estatus}
                        &nbsp;
                        <LocalShippingIcon />
                      </Typography>
                    )}
                  </>
                ) : null}

                <Typography id="transition-modal-title" variant="h6" component="h2">
                  Producto: {ordenSeleccionada.OrdenItemData.DesPresentaPS}
                </Typography>
                <Typography gutterBottom variant="h6" component="div">
                  Cantidad: {ordenSeleccionada.OrdenItemData.Cantidad}
                </Typography>
              </Grid>
              <Grid item xs={5} mr={2} ml={1} mt={1}>
                <Typography gutterBottom variant="h6" component="div">
                  Detalle de la compra
                  <br />
                  
                </Typography>

                <Typography gutterBottom variant="subtitle1" component="div">
                  Producto(s): {ordenSeleccionada.OrdenItemData.Cantidad}
                  <br />
                  Precio unitario: ${ordenSeleccionada.OrdenItemData.PrecioUniConIVA}
                  <br />
                  <br />
                  <hr />
                  <br />
                  Total: $
                  {ordenSeleccionada.OrdenItemData.Cantidad *
                    ordenSeleccionada.OrdenItemData.PrecioUniConIVA}
                  <br />
                  <br />
                  <hr />
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </Box>
      </Fade>
    </>
  );

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
                name="buscar"
                variant="outlined"
                label="Buscar"
                onChange={handleChange}
                onKeyDown={keyPress}
                InputProps={{
                  endAdornment: (
                    <IconButton onClick={() => peticionGetItem(busqueda.buscar)}>
                      <SearchOutlined />
                    </IconButton>
                  ),
                }}
              />
            </Grid>
          </Grid>
        </>
        <Grid container spacing={2} direction="row" justifyContent="flex-start" alignItems="center">
          {ordenes.OrdenesData.map(
            (orden: any) =>
              orden.cat_ordenes_estatus[0].Estatus === 'Compra' ? (
                <>
                  <Grid item xs={12} ml={4} pt={2}>
                    {/* <Typography variant="h5" gutterBottom>
                ID_OK: {orden.IdOrdenOK} &nbsp; - &nbsp; STATUS: {orden.cat_ordenes_estatus[0].Estatus}
              </Typography> */}
                  </Grid>
                  <Grid item xs>
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
                      <Grid item xs={12} ml={4} pt={2}>
                        <Typography variant="h5" gutterBottom>
                          {fechaBien(orden.detail_row.detail_row_reg[0].FechaReg)}
                        </Typography>
                      </Grid>
                      {orden.ordenes_presenta_ps.map((info: any) => (
                        <>
                          <Grid container mb={5}>
                            <Grid item xs={1} mt={5} ml={2}>
                              <ButtonBase sx={{ width: 70, height: 70 }}>
                                <ImgProd alt="Imagen del producto" src={urlImgProd} />
                              </ButtonBase>
                            </Grid>
                            <Grid item xs={6} ml={4} mt={2}>
                              {info.cat_ordenes_presenta_ps_estatus[0].Estatus === 'Entregado' ? (
                                <>
                                  <Typography
                                    gutterBottom
                                    variant="h6"
                                    component="div"
                                    color="green"
                                  >
                                    {info.cat_ordenes_presenta_ps_estatus[0].Estatus}
                                    &nbsp;
                                    <CheckCircleIcon />
                                  </Typography>
                                </>
                              ) : (
                                <Typography
                                  gutterBottom
                                  variant="h6"
                                  component="div"
                                  color="yellow"
                                >
                                  {info.cat_ordenes_presenta_ps_estatus[0].Estatus}
                                  &nbsp;
                                  <LocalShippingIcon />
                                </Typography>
                              )}
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
                                    onClick={() => seleccionarOrden(info, 'Ver')}
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
                      ))}
                    </Paper>
                  </Grid>
                </>
              ) : null, //else
          )}
        </Grid>
      </Paper>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={abrirCerrar}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        {bodyVerCompra}
      </Modal>
    </>
  );
};

export default Carrito;
