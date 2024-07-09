import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/home/Home';
import { Boutiques } from './components/home/Boutiques';
import Collection from './components/Collection';  

import { Box } from '@mui/material';
import SearchAns from './SearchAns';
import Navigation from './components/home/NavMenu';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <>
            <Header />
            <Box style={{ marginTop: 70 }}>
              <Home />
            </Box>
          </>
        } />
        <Route path="/boutiques" element={<Boutiques />} />
        <Route path="/boutiques/:collection" element={<Collection />} />  
        <Route path="/search/:query" element={<SearchAns />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
