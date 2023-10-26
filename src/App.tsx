import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { theme } from './theme';
import { Header } from './components/Header/Header';
import Fireflies from './components/Fireflies/Fireflies';
import { HomePage } from './pages/Home.page';

export default function App() {
  return (
    <MantineProvider defaultColorScheme="dark" theme={theme}>
      <BrowserRouter>
        <Header />
        <Fireflies />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route index element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </MantineProvider>
  );
}
