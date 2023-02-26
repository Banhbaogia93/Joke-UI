import * as React from 'react'
import { Outlet } from 'react-router-dom'
import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Header from '../Header'
import Quotes from '../../Quotes'

const Layout: React.FC = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth={false} disableGutters>
        <Box sx={{ height: '10vh' }}>
          <Header />
        </Box>
        <Box sx={{ bgcolor: '#cfe8fc', height: '10vh' }}>
          <Quotes />
        </Box>
        <Box sx={{ height: '50vh' }}>
          <Outlet />
        </Box>
      </Container>
    </React.Fragment>
  )
}

export default Layout
