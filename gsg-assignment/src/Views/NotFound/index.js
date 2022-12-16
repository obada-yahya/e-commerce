import React,{useState} from 'react';
import { Box, Button, Typography } from '@mui/material';
import { purple } from '@mui/material/colors';
import { Navigate } from "react-router-dom";
const primary = purple[500]; // #f44336

export default function Error() {
  const [home,setHome] = useState(false);
  if(home) return <Navigate to="/"/>;

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        minHeight: '100vh',
        backgroundColor: "#68f",
      }}
    >
      <Typography variant="h1" style={{ color: 'white' }}>
        404
      </Typography>
      <Typography variant="h6" style={{ color: 'white' }}>
        The page you’re looking for doesn’t exist.
      </Typography>
      <Button variant="contained" onClick={setHome}>Back Home</Button>
    </Box>
  );
}