import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Switch from '@mui/material/Switch';
import Modal from '@mui/material/Modal';
// import AdbIcon from '@mui/icons-material/Adb';

// eslint-disable-next-line
import gitHubUser from './loginReq';


const pages = ['Agenda', 'Quadras', 'Marcar horário'];
const settings = ['Login', 'Logout'];



function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  console.log(anchorElUser)

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };


  function renderMenuItem(page) {
    const scheduleClick = () => {
      alert('Gostaria de ver sua agenda?')
    };

    const courtClick = () => {
      alert('Qual quadra é de sua preferência?')
    };

    const hourClick = () => {
      alert('Faça sua escolha!')
    };

    if (page === 'Agenda') {
      return (
        <MenuItem key={page} onClick={scheduleClick}>
          <Typography textAlign="center">{page}</Typography>
        </MenuItem>
      )
    } else if (page === 'Quadras') {
      return (
        <MenuItem key={page} onClick={courtClick}>
          <Typography textAlign="center">{page}</Typography>
        </MenuItem>
      )
    } else if (page === 'Marcar horário') {
      return (
        <MenuItem key={page} onClick={hourClick}>
          <Typography textAlign="center">{page}</Typography>
        </MenuItem>
      );
    };
  };


  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
 
  console.log(anchorElUser)
  if (open !== false) {
    const style = {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 400,
      bgcolor: 'background.paper',
      border: '2px solid #000',
      boxShadow: 24,
      p: 4,
    };

    return (
      <div>
        <Modal
          open={open}
          // onClick={handleOpenUserMenu}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Text in a modal
            </Typography>
          </Box>
        </Modal>
      </div>
    );
  };

  // console.log(anchorElUser)

  function renderLoginItem(setting) {
    const logoutClick = () => {
      alert('Fazendo logout...')
    };

    if (setting === 'Login') {
      return (
        <MenuItem key={setting} >
          <Typography textAlign="center" onClick={handleOpen}>{setting}</Typography>
        </MenuItem>
      )
    } else if (setting === 'Logout') {
      return (
        <MenuItem key={setting} onClick={logoutClick}>
          <Typography textAlign="center">{setting}</Typography>
        </MenuItem>
      )
    };
  };


  return (
    <AppBar position="static" >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Calendário
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => renderMenuItem(page))}
            </Menu>
          </Box>
          {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.1rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Calendário
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box
            sx={{
              display: { xs: 'flex', marginRight: '10px' },
            }}
          >
            <Switch
              // checked={checked}
              // onChange={handleChange}
              size="medium"
              inputProps={{ 'aria-label': 'controlled' }}
            />
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Bruno Rossi" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' , display: 'flex'}}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => renderLoginItem(setting))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar >
  );
}
export default ResponsiveAppBar;