import { reqRespApi } from '@/Commerce/api/reqRes';
import { ReqRespUsuariosListado, Usuario } from '@/Commerce/interfaces/USUARIO/reqResp';
import { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
const Usuarios = () => {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  useEffect(() => {
    //SERGIO: llamado de la API
    reqRespApi
      .get<ReqRespUsuariosListado>('/users?page=1')
      .then((resp) => {
        setUsuarios(resp.data.data);
      })
      .catch((err) => console.log(err));
  }, []);
  const renderItem = (usuario: Usuario) => {
    return (
      <TableRow
        key={usuario.id.toString()}
        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
      >
        <TableCell component="th" scope="row">
          {/* {usuario.avatar} */}
          <img
            src={usuario.avatar}
            alt={usuario.first_name}
            style={{
              width: 50,
              borderRadius: 100,
            }}
          ></img>
        </TableCell>
        <TableCell align="right">{usuario.first_name + ' ' + usuario.last_name}</TableCell>
        <TableCell align="right">{usuario.email}</TableCell>
      </TableRow>
    );
  };
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>AVATAR</TableCell>
              <TableCell align="right">NOMBRE</TableCell>
              <TableCell align="right">EMAIL&nbsp;</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{usuarios.map((sergioArgUsuario) => renderItem(sergioArgUsuario))}</TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Usuarios;
