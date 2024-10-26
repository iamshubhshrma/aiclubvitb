import logo from './logo.svg';
import './App.css';
import ResponsiveAppBar from './appbar.jsx';
import Firstcomp from './firstcomp.jsx';
import Secondcomp from './secondcomp.jsx';
import Footer from './footer.jsx';
import { AppBar } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import Box from '@mui/material/Box';
import './my.css';

function App() {
  return (
    <div className="App" >
      <Box component="section" className='app-bg' sx={{}}>
        <ResponsiveAppBar />
        <Firstcomp />
        <Secondcomp />
        <Footer />
      </Box>




    </div>
  );
}

export default App;
