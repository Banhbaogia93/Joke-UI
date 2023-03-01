import { Avatar, Box, Stack, Typography } from '@mui/material'
import logo from './logo.png'
import React from 'react'

const Header: React.FC = () => {
  return (
    <React.Fragment>
      <Stack
        direction="row"
        justifyContent="space-around"
        alignItems="center"
        height="100%"
      >
        <div>
          <img src={logo} width={60} />
        </div>
        <Stack
         direction="row"
         justifyContent="space-between"
         alignItems="center"
         spacing={1}
        >
          <Box textAlign="right">
            <Typography fontSize={14} color="gray"><i>Handicrafted by</i></Typography>
            <Typography fontSize={14}><strong>Jim HLS</strong></Typography>
          </Box>
          <Avatar sx={{ bgcolor: '26a85d' }}>BV</Avatar>
        </Stack>
      </Stack>
    </React.Fragment>
  )
}

export default Header
