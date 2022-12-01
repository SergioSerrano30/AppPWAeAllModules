import {
  Box,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
  Button,
  Grid,
  Stack,
  ListItem,
} from '@mui/material';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import { useTheme,createTheme } from '@mui/material/styles';
function Iconos() {

  return (
    <>
      <Grid 
      container 
      spacing={2} 
      direction="column" 
      justifyContent="flex-end"
      alignItems="flex-end"
      >
        <Grid item xs={6} md={8}>
          <Button variant="contained" color='primary' style={{maxWidth: '200px', maxHeight: '50px', minWidth: '200px', minHeight: '50px'}}>Ver compra</Button>
        </Grid>
        <Grid item xs={6} md={8}>
          <Button variant="contained" color="secondary" style={{maxWidth: '200px', maxHeight: '50px', minWidth: '200px', minHeight: '50px'}}>Volver a comprar</Button>
        </Grid>
      </Grid>
    </>
  );
}

export default Iconos;
