import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';

const products = [
  {
    name: 'Alexa Dot 3',
    desc: 'Alexa Blanco Generacion 3 Asistente virtual',
    price: '$599',
  },
  {
    name: 'Xbox Series S',
    desc: 'xbox Series S Blanco Control Incluido Xbox Game Pass 3 meses',
    price: '$5,999',
  },
  {
    name: 'Poco M3',
    desc: 'Poco M3 Amarillo 128 GB 6 RAM 12MP',
    price: '$3,999',
  },

  { name: 'Compra #69-666', desc: '', price: 'Gratis' },
];
const addresses = ['Reforma', '#14', 'Lomas Altas', 'Nayarit', 'Mexico'];
const payments = [
  { name: 'Tarjeta', detail: 'Visa' },
  { name: 'Nombre', detail: 'Carlos  Zambrano ' },
  { name: 'Numero', detail: 'xxxx-xxxx-xxxx-1234' },
  { name: 'Expira', detail: '04/2024' },
];

export default function Review() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Lista de Productos
      </Typography>
      <List disablePadding>
        {products.map((product) => (
          <ListItem key={product.name} sx={{ py: 1, px: 0 }}>
            <ListItemText primary={product.name} secondary={product.desc} />
            <Typography variant="body2">{product.price}</Typography>
          </ListItem>
        ))}
        <hr />
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            $10,597
          </Typography>
        </ListItem>
      </List>
      <hr />
      <Grid container spacing={2}>
        <Grid item xs={12} sm={5}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Compra
          </Typography>
          <Typography gutterBottom>Carlos Zambrano</Typography>
          <Typography gutterBottom>{addresses.join(', ')}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={7}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Detalles de Pago
          </Typography>
          <Grid container>
            {payments.map((payment) => (
              <React.Fragment key={payment.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.detail}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}