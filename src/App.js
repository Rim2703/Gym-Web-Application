import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import Navbar from './components/Navbar';
import Home from './components/Home';
// import ExerciseDetail from './components/ExerciseDetail';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Box width="400" sx={{ width: { xl: '1488px' } }} m="auto">
        <Navbar />
        <Router>
          <Routes>
            <Route exact path='/' element={<Home />}></Route>
            {/* <Route exact path='/exercise/:id' element={<ExerciseDetail />}></Route> */}
          </Routes>
        </Router>
        <Footer />
      </Box>
    </>
  );
}

export default App;
