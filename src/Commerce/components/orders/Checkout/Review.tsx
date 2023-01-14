import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import { baseURL } from '@/Commerce/api/reqRes';
import { useEffect, useState } from 'react';
import { ReqRespOrdenesListado, OrdenesPresentaP } from '@/Commerce/interfaces/ORDENES/reqResp';
import axios from 'axios';
const api = baseURL + '/commerce/ordenes/';

export default function Review() {
  const [ordenes, setOrdenes] = useState([]);
  const peticionGet = () => {
    axios.get(api).then((response) => {
      console.log(response.data);
      setOrdenes(response.data);
    });
  };
  useEffect(() => {
    peticionGet();
  }, []);
  let total = 0;
  function precioCantidad(cantidad: number, precio: number) {
    total += cantidad * precio;
    return 'Cantidad: ' + cantidad + '    x    $' + precio;
  }
  function agregaEnvio(envio: number) {
    total += envio;
  }
  var minimoEnvioGratis = 300;
  const seleccionarOrden = async (ord: ReqRespOrdenesListado[], tipo: string) => {
    if (tipo === 'comprar') {
      //ord.cat_ordenes_estatus[0].Estatus = "Compra";
      let productos = ord.ordenes_presenta_ps
      console.log(productos)
    }
    console.log('>>URL: ' + api + ord._id);
    //await peticionPut(ord);
  };
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Lista de Productos
      </Typography>
      <List disablePadding>
        {ordenes.map((orden: ReqRespOrdenesListado) =>
          orden.cat_ordenes_estatus[0].Estatus === 'Carrito' ? (
            <>
              {orden.ordenes_presenta_ps.map((product: OrdenesPresentaP) =>
                product.detail_row.Borrado == 'N' ? (
                  <>
                    {product.SubTotalConIVA * product.Cantidad >= minimoEnvioGratis
                      ? agregaEnvio(0)
                      : agregaEnvio(99)}
                    <ListItem key={product.DesPresentaPS} sx={{ py: 1, px: 0 }}>
                      <ListItemText
                        primary={product.DesPresentaPS}
                        secondary={precioCantidad(product.Cantidad, product.PrecioUniConIVA)}
                      />
                      <Typography variant="body2" color="text.secondary" mr={2}>
                        Envio:{' '}
                        {product.SubTotalConIVA * product.Cantidad >= minimoEnvioGratis
                          ? 'Gratis'
                          : '$99'}
                      </Typography>

                      <Typography variant="body2">${product.SubTotalConIVA}</Typography>
                    </ListItem>
                  </>
                ) : null,
              )}
            </>
          ) : null,
        )}
        <hr />
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            ${total}
          </Typography>
        </ListItem>
      </List>
      <hr />
      <Grid container spacing={2}>
        <Grid item xs={12} sm={5}></Grid>
        <Grid item container direction="column" xs={12} sm={7}></Grid>
      </Grid>
    </React.Fragment>
  );
}
