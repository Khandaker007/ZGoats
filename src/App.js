import { Route, Routes } from 'react-router-dom';

import '@fontsource/space-grotesk'

import {
  Container,
  Stack,
  Heading,
  Text,
  Box
} from '@chakra-ui/react'

// COMPONENT
import LandingPage from './pages/landing-page';
import ComingSoon from './pages/coming-soon-page';

function App() {
  return (
    <Box>
      <Routes>
        <Route path='/' element={<LandingPage/>} />
        <Route path='/coming-soon' element={<ComingSoon/>} />
      </Routes>
    </Box>
  );
}

export default App;
