import Meta from '@/Commerce/components/Meta';
import {
  Box,
  Grid,
  Typography,
  ButtonBase,
  styled,
  TextField,
  Button,
  Paper,
  Modal,
  Backdrop,
  Fade,
} from '@mui/material';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { baseURL } from '@/Commerce/api/reqRes';
import { useEffect, useState } from 'react';
import { ReqRespOrdenesListado, OrdenesPresentaP } from '@/Commerce/interfaces/ORDENES/reqResp';
import axios from 'axios';
import nuevaCompra from '../../../json/NuevaCompra.json'
const api = baseURL + '/commerce/ordenes/';

function ListaCarrito() {
  let urlImgProd = 'https://cdn-icons-png.flaticon.com/512/3703/3703259.png';
  var totalCostoEnvio = 0,
    subTotal = 0,
    total = 0;
  var minimoEnvioGratis = 300;

  const ImgProd = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  });

  const [ordenes, setOrdenes] = useState({
    usuario: 'Sergio',
    OrdenesData: [],
  });
  const [carrito, setCarrito] = useState({});
  const [guardado, setGuardado] = useState({});

  //OBTENER TODOS LOS REGISTROS
  const peticionGet = () => {
    peticionNuevoCarrito();
    axios.get(api).then((response) => {
      console.log(response.data);
      setOrdenes({ ...ordenes, OrdenesData: response.data });
      response.data.forEach((ord) => {
        if (ord.cat_ordenes_estatus[0].Estatus === 'Carrito') {
          setCarrito(ord);
          console.log('Carrito');
          console.log(carrito);
        } else if (ord.cat_ordenes_estatus[0].Estatus === 'Guardado') {
          setGuardado(ord);
          console.log('Guardado');
          console.log(guardado);
        }
      });
    });
  };
  useEffect(() => {
    peticionGet();
  }, []);

  //VERIFICA SI HAY UN CARRITO CREADO
  const peticionNuevoCarrito = async () => {
    let url = api + '-?Carrito';
    console.log('URL CARRITO ------> ' + url);
    await axios.get(url).then((response) => {
      console.log('CARRITO CREADO ', response.data);
    });
  };
  //VERIFICA SI HAY GUARDADO PARA DESPUÉS
  const peticionNuevoGuardados = async () => {
    let url = api + '-?Guardado';
    console.log('URL GUARDADO  ------> ' + url);
    await axios.get(url).then((response) => {
      console.log('GUARDADOS CREADO ', response.data);
    });
  };

  //ACTUALIZAR
  const peticionPut = async (ord: ReqRespOrdenesListado[]) => {
    await peticionNuevoCarrito();
    await axios.put(api + ord._id, ord).then((response) => {
      var dataNueva = ordenes.OrdenesData;
      setOrdenes({ ...ordenes, OrdenesData: dataNueva });
      console.log('ORDEN NUEVA >>> ', ord);
      console.log('URL >>> ', api + ord._id);
    });
  };

  const [ordenSeleccionada, setOrdenSeleccionada] = useState([]);

  const seleccionarOrden = async (
    ord: ReqRespOrdenesListado,
    indexOrd: number,
    indexProd: number,
    tipo: string,
  ) => {
    if (tipo === 'cantidad') {
      ord.ordenes_presenta_ps[indexProd].Cantidad = cantidad;
      ord.ordenes_presenta_ps[indexProd].SubTotalConIVA =
        cantidad * ord.ordenes_presenta_ps[indexProd].PrecioUniConIVA;
      ord.ordenes_presenta_ps[indexProd].SubTotalSinIVA =
        cantidad * ord.ordenes_presenta_ps[indexProd].PrecioUniSinIVA;
    } else if (tipo === 'eliminar') {
      ord.ordenes_presenta_ps[indexProd].detail_row.Borrado = 'S';
    } else if (tipo === 'guardar') {
      console.log('ORDEN >>> ', ord);
      console.log('indexOrd >>> ', indexOrd);
      console.log('indexProd >>>', indexProd);
      // ord.ordenes_presenta_ps[indexProd].cat_ordenes_presenta_ps_estatus[0].Estatus = 'Guardado';
    } else if (tipo === 'comprar') {
      ord.cat_ordenes_estatus[0].Estatus = 'Compra';
      let prod = ord.ordenes_presenta_ps;
      prod.forEach((p) => {
        p.cat_ordenes_presenta_ps_estatus[0].Estatus = 'En camino';
      });
    }
    console.log(ord);
    //setOrdenSeleccionada(ord);
    console.log('>>URL: ' + api + ord._id);
    peticionPut(ord);
  };

  function comprarCarrito() {
    let compra = carrito;
    compra.cat_ordenes_estatus[0].Estatus = 'Compra';
    compra.detail_row.detail_row_reg[0].FechaReg = new Date();
    let articulos = compra.ordenes_presenta_ps;
    articulos.forEach((p) => {
      p.cat_ordenes_presenta_ps_estatus[0].Estatus = 'En camino';
    });
    console.log('COMPRANDO >>> ', compra);
    peticionPut(compra); //Actualiza el carrito por una compra
    window.location.reload();
  }

  function agregaCarrito(producto: OrdenesPresentaP, indexProd: number) {
    //ELIMINAR EL PRODUCTO DE GUARDADOS
    console.log(indexProd);
    let nuevoGuardado = guardado;
    nuevoGuardado.ordenes_presenta_ps[indexProd].detail_row.Borrado = 'S';
    console.log('GUARDADOS NUEVO >>> ', nuevoGuardado);
    peticionPut(nuevoGuardado);
    setGuardado(nuevoGuardado);
    //ACTUALIZAR EL PRODUCTO PARA EL CARRITO

    producto.cat_ordenes_presenta_ps_estatus[0].Estatus = 'Carrito';
    producto.detail_row.Borrado = 'N';
    console.log('Producto >>> ', producto);
    let nuevoCarrito = carrito;
    nuevoCarrito.ordenes_presenta_ps.push(producto);
    console.log('Carrito >>> ', nuevoCarrito);
    peticionPut(nuevoCarrito);
    setCarrito(nuevoCarrito);
  }
  function agregaMasTarde(producto: OrdenesPresentaP, indexProd: number) {
    //ELIMINAR EL PRODUCTO DE CARRITO
    carrito.ordenes_presenta_ps[indexProd].detail_row.Borrado = 'S';
    console.log('CARRITO NUEVO >>> ', carrito);
    peticionPut(carrito);

    //ACTUALIZAR EL PRODUCTO PARA GUARDADOS

    producto.cat_ordenes_presenta_ps_estatus[0].Estatus = 'Guardado';
    producto.detail_row.Borrado = 'N';
    console.log('Producto >>> ', producto);
    guardado.ordenes_presenta_ps.push(producto);
    console.log('Guardados >>> ', guardado);
    peticionPut(guardado);
  }

  const [cantidad, setCantidad] = useState(0);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setCantidad((prevState) => parseInt(value));
  };

  const [open, setOpen] = useState(false);
  const abrirCerrar = () => setOpen(!open);
  const [productoSeleccionado, setproductoSeleccionado] = useState({
    idOrden: '',
    productoInfo: [],
    indexOrden: 0,
  });
  const comprarProd = (ord: [], indexOrd: number, idOrden: string) => {
    setproductoSeleccionado({
      ...ordenes,
      idOrden: idOrden,
      productoInfo: ord,
      indexOrden: indexOrd,
    });
    console.log(idOrden);
    console.log(ord);
    console.log(indexOrd);
    abrirCerrar();
  };
  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    bgcolor: '#e3dfde',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  function calculaTotal(subTotal: number, envio: number) {
    return subTotal + envio;
  }
  const peticionPost = async (nuevaOrden: any) => {
    console.log('URL ---> ', api);
    console.log('>>NUEVA ORDEN ', nuevaOrden);
    await axios.post(api, nuevaOrden)
    .then(response=>{
      setOrdenes(ordenes.OrdenesData.concat(response.data))
      console.log("INSERTADO")
    })
  };
  function comprarArticulo(articulo:OrdenesPresentaP){
    let compra = nuevaCompra
    compra.ordenes_presenta_ps.push(articulo)
    console.log(compra)
    peticionPost(compra)
    abrirCerrar()
  }

  const bodyVerCompra = (
    <>
      <Fade in={open}>
        <Grid container spacing={2} direction="row" justifyContent="center" alignItems="center">
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
              <Grid container direction="row" justifyContent="text-start" alignItems="center">
                <Grid item xs={1} ml={3} mr={4}>
                  <ButtonBase sx={{ width: 70, height: 70 }}>
                    <ImgProd alt="Imagen del producto" src={urlImgProd} />
                  </ButtonBase>
                </Grid>
                <Grid item xs={4}>
                  {productoSeleccionado.idOrden.length != 0 ? (
                    <>
                      <Typography id="transition-modal-title" variant="h6" component="h2">
                        {productoSeleccionado.productoInfo.DesPresentaPS}
                      </Typography>
                    </>
                  ) : null}
                </Grid>
                <Grid item xs={6}>
                  <Grid
                    container
                    direction="column"
                    justifyContent="flex-end"
                    alignItems="flex-end"
                  >
                    <Grid item xs={12} mt={3} mr={5}>
                      <Typography gutterBottom variant="subtitle1" component="div">
                        Precio unitario: ${productoSeleccionado.productoInfo.PrecioUniConIVA}
                      </Typography>
                      <Typography gutterBottom variant="subtitle1" component="div">
                        Producto(s): {productoSeleccionado.productoInfo.Cantidad}
                      </Typography>
                      <hr />
                      <Typography gutterBottom variant="subtitle1" component="div">
                        Subtotal (IVA incluido): $
                        {productoSeleccionado.productoInfo.PrecioUniConIVA *
                          productoSeleccionado.productoInfo.Cantidad}
                      </Typography>
                      <Typography variant="subtitle2" color="text.secondary">
                        Envio:
                        {productoSeleccionado.productoInfo.PrecioUniConIVA *
                          productoSeleccionado.productoInfo.Cantidad >=
                        minimoEnvioGratis
                          ? ' Gratis'
                          : ' $99'}
                      </Typography>
                      <hr />
                      <Typography gutterBottom variant="h6" component="div">
                        Total a pagar: $
                        {productoSeleccionado.productoInfo.PrecioUniConIVA *
                          productoSeleccionado.productoInfo.Cantidad >=
                        minimoEnvioGratis
                          ? calculaTotal(
                              parseInt(productoSeleccionado.productoInfo.PrecioUniConIVA) *
                                parseInt(productoSeleccionado.productoInfo.Cantidad),
                              0,
                            )
                          : calculaTotal(
                              parseInt(productoSeleccionado.productoInfo.PrecioUniConIVA) *
                                parseInt(productoSeleccionado.productoInfo.Cantidad),
                              99,
                            )}
                      </Typography>
                      <hr />
                    </Grid>
                    <Grid item xs={12} mt={2} mr={5}>
                      <Button variant="contained" size="large" onClick={()=> comprarArticulo(productoSeleccionado.productoInfo) }>
                        Continuar compra
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </Box>
        </Grid>
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
          minWidth: 500,
          mt: 5,
          flexGrow: 1,
          backgroundColor: (theme) => (theme.palette.mode === 'dark' ? '#1A2027' : '#eee'),
        }}
      >
        <Grid item xs={12} ml={3}>
          <Typography variant="h3">Carrito</Typography>
          <br />
        </Grid>
        <Grid container spacing={2} direction="row" justifyContent="center" alignItems="center">
          <Grid item xs={12}>
            {ordenes.OrdenesData.map((orden: any, indexOrden: number) =>
              orden.cat_ordenes_estatus[0].Estatus === 'Carrito' ? (
                <>
                  {orden.ordenes_presenta_ps.length > 0 ? (
                    <>
                      <Paper
                        sx={{
                          p: 2,
                          margin: 'auto',
                          width: 'auto',
                          maxWidth: 900,
                          backgroundColor: (theme) =>
                            theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                          marginTop: 2,
                        }}
                      >
                        <hr />
                        {orden.ordenes_presenta_ps.map((info: any, indexProd: number) =>
                          info.detail_row.Borrado == 'N' &&
                          info.cat_ordenes_presenta_ps_estatus[0].Estatus == 'Carrito' ? (
                            <>
                              <Grid
                                container
                                direction="row"
                                justifyContent="flex-start"
                                alignItems="center"
                                ml={2}
                                mt={2}
                              >
                                <Grid item xs={1}>
                                  <ButtonBase sx={{ width: 70, height: 70 }}>
                                    <ImgProd alt="Imagen del producto" src={urlImgProd} />
                                  </ButtonBase>
                                </Grid>
                                <Grid item xs={4} ml={2}>
                                  <Typography gutterBottom variant="subtitle1" component="div">
                                    <b>{info.DesPresentaPS}</b>
                                  </Typography>
                                  <Typography variant="body2" color="text.secondary">
                                    Envio:{' '}
                                    {info.SubTotalConIVA * info.Cantidad >= minimoEnvioGratis
                                      ? 'Gratis'
                                      : '$99'}
                                  </Typography>
                                </Grid>
                                <Grid item xs={4}>
                                  <Grid
                                    container
                                    direction="row"
                                    justifyContent="flex-end"
                                    alignItems="flex-start"
                                  >
                                    <TextField
                                      defaultValue={info.Cantidad}
                                      id="outlined-basic"
                                      label="pz"
                                      variant="outlined"
                                      type="number"
                                      InputProps={{
                                        inputProps: {
                                          max: 99,
                                          min: 1,
                                        },
                                      }}
                                      sx={{ width: 70 }}
                                      onChange={handleChange}
                                      onClick={() =>
                                        seleccionarOrden(orden, indexOrden, indexProd, 'cantidad')
                                      }
                                    />
                                  </Grid>
                                </Grid>
                                <Grid item xs={2} mt={1}>
                                  <Grid
                                    container
                                    direction="row"
                                    justifyContent="flex-end"
                                    alignItems="flex-start"
                                  >
                                    <Typography variant="caption" display="block" color={'white'}>
                                      {(total = total + info.PrecioUniConIVA * info.Cantidad)} -
                                      {info.SubTotalConIVA >= minimoEnvioGratis
                                        ? (totalCostoEnvio = totalCostoEnvio)
                                        : (totalCostoEnvio = totalCostoEnvio + 99)}
                                    </Typography>
                                    <Typography gutterBottom variant="h6" component="div">
                                      ${info.SubTotalConIVA}
                                    </Typography>
                                  </Grid>
                                </Grid>
                                <Grid item xs mt={1} ml={10}>
                                  <Button
                                    size="small"
                                    color="error"
                                    onClick={() =>
                                      seleccionarOrden(orden, indexOrden, indexProd, 'eliminar')
                                    }
                                  >
                                    Eliminar
                                  </Button>
                                  <Button
                                    size="small"
                                    onClick={() => comprarProd(info, indexProd, orden._id)}
                                  >
                                    Comprar ahora
                                  </Button>
                                  <Button
                                    size="small"
                                    onClick={() => agregaMasTarde(info, indexProd)}
                                  >
                                    Guardar para después
                                  </Button>
                                </Grid>
                              </Grid>

                              <hr />
                            </>
                          ) : null,
                        )}
                     
                      <Grid
                        container
                        direction="column"
                        justifyContent="flex-end"
                        alignItems="flex-end"
                      >
                        <Grid item xs={12} mt={3} mr={5}>
                          <Typography gutterBottom variant="h6" component="div">
                            Subtotal (IVA incluido): ${total}
                          </Typography>
                          <Typography gutterBottom variant="h6" component="div">
                            Costo de Envío: ${totalCostoEnvio}
                          </Typography>
                          <hr />
                          <Typography gutterBottom variant="h6" component="div">
                            Total a pagar: ${total + totalCostoEnvio}
                          </Typography>
                          <hr />
                          <Button
                            variant="contained"
                            color="primary"
                            style={{
                              maxWidth: '200px',
                              maxHeight: '50px',
                              minWidth: '200px',
                              minHeight: '50px',
                            }}
                            onClick={() => comprarCarrito()}
                          >
                            Comprar
                          </Button>
                        </Grid>
                      </Grid>
                      </Paper>
                    </>
                  ) : (
                    <>
                      <Typography gutterBottom variant="h5" component="div" ml={3}>
                        NO HAY ARTÍCULOS EN EL CARRITO
                      </Typography>
                    </>
                  )}
                </>
              ) : null,
            )}
          </Grid>
        </Grid>
        <Grid item xs={12} ml={3}>
          <br />
          <br />
          <Typography variant="h3">Guardados para después</Typography>
          <br />
        </Grid>
        <Grid container spacing={2} direction="row" justifyContent="center" alignItems="center">
          <Grid item xs={12}>
            {ordenes.OrdenesData.map((orden: any, indexOrden: number) =>
              orden.cat_ordenes_estatus[0].Estatus === 'Guardado' ? (
                <>
                  {orden.ordenes_presenta_ps.length > 0 ? (
                    <>
                      <hr />
                      {orden.ordenes_presenta_ps.map((info: any, indexProd: number) =>
                        info.detail_row.Borrado == 'N' &&
                        info.cat_ordenes_presenta_ps_estatus[0].Estatus == 'Guardado' ? (
                          <>
                            <Paper
                              sx={{
                                p: 2,
                                margin: 'auto',
                                width: 'auto',
                                maxWidth: 900,
                                backgroundColor: (theme) =>
                                  theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                                marginTop: 2,
                              }}
                            >
                              <Grid
                                container
                                direction="row"
                                justifyContent="flex-start"
                                alignItems="center"
                                ml={2}
                                mt={2}
                              >
                                <Grid item xs={1}>
                                  <ButtonBase sx={{ width: 70, height: 70 }}>
                                    <ImgProd alt="Imagen del producto" src={urlImgProd} />
                                  </ButtonBase>
                                </Grid>
                                <Grid item xs={4} ml={2}>
                                  <Typography gutterBottom variant="subtitle1" component="div">
                                    <b>{info.DesPresentaPS}</b>
                                  </Typography>
                                  <Typography variant="body2" color="text.secondary">
                                    Envio:{' '}
                                    {info.SubTotalConIVA * info.Cantidad >= minimoEnvioGratis
                                      ? 'Gratis'
                                      : '$99'}
                                  </Typography>
                                </Grid>
                                <Grid item xs={4}>
                                  <Grid
                                    container
                                    direction="row"
                                    justifyContent="flex-end"
                                    alignItems="flex-start"
                                  >
                                    <TextField
                                      defaultValue={info.Cantidad}
                                      id="outlined-basic"
                                      label="pz"
                                      variant="outlined"
                                      type="number"
                                      InputProps={{
                                        inputProps: {
                                          max: 99,
                                          min: 1,
                                        },
                                      }}
                                      sx={{ width: 70 }}
                                      onChange={handleChange}
                                      onClick={() =>
                                        seleccionarOrden(orden, indexOrden, indexProd, 'cantidad')
                                      }
                                    />
                                  </Grid>
                                </Grid>
                                <Grid item xs={2} mt={1}>
                                  <Grid
                                    container
                                    direction="row"
                                    justifyContent="flex-end"
                                    alignItems="flex-start"
                                  >
                                    <Typography gutterBottom variant="h6" component="div">
                                      ${info.SubTotalConIVA}
                                    </Typography>
                                  </Grid>
                                </Grid>
                                <Grid item xs mt={1} ml={10}>
                                  <Button
                                    size="small"
                                    color="error"
                                    onClick={() =>
                                      seleccionarOrden(orden, indexOrden, indexProd, 'eliminar')
                                    }
                                  >
                                    Eliminar
                                  </Button>
                                  <Button
                                    size="small"
                                    onClick={() => comprarProd(info, indexProd, orden._id)}
                                  >
                                    Comprar ahora
                                  </Button>
                                  <Button
                                    size="small"
                                    onClick={() => agregaCarrito(info, indexProd)}
                                  >
                                    Agregar al carrito
                                  </Button>
                                </Grid>
                              </Grid>

                              <hr />
                            </Paper>
                          </>
                        ) : null,
                      )}
                    </>
                  ) : (
                    <>
                      <Typography gutterBottom variant="h5" component="div" ml={3}>
                        NO HAY ARTÍCULOS GUARDADOS PARA DESPUÉS
                      </Typography>
                    </>
                  )}
                </>
              ) : null,
            )}
          </Grid>
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
}

export default ListaCarrito;
