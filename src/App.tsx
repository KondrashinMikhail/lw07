import React from 'react';
import './App.css';
import { Box, AppBar, IconButton, Toolbar, Typography, Button, Container, Card, CardContent, Grid } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import logo from './logo.png'
import brakes from './spares-photos/Тормоза автомобильные, BROMBO.jpg'
import wheels from './spares-photos/Комплект шин Nokian Nordman 7.jpg'
import booster from './spares-photos/Гидроусилитель руля Toyota Caldina.jpg'
import absorber from './spares-photos/Амортизатор передний Chevrolet Niva.jpg'
import instagram from './social-media/Instagram.png'
import VK from './social-media/VK.png'

function App() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }} style={{ background: '#72684f' }}>
      <AppBar style={{ background: '#ffe68e' }}>
        <Toolbar>
          <img src={logo} alt={"logo"} />
          <Typography variant="h6" color="#72684f" sx={{ ml: 1 }} component="div">UAS</Typography>
          <Typography variant="h6" color="#72684f" component="div" sx={{ flexGrow: 1, ml: 5 }}> Запчасти </Typography>
          <IconButton id="basic-button"
            size="large"
            edge="start"
            color="default"
            aria-label="menu"
            aria-controls="basic-menu"
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
          >
            <MenuIcon />
          </IconButton>
          <Menu id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}>
            <MenuItem onClick={handleClose} href="#">Расписание</MenuItem>
            <MenuItem onClick={handleClose} href="#">Запись</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
      <Grid container spacing={2} style={{ marginTop: 50 }}>
        <Grid item xs={6}>
          <Card sx={{ minWidth: 300, m: 5 }}>
            <CardContent>
              <Typography sx={{ fontSize: 14, flexGrow: 1, m: 5 }}
                color="text.primary"
                align="center"
                gutterBottom>
                <img src={brakes} alt={"brakes"} />
              </Typography>
              <Typography variant="h4" component="div">
                Тормоза автомобильные, BROMBO
              </Typography>
            </CardContent>
          </Card>
          <Typography sx={{ fontSize: 25, flexGrow: 1, m: 5 }}
            align="center"
            color="#ffffff"
            gutterBottom>
            21$
            <Button style={{ background: '#ff6e05' }}
              variant="contained"
              sx={{ m: 2 }}>
              Купить
            </Button>
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Card sx={{ minWidth: 300, m: 5 }}>
            <CardContent>
              <Typography sx={{ fontSize: 14, flexGrow: 1, m: 5 }}
                color="#ffffff"
                align="center"
                gutterBottom>
                <img src={wheels} alt={"wheels"} />
              </Typography>
              <Typography variant="h4" component="div">
                Комплект шин Nokian Nordman 7
              </Typography>
            </CardContent>
          </Card>
          <Typography sx={{ fontSize: 25, flexGrow: 1, m: 5 }}
            color="#ffffff"
            align="center"
            gutterBottom>
            211$
            <Button style={{ background: '#ff6e05' }}
              variant="contained"
              sx={{ m: 2 }}>
              Купить
            </Button>
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Card sx={{ minWidth: 300, m: 5 }}>
            <CardContent>
              <Typography sx={{ fontSize: 14, flexGrow: 1, m: 5 }}
                color="#ffffff"
                align="center"
                gutterBottom>
                <img src={booster} alt={"booster"} />
              </Typography>
              <Typography variant="h4" component="div">
                Гидроусилитель руля Toyota Caldina
              </Typography>
            </CardContent>
          </Card>
          <Typography sx={{ fontSize: 25, flexGrow: 1, m: 5 }}
            color="#ffffff"
            align="center"
            gutterBottom>
            $458
            <Button style={{ background: '#ff6e05' }}
              variant="contained"
              sx={{ m: 2 }}>
              Купить
            </Button>
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Card sx={{ minWidth: 300, m: 5 }}>
            <CardContent>
              <Typography sx={{ fontSize: 14, flexGrow: 1, m: 5 }}
                color="#ffffff"
                align="center"
                gutterBottom>
                <img src={absorber} alt={"absorber"} />
              </Typography>
              <Typography variant="h4" component="div">
                Амортизатор передний Chevrolet Niva
              </Typography>
            </CardContent>
          </Card>
          <Typography sx={{ fontSize: 25, flexGrow: 1, m: 5 }}
            color="#ffffff"
            align="center"
            gutterBottom>
            57$
            <Button style={{ background: '#ff6e05' }}
              variant="contained"
              sx={{ m: 2 }}>
              Купить
            </Button>
          </Typography>
        </Grid>
      </Grid>
      <Toolbar style={{ background: "#ffe68e" }}>
        <img src={logo} alt={"logo"} />
        <Typography variant="h6" color="#72684f" sx={{ m: 2 }} component="div">UAS</Typography>
        <Typography variant="h6" color="#72684f" sx={{ m: 2 }} component="div">Телефон: +89176002654</Typography>
        <Typography variant="h6" color="#72684f" sx={{ m: 2 }} component="div">Адрес: ул.Врача Михайлова 64</Typography>
        <Typography variant="h6" color="#72684f" sx={{ m: 2 }} component="div">Социальные сети:</Typography>
        <img src={instagram} alt={"instagram"} />
        <Typography variant="h6" color="#72684f" sx={{ m: 2 }} component="div">UAS</Typography>
        <img src={VK} alt={"vk"} />
        <Typography variant="h6" color="#72684f" sx={{ m: 2 }} component="div">UAS</Typography>
      </Toolbar>
    </Box>
  );
}
export default App;