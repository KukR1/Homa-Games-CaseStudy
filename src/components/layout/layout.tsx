import { Box, Button, Typography } from '@mui/material';

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <Box
      sx={{
        width: '100vw',
        height: '100vh',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignContent: 'center',
          alignItems: 'center',
          padding: '2rem 0',
        }}
      >
        <Typography variant="h3" color="secondary">
          Frontend Dev CS
        </Typography>
        <Box sx={{ padding: '1rem 0' }}>
          <Button variant="contained" color="error">
            GO!
          </Button>
        </Box>
      </Box>
      {children}
    </Box>
  );
};

export default Layout;
