import * as React from 'react';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import Modal from '@mui/material/Modal';
import Stack from '@mui/material/Stack';
import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

// eslint-disable-next-line
import { getGitUser } from './loginReq'
import { useTheme } from '@mui/material/styles';
import { ColorModeContext } from './context/checkContext';


const settings = ['Login', 'Logout'];
const pages = ['Agenda', 'Quadras', 'Marcar horário'];


function ResponsiveAppBar() {
  const theme = useTheme();
  const [name, setName] = React.useState('');
  const [open, setOpen] = React.useState(false);
  const colorMode = React.useContext(ColorModeContext);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [userData, setUserData] = React.useState({ username: "", link: "" });


  async function handleClick(name) {
    const response = await getGitUser(name);
    setUserData(response !== 404 ? { ...userData, username: response['username'], link: response['link'] } : { userData })
  }


  return (
    <AppBar
      position="fixed" >
      <Container maxWidth="xl">
        <Toolbar disableGutters>


          {/* Menu responsive */}
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
          <Box sx={{
            flexGrow: 1,
            display: { xs: 'flex', md: 'none' }
          }}
          >
            <IconButton
              size="large"
              color="inherit"
              aria-haspopup="true"
              aria-controls="menu-appbar"
              aria-label="account of current user"
              onClick={(event) => {
                setAnchorElNav(event.currentTarget);
              }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              keepMounted
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={() => {
                setAnchorElNav(null);
              }}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              <MenuItem key={pages[0]}>
                <Typography
                  textAlign="center"
                  onClick={() => {
                    alert('Gostaria de ver sua agenda?')
                  }}
                >
                  {pages[0]}
                </Typography>
              </MenuItem>
              <MenuItem key={pages[1]}>
                <Typography
                  textAlign="center"
                  onClick={() => {
                    alert('Qual quadra é de sua preferência?')
                  }}
                >
                  {pages[1]}
                </Typography>
              </MenuItem>
              <MenuItem key={pages[2]}>
                <Typography
                  textAlign="center"
                  onClick={() => {
                    alert('Faça sua escolha!')
                  }}
                >
                  {pages[2]}
                </Typography>
              </MenuItem>
            </Menu>
          </Box>


          {/* Menu full screen */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
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
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' }
            }}
          >
            < MenuItem key={pages[0]} >
              <Typography
                textAlign="center"
                onClick={() => {
                  alert('Gostaria de ver sua agenda?')
                }}
              >
                {pages[0]}
              </Typography>
            </MenuItem >
            <MenuItem key={pages[1]}>
              <Typography
                textAlign="center"
                onClick={() => {
                  alert('Qual quadra é de sua preferência?')
                }}
              >
                {pages[1]}
              </Typography>
            </MenuItem>
            <MenuItem key={pages[2]}>
              <Typography
                textAlign="center"
                onClick={() => {
                  alert('Faça sua escolha!')
                }}
              >
                {pages[2]}
              </Typography>
            </MenuItem>
          </Box>


          {/* Change theme button */}
          <Box
            sx={{
              display: { xs: 'flex', marginRight: '20px' },
            }}
          >
            <Tooltip
              title='Change theme'
            >
              <IconButton
                sx={{
                  ml: 1
                }}
                onClick={colorMode.toggleColorMode}
                color="inherit"
              >
                {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
              </IconButton>
            </Tooltip>
          </Box>


          {/* Icon menu | Login - Logout */}
          <Box
            sx={{ flexGrow: 0 }}
          >
            <Tooltip
              title="Open settings"
            >
              <IconButton
                onClick={(event) => {
                  setAnchorElUser(event.currentTarget);
                }}
                sx={{ p: 0 }}
              >
                <Avatar
                  alt={userData.username}
                  src={userData.link}
                />
              </IconButton>
            </Tooltip>
            <Menu
              id="menu-appbar"
              keepMounted
              anchorEl={anchorElUser}
              open={Boolean(anchorElUser)}
              sx={{
                mt: '45px',
                display: 'flex'
              }}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              onClose={() => {
                setAnchorElUser(null);
              }}
            >
              <MenuItem key={settings[0]}>
                <Typography
                  textAlign="center"
                  onClick={() => setOpen(true)}
                >
                  {settings[0]}
                </Typography>
              </MenuItem>
              <MenuItem key={settings[1]}>
                <Typography
                  textAlign="center"
                  onClick={() => {
                    alert('Fazendo logout...');
                    setUserData({ ...userData, username: '', link: '' });
                    setAnchorElUser(null);
                  }}
                >
                  {settings[1]}
                </Typography>
              </MenuItem>
            </Menu>


            {/* MODAL - Login */}
            <>
              <Modal
                keepMounted
                open={open}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                onClose={() => {
                  setAnchorElUser(null);
                }}
                onClick={() => {
                  setAnchorElUser(document.getElementById('App'));
                }}
              >
                <Box
                  component="form"
                  sx={{
                    m: 1,
                    p: 4,
                    top: '50%',
                    width: 400,
                    left: '50%',
                    boxShadow: 24,
                    position: 'absolute',
                    bgcolor: 'background.paper',
                    transform: 'translate(-50%, -50%)',
                  }}
                >
                  <Typography
                    variant="h6"
                    component="h2"
                    textAlign='center'
                    id="modal-modal-title"
                  >
                    Por favor, informe seu usuário do GitHub:
                  </Typography>

                  <Box
                    sx={{
                      marginTop: 3,
                      display: 'flex',
                      justifyContent: 'center'
                    }}
                  >
                    <TextField
                      fullWidth
                      required
                      value={name}
                      label="Required"
                      variant="filled"
                      id="filled-required"
                      placeholder="Username"
                      onChange={(event) => { setName(event.target.value) }}
                    />
                  </Box>
                  <Stack
                    sx={{
                      marginTop: 3,
                      display: 'flex',
                      justifyContent: 'center'
                    }}
                    spacing={2}
                    direction="row"
                  >
                    <Button
                      variant="contained"
                      onClick={() => {
                        handleClick(name);
                        setOpen(false);
                      }}
                    > OK
                    </Button>
                    <Button
                      variant="contained"
                      onClick={
                        () => setOpen(false)
                      }
                    > Cancel
                    </Button>
                  </Stack>
                </Box>
              </Modal>
            </>
          </Box>
        </Toolbar>
      </Container>
    </AppBar >
  );
};

export default ResponsiveAppBar;