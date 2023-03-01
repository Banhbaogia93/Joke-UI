import { Stack } from '@mui/material'
import logo from './logo.png'
import React from 'react'

const Header: React.FC = () => {
  return (
    <React.Fragment>
      <Stack
        justifyContent="center"
        alignItems="center"
        height="100%"
      >
        <div>
          <img src={logo} width={60} />
        </div>
      </Stack>
    </React.Fragment>
  )
}

export default Header
