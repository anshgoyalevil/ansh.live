import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import { Router } from './Router';
import { theme } from './theme';
import { Header } from './components/Header/Header';
import Fireflies from './components/Fireflies/Fireflies';

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <Header />
      <Fireflies />
      <Router />
    </MantineProvider>
  );
}
