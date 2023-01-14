import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AddressForm from './AddressForm';
import PaymentForm from './PaymentForm';
import Review from './Review';
import { Icon } from '@mui/material';
import Iconos from '../organisms/Botones/Botones';
import '@mui/icons-material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ListaCarrito from '../../../pages/orders/ListaCarrito/ListaCarrito';
import Carrito from '../../../pages/orders/Compras/Compras';

const steps = ['Carrito','Entrega', 'Pago', 'Confirmación'];

function getStepContent(step: number) {
  switch (step) {
    case 0:
      return <ListaCarrito />;
    case 1:
      return <AddressForm />;
    case 2:
      return <PaymentForm />;
    case 3:
      return <Review />;
    default:
      throw new Error('No encontro la Opcion');
  }
}

const theme = createTheme();

export default function Checkout() {

  const [activeStep, setActiveStep] = React.useState(0);
  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };
  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };
  const cambiarVentana = () => {
    return <Carrito></Carrito>
  };



  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      
      <Container component="main" maxWidth="md" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography component="h1" variant="h4" align="center">
            Verificacion de Compra
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography variant="h5" gutterBottom>
                Gracias por tu compra.
              </Typography>
              {/* <Typography variant="subtitle1">
                Tu pedido fue Guardado exitosamente. 
              </Typography> */}
              <Button  variant="contained"sx={{ mt: 3, ml: 5 }} href='http://localhost:3051/mis-compras'>Mis Compras  </Button>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {getStepContent(activeStep)}
              <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                {activeStep !== 0 && (
                  <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                    Regresar
                  </Button>
                )}
                <Button
                  variant="contained"
                  onClick={handleNext}
                  sx={{ mt: 3, ml: 1 }}
                >
                  {activeStep === steps.length - 1 ? 'Confirmar' : 'Siguiente'}
                </Button>
              </Box>
            </React.Fragment>
          )}
        </Paper>
        {/* <Copyright /> */}
      </Container>
    </ThemeProvider>
  );
}