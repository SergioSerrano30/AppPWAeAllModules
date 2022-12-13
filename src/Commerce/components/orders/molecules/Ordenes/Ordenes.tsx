import { baseURL } from '@/Commerce/api/reqRes';
import { ReqRespOrdenesListado, OrdenesPresentaP } from '@/Commerce/interfaces/ORDENES/reqResp';
import { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';

const api = baseURL+"/commerce/ordenes"
function Ordenes() {
  
  const [data, setData] = useState([]);
  const peticionGet =async()=>{
    await axios.get(api)
    .then(response => {
      console.log(response.data)
    })
  }

  useEffect(()=>{
     peticionGet();
  },[])

  
  
  return (
    <>
      
    </>
  );
};

export default Ordenes;
