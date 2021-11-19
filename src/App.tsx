import { Box, Container, Grid, Link, Typography } from '@material-ui/core';
import { useState } from 'react';
import Header from './components/header/Header';
import LanguageContext from './context/LanguageContext';

import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

import itemImage from './assets/images/default-item.png'
import createTypography from '@material-ui/core/styles/createTypography';

function App() {

  const [language, setLanguage] = useState('en')

  return (
    <LanguageContext.Provider value={{language, setLanguage}}>
      <Header />
      <Container>
        <Grid container justifyContent="space-between" alignItems="center" spacing={2} style={{marginTop: "20px"}}>
          <Grid item>
            <Typography variant="h6" color="textPrimary">Tendring Movies</Typography>
          </Grid>
          <Grid item>
            <Grid container alignItems="center">
              <Link color="primary" variant="body1">See all movies </Link>
              <ArrowForwardIcon style={{marginLeft: '8px'}} color="primary" fontSize="small"/>
            </Grid>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <Link variant="body1" color="textPrimary">
              <Box style={{position: "relative"}}>
                <img src={itemImage} alt="Img" width="100%"/>
                <Box position="absolute" top={10} left={10} borderRadius="50%" style={{backgroundColor: "#424242", border: "1px solid #ff452b", width: "35px", height: "35px"}}>
                  <Grid container alignItems="center" justifyContent="center" style={{height: "100%"}}>
                    <Typography color="primary" variant="body1">7.5</Typography>
                  </Grid>
                </Box>
              </Box>
              
              <Typography color="textPrimary">Shang-Chi and the Legend of the Ten Rings</Typography>
                <Grid container alignItems="center">
                <Link color="primary" variant="body1">More details</Link>
                <ArrowForwardIcon style={{marginLeft: '8px'}} color="primary" fontSize="small"/>
              </Grid>
            </Link>
          </Grid>

          <Grid item xs={2}>
            <Link variant="body1" color="textPrimary">
              <Box style={{position: "relative"}}>
                <img src={itemImage} alt="Img" width="100%"/>
                <Box position="absolute" top={10} left={10} borderRadius="50%" style={{backgroundColor: "#424242", border: "1px solid #ff452b", width: "35px", height: "35px"}}>
                  <Grid container alignItems="center" justifyContent="center" style={{height: "100%"}}>
                    <Typography color="primary" variant="body1">7.5</Typography>
                  </Grid>
                </Box>
              </Box>
              
              <Typography color="textPrimary">Shang-Chi and the Legend of the Ten Rings</Typography>
                <Grid container alignItems="center">
                <Link color="primary" variant="body1">More details</Link>
                <ArrowForwardIcon style={{marginLeft: '8px'}} color="primary" fontSize="small"/>
              </Grid>
            </Link>
          </Grid>

          <Grid item xs={2}>
            <Link variant="body1" color="textPrimary">
              <Box style={{position: "relative"}}>
                <img src={itemImage} alt="Img" width="100%"/>
                <Box position="absolute" top={10} left={10} borderRadius="50%" style={{backgroundColor: "#424242", border: "1px solid #ff452b", width: "35px", height: "35px"}}>
                  <Grid container alignItems="center" justifyContent="center" style={{height: "100%"}}>
                    <Typography color="primary" variant="body1">7.5</Typography>
                  </Grid>
                </Box>
              </Box>
              
              <Typography color="textPrimary">Shang-Chi and the Legend of the Ten Rings</Typography>
                <Grid container alignItems="center">
                <Link color="primary" variant="body1">More details</Link>
                <ArrowForwardIcon style={{marginLeft: '8px'}} color="primary" fontSize="small"/>
              </Grid>
            </Link>
          </Grid>

          <Grid item xs={2}>
            <Link variant="body1" color="textPrimary">
              <Box style={{position: "relative"}}>
                <img src={itemImage} alt="Img" width="100%"/>
                <Box position="absolute" top={10} left={10} borderRadius="50%" style={{backgroundColor: "#424242", border: "1px solid #ff452b", width: "35px", height: "35px"}}>
                  <Grid container alignItems="center" justifyContent="center" style={{height: "100%"}}>
                    <Typography color="primary" variant="body1">7.5</Typography>
                  </Grid>
                </Box>
              </Box>
              
              <Typography color="textPrimary">Shang-Chi and the Legend of the Ten Rings</Typography>
                <Grid container alignItems="center">
                <Link color="primary" variant="body1">More details</Link>
                <ArrowForwardIcon style={{marginLeft: '8px'}} color="primary" fontSize="small"/>
              </Grid>
            </Link>
          </Grid>

          <Grid item xs={2}>
            <Link variant="body1" color="textPrimary">
              <Box style={{position: "relative"}}>
                <img src={itemImage} alt="Img" width="100%"/>
                <Box position="absolute" top={10} left={10} borderRadius="50%" style={{backgroundColor: "#424242", border: "1px solid #ff452b", width: "35px", height: "35px"}}>
                  <Grid container alignItems="center" justifyContent="center" style={{height: "100%"}}>
                    <Typography color="primary" variant="body1">7.5</Typography>
                  </Grid>
                </Box>
              </Box>
              
              <Typography color="textPrimary">Shang-Chi and the Legend of the Ten Rings</Typography>
                <Grid container alignItems="center">
                <Link color="primary" variant="body1">More details</Link>
                <ArrowForwardIcon style={{marginLeft: '8px'}} color="primary" fontSize="small"/>
              </Grid>
            </Link>
          </Grid>

          <Grid item xs={2}>
            <Link variant="body1" color="textPrimary">
              <Box style={{position: "relative"}}>
                <img src={itemImage} alt="Img" width="100%"/>
                <Box position="absolute" top={10} left={10} borderRadius="50%" style={{backgroundColor: "#424242", border: "1px solid #ff452b", width: "35px", height: "35px"}}>
                  <Grid container alignItems="center" justifyContent="center" style={{height: "100%"}}>
                    <Typography color="primary" variant="body1">7.5</Typography>
                  </Grid>
                </Box>
              </Box>
              
              <Typography color="textPrimary">Shang-Chi and the Legend of the Ten Rings</Typography>
                <Grid container alignItems="center">
                <Link color="primary" variant="body1">More details</Link>
                <ArrowForwardIcon style={{marginLeft: '8px'}} color="primary" fontSize="small"/>
              </Grid>
            </Link>
          </Grid>
          

        </Grid>
      </Container>
    </LanguageContext.Provider>
  );
}

export default App;
