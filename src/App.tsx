import { CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from './themes/theme';
import Layout from './components/layout/layout';
import Homepage from './components/homepage/homepage';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      <Layout>
        <Homepage />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
