import { Stack } from '@mui/material'
import logo from './logo.png'
import React from 'react'

const Header: React.FC = () => {
  return (
    <React.Fragment>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
        height="100%"
      >
        <div>
          <img src={logo} width={100} />
        </div>
      </Stack>
    </React.Fragment>
  )
}

export default Header
