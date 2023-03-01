import * as React from 'react'
import { Outlet } from 'react-router-dom'
import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Header from '../Header'
import PageTitle from '../../PageTitle'
import Footer from '../Footer'
import { Stack } from '@mui/material'

const Layout: React.FC = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth={false} disableGutters>
        <Stack
          justifyContent="center"
          alignItems="center"
          spacing={0}
        >
          <Box height="10vh">
            <Header />
          </Box>
          <Box width="100%" height="20vh" bgcolor="#cfe8fc">
            <PageTitle />
          </Box>
          <Box minHeight="50vh" display="flex">
            <Outlet />
          </Box>
          <Box width="100%" height="20vh">
            <Footer />
          </Box>
        </Stack>
      </Container>
    </React.Fragment>
  )
}

export default Layout
