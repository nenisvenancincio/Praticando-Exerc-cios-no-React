import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height: 60,
  lineHeight: '60px',
}));

const lightTheme = createTheme({ palette: { mode: 'light' } });

 function InfoCard() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {[lightTheme].map((theme, index) /*cria apenas um bloco de filas de papers*/  => (
          <Grid key={index} size={6}>
            <ThemeProvider theme={theme}>
              <Box
                sx={{
                  p: 2,
                  borderRadius: 2,
                  bgcolor: 'hsla(0, 0%, 100%, 0.33)',
                  display: 'grid',
                  gap: 2,
                }}
              >
                {[0, 1].map((elevation) => (
                  <Item key={elevation} elevation={elevation}>
                    {`elevation=${elevation}`}
                  </Item>
                ))}
              </Box>
            </ThemeProvider>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}



export default InfoCard;
